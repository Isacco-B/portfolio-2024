"use client";

import { ButtonLoading } from "@/components/button-loading";
import { useToast } from "@/components/hooks/use-toast";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DATA } from "@/data/resume";
import Link from "next/link";
import React from "react";
import { BLUR_FADE_DELAY } from "../page";

export default function CantactPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    const data = new URLSearchParams(formData as any).toString();

    fetch(
      "https://demo13.isaccobertoli.com/ce60dd90e1d72f2a05a05ca526fa47e525aed334611de4a5442b0143644ccdee",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: data.message,
            variant: "destructive",
          });
        } else {
          setForm({
            name: "",
            email: "",
            message: "",
          });
          toast({
            title: "Message sent!",
            description:
              data.message ||
              "Thank you for your message. I'll get back to you shortly.",
          });
        }
      }).finally(() => setIsLoading(false));
  }

  return (
    <section>
      <Card>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="space-y-12">
            <CardTitle>
              <div className="space-y-3 text-center">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                  >
                    with a direct question on twitter
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. I will ignore all
                  soliciting.
                </p>
              </div>
            </CardTitle>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name" className="font-bold">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={form.name}
                      required
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email" className="font-bold">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={form.email}
                      required
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="message" className="font-bold">
                      Message
                    </Label>
                    <Textarea
                      placeholder="Type your message here."
                      id="message"
                      onChange={handleChange}
                      value={form.message}
                      required
                    />
                  </div>
                  <div className="w-full text-center">
                    {isLoading ? (
                      <ButtonLoading className="w-1/2" />
                    ) : (
                      <Button type="submit" className="w-1/2">
                        Send Message
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </div>
        </BlurFade>
      </Card>
    </section>
  );
}
