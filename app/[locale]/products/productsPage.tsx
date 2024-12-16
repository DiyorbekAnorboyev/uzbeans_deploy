"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logoWhite.png' // Image import
import logoBlack from '../../../public/logoLast.png'

import noxot from '../../../public/noxot.jpg'
import mosh from '../../../public/mosh1.jpg'
import lovia from '../../../public/lovia.png'
import beans from '../../../public/beans.jpg'
import yangoq from '../../../public/yangoq.jpg'
import oqlovia from '../../../public/oqlovia.png'

import { FaGlobe, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import OneProductCard from './oneProductCard'
import { useTranslation } from 'react-i18next'

const ProductsPage = () => {
  const data = [
    {
      title: 'Uncolored sortexunpolished',
      img: noxot,
      size: '+2.8 mm',
      color: 'red speckled',
      purity: '97% - 99% Min',
      moisture: '7%/11%/12%/16% Max',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags'
    },
    {
      title: 'Black eyed kidney beans',
      img: oqlovia,
      size: '180-220 pieces in 100 grams',
      color: 'red speckled',
      purity: '97% - 99% Min',
      moisture: 'max 24%',
      admixtures: 'max 1%',
      imperfect: 'max 2 %',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'noxot',
      img: noxot,
      size: '180-220 pieces in 100 grams',
      color: 'red speckled',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'beans',
      img: beans,
      size: '180-220 pieces in 100 grams',
      color: 'red speckled',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'lovia',
      img: lovia,
      size: '180-220 pieces in 100 grams',
      color: 'red speckled',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    },
    {
      title: 'mosh',
      img: mosh,
      size: '180-220 pieces in 100 grams',
      color: 'red speckled',
      purity: '97% - 99% Min',
      moisture: 'max 14%',
      admixtures: 'max 1%',
      imperfect: 'max 2%',
      package: '25-50 kg PP bags according to buyers requirement'
    }
  ]

  console.log(data[0].img)
  const { t } = useTranslation()

  return (
    <div className='px-4 sm:px-8 lg:px-20 py-16 flex flex-col h-full w-full justify-between white_Bg_Products'>
      <div className='w-full flex items-center justify-center'>
        <div className='text-green-600 text-3xl sm:text-5xl lg:text-6xl font-bold text-center leading-snug'>
          {t('txt_mung')}
        </div>
      </div>

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
        {data.map((e, idx) => (
          <OneProductCard
            key={idx}
            img={e.img}
            title={e.title}
            size={e.size}
            color={e.color}
            purity={e.purity}
            moisture={e.moisture}
            admixtures={e.admixtures}
            imperfect={e.imperfect}
            packageCard={e.package}
          />
        ))}
        {/* <OneProductCard img={logoBlack} />
        <OneProductCard img={logo} />
        <OneProductCard img={logo} />
        <OneProductCard img={logoBlack} />
        <OneProductCard img={logo} />
        <OneProductCard img={logo} />
        <OneProductCard img={logoBlack} />
        <OneProductCard img={logo} /> */}
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-center w-full pt-16 text-black space-y-4 sm:space-y-0'>
        <div className='w-full sm:w-1/4 flex justify-center sm:justify-start'>
          <Image
            className='w-auto h-8 sm:h-10 lg:h-12'
            src={logoBlack}
            alt='logo'
          />
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center w-full sm:w-3/4 space-y-4 sm:space-y-0 sm:pl-8'>
          <div className='flex gap-2 items-center text-sm sm:text-lg lg:text-2xl'>
            <FaPhone className='text-green-500' />
            <FaTelegram className='text-green-500' />
            +998(95)-089-99-44
          </div>
          <div className='flex gap-2 items-center text-sm sm:text-lg lg:text-2xl'>
            <FaInstagram className='text-green-500' />
            uzbeans
          </div>
          <div className='flex gap-2 items-center text-sm sm:text-lg lg:text-2xl'>
            <FaGlobe className='text-green-500' />
            www.uzbeans.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
