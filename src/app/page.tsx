import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ResumeProjects from "@/components/resume-projects";
import Markdown from "react-markdown";
import Image from "next/image";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { BLUR_FADE_DELAY } from "@/constants";
import { CertificateCard } from "@/components/certificate-card";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className=" inline-flex items-center gap-2">
                  <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {`Hi, I'm ${DATA.name.split(" ")[0]}`}
                  </span>
                  <Image
                    src="/wavingHand.svg"
                    alt="waving hand"
                    width={92}
                    height={92}
                    className=" hidden md:block"
                  />
                </div>
              </BlurFade>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFadeText
                className="max-w-[600px] text-sm md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={"contact@isaccobertoli.com"}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 md:size-32">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert leading-normal">
            {DATA.summary}
          </Markdown>
          <div className="w-full text-center mt-2">
            <a href="/isacco-bertoli-resume.pdf" download>
              <Button className="w-1/2 md:w-1/3">View Resume</Button>
            </a>
          </div>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                location={work.location}
                link={work.href}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="certificates">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Certificates</h2>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
            {DATA.certificate.map((certificate, id) => (
              <BlurFade
                key={certificate.title}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <CertificateCard
                  title={certificate.title}
                  image={certificate.image}
                  date={certificate.date}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="services">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Services</h2>
          </BlurFade>
          {DATA.services.map((skill, id) => (
            <BlurFade key={id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ResumeCard
                key={skill.title}
                altText={skill.title}
                logoUrl={skill.logoUrl}
                title={skill.title}
                description={skill.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <ResumeProjects />
      </section>
    </main>
  );
}
