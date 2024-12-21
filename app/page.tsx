import { SearchIcon } from "lucide-react";
import Header from "./_components/header"
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Agendamento from "./_components/agendamentos";

const Home = () => {
  return (
    <div> 
      <Header/>
      <div className="p-5">
        <h2 className="text-2xl font-bold">Olá, Kaique</h2>
        <p>Sabado, 21 de Dezembro</p>
        <div className="flex items-center gap-5 p-5 mt-5">
          <Input placeholder="Pesquisar" />
          <Button size="icon" variant="primary">
            <SearchIcon />
          </Button>
        </div>
        <Agendamento />
      </div>
    </div>
  );
}

export default Home
