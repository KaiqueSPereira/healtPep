import { Card, CardContent } from "./ui/card";

const Agendamento = () => {
    return ( 
        <div>
            <h2 className="text-xs font-bold uppercase text-gray-400">Agendamentos</h2>
            <Card className="mt-6">
                <CardContent className="flex justify-between p-0">
                    <div className="flex flex-col gap-2 py-5 pl-5">
                        <h3 className="text-2xl font-bold">Consulta</h3>
                        <p className="font-semibold">Dr. Carlos Rentato</p>
                        <p className="text-sm">UBS Alphaville</p>
                    </div>
                    <div className="flex flex-col items-center justify-between  py-5 px-5 border-l-2 border-solid">
                       <p className="text-sm">Dezembro</p>
                       <p className="text-2xl">21</p>
                       <p className="text-sm">16:00</p>

                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default Agendamento;