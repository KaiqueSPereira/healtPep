// /app/api/consultas/[consultaId]/route.ts
import { NextResponse } from "next/server";
import { db } from "@/app/_lib/prisma";

// Atualizar a descrição da consulta
export async function PATCH(req: Request, { params }: { params: { consultaId: string } }) {
    try {
        const { queixas } = await req.json();
        const { consultaId } = params;

        const updatedConsulta = await db.consultas.update({
            where: { id: consultaId },
            data: { queixas },
        });

        return NextResponse.json(updatedConsulta);
    } catch (error) {
        console.error("Erro ao atualizar a descrição:", error);
        return NextResponse.json({ error: "Falha ao atualizar a descrição" }, { status: 500 });
    }
}

// Obter uma consulta pelo ID
export async function GET(req: Request, { params }: { params: { consultaId: string } }) {
    try {
        const { consultaId } = params;

        const consulta = await db.consultas.findUnique({
            where: { id: consultaId },
        });

        if (!consulta) {
            return NextResponse.json({ error: "Consulta não encontrada" }, { status: 404 });
        }

        return NextResponse.json(consulta);
    } catch (error) {
        console.error("Erro ao buscar a consulta:", error);
        return NextResponse.json({ error: "Falha ao buscar a consulta" }, { status: 500 });
    }
}

// Deletar uma consulta pelo ID
export async function DELETE(req: Request, { params }: { params: { consultaId: string } }) {
    try {
        const { consultaId } = params;

        await db.consultas.delete({
            where: { id: consultaId },
        });

        return NextResponse.json({ message: "Consulta deletada com sucesso!" });
    } catch (error) {
        console.error("Erro ao deletar a consulta:", error);
        return NextResponse.json({ error: "Falha ao deletar a consulta" }, { status: 500 });
    }
}

// Criar uma nova consulta
export async function POST(req: Request) {
    try {
        const { queixas, data, tratamento, tipodeexame, tipo, userId, profissionalId, unidadeId } = await req.json();

        const novaConsulta = await db.consultas.create({
            data: {
                queixas,
                data: new Date(data),
                tratamento,
                tipodeexame,
                tipo,
                userId,
                profissionalId,
                unidadeId,
            },
        });

        return NextResponse.json(novaConsulta);
    } catch (error) {
        console.error("Erro ao criar a consulta:", error);
        return NextResponse.json({ error: "Falha ao criar a consulta" }, { status: 500 });
    }
}
