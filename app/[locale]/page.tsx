'use client'
import Image from 'next/image'
import backgroundImg from '../../public/mosh.jpg'
import LogoNav from '../../public/logoWhite.png'
import LogoNav1 from '../../public/logoLast.png'
import traktorImg from '../../public/traktor.jpg'
import beansImg from '../../public/new-beans.png'
import downloadIcon from '../../public/downloadIcon.png'
import noxot from '../../public/noxot.jpg'
import yangoq from '../../public/yangoq.jpg'
import mosh1 from '../../public/mosh1.jpg'
import lovia from '../../public/lovia.png'
import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import 'leaflet/dist/leaflet.css'
import '../globals.css'
// import Carousel from 'react-bootstrap/Carousel';

import caMosh from '../../public/mosh.png'
import caLovia from '../../public/slaydLovia.png'
import caYongoq from '../../public/slaydYongoq.png'
import caNoxot from '../../public/slaydNoxot.png'
// import { cn } from "shadcn/ui";
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IoMenu } from 'react-icons/io5'
import { InstagramIcon, Map, MessageCircle, YoutubeIcon } from 'lucide-react'
import { CiLocationOn } from 'react-icons/ci'
import { LiaTelegramPlane } from 'react-icons/lia'

import { BsTelephone } from 'react-icons/bs'
import { GoMoveToTop } from 'react-icons/go'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
// import i18n from '../lib/i18n'
import Link from 'next/link'
import 'aos/dist/aos.css' // Import AOS CSS globally

import AOS from 'aos'
import { useTranslation } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'
import { FaPhone } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function Home () {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const center: number[] = [41.3140616, 69.2952844]
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

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

  const [displaySize, setDisplaySize] = React.useState(0)

  // Update displaySize when the window is resized
  React.useEffect(() => {
    // Function to handle window resizing
    const handleResize = () => {
      setDisplaySize(window.innerWidth)
    }

    // Add event listener when component mounts
    window.addEventListener('resize', handleResize)

    // Call the handler initially to set the size
    handleResize()

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  React.useEffect(() => {
    AOS.init({ duration: 1000 }) // Initialize AOS (duration can be customized)
  }, [])
  const { t } = useTranslation()

  const openPdf = () => {
    // Replace the URL below with the actual URL of your PDF file
    const pdfUrl = '/website.pdf'
    window.open(pdfUrl, '_blank') // Opens the PDF in a new tab
  }

  return (
    <div className='text-white'>
      {isVisible && (
        <div className='fixed bottom-10 right-8 z-10'>
          <div
            onClick={toTop}
            className='p-2 bg-green-900 bg-opacity-50 rounded-full'
          >
            <GoMoveToTop className='h-12 w-12 hover:cursor-pointer max-sm:h-10 max-sm:w-10' />
          </div>
        </div>
      )}
      {/* main */}
      <div className='w-full'>
        <div className='relative w-full h-[100vh] overflow-hidden'>
          {/* Carousel Background */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className='absolute top-0 left-0 w-full h-full'
          >
            <div className='w-full h-[100vh]'>
              <Image
                src={caMosh}
                alt='Mosh'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-[100vh]'>
              <Image
                src={caYongoq}
                alt='Yongoq'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-[100vh]'>
              <Image
                src={caLovia}
                alt='Lovia'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-[100vh]'>
              <Image
                src={caNoxot}
                alt='Noxot'
                className='w-full h-full object-cover'
              />
            </div>
          </Carousel>

          {/* Foreground Content */}
          <div className='relative flex flex-col justify-between h-screen pb-10 z-10'>
            {/* Navigation */}
            <div className='flex w-full items-center pt-8 justify-between px-6 sm:px-12 lg:px-24 text-white'>
              <div className='flex-shrink-0'>
                <Image
                  onClick={() => toTop()}
                  className='w-auto h-8 sm:h-12 hover:cursor-pointer'
                  src={LogoNav}
                  alt='Logo'
                />
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
                            <Link
                              className=' hover:cursor-pointer'
                              href='/products'
                            >
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
                            <MessageCircle
                              size={22}
                              className='hover:cursor-pointer'
                            />
                          </div>
                        </div>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenu>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col text-white md:flex-row justify-between items-center px-6 sm:px-10 md:px-20 mt-12'>
              <div className='text-center md:text-left'>
                <p className='text-2xl sm:text-4xl font-bold'>
                  {t('main_bob')}
                </p>
                <span className='font-semibold text-sm sm:text-base'>
                  {t('about_mi')}
                </span>
              </div>
              <div className='mt-6 md:mt-0 flex items-center rounded bg-opacity-10'>
                <div
                  onClick={openPdf}
                  className='flex items-center sm:w-96 sm:-mx-60 gap-4 px-2 py-2 rounded-full bg-white bg-opacity-40 sm:rounded-l-full'
                >
                  <div className='rounded-full bg-green-800 bg-opacity-90 p-4'>
                    <Image
                      src={downloadIcon}
                      className='h-5 w-5'
                      alt='download'
                    />
                  </div>
                  <div className='text-sm sm:text-2xl font-semibold'>
                    {t('download_catalog')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className='flex flex-col px-6 sm:px-10 md:px-16 about-bg'>
        {/* Title Section */}
        <div className='text-center text-3xl sm:text-4xl md:text-6xl mt-10 md:mt-20 w-full'>
          <span>{t('title')}</span>
        </div>

        {/* Content Section */}
        <div className='flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-20 pb-10'>
          {/* Left Column */}
          <div className='w-full sm:relative'>
            <p className='text-2xl sm:text-4xl md:text-5xl'>{t('about_cm')}</p>
            <p className='mt-6 sm:mt-10 text-base sm:text-xl md:text-xl'>
              <span className='font-bold'>{t('welcome_cm')}</span> —{' '}
              {t('txt_moldu')}
              <br />
              <span className='font-bold'>{t('txt_upakov')}</span>
              {t('txt_cozdat')}
            </p>
            <div className='mt-6 sm:mt-10 text-base sm:text-xl md:text-xl'>
              <p>
                <span className='font-bold'>{t('txt_uspexa')}</span> —{' '}
                {t('txt_sochet')}
              </p>
            </div>
            <div className='w-full sm:mt-10'>
              <Image
                data-aos='fade-down'
                className='w-full sm:absolute sm:-bottom-24 bg-cover h-1/2 h-25rem'
                src={traktorImg}
                alt='Tractor'
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full'>
            <div>
              <Image
                data-aos='flip-up'
                className='w-full'
                src={beansImg}
                alt='Beans'
              />
            </div>
            <div>
              <p className='mt-10 sm:mt-20 text-base sm:text-xl md:text-xl'>
                {t('txt_gordim')} <br /> {t('txt_strem')}{' '}
              </p>
            </div>
            <div className='mt-6 sm:mt-10 text-base sm:text-xl md:text-xl font-bold '>
              {t('txt_uzbeans')}{' '}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className='bg_products'>
        <div className='relative min-h-screen'>
          {/* Title */}
          <div className='pt-40'>
            <p
              // data-aos='zoom-in'
              className='text-2xl sm:text-3xl md:text-4xl text-center w-full bg-green-900 text-white p-2'
            >
              {t('txt_products')}{' '}
            </p>
          </div>

          {/* Product Grid */}
          <div className='mt-32 sm:mt-14 px-6 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full'>
            {/* Card 1: Takes 2 columns on larger screens */}
            <div className='lg:col-span-3 bg-slate-400 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                data-aos='fade-right'
                className='w-full h-full object-cover'
                src={mosh1}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>
                  {t('txt_nohot')}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-slate-600 lg:col-span-2 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                data-aos='fade-left'
                className='w-full h-full object-cover'
                src={lovia}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>
                  {t('txt_lovia')}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='lg:col-span-2 bg-slate-400  relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                className='w-full h-full object-cover'
                src={yangoq}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>
                  {t('txt_yongoq')}
                </p>
              </div>
            </div>

            {/* Card 4: Takes 2 columns on larger screens */}
            <div className='lg:col-span-3 bg-slate-600 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                className='w-full h-full object-cover'
                src={noxot}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>
                  {t('txt_yong')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className=' h-40 w-full flex justify-center items-center'>
          <Link
            className='bg-green-600 hover:cursor-pointer rounded-full text-lg sm:text-lg md:text-1xl p-3 px-5'
            href='/products'
          >
            {t('products')}
          </Link>
        </div>
      </div>

      {/* Navigation Map */}
      <div>
        <div className='h-screen'>
          <div className=' h-1/2 bg-white'>  {/* //px-6 md:px-20 */}
            <div>
              <p className=' text-3xl md:text-4xl text-green-900 font-bold text-center md:text-left'>
                {t('location')}{' '}
              </p>
            </div>
            <div className='w-full'>
              <div className='mt-10 bg-white'>
                {/* map */}
                <div>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.599218274142!2d71.23881005105166!3d40.99895597907338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca24dcda79d3b%3A0x1cb1032f9601216!2z0KHRgtGA0LDRgNC40LnQstC10YHRgtCy0L7QvNC40YbQsCDQnNCw0LnRgdC60LDRjywg0JzQsNC50YHQutCw0Y8gMjEg0JAsINCc0LDRgdC60LDRjywg0KLQtdC70YzQvdC40LrQsA!5e0!3m2!1sru!2s!4v1691752214000!5m2!1sru!2s'
                    width='100%'
                    height='500'
                    style={{ border: 'none' }}
                    allowFullScreen={true}
                    loading='lazy'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-green-50-50 '>
            <div className='h-1/2 w-full '></div>

            <div className='w-full px-6 md:px-20 py-4 sm:py-0 sm:pt-10 bg-black/50 contact-card'>
              <h3 className='font-bold text-2xl md:text-3xl'>
                {t('txt_contacts')}
              </h3>
              <div className='text-lg md:text-xl'>
                <div className='flex flex-col md:flex-row sm:mt-5 justify-between items-center'>
                  <p className='flex gap-3 text-sm md:text-base'>
                    +998(95)-089-99-44{' '}
                    <CiLocationOn size={24} className='hover:cursor-pointer' />{' '}
                    <BsTelephone size={22} className='hover:cursor-pointer' />
                  </p>
                  <p className='flex gap-3 mt-3 md:mt-0 text-sm md:text-base'>
                    <CiLocationOn size={24} className='hover:cursor-pointer' />{' '}
                    {t('loc_main')} <br />
                  </p>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center'>
                  <p className='flex gap-3 text-sm md:text-base'>
                    albois2000@mail.ru{' '}
                    <MessageCircle size={22} className='hover:cursor-pointer' />
                  </p>
                  <p className='text-sm md:text-base'>
                    {t('loc_second')} <br />
                  </p>
                </div>
              </div>
              <h4 className='font-bold mt-5 text-2xl md:text-3xl'>
                {t('txt_sotvi')}
              </h4>
              <div className='flex justify-center md:justify-start py-2 sm:py-5 gap-4 items-center'>
                <InstagramIcon size={26} className='hover:cursor-pointer' />{' '}
                <LiaTelegramPlane size={26} className='hover:cursor-pointer' />{' '}
                <MessageCircle className='hover:cursor-pointer' size={26} />{' '}
                <YoutubeIcon className='hover:cursor-pointer' size={26} />
                <p className='text-xl md:text-3xl'>uzbeans</p>
              </div>
            </div>

            <div className='flex justify-between items-center px-8 md:px-20 bg-white py-4'>
              <div className='w-full md:w-40'>
                <Image
                  onClick={() => toTop()}
                  className='h-7 hover:cursor-pointer w-auto md:h-10'
                  src={LogoNav1}
                  alt='logo'
                />
              </div>
              <div className='text-sm md:text-base text-green-700 text-center md:text-left'>
                {t('txt_footer')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div> </div>
      <div></div>
    </div>
  )
}
