"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/_components/ui/dialog";
import { Textarea } from "@/app/_components/ui/textarea";

interface DescriptionEditorProps {
  descricao: string;
  consultaId: string;
}

const DescriptionEditor = ({ descricao, consultaId }: DescriptionEditorProps) => {
  const [novaDescricao, setNovaDescricao] = useState(descricao);
  const [loading, setLoading] = useState(false);

  const handleSaveDescricao = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/consultas/${consultaId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ queixas: novaDescricao }),
      });

      if (response.ok) {
        alert("Descrição salva com sucesso!");
      } else {
        alert("Erro ao salvar a descrição. Tente novamente.");
      }
    } catch {
      alert("Erro ao salvar a descrição. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="mt-3">
            {descricao ? "Editar Descrição" : "Fazer anotaçõe"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{descricao ? "Editar Descrição" : "Fazer anotaçõe"}</DialogTitle>
          </DialogHeader>
          <Textarea
            placeholder="Escreva aqui as informações sobre a consulta..."
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
            className="w-full mt-2"
          />
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setNovaDescricao(descricao)}>
              Cancelar
            </Button>
            <Button variant="default" onClick={handleSaveDescricao} disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DescriptionEditor;
