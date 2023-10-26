import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-center'>Desenvolvedor front-end com sólida experiência na criação de elementos visuais para diversas mídias. Minha especialização em programação abrange HTML5, CSS3 e JavaScript, com proficiência em frameworks como Next.js e Tailwind CSS. Possuo habilidades avançadas em ferramentas de design, incluindo Adobe Photoshop, Illustrator e modelagem 3D com o Blender, abrangendo projetos de branding, identidade visual, materiais impressos e digitais. Trabalho eficazmente em equipes multidisciplinares. Meu conhecimento em design capacita-me a criar interfaces de usuário e experiências altamente impactantes. Minha paixão pelo desenvolvimento me motiva a manter-me atualizado e a buscar constantemente conhecimento para aprimorar meus projetos.</p>
        <p>
          (Este é um site de exemplo - você estará construindo um site semelhante a este em{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{title}</Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

