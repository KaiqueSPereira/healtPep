"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/_components/ui/dialog";
import { Textarea } from "@/app/_components/ui/textarea";
import { db } from "@/app/_lib/prisma";
interface DescriptionEditorProps {
  descricao: string;
  consultaId: string;
}

const DescriptionEditor = ({ descricao, consultaId }: DescriptionEditorProps) => {
  const [novaDescricao, setNovaDescricao] = useState(descricao);

  const handleSaveDescricao = async () => {
    // Atualiza a descriç?o no banco (mockado aqui)
    await fetch(`/api/consultas/${consultaId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ descricao: novaDescricao }),
    });
  };

  return (
    <div>
      <p className="text-gray-300">{descricao || "Sem anotações."}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="mt-3">
            {descricao ? "Editar Descrição" : "Fazer Anotação"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{descricao ? "Editar Descrição" : "Fazer Anotação"}</DialogTitle>
          </DialogHeader>
          <Textarea
            placeholder="Escreva aqui as anotações sobre a consulta..."
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
            className="w-full mt-2"
          />
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setNovaDescricao(descricao)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSaveDescricao}>
              Salvar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DescriptionEditor;
