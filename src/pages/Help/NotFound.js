import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page Not Found !</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum veniam aliquam sit necessitatibus consequatur accusantium debitis nesciunt, sed eius cumque facilis aperiam vel ex at, hic non praesentium dolore velit.</p>
        <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
