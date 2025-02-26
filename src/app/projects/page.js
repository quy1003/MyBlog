import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Terminal,
  Code2,
  Boxes,
  Cpu,
  ImagePlay,
  Hexagon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import CareerPath from '@/components/CareerPath'
import Image from 'next/image'
import Rewards from '@/components/Rewards'

export default function Portfolio() {
  return (
    <div
      className="min-h-screen bg-background text-foreground p-9"
      style={{ marginTop: '-40px' }}
    >
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
        <div className="relative w-48 h-48 shadow-lg rounded-full overflow-hidden">
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
        style={{ marginTop: '-7rem' }}
        className="relative overflow-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div style={{ marginTop: '-11rem' }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Developer & Tech Enthusiast
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Hi guys! I'm a Full Stack Developer with a passion for
                technology and software development. I focus on building modern
                and scalable web applications.
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
                <a
                  href="mailto:quy021003@gmail.com"
                  className="p-2 hover:bg-accent rounded-full transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div style={{ marginLeft: '5rem' }} className="relative">
              <Terminal className="w-full h-64 text-primary opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-sm md:text-base font-mono bg-accent p-4 rounded-lg shadow-lg">
                  <p className="text-primary">const developer = {'{'}</p>
                  <p className="pl-4">name: "Nguyen Thi Quy",</p>
                  <p className="pl-4">role: "Full Stack Developer",</p>
                  <p className="pl-4">
                    loves: ["Code", "Coffee", "Tea", "Traveling"]
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              style={{ marginLeft: '5rem', marginTop: '-2rem' }}
              className="relative"
            >
              {/* <Terminal className="w-full h-64 text-primary opacity-10" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-sm md:text-base font-mono bg-accent p-4 rounded-lg shadow-lg">
                  <p className="text-primary">const detail = {'{'}</p>
                  <p className="pl-4">dateOfBirth: "02-10-2003",</p>
                  <p className="pl-4">address: "Tan Binh, Ho Chi Minh",</p>
                  <p className="pl-4">
                    quote: Redflag🚩But Having a Goldstar⭐
                  </p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </header>

      <CareerPath />
      <Rewards />
      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12">Highlight Features</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-accent rounded-full transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="mt-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-accent">
                    <img
                      src={project.image || '/placeholder.svg'}
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
        className="py-16 md:py-24 bg-accent md:pl-20"
        style={{
          background:
            "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12" style={{ color: 'white' }}>
            Skills & Technologies
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-background rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-2">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="space-y-2">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
              <div className="space-y-2">
                {devopsSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8 border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
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
    title: 'Boolfly Grocery Store',
    description:
      'A simple application intergrated Magento2 and React Native via GraphQL.',
    technologies: [
      'React Native',
      'Magento2',
      'NodeJS',
      'Cloudflare',
      'Stripe',
    ],
    features: [
      'Online payment with Stripe',
      'Intergrated Magento2 and React Native via GraphQL',
      'Public backend hosting via Cloudflare',
    ],
    image:
      'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: {
      github: 'https://github.com/quy1003/grocery_store_fe.git',
      demo: '#',
    },
  },
  {
    title: 'Buses Management System',
    description: 'Smart sollution for buses management.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    features: [
      'Bus tracking realtime with Socket.IO',
      'Guide customers through messages automatically which generated by Gemini',
      'Routing stations system with BFS',
      'Book tickets via ZaloPay',
      'View routes map detail with Leaflet -OpenStreetMap',
    ],
    image:
      'https://images.unsplash.com/photo-1597920467799-ec8bee99f6eb?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: {
      github: 'https://github.com/quy1003/PublicTransport.git',
      demo: 'https://project-demo.com',
    },
  },
]

const frontendSkills = [
  'React / Next.js',
  'TypeScript',
  'Tailwind CSS',
  'MUI, Shadcn, Bootstrap, ...',
]

const backendSkills = [
  'Node.js / Express / NestJS',
  'Python / Django',
  'MySQL / MongoDB / FireBase / SupaBase',
  'REST APIs',
  'GraphQL',
  'Mongoose / Knex-Objection / PyMySQL',
  'Socket.IO',
]

const devopsSkills = ['Docker', 'AWS / Vercel', 'WSL', 'Git', 'Jira / Trello']

const blogPosts = [
  {
    title: 'Xây dựng ứng dụng Real-time với Socket.io và React',
    excerpt:
      'Hướng dẫn chi tiết về cách tạo ứng dụng real-time với Socket.io và React hooks.',
    image: '/placeholder.svg?height=300&width=500',
    date: '2024-02-26',
    readTime: 8,
    categories: ['React', 'WebSocket'],
    slug: '/blog/real-time-app-socketio-react',
  },
  {
    title: 'Tối ưu hiệu suất Next.js với Server Components',
    excerpt:
      'Khám phá cách sử dụng Server Components trong Next.js để cải thiện hiệu suất.',
    image: '/placeholder.svg?height=300&width=500',
    date: '2024-02-24',
    readTime: 10,
    categories: ['Next.js', 'Performance'],
    slug: '/blog/nextjs-server-components',
  },
  {
    title: 'Authentication trong Next.js với NextAuth.js',
    excerpt: 'Hướng dẫn triển khai hệ thống xác thực trong ứng dụng Next.js.',
    image: '/placeholder.svg?height=300&width=500',
    date: '2024-02-22',
    readTime: 12,
    categories: ['Next.js', 'Security'],
    slug: '/blog/nextjs-authentication',
  },
]
