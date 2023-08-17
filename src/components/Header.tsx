import React from 'react';
import Image from 'next/image'

export default function Header() {
return <div className='w-full'>
        <Image
              src="/home.png"
              alt="VlOGO"
              className="w-full h-auto"
              width={1500}
              height={1500}
              priority
              
            />
</div>
}