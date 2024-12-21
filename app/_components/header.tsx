import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
    <Card>
        <CardContent className="justify-between items-center flex flex-row p-4">
            <Image src= "/iconprontuario.png" alt="icon" width={80} height={80}/>
            <h1 className="text-xl font-bold">Healt Pep</h1>
            <Button size="icon" variant="outline"><MenuIcon/></Button>

        </CardContent>
    </Card> );
}
 
export default Header;