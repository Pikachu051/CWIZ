import { PageWrapper } from '@/components/PageWrapper';
export default function Home() {
  return <PageWrapper>
      <div className="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-32 overflow-y-scroll"><div className="h-64 bg-gray-400"></div></div>
      <div className='h-screen place-content-center bg-gradient-to-t from-lime-700 to-yellow-50'>
        <div className='text-6xl font-bold text-center pb-10 pt-24'>
          <h1>CWIZ?</h1>
        </div>
        <div className=' w-full p-5 px-24 flex justify-center'>
          <div className='p-5 bg-stone-200 drop-shadow-xl backdrop-blur-sm rounded-md grid grid-cols-2 grid-flow-col gap-10'>
            <div className=''>
              <p className='text-lg'><strong>CWIZ (ออกเสียงว่า ควิซ)</strong> เป็นเกมตอบคำถามทั่วไปที่ถูกสร้างขึ้นด้วยภาษา C ซึ่งลักษณะของคำถามจะเป็นคำถามสำหรับการทดสอบความรู้รอบตัว</p>
            </div>
            <div className='flex justify-center'>
              <iframe className="rounded-xl" width="600" height="300" src="https://www.youtube.com/embed/ZPYwM3NOSMg" title="LANY - It Even Rains in LA (Live Performance) | Vevo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </PageWrapper>
}
