import Section from './Section'
import { RESUME } from '../data/content'

export default function Resume() {
  return (
    <Section id="curriculo" title="Currículo">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="space-y-8">
          <p className="leading-relaxed text-ink-muted">{RESUME.summary}</p>
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Skills técnicas
            </h3>
            <ul className="flex flex-wrap gap-2">
              {RESUME.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-accent/30 px-2.5 py-0.5 text-xs text-ink-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-display text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Formação
            </h3>
            <ul className="space-y-3">
              {RESUME.education.map((item) => (
                <li key={item.institution}>
                  <p className="text-sm font-medium text-ink">
                    {item.institution}
                  </p>
                  {item.course && (
                    <p className="text-sm text-ink-muted">
                      {item.course} · {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-sm font-semibold tracking-[0.15em] text-accent uppercase">
              Experiência
            </h3>
            <ul className="space-y-4">
              {RESUME.experience.map((item) => (
                <li key={item.company}>
                  <p className="text-sm font-medium text-ink">
                    {item.role} — {item.company}
                  </p>
                  <p className="text-xs text-ink-muted">{item.period}</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-ink-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
