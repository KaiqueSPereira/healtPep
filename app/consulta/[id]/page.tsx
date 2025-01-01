import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import DescriptionEditor from "../components/descriptioneditor";
import { db } from "@/app/_lib/prisma";

interface ConsultaPageProps {
  params: {
    id: string;
  };
}

const ConsultaPage = async ({ params }: ConsultaPageProps) => {
  // Verifica a ausência do ID
  if (!params.id) {
    return <h1>Consulta não encontrada</h1>;
  }

  const consultas = await db.consultas.findUnique({
    where: { id: params.id },
    include: {
      usuario: true,
      profissional: true,
      unidade: true,
    },
  });

  if (!consultas) {
    return (
      <div className="p-8 text-center">
        <h1>Consulta não encontrada</h1>
        <Link href="/">
          <Button variant="secondary">Voltar para Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Button size="icon" variant="secondary" className="absolute top-5 left-5" asChild>
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button size="icon" variant="secondary" className="absolute top-5 right-5">
          <MenuIcon />
        </Button>
      </header>

      <main className="pt-20 pl-5">
        <h1 className="text-2xl font-bold">{consultas.tipo}</h1>
        <h2 className="text-xl font-bold">{consultas.profissional?.nome}</h2>

        <Card>
          <CardHeader>
            <CardTitle>Anotações Sobre a Consulta</CardTitle>
          </CardHeader>
          <CardContent>
            <DescriptionEditor descricao={consultas.descricao || ""} consultaId={params.id} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ConsultaPage;
