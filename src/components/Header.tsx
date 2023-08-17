import React from 'react';
import Image from 'next/image'

export default function Header() {
return <><div className='w-full'>
        <Image
              src="/home.png"
              alt="Logo"
              className="w-full h-auto"
              width={1500}
              height={1500}
              priority
              
            />
            
</div>
<div className='w-full justify-center flex relative pb-20 md:pb-36'>
<div className='absolute -top-8 md:-top-16 lg:-top-20 '>
<Image
              src="/division.png"
              alt="division"
              className="w-full"
              width={1500}
              height={600}
              priority
              
            />
</div>
            <Image
              src="/firma.png"
              alt="Firma"
              className="w-1/2 h-auto"
              width={1500}
              height={1500}
              priority
              
            />
</div>

</>
}