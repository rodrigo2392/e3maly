import React from 'react';
import Image from 'next/image'

export default function Header() {
return <>
<div className='w-full justify-center flex relative pb-0 px-4'>
            <Image
              src="/card.png"
              alt="Firma"
              className="w-full lg:w-4/5 h-auto z-10"
              width={1500}
              height={1500}
              priority
              
            />
</div>

</>
}