import { HeroCarousel } from "@/components/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceCarousel } from "@/components/ServicesCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const HeroSection = () => {
    return (
      <section className="flex flex-col lg:flex-row gap-2">
        <HeroCarousel />

        <div className="flex flex-col flex-1 border border-gray-200 shadow-md rounded-xl items-center justify-center py-5">
          <div className="flex flex-col gap-3 md:gap-5 w-10/12 md:w-2/3">
            <Image className="" src="https://placehold.co/400x150" width={400} height={150} alt='logo' />
            <h1 className="text-black font-bold text-lg md:text-3xl">Etkileyici Bir Slogan</h1>
            <div className="flex flex-col gap-1">
              <h3 className="text-black text-base md:text-xl">Siz de bu etkileyici slogandan çabucak etkilenmek istiyorsanız bizimle çalışın ve kazanın.</h3>
              <p className="text-gray-500 text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <Button className="bg-lovechemred-500 text-white border border-lovechemred-500 hover:bg-lovechemred-600" asChild>
              <Link href='/'><span className="text-base">İletişim için tıklayın</span></Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const ServicesSection = () => {
    return (
      <section className="flex flex-col gap-4 justify-center">
        <h1 className="header text-lovechemred-500">Hizmetlerimiz</h1>
        <div className="md:hidden">
          <ServiceCarousel />
        </div>
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8">
          <ServiceCard url="https://placehold.co/200x150" title="Başlık" description="Hizmetin ne işe yaradığını detaylı olmasa da güzel bir şekilde açıklayan kısa bir yazı" />
          <ServiceCard url="https://placehold.co/200x150" title="Başlık" description="Hizmetin ne işe yaradığını detaylı olmasa da güzel bir şekilde açıklayan kısa bir yazı" />
          <ServiceCard url="https://placehold.co/200x150" title="Başlık" description="Hizmetin ne işe yaradığını detaylı olmasa da güzel bir şekilde açıklayan kısa bir yazı" />
          <ServiceCard url="https://placehold.co/200x150" title="Başlık" description="Hizmetin ne işe yaradığını detaylı olmasa da güzel bir şekilde açıklayan kısa bir yazı" />
          <ServiceCard url="https://placehold.co/200x150" title="Başlık" description="Hizmetin ne işe yaradığını detaylı olmasa da güzel bir şekilde açıklayan kısa bir yazı" />
        </div>
      </section>
    )
  }

  return (
    <div className="flex flex-col gap-10 px-8 md:px-20 py-10">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
