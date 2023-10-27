import Image from 'next/image'

export default function Home() {
  return (
    <div className='place-content-center '>
      <div className='text-6xl font-bold text-center pb-10'>
        <h1>CWIZ?</h1>
      </div>
      <div className=' w-full p-5 px-24 flex justify-center'>
        <div className='p-5 bg-emerald-200 rounded-md grid grid-cols-2 grid-flow-col gap-10'>
          <div className=''>
            <p className='text-lg'><strong>CWIZ (ออกเสียงว่า ควิซ) </strong> เป็นเกมตอบคำถามทั่วไปที่ถูกสร้างขึ้นด้วยภาษา C ซึ่งลักษณะของคำถามจะเป็นคำถามสำหรับการทดสอบความรู้รอบตัว</p>
          </div>
          <div className='flex justify-center'>
            <iframe width="600" height="300" src="https://www.youtube.com/embed/ZPYwM3NOSMg" title="LANY - It Even Rains in LA (Live Performance) | Vevo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
