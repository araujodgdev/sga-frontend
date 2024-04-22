import Image from "next/image";
import { HomeIcon, DollarSignIcon, ScrollTextIcon } from 'lucide-react';

export default function SideBar() {
    return (
        <section className="border-r-2 pt-4">
            <div className="flex flex-col items-center justify-evenly">
                <Image src="https://github.com/araujodgdev.png" width={460} height={460} className="rounded-full size-12" alt="" />
                <h2 className="mt-6">Douglas Araújo</h2>
                <h6 className="text-xs text-stone-400">Administrador</h6>
            </div>

            <nav className="mt-10 justify-center ml-4">
                <ul className="flex flex-col items-center justify-center gap-1">
                    <li className='flex items-center justify-start w-28 gap-2'>
                        <HomeIcon size={16} />
                        <h1 className='text-sm mt-1'>Início</h1>
                    </li>
                    <li className='flex items-center justify-start w-28 gap-2'>
                        <ScrollTextIcon size={16} />
                        <h1 className='text-sm mt-1'>Atividades</h1>
                    </li>
                    <li className='flex items-center justify-start w-28 gap-2'>
                        <DollarSignIcon size={16} />
                        <h1 className='text-sm mt-1'>Financeiro</h1>
                    </li>
                </ul>
                
            </nav>
        </section>
    )
}