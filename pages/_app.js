import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HabboBR • O gigante está de volta!</title>
        <link rel="stylesheet" href="css/app.css" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}