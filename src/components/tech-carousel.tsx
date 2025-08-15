import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";

type TechItem = {
  name: string;
  icon: string;
};

type TechCarouselProps = {
  techItems: TechItem[];
  className?: string;
  orientation?: "horizontal" | "vertical";
  autoPlay?: boolean;
  autoPlaySpeed?: number;
};

export const TechCarousel = ({
  techItems,
  className,
  orientation = "horizontal",
  autoPlay = true,
  autoPlaySpeed = 1,
}: TechCarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full py-8", className)}
    >
      <Carousel
        orientation={orientation}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={
          autoPlay
            ? [
                AutoScroll({
                  playOnInit: true,
                  speed: autoPlaySpeed,
                  stopOnInteraction: false,
                }),
              ]
            : []
        }
      >
        <CarouselContent>
          {techItems.map((tech, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="flex flex-col items-center p-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-12 object-contain"
                  width={48}
                  height={48}
                />
                <span className="text-sm text-center mt-2 text-muted-foreground">
                  {tech.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};
