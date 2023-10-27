import { PageWrapper } from '@/components/PageWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Home() {
  return <PageWrapper>
      <div className='place-content-center bg-gradient-to-t from-lime-700 to-yellow-50 scrollbar'>
        <div className='text-6xl font-bold text-center pb-10 pt-12'>
          <h1>CWIZ?</h1>
        </div>
        <div className='w-full p-5 px-24 flex justify-center'>
          <div className='p-5 bg-stone-200 drop-shadow-xl backdrop-blur-sm rounded-md grid grid-cols-2 grid-flow-col gap-10'>
            <div className=''>
              <p className='text-lg'><strong>CWIZ (ออกเสียงว่า ควิซ)</strong> เป็นเกมตอบคำถามทั่วไปที่ถูกสร้างขึ้นด้วยภาษา C ซึ่งลักษณะของคำถามจะเป็นคำถามสำหรับการทดสอบความรู้รอบตัว</p>
            </div>
            <div className='flex justify-center'>
              <iframe className="rounded-xl" width="600" height="300" src="https://www.youtube.com/embed/ZPYwM3NOSMg" title="LANY - It Even Rains in LA (Live Performance) | Vevo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className='w-full px-24 pt-10 pb-10'><div className='bg-stone-200 rounded-md p-5'>Poster</div></div>
        <div className='w-full px-24 pt-8'><h1 className='text-white text-4xl font-bold'>FAQ</h1></div>
        <div className='pt-8 px-24 pb-24 w-full flex justify-center text-white'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-semibold'>คนทำเว็บหล่อไหม ?</AccordionTrigger>
              <AccordionContent>
                ใช่ครับ คนทำเว็บหล่อมาก
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-semibold'>อะตอมหล่อหรือไม่ ?</AccordionTrigger>
              <AccordionContent className=''>
                ไม่แน่ใจครับ แต่คนทำเว็บหล่อที่สุด
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </PageWrapper>
}
