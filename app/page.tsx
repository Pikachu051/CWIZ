import { PageWrapper } from '@/components/PageWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from '@/components/ui/button';
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ScrollText } from 'lucide-react';

export default function Home() {
  return <PageWrapper>
      <div className='place-content-center bg-gradient-to-t from-lime-700 to-yellow-50 scrollbar'>
        <div className='text-6xl font-bold text-center pb-10 pt-12'>
          <h1>CWIZ?</h1>
        </div>
        <div className='w-full p-5 px-24 flex justify-center'>
          <div className='p-5 bg-stone-200 drop-shadow-xl backdrop-blur-sm rounded-md grid grid-cols-2 grid-flow-col gap-10'>
            <div className=''>
              <div className='text-lg'><strong>CWIZ </strong> โครงงานนี้เป็นส่วนหนึ่งของวิชา 06016409 PHYSICAL COMPUTING โดยเป็นโครงงานประเภทเกม ชื่อว่า &#34;CWIZ&#34; (อ่านว่า “ควิซ”) ซึ่งใช้ภาษา C ในการพัฒนา โดยเกมนี้จะเปิดโอกาสให้ผู้เล่นได้ทดสอบความรู้ของตนเองผ่านคำถามความรู้ทั่วไป เพื่อให้ผู้เล่นสามารถเล่นเกมได้อย่างมีความสนุกและได้รับความรู้ไปพร้อมกัน โดยคำถามในเกมนั้นมีความหลากหลายในด้านหมวดหมู่ ไม่ว่าจะเป็นในหมวดวิทยาศาสตร์ ประวัติศาสตร์ ภูมิศาสตร์ วรรณกรรม และหมวดอื่น ๆ อีกมากมาย <br/><br/>
                มีลักษณะการเล่นดังนี้:<br/><br/>
                <div className='text-sm'><strong>-	เมนูหลัก:</strong> ผู้เล่นจะเริ่มต้นเกมด้วยเมนูหลักใน terminal เพื่อเตรียมพร้อมในการเล่น<br/><br/>
                <strong>-	การเล่นเกม:</strong> ผู้เล่นเริ่มต้นเล่นเกม โดยจะมีคำถามและตัวเลือกทั้งหมด 4 ตัวเลือก ปรากฏบนหน้าจอ terminal โดยผู้เล่นต้องเลือกตอบคำตอบที่คิดว่าถูกเพียงข้อเดียว<br/><br/>
                <strong>-	คะแนนและเวลา:</strong> เกมจะทำการจับเวลาหลังผู้เล่นเริ่มเล่น ผู้เล่นจะได้คะแนนเมื่อตอบถูก และจะโดนลดคะแนนเมื่อตอบผิด<br/><br/>
                <strong>-	การสิ้นสุดเกม:</strong> เมื่อเวลาสิ้นสุด จะมีการแสดงคะแนนรวมในรอบนั้นๆ และคะแนนสูงสุด<br/><br/>
                <strong>-	บันทึกคะแนน:</strong> คะแนนสูงสุดจะถูกบันทึกและแสดงในการเล่นรอบถัดไป<br/><br/>
                <div className='pt-6 text-lg'>โครงงานนี้อาจมีการพัฒนาเพิ่มเติมอีกในอนาคต เช่น เพิ่มจำนวนคำถามให้เยอะและหลากหลายมากยิ่งขึ้น ผู้เล่นสามารถเลือกระดับความยากได้ เปิดโอกาสให้ผู้เล่นเลือกหมวดหมู่ที่ตนเองถนัดได้ เป็นต้น
                </div></div></div>
            </div>
            <div className='justify-center grid'>
              <div className='flex justify-center font-semibold relative top-20 text-xl pt-3'>วิดีโอสาธิตโปรแกรม</div>
              <iframe className="rounded-xl" width="600" height="300" src="https://www.youtube.com/embed/y_QYfduLA9o" title="CWIZ - Demo video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div className='w-full px-24 pt-10 pb-10'>
          <div className='bg-stone-200 rounded-md pt-5 px-5 pb-[-12]'>
            <strong className='font-bold text-xl'>Documents</strong>
            <div className='flex justify-start pl-2 pt-4'><div className='px-2 scale-75'><ScrollText /></div> โปสเตอร์ Project CWIZ ขนาด A1</div>
            <div className='flex justify-end relative bottom-8'>
              <Link className={buttonVariants({variant: "outline"})} href="https://drive.google.com/file/d/1I0xE8ejfzSeRYhKyEvlVW4CC98t2kWYC/view?usp=sharing" passHref={true} target='_blank'>
                <div className='scale-75'><ArrowDownToLine/></div>
                <div className='pl-2'>Download</div>
              </Link>
            </div>
            <div className='flex justify-start pl-2 pt-0'><div className='px-2 scale-75'><ScrollText /></div>Source code ภาษา C</div>
            <div className='flex justify-end relative bottom-8'>
              <Link className={buttonVariants({variant: "outline"})} href="https://drive.google.com/file/d/1OMNg5D0vsUy2hz-Zhm8TjvhewHY2mJdY/view?usp=drive_link" passHref={true} target='_blank'>
                <div className='scale-75'><ArrowDownToLine/></div>
                <div className='pl-2'>Download</div>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full px-24 pt-8'><h1 className='text-white text-4xl font-bold'>FAQ</h1></div>
        <div className='pt-8 px-24 pb-24 w-full flex justify-center text-white'>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-semibold'>เกมเล่นยากไหม ?</AccordionTrigger>
              <AccordionContent>
                ไม่ยาก แค่ต้องมีความรู้รอบตัวมากพอครับ
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-semibold'>เกมนี้เล่นสนุกหรือไม่ ?</AccordionTrigger>
              <AccordionContent className=''>
                สนุกมากครับ แถมยังได้ความรู้ด้วย
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </PageWrapper>
}
