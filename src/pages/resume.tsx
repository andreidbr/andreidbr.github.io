import { type Resume, allResumes } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

import Meta from '@modules/shared/components/Meta';
import { Section } from '@modules/shared/components/Section';
import robotoS from '@modules/shared/utils/font';

type ResumePropps = {
  resumeContent: Resume;
};

const ResumePage = ({ resumeContent }: ResumePropps) => {
  const Component = useMDXComponent(resumeContent.body.code);
  return (
    <>
      <Meta title="Resume" description="A look at my professional journey" />

      <div className="py-12 text-center">
        <h2
          className={`${robotoS.className} text-5xl font-black text-earth-2 md:text-6xl lg:text-7xl`}
        >
          Resume
        </h2>
        <p className="mt-4 text-sm font-medium text-earth-1 md:text-base lg:text-lg">
          🦸‍♂️ A look at my professional journey
        </p>
      </div>

      <Section className="pb-12">
        <div className="flex justify-center space-x-4 px-4">
          <div className="mt-16 w-full lg:max-w-screen-lg">
            <div className="rounded-xl border-4 border-earth-1 bg-bg-1 font-medium text-earth-2">
              <div className="flex gap-2 rounded-t-lg border-b-4 border-earth-1 bg-bg-4 px-4 py-2">
                <Link href="/blog">
                  <div className="h-4 w-4 rounded-full bg-red-500 " />
                </Link>
                <div className="h-4 w-4 rounded-full bg-orange-300 " />
                <div className="h-4 w-4 rounded-full bg-green-400 " />
              </div>

              <article>
                <div className="px-6 py-8 md:px-12">
                  <div className="post-wrapper relative mt-8">
                    <Component />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resumeContent: Resume = allResumes[0];

  return {
    props: {
      resumeContent,
    },
  };
};

export default ResumePage;
