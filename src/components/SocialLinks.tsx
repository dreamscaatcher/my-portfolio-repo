import { cn } from "@/lib/utils";
import { Facebook, Linkedin, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/gurinder.singh.79069", icon: <Facebook /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/gurinder-singh-ghuman", icon: <Linkedin /> },
    { name: "External", link: "https://www.gurinder-ghuman.icu", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
