import React from 'react'
import initTranslations from '@/i18n'
import TranslationProvider from '@/providers/translate.provider'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const i18nNamespaces = ['translation']

const Layout = async ({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) => {
  // Fetch translations based on the locale
  const { locale } = await params
  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <>
      <TranslationProvider
        locale={locale}
        resources={resources}
        namespaces={i18nNamespaces}
      >
        {children}
      </TranslationProvider>
    </>
  )
}

export default Layout

// export const getServerSideProps = async ({ locales }: any) => ({
//   props: {
//     ...(await serverSideTranslations(locales, ['common']))
//   }
// })
