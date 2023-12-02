import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import { getTree } from "@/lib/getTree";
import { getPage } from "@/lib/getPage";
import { Tabs } from "@/components/tabs";

// export const revalidate = 86400;
export const revalidate = 0;

type Props = {
  params: {
    pageIdLvl1: string;
  };
};

export async function generateStaticParams() {
  const pages = await getTree();

  if (!pages) return [];

  return pages.map((page) => ({
    pageIdLvl1: page.id,
  }));
}

export async function generateMetadata({ params: { pageIdLvl1 } }: Props) {
  // Check if the page exists on its own
  const page = await getPage(`docs/${pageIdLvl1}.mdx`);

  // if not, check if it exists as an index
  const pageIndex = await getPage(`docs/${pageIdLvl1}/index.mdx`);

  if (!page && !pageIndex) {
    return {
      title: "Page Not Found",
    };
  }

  const meta = page ? page.meta : pageIndex?.meta;

  return {
    title: meta?.title || "Storybook",
  };
}

export default async function Post({ params: { pageIdLvl1 } }: Props) {
  const tree = await getTree();
  const pageInTree = tree && tree.find((page) => page.slug === pageIdLvl1);
  const pageDataId = pageInTree?.id;
  const page = await getPage(`${pageDataId}.mdx`);

  if (!page) notFound();

  // Two ways to show the tabs
  const isIndex = page?.meta.showAsTabs;
  const isApi = pageInTree?.currentSegment === "api";

  console.log(isIndex, isApi);

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{page.meta.title || ""}</h2>
      {(isIndex || isApi) && (
        <Tabs path={`/docs/${pageIdLvl1}`} isIndex={isIndex} isApi={isApi} />
      )}
      <article>{page.content}</article>
    </>
  );
}
