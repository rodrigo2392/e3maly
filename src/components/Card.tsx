import React from 'react';
import Image from 'next/image'

export default function Header() {
return <>
<div className='w-full justify-center flex relative pb-0 px-4 md:px-10 lg:px-0'>
<div className='absolute px-4 -top-2 z-2 '>
<Image
              src="/Marco.png"
              alt="division"
              className="w-full "
              width={1500}
              height={600}
              priority
              
            />
</div>
            <Image
              src="/card.png"
              alt="Firma"
              className="w-full h-auto z-10"
              width={1500}
              height={1500}
              priority
              
            />
</div>


</>
}