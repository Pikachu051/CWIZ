import Image from "next/image";
import Link from "next/link"
import { PageWrapper } from "@/components/PageWrapper";
const page = () => {
    return (
        <PageWrapper>
            <div className="bg-[#e7e4d5] scrollbar">
                <div className="pt-12">
                    <h1 className="text-center text-5xl font-bold">Team</h1>
                </div>
                <div>
                    <div className="flex flex-col justify-center items-center pt-10 pb-20">
                        <div className="flex flex-col justify-center items-center">
                            <Link href="https://facebook.com/atom.parit.ch" target="_blank" passHref={true} className="w-40 h-40 rounded-full bg-gray-300 hover:scale-105">
                                <Image className="rounded-full" src="/Atom.jpg" alt="Atom's Image" width="500" height="250"></Image>
                            </Link>
                            <p className="pt-4">65070xxx</p>
                            <h1 className="text-2xl font-bold">Atom Chanakan</h1>
                            <p className="text-lg">Program developer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-14">
                            <Link href="https://facebook.com/chin.katedee" target="_blank" passHref={true} className="w-40 h-40 rounded-full bg-gray-300 hover:scale-105"><Image className="rounded-full" src="/Chin.jpg" alt="Sahachindech's Image" width="500" height="250"></Image></Link>
                            <p className="pt-4">65070232</p>
                            <h1 className="text-2xl font-bold">Sahachindech Katedee</h1>
                            <p className="text-lg">Web developer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-14">
                            <Link href="https://facebook.com/profile.php?id=100010782515688" className="w-40 h-40 rounded-full bg-gray-300 hover:scale-105"><Image className="rounded-full" src="/Mos.jpg" alt="Mos's Image" width="500" height="250"></Image></Link>
                            <p className="pt-4">65070229</p>
                            <h1 className="text-2xl font-bold">Saponthorn Bunkornkraireuk</h1>
                            <p className="text-lg">Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default page;