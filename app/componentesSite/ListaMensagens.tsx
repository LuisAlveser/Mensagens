'use client'
import { useEffect } from 'react';
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

export function ListaMensagens({ id, mensagens }: { id: string, mensagens: any[] }) {
  const router = useRouter();

  useEffect(() => {
    const canal = supabase
      .channel(`sala_${id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'Mensagem',
          filter: `salaId=eq.${id}`,
        },
        () => {
          
          router.refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(canal);
    };
  }, [id, router]);

  return (
    <div className="h-[400px] overflow-y-auto pr-4 custom-scrollbar flex flex-col gap-4 p-4">
      {mensagens.map((item) => (
        <div className="flex flex-row items-start gap-2 w-full pb-4" key={item.id}>
          <div className="shrink-0 mt-1">
            {item.user.imagem ? (
              <Image src={item.user.imagem} alt={item.user.nome} width={38} height={38} className="rounded-full object-cover border border-white/10" />
            ) : (
              <div className="bg-white/10 p-1.5 rounded-full">
                <CircleUserRound className="text-white/80" size={24} />
              </div>
            )}
          </div>
          <div className="flex flex-col max-w-[85%]">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm font-bold text-blue-200">{item.user.nome}</span>
              <span className="text-[10px] text-white/40 uppercase">
                {new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(new Date(item.createdAt))}
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
              <p className="text-white text-sm md:text-base leading-relaxed break-words">{item.conteudo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}