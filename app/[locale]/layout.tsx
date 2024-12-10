import React from 'react'
import initTranslations from '@/i18n'
import TranslationProvider from '@/providers/translate.provider'

const i18nNamespaces = ['translation']

const Layout = async ({
  params,
  children
}: {
  params: { locale: string }
  children: React.ReactNode
}) => {
  const { locale } = params  // No need to await params

  // Fetch translations based on the locale
  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {children}
    </TranslationProvider>
  )
}

export default Layout
