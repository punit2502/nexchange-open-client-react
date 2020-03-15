import React from 'react';
import { Helmet } from 'react-helmet';
import i18n from 'i18next';
import { useLocation } from 'react-router';
import config from 'Config';

const SEO = ({ title, description, ogTitle, ogDescription, twitterTitle, twitterDescription, fullTitle }) => {
  const { pathname } = useLocation();

  // en is not included in this list because it is the default language
  const languages = ['ru', 'de'];

  const canonicalTags = languages.map(lang => {
    const path = pathname.slice('3'); // length of '/en' is 3 characters
    return {
      rel: 'alternate',
      href: `${config.DOMAIN}/${lang}${path}`,
    };
  });

  return (
    <Helmet
      htmlAttributes={{
        lang: i18n.language,
      }}
      title={title}
      //  Comment: There can be some pages where title template is not
      //  required (for example homepage), in that case we add fullTitle props to SEO component
      titleTemplate={fullTitle ? title : `%s | n.exchange`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: ogTitle || title,
        },
        {
          property: 'og:description',
          content: ogDescription || description,
        },
        {
          name: 'twitter:title',
          content: twitterTitle || title,
        },
        {
          name: 'twitter:description',
          content: twitterDescription || description,
        },
      ]}
      link={[
        {
          rel: 'canonical',
          href: `${config.DOMAIN}/en/${pathname.slice(3)}`,
        },
      ].concat(canonicalTags)}
    />
  );
};

export default SEO;
