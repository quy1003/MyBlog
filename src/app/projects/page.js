import { Github, ExternalLink, Mail, Linkedin, Terminal, Code2, Boxes, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import CareerPath from "@/components/CareerPath"
import Image from "next/image"
import Rewards from "@/components/Rewards"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-9" style={{ marginTop: "-40px" }}>
      {/* Avatar Section - Centered on all devices */}
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
        <div className="relative w-32 h-32 md:w-48 md:h-48 shadow-lg rounded-full overflow-hidden">
          <Image
            style={{ zIndex: 100 }}
            src="https://avatars.githubusercontent.com/u/149939366?s=400&u=1581b64e658e8b4c694bd1feaeced6cc3d7e599c&v=4"
            alt="Avatar"
            layout="fill"
            objectFit="cover"
            unoptimized={true}
          />
        </div>
      </div>

      {/* Header/Hero Section */}
      <header
        className="relative overflow-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        style={{ marginTop: "-7rem" }}
      >
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Left Column - Bio */}
            <div className="mt-16 md:mt-0" style={{ marginTop: "4rem", marginBottom: "2rem" }}>
              <h1 className="text-3xl md:text-6xl font-bold mb-4">Developer & Tech Enthusiast</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Hi guys! I'm a Full Stack Developer with a passion for technology and software development. I focus on
                building modern and scalable web applications.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/quy1003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/thi-qu%C3%BD-nguy%E1%BB%85n-146066323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:quy021003@gmail.com" className="p-2 hover:bg-accent rounded-full transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right Column - Code Blocks */}
            <div className="flex flex-col gap-8">
              {/* Developer Info Block */}
              <div className="relative mx-auto md:ml-5 w-full max-w-md">
                <Terminal className="w-full h-48 md:h-64 text-primary opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs sm:text-sm md:text-base font-mono bg-accent p-3 md:p-4 rounded-lg shadow-lg w-[90%] md:w-auto">
                    <p className="text-primary">const developer = {"{"}</p>
                    <p className="pl-4">name: "Nguyen Thi Quy",</p>
                    <p className="pl-4">role: "Full Stack Developer",</p>
                    <p className="pl-4">loves: ["Code", "Coffee", "Tea", "Traveling"]</p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>

              {/* Personal Details Block */}
              <div className="relative mx-auto md:ml-5 w-full max-w-md">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs sm:text-sm md:text-base font-mono bg-accent p-3 md:p-4 rounded-lg shadow-lg w-[90%] md:w-auto">
                    <p className="text-primary">const detail = {"{"}</p>
                    <p className="pl-4">dateOfBirth: "02-10-2003",</p>
                    <p className="pl-4">address: "Tan Binh, Ho Chi Minh",</p>
                    <p className="pl-4">quote: "Good wine needs no bush"</p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CareerPath />
      <Rewards />

      {/* Projects Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Highlight Features</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-lg border p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                          >
                            <Github className="w-4 h-4 md:w-5 md:h-5" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs md:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <div className="mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-accent mt-4 md:mt-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="py-12 md:py-24 bg-cover bg-center"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-white">Skills & Technologies</h2>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background rounded-lg p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Frontend</h3>
              <div className="space-y-2">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Backend</h3>
              <div className="space-y-2">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 md:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">DevOps & Tools</h3>
              <div className="space-y-2">
                {devopsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8 border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="text-center text-gray-400 text-sm md:text-base">
            © 2025 Quy Nguyen Development. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample Data
const projects = [
  {
    title: "Boolfly Grocery Store",
    description: "A simple application intergrated Magento2 and React Native via GraphQL.",
    technologies: ["React Native", "Magento2", "NodeJS", "Cloudflare", "Stripe"],
    features: [
      "Online payment with Stripe",
      "Intergrated Magento2 and React Native via GraphQL",
      "Public backend hosting via Cloudflare",
    ],
    image:
      "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      github: "https://github.com/quy1003/grocery_store_fe.git",
      demo: "#",
    },
  },
  {
    title: "Buses Management System",
    description: "Smart sollution for buses management.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Bus tracking realtime with Socket.IO",
      "Guide customers through messages automatically which generated by Gemini",
      "Routing stations system with BFS",
      "Book tickets via ZaloPay",
      "View routes map detail with Leaflet -OpenStreetMap",
    ],
    image:
      "https://images.unsplash.com/photo-1597920467799-ec8bee99f6eb?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    links: {
      github: "https://github.com/quy1003/PublicTransport.git",
      demo: "https://project-demo.com",
    },
  },
]

const frontendSkills = ["React / Next.js", "TypeScript", "Tailwind CSS", "MUI, Shadcn, Bootstrap, ..."]

const backendSkills = [
  "Node.js / Express / NestJS",
  "Python / Django",
  "MySQL / MongoDB / FireBase / SupaBase",
  "REST APIs",
  "GraphQL",
  "Mongoose / Knex-Objection / PyMySQL",
  "Socket.IO",
]

const devopsSkills = ["Docker", "AWS / Vercel", "WSL", "Git", "Jira / Trello"]

