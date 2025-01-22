'use client'

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ServiceCard } from "./ServiceCard"

export function ServiceCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex flex-col gap-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full max-w-3xl"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="flex flex-col gap-4 p-1">
                <ServiceCard url="https://placehold.co/200x150" title="Başlık" description="Hizmetin ne işe yaradığını detaylı olmasa da güzel bir şekilde açıklayan kısa bir yazı" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-row justify-between w-1/2 self-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`flex w-1.5 h-1.5 rounded-full border border-black ${current - 1 === index && "bg-black"}`}>
          </div>
        ))}

      </div>
    </div>
  )
}
