'use client'
import Image from 'next/image'
import backgroundImg from '../public/mosh.jpg'
import LogoNav from '../public/logoBgWhite.jpg'
import LogoNav1 from '../public/logoLast.png'
import traktorImg from '../public/traktor.jpg'
import beansImg from '../public/beansImg.png'
import downloadIcon from '../public/downloadIcon.png'
import noxot from '../public/noxot.jpg'
import yangoq from '../public/yangoq.jpg'
import mosh1 from '../public/mosh1.jpg'
import lovia from '../public/lovia.png'
import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import 'leaflet/dist/leaflet.css'
import './globals.css'
// import Carousel from 'react-bootstrap/Carousel';

import caMosh from '../public/mosh.png'
import caLovia from '../public/slaydLovia.png'
import caYongoq from '../public/slaydYongoq.png'
import caNoxot from '../public/slaydNoxot.png'
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
import { FaTelegram, FaVectorSquare } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { GoMoveToTop } from 'react-icons/go'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
// import i18n from '../lib/i18n'
import Link from 'next/link'
import 'aos/dist/aos.css' // Import AOS CSS globally

import AOS from 'aos'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function Home () {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const center: number[] = [41.3140616, 69.2952844]
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenMenu, setIsOpenMenu] = React.useState(false)

  const handleLanguageChange = (lang: string) => {
    console.log(lang)
    // Change language dynamically
  }

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

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  React.useEffect(() => {
    AOS.init({ duration: 1000 }) // Initialize AOS (duration can be customized)
  }, [])

  return (
    <div className=''>
      <div className='fixed bottom-10 right-8 z-10'>
        <div
          onClick={() => toTop()}
          className='p-2 bg-green-900 bg-opacity-50 rounded-full'
        >
          <GoMoveToTop className='h-12 w-12 hover:cursor-pointer max-sm:h-10 max-sm:w-10' />
        </div>
      </div>
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
            <div className='flex w-full items-center pt-3 justify-between px-6 sm:px-12 lg:px-24 text-white'>
              <div className='flex-shrink-0'>
                <Image
                  onClick={() => toTop()}
                  className='w-auto h-10 sm:h-16 hover:cursor-pointer'
                  src={LogoNav}
                  alt='Logo'
                />
              </div>
              <div className='hidden w-full sm:flex space-x-4 md:flex justify-between items-center px-10'>
                <div className='hover:cursor-pointer'>Главная</div>
                <div className='hover:cursor-pointer'>О нас</div>
                <div className='hover:cursor-pointer'>Каталог</div>
                <div className='hover:cursor-pointer'>+998(95)-089-99-44</div>
                <div className='hover:cursor-pointer'>albois200@mail.ru</div>
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
                            Главная
                          </div>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            О нас
                          </div>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            Каталог
                          </div>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            +998(95)-089-99-44
                          </div>
                          <div className='sm:hidden px-4 py-2 hover:cursor-pointer'>
                            albois200@mail.ru
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
              <div className='md:pl-10 text-center md:text-left'>
                <p className='text-2xl sm:text-3xl font-bold'>Зеленая фасоль</p>
                <span className='font-bold text-sm sm:text-base'>
                  Мы поставляем высококачественные и чистые бобовые продукты{' '}
                </span>
              </div>
              <div className='mt-6 md:mt-0 flex items-center rounded bg-opacity-10'>
                <div className='flex items-center gap-4 px-4 py-2 rounded-full bg-white bg-opacity-40 sm:rounded-l-full'>
                  <div className='rounded-full bg-green-800 bg-opacity-90 p-2'>
                    <Image
                      src={downloadIcon}
                      className='h-5 w-5'
                      alt='download'
                    />
                  </div>
                  <div className='text-sm sm:text-base'>Скачать каталог</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div className='flex flex-col px-6 sm:px-10 md:px-20 about-bg'>
        {/* Title Section */}
        <div className='text-center text-3xl sm:text-4xl md:text-6xl mt-10 md:mt-20 w-full'>
          <span>Агропредприятие Uzbeans</span>
        </div>

        {/* Content Section */}
        <div className='flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-20 pb-20'>
          {/* Left Column */}
          <div className='w-full'>
            <p className='text-2xl sm:text-4xl md:text-5xl'>О Uzbeans</p>
            <p className='mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl'>
              <span className='font-bold'>Добро пожаловать в Uzbeans</span> —{' '}
              молодая и амбициозная компания, основанная в 2024 году в городе
              Чуст, Наманганская область, Узбекистан. Мы специализируемся на
              переработке, очистке и
              <br />
              <span className='font-bold'>
                упаковке высококачественных бобовых и сельскохозяйственных
                продуктов
              </span>
              , создавая продукты, которые сочетают в себе натуральность и
              свежесть, ценящиеся на мировом рынке.
            </p>
            <div className='mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl'>
              <p>
                <span className='font-bold'>Наш секрет успеха</span> — это
                сочетание передовых технологий и глубокого понимания
                потребностей наших клиентов. Мы выбираем лучшие бобовые культуры
                со всех уголков Узбекистана, чтобы предложить вам продукты,
                соответствующие самым высоким международным стандартам качества.
                Благодаря многократному контролю на каждом этапе производства,
                Uzbeans гарантирует чистоту, безопасность и сохранение всех
                полезных свойств продуктов.
              </p>
            </div>
            <div data-aos='fade-down' className='mt-6 sm:mt-10'>
              <Image
                className='w-full bg-cover h-screen max-sm:h-96'
                src={traktorImg}
                alt='Tractor'
              />
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full'>
            <div data-aos='flip-up'>
              <Image className='w-full' src={beansImg} alt='Beans' />
            </div>
            <div>
              <p className='mt-10 sm:mt-20 text-base sm:text-xl md:text-2xl'>
                Мы гордимся тем, что создаем устойчивые и взаимовыгодные
                партнерства с нашими клиентами и поставщиками. Наша цель не
                только поставлять продукты, но и строить долгосрочные отношения,
                основанные на доверии и качестве. <br />
                Мы стремимся выходить на новые рынки и расширять географию
                поставок, чтобы сделать узбекские продукты известными и
                востребованными в мире.{' '}
              </p>
            </div>
            <div className='mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl font-bold '>
              Uzbeans — ваш надежный партнер в мире высококачественных и
              экологически чистых сельскохозяйственных продуктов, которым можно
              доверять.{' '}
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className='bg_products'>
        <div className='relative min-h-screen'>
          {/* Title */}
          <div>
            <p
              data-aos='zoom-in'
              className='text-2xl sm:text-3xl md:text-4xl text-center w-full bg-green-900 text-white p-2'
            >
              Наши продукты{' '}
            </p>
          </div>

          {/* Product Grid */}
          <div className='mt-32 sm:mt-40 px-6 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
            {/* Card 1: Takes 2 columns on larger screens */}
            <div
              data-aos='fade-right'
              className='lg:col-span-2 bg-slate-400 relative shadow-lg overflow-hidden h-56 sm:h-64'
            >
              <Image
                className='w-full h-full object-cover'
                src={mosh1}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>
                  Зеленая чечевица (Маш)
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos='fade-left'
              className='bg-slate-600 relative shadow-lg overflow-hidden h-56 sm:h-64'
            >
              <Image
                className='w-full h-full object-cover'
                src={lovia}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>
                  Красная фасоль
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-slate-400 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                className='w-full h-full object-cover'
                src={yangoq}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>Арахис</p>
              </div>
            </div>

            {/* Card 4: Takes 2 columns on larger screens */}
            <div className='lg:col-span-2 bg-slate-600 relative shadow-lg overflow-hidden h-56 sm:h-64'>
              <Image
                className='w-full h-full object-cover'
                src={noxot}
                alt='beans'
              />
              <div className='absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start'>
                <p className='text-white text-lg font-bold px-4 py-2'>Нут</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className='bg-white h-40 w-full flex justify-center items-center'>
          <Link
            className='bg-green-600 hover:cursor-pointer rounded-full text-lg sm:text-xl md:text-2xl p-3 px-5'
            href='/products'
          >
            {' '}
            Больше продуктов
          </Link>
        </div>
      </div>

      {/* Navigation Map */}
      <div>
        <div className='h-screen'>
          <div className='px-6 md:px-20 h-1/2 bg-white'>
            <div>
              <p className=' text-3xl md:text-4xl text-green-900 font-bold text-center md:text-left'>
                Наше местоположение
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

          <div className='h-1/2 w-full bg-green-400'></div>

          <div className='w-full px-6 md:px-20 pt-10 contact-card'>
            <h3 className='font-bold text-2xl md:text-3xl'>Контакты</h3>
            <div className='text-lg md:text-xl'>
              <div className='flex flex-col md:flex-row mt-5 justify-between items-center'>
                <p className='flex gap-3 text-sm md:text-base'>
                  +998(95)-089-99-44{' '}
                  <BsTelephone size={22} className='hover:cursor-pointer' />
                </p>
                <p className='flex gap-3 mt-3 md:mt-0 text-sm md:text-base'>
                  <Map size={22} className='hover:cursor-pointer' /> Узбекистан,
                  Наманганская область <br />
                </p>
              </div>

              <div className='flex flex-col md:flex-row justify-between items-center'>
                <p className='flex gap-3 text-sm md:text-base'>
                  albois2000@mail.ru{' '}
                  <MessageCircle size={22} className='hover:cursor-pointer' />
                </p>
                <p className='text-sm md:text-base'>
                  {' '}
                  Город Чуст, улица Истиклол, №21 <br />
                </p>
              </div>
            </div>
            <h4 className='font-bold mt-5 text-2xl md:text-3xl'>
              {' '}
              Мы в социальных сетях
            </h4>
            <div className='flex justify-center md:justify-start py-5 gap-4 items-center'>
              <InstagramIcon size={26} className='hover:cursor-pointer' />{' '}
              <FaTelegram size={26} className='hover:cursor-pointer' />{' '}
              <MessageCircle className='hover:cursor-pointer' size={26} />{' '}
              <YoutubeIcon className='hover:cursor-pointer' size={26} />
              <p className='text-xl md:text-3xl'>uzbeans</p>
            </div>
          </div>

          <div className='flex justify-between items-center px-8 md:px-20 bg-white py-4'>
            <div className='w-32 md:w-40'>
              <Image
                onClick={() => toTop()}
                className='h-10 hover:cursor-pointer w-auto md:h-16'
                src={LogoNav1}
                alt='logo'
              />
            </div>
            <div className='text-sm md:text-base text-black text-center md:text-left'>
              Агропредприятие Uzbeans. Все права защищены.
            </div>
          </div>
        </div>
      </div>

      <div> </div>
      <div></div>
    </div>
  )
}
