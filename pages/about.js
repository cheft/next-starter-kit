import Link from 'next/link'

export default () => (
  <div>
    <h2>Author: Cheft!</h2>
    <Link href={`/index`}>
      <a>Home</a>
    </Link>

    <style jsx>{`
      a {
        color: pink;
      }
    `}
    </style>
  </div>
)
