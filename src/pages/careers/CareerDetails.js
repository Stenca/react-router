import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()
    console.log(career)
  return (
        <div className="career-details">
            <h2>Career details for: {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci eum pariatur tempore sapiente maiores tenetur similique labore consectetur quod nesciunt sed quaerat iure, accusamus architecto harum nam minima, nisi tempora unde vitae sint itaque nostrum deserunt. Illum quo voluptatibus nisi explicabo facere similique. Explicabo eligendi inventore distinctio earum iste.</p>
            </div>
        </div>
    )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if(!res.ok) {
        throw Error('Could not fetch this career')
    }

    return res.json()
}
