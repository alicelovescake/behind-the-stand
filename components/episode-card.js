import Link from 'next/link'

function EpisodeCard({ episode }) {
  return (
    <>
      <Link href="/episodes/[slug]" as={`/episodes/${episode.slug}`}>
        <a key={episode.number} className="episode-card relative hover:cursor-pointer duration-150 ease-in transform">
          <div className="episode-image absolute top-0 right-0 rounded m-2 bg-brand-yellow px-2 py-1 text-brand-black">Episode #{episode.number}</div>

          <div className="w-full h-64 bg-cover bg-center mb-2 rounded" style={{ backgroundImage: `url('/assets/episodes/${episode.slug}/preview.png')`}}></div>

          <h3 className="text-white text-2xl font-bold duration-150 ease-in transform">{episode.title}</h3>

          <p className="mb-4">{episode.guest} @ {episode.venture}</p>

          <p>{episode.excerpt}</p>
        </a>
      </Link>
      <style jsx>{`
        .episode-card:hover {
          transform: translateY(-0.5rem);
        }

        .episode-card:hover h3 {
          color: #fec700;
        }
      `}</style>
    </>
  )
}

export default EpisodeCard;