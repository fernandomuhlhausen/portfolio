import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="space-y-4 text-ink-muted">
        <p className="leading-relaxed">
          Sou o Fernando, de Florianópolis. Estudo Desenvolvimento de Software
          no IFSC (2023–2026) e construo jogos que rodam no navegador — a
          maioria com JavaScript, Three.js e Vite.
        </p>
        <p className="leading-relaxed">
          Gosto de pegar uma ideia e levar até algo jogável de ponta a ponta:
          menu, controles, HUD, áudio, deploy. Curioso e rápido para aprender
          ferramentas novas; disponível para trabalho remoto.
        </p>
      </div>
    </Section>
  )
}
