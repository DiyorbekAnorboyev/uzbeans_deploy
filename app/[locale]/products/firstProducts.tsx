// import Image from 'next/image';
// import React from 'react';
// import logo from '../../../public/logoWhite.png';
// import { FaGlobe, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
// import { LiaTelegramPlane } from 'react-icons/lia'

// const FirstProductPage = () => {
//   return (
//     <div className="px-4 sm:px-10 lg:px-20 py-16 flex flex-col min-h-screen justify-between products_bg">
//       {/* Logo Section */}
//       <div className="w-full flex items-center justify-center">
//         <Image className="h-16 sm:h-20 w-auto" src={logo} alt="logo" />
//       </div>

//       {/* Title */}
//       <div className="text-4xl sm:text-6xl text-center w-full font-bold">
//         CATALOGUE OF OUR PRODUCTS
//       </div>

//       {/* Contact Information */}
//       <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 px-4 sm:px-10">
//         <div className="flex gap-2 items-center text-lg sm:text-2xl">
//           <FaPhone /> <LiaTelegramPlane /> +998(95)-089-99-44
//         </div>
//         <div className="flex gap-2 items-center text-lg sm:text-2xl">
//           <FaInstagram /> uzbeans
//         </div>
//         <div className="flex gap-2 items-center text-lg sm:text-2xl">
//           <FaGlobe /> www.uzbeans.com
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstProductPage;

'use client'
import Image from 'next/image'
import React from 'react'
// import logo from '../../../public/logoWhite.png'
// import { FaGlobe, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
// import { LiaTelegramPlane } from 'react-icons/lia'

import LogoNav from '../../../public/logoWhite.png'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { BsTelephone } from 'react-icons/bs'
import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { IoMenu } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { usePathname, useRouter } from 'next/navigation'

const FirstProductPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLanguageChange = React.useCallback(
    async (newLocale: string) => {
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toUTCString()};path=/`

      const newPathname = currentPathname.replace(
        `/${currentLocale}`,
        `/${newLocale}`
      )
      console.log(i18n.language)

      await i18n.changeLanguage(newLocale)
      router.replace(newPathname)
      router.refresh()
    },
    [currentLocale, currentPathname, router, i18n]
  )

  const { t } = useTranslation()

  return (
    <div className='flex w-full items-center py-7 justify-between px-6 sm:px-12 lg:px-24 bg-green-600 text-white'>
      <div className='flex-shrink-0'>
        <Link className=' hover:cursor-pointer' href='/'>
          <Image
            onClick={() => toTop()}
            className='w-auto h-8 sm:h-12 hover:cursor-pointer'
            src={LogoNav}
            alt='Logo'
          />
        </Link>
      </div>
      <div className='hidden w-full sm:ml-10 sm:flex space-x-4 text-xl md:flex justify-between items-center px-10'>
        <div className='hover:cursor-pointer'>{t('main')}</div>
        <div className='hover:cursor-pointer'>{t('about')}</div>
        <div className='hover:cursor-pointer'>
          <Link className=' hover:cursor-pointer' href='/products'>
            {t('catalog')}
          </Link>
        </div>
        <div className='flex gap-1 text-lg items-center hover:cursor-pointer'>
          <BsTelephone size={19} className='hover:cursor-pointer' />{' '}
          +998(95)-089-99-44{' '}
        </div>
        <div className='flex gap-1 text-lg items-center hover:cursor-pointer'>
          <MessageCircle size={19} className='hover:cursor-pointer' />
          albois200@mail.ru{' '}
        </div>
      </div>
      <div className='flex gap-1'>
        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className='w-16 max-sm:text-sm'
              onClick={() => setIsOpen(!isOpen)}
            >
              RU / EN
            </button>
          </DropdownMenuTrigger>
          {isOpen && ( // Show dropdown content if menu is open
            <DropdownMenuContent className='w-auto bg-green-500'>
              <div className='flex flex-col space-y-4 text-xl'>
                <DropdownMenuCheckboxItem
                  onClick={() => handleLanguageChange('ru')}
                  className='px-4 py-1 hover:cursor-pointer'
                >
                  RUS
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  onClick={() => handleLanguageChange('en')}
                  className='px-4 py-1 hover:cursor-pointer'
                >
                  ENG
                </DropdownMenuCheckboxItem>
              </div>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
        {/* menu */}
        <div className='sm:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IoMenu
                color='white'
                size={36}
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              />
            </DropdownMenuTrigger>
            {isOpenMenu && ( // Show dropdown content if menu is open
              <DropdownMenuContent className='w-auto bg-green-500'>
                <div className='flex flex-col space-y-4'>
                  <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                    {t('main')}
                  </div>
                  <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                    {t('about')}
                  </div>
                  <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                    <Link className=' hover:cursor-pointer' href='/products'>
                      {t('catalog')}
                    </Link>
                  </div>
                  <div className='flex gap-1 w-full px-2 items-center hover:cursor-pointer'>
                    +998(95)-089-99-44{' '}
                    <AiOutlinePhone
                      size={18}
                      className='hover:cursor-pointer'
                    />{' '}
                  </div>
                  <div className='flex gap-1 items-center sm:hidden px-4 py-2 hover:cursor-pointer'>
                    albois200@mail.ru{' '}
                    <MessageCircle size={22} className='hover:cursor-pointer' />
                  </div>
                </div>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default FirstProductPage
