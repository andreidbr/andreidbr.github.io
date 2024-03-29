import FeaturedPostCard from '@modules/shared/components/FeaturedPostCard';
import Meta from '@modules/shared/components/Meta';
import { Section } from '@modules/shared/components/Section';
import { BlogExtended } from '@modules/shared/type';
import robotoS from '@modules/shared/utils/font';

type Props = {
  blogPosts: BlogExtended[];
};

const BlogPage = ({ blogPosts }: Props) => {
  return (
    <>
      <Meta
        title="Blog"
        description="'My thoughts and experiences on automation and much more'"
        keywords="andrei dobra blog, testing, automation, qa, automated"
      />
      <Section>
        <div className="py-12 text-center">
          <h2
            className={`${robotoS.className} text-5xl font-black text-earth-2 md:text-6xl lg:text-7xl`}
          >
            My Articles
          </h2>
          <p className="mt-4 text-sm font-medium text-earth-1 md:text-base lg:text-lg">
            My thoughts and experiences on automation and much more.
          </p>
        </div>

        <div className="grid gap-6 px-4 pb-12 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post._id}>
              <FeaturedPostCard post={post} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default BlogPage;
