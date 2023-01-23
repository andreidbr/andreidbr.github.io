import { ComponentType, Fragment } from 'react';
import dynamic from 'next/dynamic';

import Meta from '@modules/shared/components/Meta';

import { ArticleProps, HomeProps, WorkProps } from '../home';

const DynamicHero: ComponentType = dynamic(() => import('@modules/home/components/HeroSection'));
const DynamicArticle: ComponentType<ArticleProps> = dynamic(
  () => import('@modules/home/components/ArticleSection'),
);
const DynamicWork: ComponentType<WorkProps> = dynamic(
  () => import('@modules/home/components/WorkSection'),
);

const HomePage = ({ blogPosts, works }: HomeProps) => {
  return (
    <Fragment>
      <Meta
        title="Andrei Dobra"
        description="A Test Automation Developer who remains curious and eager to help others learn and develop their skills."
      />

      <DynamicHero />
      <DynamicWork works={works} />
      <DynamicArticle blogPosts={blogPosts} />
    </Fragment>
  );
};

export default HomePage;
