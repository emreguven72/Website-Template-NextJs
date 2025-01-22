'use client'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function NavbarSheet() {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
 
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8 overflow-y-scroll">
                <SheetHeader>
                    <SheetTitle className="flex justify-center">
                        <Image className="min-w-24" src="https://placehold.co/150x90" width={150} height={112.5} alt='logo' />
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2">
                    <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                        <Link href='/' onClick={handleClose}><span className="text-base">Anasayfa</span></Link>
                    </Button>
                    <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                        <Link href='/hakkimizda' onClick={handleClose}><span className="text-base">Hakkımızda</span></Link>
                    </Button>
                    <div className="flex flex-col gap-1 border rounded-lg border-lovechemred-500">
                        <span className="text-base border-b border-b-lovechemred-500 text-lovechemred-500 text-center">Kategori</span>
                        <div className="flex flex-col gap-2 px-4 py-4">
                            <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                                <Link href='/' onClick={handleClose}><span className="text-base">Alt Kategori 1</span></Link>
                            </Button>
                            <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                                <Link href='/' onClick={handleClose}><span className="text-base">Alt Kategori 2</span></Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 border rounded-lg border-lovechemred-500">
                        <span className="text-base border-b border-b-lovechemred-500 text-lovechemred-500 text-center">Kategori</span>
                        <div className="flex flex-col gap-2 px-4 py-4">
                            <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                                <Link href='/' onClick={handleClose}><span className="text-base">Alt Kategori 1</span></Link>
                            </Button>
                            <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                                <Link href='/' onClick={handleClose}><span className="text-base">Alt Kategori 2</span></Link>
                            </Button>
                            <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                                <Link href='/' onClick={handleClose}><span className="text-base">Alt Kategori 3</span></Link>
                            </Button>
                            <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                                <Link href='/' onClick={handleClose}><span className="text-base">Alt Kategori 4</span></Link>
                            </Button>
                        </div>
                    </div>
                    <Button className="bg-white border border-lovechemred-500 hover:bg-lovechemred-500 text-lovechemred-500 hover:text-white" asChild>
                        <Link href='/iletisim' onClick={handleClose}><span className="text-base">İletişim</span></Link>
                    </Button>
                    <Button className="bg-lovechemred-500 hover:bg-lovechemred-600" asChild>
                        <Link href='/egitim-takvimi' onClick={handleClose}><span className="text-base text-white">Takvim</span></Link>
                    </Button>
                </div>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}