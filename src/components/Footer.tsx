import React from 'react';
import Image from 'next/image'

export default function Header() {
return <>
<div className='w-full justify-center flex relative mt-10 px-4 pb-10'>
            <Image
              src="/footer.png"
              alt="Firma"
              className="w-full lg:w-1/2 h-auto z-10"
              width={1500}
              height={1500}
              priority
              
            />
</div>

</>
}