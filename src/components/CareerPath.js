import { GraduationCap, Briefcase } from 'lucide-react'

export default function CareerPath() {
  const experiences = [
    {
      type: 'education',
      title: 'Ho Chi Minh City Open University',
      role: 'Information Technology',
      duration: '2021 - Present',
      icon: <GraduationCap className="w-5 h-5" />,
      description:
        'Majoring in Information Technology with a focus on software development and web applications.',
    },
    {
      type: 'work',
      title: 'Boolfly',
      role: 'Software Developer',
      duration: 'Oct 2024 - Jan 2025',
      icon: <Briefcase className="w-5 h-5" />,
      description:
        'Developed and maintained software applications while working with modern technologies.',
    },
    {
      type: 'work',
      title: 'KIT System Solutions Vietnam',
      role: 'FullStack Developer',
      duration: 'Feb 2025 - Present',
      icon: <Briefcase className="w-5 h-5" />,
      description:
        'Full-stack development of web applications, working with both frontend and backend technologies.',
      current: true,
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Career Path</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Timeline dot */}
                <div className="relative z-10">
                  <div
                    className={`
                    w-16 h-16 rounded-full border-2 flex items-center justify-center
                    ${
                      experience.current
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-background border-border text-muted-foreground'
                    }
                    group-hover:border-primary group-hover:text-primary transition-colors
                  `}
                  >
                    {experience.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-lg p-6 border shadow-sm group-hover:border-primary transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {experience.title}
                      </h3>
                      <p className="text-muted-foreground">{experience.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`
                        px-3 py-1 rounded-full text-sm
                        ${
                          experience.current
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }
                      `}
                      >
                        {experience.duration}
                      </span>
                      {experience.current && (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
