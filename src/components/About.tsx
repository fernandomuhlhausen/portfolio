import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="space-y-4 text-ink-muted">
        <p className="leading-relaxed">
          Sou o Fernando, de Florianópolis. Construo software que roda no
          navegador — de jogos em Three.js a ferramentas e automações.
        </p>
        <p className="leading-relaxed">
          Gosto de levar uma ideia até algo funcionando de ponta a ponta:
          interface, lógica, testes e deploy. Hoje faço freela de
          desenvolvimento, incluindo projetos de IA. Curioso e rápido para
          aprender ferramentas novas; disponível para trabalho remoto.
        </p>
      </div>
    </Section>
  )
}
