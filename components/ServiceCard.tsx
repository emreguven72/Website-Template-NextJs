import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


export function ServiceCard({ url, title, description }: { url: string, title: string, description: string }) {
    return (
        <Card className="w-full md:hover:scale-105 transition-all duration-300">
            <Image src={url} className="rounded-t-lg w-full" width={200} height={150} alt='logo' />
            <CardHeader>
                <CardTitle className="">{title}</CardTitle>
                {/* <CardDescription className="text-lovechemred-500 opacity-65">{description}</CardDescription> */}
            </CardHeader>
            <CardContent>
                <p className="opacity-65">{description}</p>
            </CardContent>

        </Card>
    )
}
