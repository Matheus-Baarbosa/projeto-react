import { useState } from "react";
export default function MensagemLogin() {
  const [autenticado, setAutenticado] = useState(false);
  const [nome, setNome] = useState("Matheus");
  return (
    <section>
      <h2>Renderização Condicional</h2>
      {/* Ternário */}
      <p>{autenticado ? `Bem-vindo, ${nome}!` : "Faça login para continuar."}</p>
      {/* Curto-circuito */}
      {autenticado && <small>Você tem 100 notificações não lidas.</small>}
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setAutenticado((a) => !a)}>
          {autenticado ? "Sair" : "Entrar"}
        </button>
      </div>
    </section>
  );
}