import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import { getTree } from "@/lib/getTree";
import { getPage } from "@/lib/getPage";
import { Article } from "@/components/article";

// export const revalidate = 86400;
export const revalidate = 0;

type Props = {
  params: {
    pageIdLvl1: string;
    pageIdLvl2: string;
    pageIdLvl3: string;
    pageIdLvl4: string;
  };
};

export async function generateStaticParams() {
  const pages = await getTree();

  if (!pages) return [];

  return pages.map((page) => ({
    pageId: page.id,
  }));
}

export async function generateMetadata({
  params: { pageIdLvl1, pageIdLvl2, pageIdLvl3 },
}: Props) {
  const tree = await getTree();
  const findLvl1 = tree && tree.find((page) => page.slug === pageIdLvl1);
  const findLvl2 =
    findLvl1 && findLvl1.children.find((page) => page.slug === pageIdLvl2);
  const findPageInTree =
    findLvl2 && findLvl2.children.find((page) => page.slug === pageIdLvl3);
  const pageDataId = findPageInTree?.id;
  const page = await getPage(`${pageDataId}.mdx`);

  if (!page) return { title: "Page Not Found" };

  return {
    title: page.meta?.title || "Storybook",
  };
}

export default async function Post({
  params: { pageIdLvl1, pageIdLvl2, pageIdLvl3, pageIdLvl4 },
}: Props) {
  // Get the tree
  const tree = await getTree();

  // Find the page in the tree
  const findLvl1 = tree && tree.find((page) => page.slug === pageIdLvl1);
  const findLvl2 = findLvl1?.children.find((page) => page.slug === pageIdLvl2);
  const pageInTree = findLvl2?.children.find(
    (page) => page.slug === pageIdLvl3
  );

  // Get page content and metadata
  const pageDataId = pageInTree?.id;
  const page = await getPage(`${pageDataId}.mdx`);

  if (!page) notFound();

  return (
    <Article
      title={page.meta.title}
      isIndex={page?.meta.showAsTabs}
      isApi={pageInTree?.currentSegment === "api"}
      pathIndex={`/docs/${pageIdLvl1}/${pageIdLvl2}/${pageIdLvl3}/${pageIdLvl4}`}
      pathApi={`/docs/${pageIdLvl1}/${pageIdLvl2}/${pageIdLvl3}`}
      content={page.content}
    />
  );
}