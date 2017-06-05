import Link from 'next/link'

export default () => (
  <div>
    <h2>Welcome to next.js!</h2>
    <Link href={`/about`}>
      <a>About</a>
    </Link>
    
    <style jsx>{`
      a {
        color: green;
      }
    `}
    </style>
    <style global jsx>{`
      h2 {
        color: blue;
      }
    `}
    </style>
  </div>
)

