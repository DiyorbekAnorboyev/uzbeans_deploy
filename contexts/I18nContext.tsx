// contexts/I18nContext.tsx
import { createContext, ReactNode, useContext, useState } from 'react';

// Define the types for your context's value.
interface I18nContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

// Create the context with a default value (use `undefined` if no default value)
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Define a provider component that will manage the context's state
interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<string>('en'); // default language is 'en'

  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

// Custom hook to use the I18n context in any component
export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
