import { notFound } from 'next/navigation';
import { client, urlFor } from '../../../lib/sanity/client';
import { Post } from '../page';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import Body from '../../../components/blog/body';
import { SubHeader } from '@repo/ui';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = () => {
  const result: { slug: string[] }[] = [];

  return result;
};

export default async function Page({ params: { slug } }: PageProps) {
  const post = await client.fetch<Post>(
    `*[_type == "post" && slug.current == $slug][0]{
      ...,
      authors[]->,
      tags[]->
    }`,
    { slug },
  );

  if (!post) notFound();

  const img = post.mainImage;
  const imageUrl = img && urlFor(img).url();
  const blurUrl = img && urlFor(img).width(20).quality(20).url();

  return (
    <>
      <SubHeader
        leftLabel="Back to blog"
        leftHref="/blog"
        right={<div>Join the community</div>}
      />
      <div className="mx-auto max-w-[1024px] pb-20">
        {post?.tags && post.tags.length > 0 && (
          <div className="mb-6 flex justify-center">
            <div className="flex h-8 items-center justify-center rounded-full border border-blue-500 px-4 text-center text-sm font-bold uppercase text-blue-500">
              {post.tags?.[0].name}
            </div>
          </div>
        )}
        <h1 className="mb-4 text-center text-6xl font-bold">{post.title}</h1>
        <div className="mb-6 text-center text-2xl text-zinc-500">
          {post.subtitle}
        </div>
        <div className="mb-12 flex w-full items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {post.authors?.map((author) => {
                const img = author.image;
                const imageUrl = img && urlFor(img).url();
                return (
                  <div className="relative -ml-2 h-8 w-8 overflow-hidden rounded-full bg-slate-100">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt="My Image"
                        fill={true}
                        className="object-cover"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              {post.authors?.map((author) => {
                return (
                  <>
                    <span className="text-zinc-500 first:hidden"> and </span>
                    {author.name}
                  </>
                );
              })}
            </div>
          </div>
          <div className="text-zinc-500">
            {post.publishedAt &&
              format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
          </div>
        </div>
        <div className="relative mb-8 h-[500px] w-full overflow-hidden rounded-xl">
          {imageUrl && blurUrl && (
            <Image
              src={imageUrl}
              alt="My Image"
              fill={true}
              placeholder="blur"
              blurDataURL={blurUrl}
              className="object-cover"
            />
          )}
        </div>
        <div className="mx-auto max-w-[640px]">
          {post.body && <Body value={post.body} />}
        </div>
      </div>
    </>
  );
}
