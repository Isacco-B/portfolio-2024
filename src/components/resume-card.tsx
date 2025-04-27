"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { LocateFixed } from "lucide-react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  badges?: readonly string[];
  period?: string;
  description?: string;
  location?: string;
  link?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  description,
  location,
  link,
}: ResumeCardProps) => {
  const Content = (
    <div className="flex p-4">
      <div className="flex-none">
        <Avatar className="size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </h3>
            {period && (
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            )}
          </div>
          <div className="flex flex-col items-start md:flex-row md:items-center justify-between">
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            {location && (
              <div className="flex items-center gap-x-1 font-sans text-xs text-muted-foreground ">
                <LocateFixed className="w-4 h-4" />
                {location}
              </div>
            )}
          </div>
        </CardHeader>
        {description && (
          <div className="mt-2 text-xs sm:text-sm">{description}</div>
        )}
      </div>
    </div>
  );

  return (
    <Card
      className={`transition-all ${
        link ? "hover:shadow-sm hover:scale-[1.01] cursor-pointer" : ""
      }`}
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {Content}
        </a>
      ) : (
        Content
      )}
    </Card>
  );
};
