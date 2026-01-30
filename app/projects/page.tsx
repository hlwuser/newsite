'use client';

import { useState } from 'react';
import { Github, ExternalLink, BookOpen } from 'lucide-react';
import projectsData from '@/lib/data/projects.json';
import { getImagePath } from '@/lib/utils/imageHelper';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-black tracking-wider hover:underline">MAYANK</a>
          <div className="flex gap-2 md:gap-4 text-xs md:text-sm font-semibold">
            <a href="/" className="uppercase hover:underline">Home</a>
            <a href="/projects" className="uppercase hover:underline border-b-2 border-foreground">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 border-b-2 border-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-2">ALL PROJECTS</h1>
            <div className="w-12 md:w-16 h-1 bg-foreground"></div>
          </div>
          <p className="text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            A comprehensive collection of machine learning, deep learning, and software engineering projects showcasing expertise in AI/ML, MLOps, and production systems.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projectsData.map((project, idx) => {
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
                    <h3 className="font-black text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wide">{project.title}</h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 border-t-2 border-foreground border-b-2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-wide uppercase mb-4 md:mb-6">Interested in Collaborating?</h2>
          <p className="text-sm md:text-base font-medium max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
          </p>
          <button className="bg-foreground text-background border-2 border-foreground px-4 md:px-6 py-2 md:py-3 uppercase text-xs md:text-sm font-black hover:bg-background hover:text-foreground transition-colors">
            Get in Touch
          </button>
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
