import { FaSpotify } from 'react-icons/fa'
import { SiPocketcasts, SiApplepodcasts} from 'react-icons/si'

function ListenOnLink({ dark, Icon, place, url }) {
  const borderColor = `border-brand-gray-${dark ? 'dark' : 'light'}`;

  return (
    <a
      href={url}
      target="_blank"
      className={`duration-150 ease-in transform hover:text-brand-green-light rounded-lg flex justify-center items-center border ${borderColor} hover:border-brand-green-light px-2 py-1`}
    >
      <Icon className="mr-2" /> {place}
    </a>
  )
}

function ListenOn({ dark }) {
  const textColor = `text-brand-gray-${dark ? 'dark' : 'light'}`;
console.log(textColor, dark);
  return (
    <div className={`flex space-x-4 ${textColor}`}>
      <ListenOnLink dark={dark} Icon={FaSpotify} place="Spotify" url="https://open.spotify.com/show/1EofHBCAjBrn9BMykQklPM" />
      <ListenOnLink dark={dark} Icon={SiPocketcasts} place="Pocket Casts" url="https://pca.st/ex6fxdsk" />
      <ListenOnLink dark={dark} Icon={SiApplepodcasts} place="Apple" url="https://podcasts.apple.com/ca/podcast/we-ubc/id1531947035" />
    </div>
  )
}

export default ListenOn;