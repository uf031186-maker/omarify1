"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "FastAPI E-Commerce Backend",
    description:
      "Production-grade e-commerce API with user authentication, product management, cart system, payment integration, and order processing pipeline.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Automation Bot System",
    description:
      "Intelligent automation platform that processes data feeds, triggers actions based on ML predictions, and manages scheduled task workflows.",
    stack: ["Python", "Celery", "RabbitMQ", "TensorFlow"],
    github: "#",
    demo: "#",
  },
  {
    title: "WhatsApp Business Automation API",
    description:
      "Custom API layer for WhatsApp Business that handles message routing, automated responses, media processing, and conversation analytics.",
    stack: ["Flask", "MongoDB", "WebSocket", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    title: "Web Scraping Intelligence Engine",
    description:
      "Scalable scraping framework with proxy rotation, CAPTCHA handling, data normalization, and automated report generation.",
    stack: ["Scrapy", "PostgreSQL", "Selenium", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    title: "Admin Dashboard Backend API",
    description:
      "RESTful backend powering an admin dashboard with role-based access control, real-time analytics endpoints, and audit logging.",
    stack: ["Django REST", "PostgreSQL", "Redis", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-Time Notification Service",
    description:
      "Event-driven microservice handling push notifications, email dispatch, SMS delivery, and in-app alerts with priority queuing.",
    stack: ["FastAPI", "Redis", "WebSocket", "Celery"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 lg:py-36">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,77,255,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-neon-cyan text-xs font-mono tracking-[0.2em] uppercase">
            // Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Backend systems built for performance, scalability, and real-world production use.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-neon-cyan/25 hover:shadow-[0_0_30px_rgba(0,229,255,0.06)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Preview */}
              <div className="relative h-40 sm:h-44 bg-gradient-to-br from-navy-800 to-navy-700 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)]" />
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="w-full max-w-[180px]">
                    <div className="bg-navy-900/80 rounded-t-lg p-2.5 border border-neon-cyan/10">
                      <div className="flex gap-1.5 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400/50" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1 w-3/4 bg-neon-cyan/15 rounded" />
                        <div className="h-1 w-1/2 bg-neon-purple/15 rounded" />
                        <div className="h-1 w-2/3 bg-neon-blue/15 rounded" />
                        <div className="h-1 w-2/5 bg-neon-cyan/10 rounded" />
                      </div>
                    </div>
                    <div className="h-1.5 bg-gray-700/30 rounded-b-lg mx-[-2px]" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-white font-semibold text-[15px] sm:text-base mb-2.5 group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-neon-cyan/[0.06] text-neon-cyan/70 border border-neon-cyan/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 py-2.5 text-center text-sm rounded-lg border border-white/8 text-gray-400 hover:text-white hover:border-neon-cyan/20 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 py-2.5 text-center text-sm rounded-lg bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
