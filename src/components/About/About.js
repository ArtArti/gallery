import React from 'react';
import { useTranslation } from 'react-i18next';


export default function About() {
  const { t , i18n} = useTranslation('');

console.log('Current language:', i18n.language);
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://pixabay.com/illustrations/watercolor-portrait-character-girl-1020509/"
              alt="alternatepic"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-gray-600">`{t('about.paragraph1')}`</p>
            <p className="mt-4 text-gray-600">{t('about.paragraph2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
