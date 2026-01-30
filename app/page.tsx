'use client';

import { useState } from 'react';
import { ChevronDown, Github, Twitter, Linkedin, Mail, ExternalLink, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import projectsData from '@/lib/data/projects.json';
import blogsData from '@/lib/data/blogs.json';
import { IMAGE_PATHS, getImagePath } from '@/lib/utils/imageHelper';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Show only first 4 projects on home page
  const homeProjectsData = projectsData.slice(0, 4);

  // Show only first 6 blogs on home page
  const homeBlogsData = blogsData.slice(0, 6);

  const skillsData = [
    { title: 'Programming Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
    { title: 'Data Science & Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'] },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
    { title: 'Python Backend', items: ['FastAPI', 'Django', 'Flask', 'Celery'] },
    { title: 'Deployment & MLOps', items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
    { title: 'Web Development', items: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'] },
    { title: 'Design Tools', items: ['Figma', 'Adobe XD'] },
    { title: 'Other Tools', items: ['Git', 'Jupyter', 'VS Code'] }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-black tracking-wider">MAYANK</h1>
          <div className="flex gap-2 md:gap-4 text-xs md:text-sm font-semibold">
            <a href="/" className="uppercase hover:underline">Home</a>
            <a href="/projects" className="uppercase hover:underline">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row items-start gap-4 md:gap-12 mb-8 md:mb-12">
            <div className="flex-1">
              <div className="mb-6 md:mb-8">
                <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-muted-foreground">Welcome to</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mt-2 mb-2">MAYANK</h2>
                <div className="w-12 md:w-16 h-1 bg-foreground"></div>
              </div>
              <p className="text-sm sm:text-base md:text-base leading-relaxed mb-4 md:mb-6 font-medium max-w-xl">
                Machine Learning Engineer specializing in <span className="font-black">AI-driven solutions</span> and <span className="font-black">production deployment</span>. Building scalable systems that solve real-world problems.
              </p>
              <div className="flex gap-1 md:gap-4 flex-wrap mb-4 md:mb-6">
                <button className="border-2 border-foreground px-2 md:px-4 py-1 md:py-2 uppercase text-xs font-black hover:bg-foreground hover:text-background transition-colors">
                  GitHub
                </button>
                <button className="border-2 border-foreground px-2 md:px-4 py-1 md:py-2 uppercase text-xs font-black hover:bg-foreground hover:text-background transition-colors">
                  Twitter
                </button>
                <button className="border-2 border-foreground px-2 md:px-4 py-1 md:py-2 uppercase text-xs font-black hover:bg-foreground hover:text-background transition-colors">
                  LinkedIn
                </button>
              </div>
              <button className="bg-foreground text-background border-2 border-foreground px-2 md:px-4 py-1 md:py-2 uppercase text-xs font-black hover:bg-foreground hover:text-foreground transition-colors">
                Get in Touch
              </button>
            </div>
            <div className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 border-4 border-foreground flex items-center justify-center overflow-hidden">
              <img src={IMAGE_PATHS.HERO_PROFILE || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
            <div className="w-20 h-20 md:w-24 md:h-24 border-4 border-foreground flex-shrink-0 overflow-hidden">
              <img src={IMAGE_PATHS.ABOUT_ICON || "/placeholder.svg"} alt="About" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-black tracking-wide uppercase mb-4 md:mb-6">About</h3>
              <p className="text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                Machine Learning Engineer & Data Scientist. I design <span className="font-black">scalable systems</span>, automate workflows with <span className="font-black">MLOps</span>, and optimize for <span className="font-black">production</span>. Focused on leveraging AI and LLMs to solve complex challenges efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-black tracking-wide uppercase mb-6 md:mb-8">Skills</h3>
          <Accordion type="single" collapsible className="w-full">
            {skillsData.map((skill, idx) => (
              <AccordionItem key={idx} value={`skill-${idx}`} className="border-b-2 border-foreground hover:bg-secondary px-0">
                <AccordionTrigger className="hover:no-underline font-black uppercase tracking-wide text-xs md:text-sm hover:bg-secondary py-3 md:py-4">
                  {skill.title}
                </AccordionTrigger>
                <AccordionContent className="pt-3 md:pt-4 pb-4">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-2 md:px-3 py-1 md:py-2 border border-foreground text-xs md:text-sm font-black uppercase tracking-wide">
                        {item}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black tracking-wide uppercase mb-2">Projects</h3>
          <div className="flex items-baseline gap-3 md:gap-4 mb-8 md:mb-12">
            <h4 className="text-lg md:text-xl font-black uppercase">Check my work</h4>
            <div className="flex-1 border-t-2 border-foreground"></div>
          </div>
          <p className="mb-8 md:mb-12 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
            Machine learning projects showcasing expertise in model optimization, MLOps, and production deployment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {homeProjectsData.map((project, idx) => {
              const primaryLink = project.liveUrl || project.github;
              return (
                <div
                  key={idx}
                  className="border-4 border-foreground overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="aspect-video bg-gray-200 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={getImagePath(project.image) || "/placeholder.svg"} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="p-4 md:p-6 border-t-4 border-foreground">
                    <h5 className="font-black text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wide">{project.title}</h5>
                    <p className="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs border border-foreground font-black uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-foreground px-3 py-2 uppercase text-xs font-black hover:bg-foreground hover:text-background transition-colors flex items-center gap-1"
                        >
                          <Github className="w-3 h-3" /> GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-foreground px-3 py-2 uppercase text-xs font-black hover:bg-foreground hover:text-background transition-colors flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" /> Live
                        </a>
                      )}
                      {project.blogUrl && (
                        <a
                          href={project.blogUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-2 border-foreground px-3 py-2 uppercase text-xs font-black hover:bg-foreground hover:text-background transition-colors flex items-center gap-1"
                        >
                          <BookOpen className="w-3 h-3" /> Blog
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 md:mt-12 flex justify-center">
            <a href="/projects" className="bg-foreground text-background border-2 border-foreground px-4 md:px-6 py-2 md:py-3 uppercase text-xs md:text-sm font-black hover:bg-foreground hover:text-foreground transition-colors">
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-12 md:py-16 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-black tracking-wide uppercase mb-8 md:mb-12">Latest Blogs</h3>
          <div className="space-y-0 max-w-2xl">
            {homeBlogsData.map((blog, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-3 sm:gap-6 py-3 md:py-4 px-3 md:px-4 border-b-2 border-foreground cursor-pointer group hover:bg-secondary transition-colors"
              >
                <span className="text-xs md:text-sm flex-shrink-0 w-full sm:w-24 font-black uppercase">{blog.date}</span>
                <a href={blog.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-sm md:text-base">
                  {blog.title}
                </a>
              </div>
            ))}
          </div>
          <button className="mt-6 md:mt-8 bg-foreground text-background border-2 border-foreground px-4 md:px-6 py-2 md:py-3 uppercase text-xs md:text-sm font-black hover:bg-foreground hover:text-foreground transition-colors">
            See More Blogs →
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black tracking-wide uppercase mb-4 md:mb-6">Get in Touch</h3>
          <p className="max-w-2xl text-sm md:text-base font-medium leading-relaxed">
            Want to chat? Send me a direct message <a href="#" className="font-black hover:underline">on twitter</a> and I'll respond whenever I can.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 border-t-2 border-foreground">
        <div className="max-w-4xl mx-auto flex justify-center gap-6 md:gap-8 text-xs md:text-sm font-black uppercase">
          <a href="/" className="hover:underline">Home</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-6 md:mt-8 text-xs font-semibold text-muted-foreground">
          © 2026 Mayank. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Sun({ className }: { className: string }) {
  return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2"/><line x1="12" y1="1" x2="12" y2="3" strokeWidth="2"/><line x1="12" y1="21" x2="12" y2="23" strokeWidth="2"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2"/><line x1="1" y1="12" x2="3" y2="12" strokeWidth="2"/><line x1="21" y1="12" x2="23" y2="12" strokeWidth="2"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2"/></svg>
}
