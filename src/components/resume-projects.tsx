"use client";

import { DATA } from "@/data/resume";
import { useState } from "react";
import { ProjectCard } from "./project-card";
import { Button } from "./ui/button";
import { BLUR_FADE_DELAY } from "@/constants";
import BlurFade from "./magicui/blur-fade";


const PROJECTS_PER_PAGE = 4;

export default function ResumeProjects() {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const showMoreProjects = () => {
    setVisibleProjects((prev) =>
      Math.min(prev + PROJECTS_PER_PAGE, DATA.projects.length)
    );
  };

  const displayedProjects = DATA.projects.slice(0, visibleProjects);

  return (
    <div className="w-full py-12">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {displayedProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>

      {visibleProjects < DATA.projects.length ? (
        <div className="flex justify-center mt-4">
          <Button onClick={showMoreProjects}>Show More</Button>
        </div>
      ) : (
        <div className="flex justify-center mt-4">
          <Button onClick={() => setVisibleProjects(PROJECTS_PER_PAGE)}>
            Show Less
          </Button>
        </div>
      )}
    </div>
  );
}
