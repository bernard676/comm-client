import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function Meta(props) {
  const router = useRouter();

  return (
    <>
      
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: props.locale,
          site_name: props.site_name,
        }}
      />
    </>
  );
};