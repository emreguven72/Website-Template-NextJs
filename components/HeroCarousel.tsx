"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

export function HeroCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    const images = [
        'https://placehold.co/900x900',
        'https://placehold.co/900x900',
        'https://placehold.co/900x900',
        'https://placehold.co/900x900',
        'https://placehold.co/900x900',
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-2xl"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image src={images[index]} className="rounded-lg" alt={`hero-image${index + 1}`} width={900} height={900} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
