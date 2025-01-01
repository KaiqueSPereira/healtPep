import { db } from "@/app/_lib/prisma";

    interface ConsultaPageProps {
        params: {
            id: string;
        };
    }
const ConsultaPage = async({params}: ConsultaPageProps) => {
    
    const consulta = await db.consultas.findUnique({
        where: {
            id: params.id
        }
    });

    return ( <h1>({params.id})</h1> );
}
 
export default ConsultaPage;