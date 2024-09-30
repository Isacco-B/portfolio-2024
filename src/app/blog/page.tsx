import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";

export default function BlogPage() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="space-y-3 text-center">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Blog
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Coming Soon
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
          Welcome to my blog! This space is dedicated to sharing insights, tips,
          and thoughts on web development, blockchain technology, and the latest
          trends in the tech industry. While the blog is still under
          construction, I&apos;m excited to bring you valuable content that will
          inspire and inform. Stay tuned for updates, and feel free to reach out
          if you have topics you&apos;d like to see covered!
        </p>
      </div>
    </BlurFade>
  );
}
