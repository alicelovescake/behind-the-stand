import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import markdownToHtml from "../../lib/markdownToHtml";
import { getEpisodeBySlug, getAllEpisodes } from "../../lib/api";

import Layout from "../../components/layout";
import Nav from "../../components/nav";
import Container from "../../components/container";
import ListenOn from "../../components/listen-on";
import Guest from "../../components/guest";
import DateFormatter from "../../components/date-formatter";

import markdownStyles from "../../components/markdown-styles.module.css";

export default function Post({ episode, moreEpisodes }) {
  const router = useRouter();
  if (!router.isFallback && !episode?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Layout>
        <header className="bg-brand-gray-dark px-40 pb-10">
          <Nav withListenOn />

          <div className="mt-40">
            <h1 className="text-6xl font-bold text-brand-yellow">
              {episode.title}
            </h1>
          </div>

          <p className="text-xl md:text-2xl md:flex justify-between items-center">
            <span className="block">
              featuring{" "}
              <Guest
                guest={episode.guest}
                guestLinkedIn={episode.guestLinkedIn}
              />{" "}
              <span className="text-brand-blue">@</span> {episode.venture}
            </span>

            <span className="block text-base md:text-lg">
              <DateFormatter dateString={episode.date} />
            </span>
          </p>
        </header>

        <article className="py-20 bg-white text-brand-gray-dark min-h-screen">
          <Head>
            <title>{episode.title} | Behind the Stand</title>

            <meta
              property="og:image"
              content={`/assets/episodes/${episode.slug}/og.png`}
            />
          </Head>

          <Container>
            <iframe
              src={episode.embed}
              width="100%"
              height="232"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>

            <div className="max-w-3xl mx-auto flex justify-center mt-4">
              <ListenOn dark />
            </div>

            <div className="max-w-3xl mx-auto pt-8">
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: episode.content }}
              />
            </div>

            <div className="max-w-3xl mx-auto bg-brand-black rounded-lg p-8 text-white mt-40 flex space-x-8 items-center">
              <img className="w-48 h-48 rounded-lg" src="/assets/profile.png" />

              <div className="space-y-4">
                <p>Hey! 👋</p>

                <p>
                  I'm <a className="text-brand-yellow font-bold hover:text-white duration-150 ease-in transform" href="https://www.linkedin.com/in/alicezhao1991/">Alice</a>, a computer science student studying at UBC.
                </p>

                <p>
                  I created Behind the Stand because I was inspired by entreprenuers in the Vancouver community and beyond.
                </p>

                <p>
                  <a className="text-brand-yellow font-bold hover:text-white duration-150 ease-in transform" href="mailto:azhao991@gmail.com">Let me know</a> if there is anything you'd like to hear!
                </p>
              </div>
            </div>
          </Container>
        </article>
      </Layout>
      <style jsx>{`
        header {
          background-color: #26282b;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c2c4ca' fill-opacity='0.11' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ params }) {
  const episode = getEpisodeBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "excerpt",
    "guest",
    "guestLinkedIn",
    "venture",
    "content",
    "embed",
    "number",
  ]);

  const content = await markdownToHtml(episode.content || "");

  return {
    props: {
      episode: {
        ...episode,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const episodes = getAllEpisodes(["slug"]);

  return {
    paths: episodes.map((episodes) => {
      return {
        params: {
          slug: episodes.slug,
        },
      };
    }),
    fallback: false,
  };
}
