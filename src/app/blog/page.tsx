import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "../page";

export default function BlogPage() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 12}>
      <div className="space-y-3 text-center">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Blog
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Coming Soon
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          Want to chat? Just shoot me a dm with a direct question on twitter and
          I`&apos;`ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </BlurFade>
  );
}
