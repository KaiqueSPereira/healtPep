import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import AgendamentoItem from "./_components/agendamentosItem";
import { db } from "./_lib/prisma";
import { Card, CardContent } from "./_components/ui/card";


const Home = async () => {
  // Consulta os agendamentos com os relacionamentos necessĂˇrios
  const agendamentos = await db.consultas.findMany({
    include: {
      profissional: {
        select: {
          nome: true,
        },
      },
      unidade: {
        select: {
          nome: true,
        },
      },
    },
  });
  const agendamentosFuturos = agendamentos.filter((agendamento) => {
    const dataAgendamento = new Date(agendamento.data);
    return dataAgendamento >= new Date(); // Verifica se Ă© futuro
  });

  const agendamentosPassados = agendamentos.filter((agendamento) => {
    const dataAgendamento = new Date(agendamento.data);
    return dataAgendamento < new Date(); // Verifica se Ă© passado
  });
  
  // Formata a data atual
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Capitaliza o primeiro caractere da data formatada
  const formattedDate =
    currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <div>
      <Header />
      <div className="p-5">
        {/* Nome do usuĂˇrio dinĂ˘mico pode ser passado aqui */}
        <h2 className="text-2xl font-bold">Olá, Kaique</h2>
        <p>{formattedDate}</p>
        <div className="flex items-center gap-5 p-5 mt-5">
          <Input placeholder="Pesquisar" />
          <Button size="icon" variant="primary">
            <SearchIcon />
          </Button>
        </div>
        <div className="mt-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">Agendamentos</h2>
                <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
                  {agendamentosFuturos.map((agendamento) => (
                    <AgendamentoItem key={agendamento.id} consultas={agendamento} />
                  ))}
                </div>
              
        </div>
        <div className="mt-5">
          <h2 className="text-xs font-bold uppercase text-gray-400">Ultimas Cunsultas</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {agendamentosPassados.map((agendamento) => (
            <AgendamentoItem key={agendamento.id} consultas={agendamento} />
            ))}
          </div>
          
        </div>
      </div>
      <footer>
      <Card>
        <CardContent className="py-5 px-5"><p className="text-center text-sm">© 2023 Healt Pep</p></CardContent> 
      </Card>
      </footer>
    </div>
  );
};

export default Home;
