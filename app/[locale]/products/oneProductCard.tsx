// OneProductCard.tsx
'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface OneProductCardProps {
  title?: string
  img?: StaticImageData | string // Allow both imported images and URL strings
  size?: string
  color?: string
  purity?: string
  moisture?: string
  admixtures?: string
  imperfect?: string
  packageCard?: string
}

const OneProductCard: React.FC<OneProductCardProps> = ({
  img,
  title,
  size,
  color,
  purity,
  moisture,
  admixtures,
  imperfect,
  packageCard
}) => {
  const { t } = useTranslation()

  return (
    <div className='max-w-sm w-full rounded-lg overflow-hidden shadow-lg border border-gray-200'>
      {/* Product Image */}
      <div className='w-full h-48 relative'>
        {/* Using next/image with dynamic src */}
        <Image
          className='w-full h-full object-cover'
          src={img!} // Make sure img is not undefined
          alt={title || 'Product Image'}
          layout='fill' // Takes the full container space
          objectFit='cover' // Cover the image inside the container
        />
      </div>

      {/* Product Info */}
      <div className='flex items-start pl-2'>
        <div className='flex items-start'>
          {/* Green Indicator Bar */}
          <div className='h-full w-2 mt-2 bg-green-600'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          {/* Product Details */}
          <div className='p-4'>
            {title && (
              <h3 className='text-lg sm:text-xl font-semibold text-green-700'>
                {title}
              </h3>
            )}
            <ul className='mt-2 text-sm sm:text-base text-gray-700 space-y-1'>
              {size && (
                <li>
                  <span className='font-semibold'>{t('size')}:</span> {size}
                </li>
              )}
              {purity && (
                <li>
                  <span className='font-semibold'>{t('purity')}:</span> {purity}
                </li>
              )}
              {moisture && (
                <li>
                  <span className='font-semibold'>{t('moisture')}:</span>{' '}
                  {moisture}
                </li>
              )}
              {admixtures && (
                <li>
                  <span className='font-semibold'>{t('admixtures')}:</span>{' '}
                  {admixtures}
                </li>
              )}
              {imperfect && (
                <li>
                  <span className='font-semibold'>{t('imperfect')}:</span> {imperfect}
                </li>
              )}
              {packageCard && (
                <li>
                  <span className='font-semibold'>{t('package')}:</span> {packageCard}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneProductCard
