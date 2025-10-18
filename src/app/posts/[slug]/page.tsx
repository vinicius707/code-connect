import logger from "@/logger";
import Link from "next/link";
import { remark } from "remark";
import remarkHtml from "remark-html";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";

async function getPostBySlug(slug: string) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error(
      `Erro ao buscar post: ${response.status} ${response.statusText}`
    );
    return null;
  }
  logger.info("Posts obtidos com sucesso");
  const data = await response.json();
  if (data.length === 0) {
    logger.warn(`Post com slug "${slug}" não encontrado`);
    return null;
  }
  const post = data[0];

  const processedContet = await remark().use(remarkHtml).process(post.markdown);
  const contentHtml = processedContet.toString();

  post.markdown = contentHtml;

  return post;
}

const PagePost = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className={styles.container}>
        <div className={styles.error}>
          <h1>Post não encontrado</h1>
          <p>O post que você está procurando não existe.</p>
          <Link href="/" className={styles.backLink}>
            Voltar para a página inicial
          </Link>
        </div>
      </main>
    );
  }
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};
export default PagePost;
