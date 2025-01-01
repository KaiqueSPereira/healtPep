import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

    interface ConsultaPageProps {
        params: {
            id: string;
        };
    }
const ConsultaPage = async({params}: ConsultaPageProps) => {
    if (!params.id) {
        return <h1>Consulta não encontrada</h1>;
    }
    const consultas = await db.consultas.findUnique({
        where: {
            id: params.id,
        },
        include: {
            usuario: true, // Inclui informações do usuário
            profissional: true, // Inclui informações do profissional
            unidade: true, // Inclui informações da unidade de saúde (se existir)
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
            <Button size="icon" variant="secondary" className="absolute top-5 left-5" asChild>
                <Link href={'/'}>
                    <ChevronLeftIcon />
                </Link>
            </Button>
            <Button size="icon" variant="secondary" className="absolute top-5 right-5">
                <MenuIcon />
            </Button>

            <h1 className="text-2xl font-bold">{consultas?.tipo}</h1>

        </div>
     );
}
 
export default ConsultaPage;