import Meta from '@modules/shared/components/Meta';
import { Section } from '@modules/shared/components/Section';
import WorkCard from '@modules/shared/components/WorkCard';
import { WorkType } from '@modules/shared/type';
import eczar from '@modules/shared/utils/font';

type Props = {
  works: WorkType[];
};

const WorkPage = ({ works }: Props) => {
  return (
    <>
      <Meta
        title="My Work"
        description="'Projects, courses, videos and some stuff I've made.'"
        keywords="andrei dobra, testing, automation, qa, automated, java, selenium, rest assured, back-end, front-end, API, blog, test, architect, andrei dobra portfolio"
      />
      <Section>
        <div className="py-12 text-center">
          <h2
            className={`${eczar.className} text-5xl font-black text-earth-2 md:text-6xl lg:text-7xl`}
          >
            MY WORK
          </h2>
          <p className="mt-4 text-sm font-medium text-earth-1 md:text-base lg:text-lg">
            Projects, courses, videos and some stuff {"I've"} made.
          </p>
        </div>

        <div className="flex flex-col space-y-6 py-11">
          {works.slice(0, 4).map((file, index) => (
            <div key={String(index)}>
              <WorkCard file={file} key={String(index)} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default WorkPage;
