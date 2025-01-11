import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar1Icon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar } from "./ui/avatar";

const Header = () => {
    return ( 
    <Card>
        <CardContent className="justify-between items-center flex flex-row p-4">
            <Image src= "/iconprontuario.png" alt="icon" width={80} height={80}/>
            <h1 className="text-xl font-bold">Healt Pep</h1>
            
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline"><MenuIcon/></Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className="py-5 border-b flex items-centerborder-solid">
                        <Avatar>
                            
                        </Avatar>
                    </div>
                    <div className="py-5 flex flex-col gap-2 boder-b border-solid">
                        <Button className=" justify-startgap-2" variant="ghost"> <HomeIcon size={18}/> Inicio</Button>
                        <Button className=" justify-startgap-2" variant="ghost"> <Calendar1Icon/> Agendamentos</Button>

                    </div>
                    <div className="py-5 flex flex-col gap-2 ">
                        <Button className=" justify-startgap-2" variant="ghost"> <LogOutIcon size={18}/> Sair da Conta</Button>

                    </div>
                </SheetContent>
            </Sheet>

        </CardContent>
    </Card> );
}
 
export default Header;