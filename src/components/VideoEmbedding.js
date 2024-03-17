import { useState, useEffect } from "react"
import React from 'react'

const VideoEmbedding = () => {
    const [values, setValues] = useState([])

    useEffect(() => {
        const getValuesFromDB = async () => {
            const response = await fetch('/api/getVideoEmbedding')
            const data = await response.json();
            if (data) {
                setValues(data);
            }
        }
        getValuesFromDB()
    }, [])

    useEffect(() => {
        console.log(values);
    }, [values])


    return (
        <section className="flex flex-col items-center justify-between gap-5 my-10 m-auto w-[90%] md:w-[80%]">
            <h3>{values.heading}</h3>
            <p>{values.paragraph}</p>
            <iframe className='mt-5 min-h-[300px] md:min-h-[600px] w-full' src={values.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    )
}

export default VideoEmbedding