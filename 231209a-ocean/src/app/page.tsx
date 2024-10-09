import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { clients } from "@/constants/clients";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image src='/bg.png' width={1920} height={1080} className="absolute -top-20 left-0 opacity-10 -z-50 w-full h-full" alt="background" />
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40"/>
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-sky-600 top-16 -right-20"/>
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all duration-200">
                new features is now available
                <ArrowRightCircle className="inline ml-1 w-4 h-4"/>
              </p>
            
              <Heading title="Lorem ipsum dolor sit amet consectetur." isCentered={true}/>
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque assumenda nulla, modi doloremque quibusdam, recusandae dignissimos aliquid asperiores similique est dolor mollitia? Illum, quod porro ducimus quas asperiores explicabo? A?</p>
              <div className="flex items-center gap-4">
                <Button variant="primary">
                  Get Started
                  <MoveRight/>
                </Button>
                <Link href='#'>
                  <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image src='/Hero-image.svg' width={670} height={370} alt="Banner" className="mx-auto shadow-xl"/>
          </div>
        </section>

        <section id="clients" className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-4">
          {clients.map((client, index)=>(
            <Image key={index} src={client.src} width={120} height={80} alt={client.alt} className="w-40 mx-auto"/>
          ))}
        </section>
      </div>
    </main>
  )
}
