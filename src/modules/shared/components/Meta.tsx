import Head from 'next/head';

type MetaProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string;
};

const Meta = ({
  title = 'Andrei Dobra personal website',
  description,
  url = 'https://andreidobra.com/',
  image = 'https://avatars.githubusercontent.com/u/12015956?v=4',
  keywords = 'andrei dobra, testing, qa, automation, sdet, blog',
}: MetaProps) => {
  const titleExtended = `${title} | andreidobra.com`;

  return (
    <Head>
      <title>{titleExtended}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="p:domain_verify" content="1c45cd484910f8887fdf4c4fe4332510" />

      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Andrei Dobra" />
    </Head>
  );
};

export default Meta;
