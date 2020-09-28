import Link from 'next/link'

import ListenOn from './listen-on'

export default function Nav({ withListenOn }) {
  return (
    <nav className="pt-10 flex justify-between items-start">
      <Link href="/">
        <a className="hover:underline">
          <img className="w-48" src="/assets/logo.svg"/>
        </a>
      </Link>

      {withListenOn && <ListenOn />}
    </nav>
  )
}
