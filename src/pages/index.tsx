import { Meta } from '../layout/Meta';
import { Main } from '../main';
import PostCard from '../main/PostCard';

const POSTS_SAMPLE: IPost[] = [
  {
    topic: 'technology',
    title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
  porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
  dui porta volutpat. In sit amet posuere magna..`,
    author: 'David Grzyb',
    publishedOn: 'April 25th, 2020',
    img: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1',
    link: '/about',
  },
  {
    topic: 'Sports',
    title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: 'David Grzyb',
    publishedOn: 'April 25th, 2020',
    img: 'https://source.unsplash.com/collection/1346951/1000x500?sig=2',
    link: '/about',
  },
];

const Index = () => {
  return (
    <Main
      meta={<Meta title="The Nueye" description="is a digital publication." />}
      topics={[
        'Technology',
        'Automotive',
        'Finance',
        'Politics',
        'Culture',
        'Sports',
      ]}
    >
      <section className="w-full flex flex-col items-center px-3">
        {POSTS_SAMPLE.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </section>
    </Main>
  );
};

interface IPost {
  topic: string;
  title: string;
  description: string;
  author: string;
  publishedOn: string;
  img: string;
  link: string;
}

export default Index;
