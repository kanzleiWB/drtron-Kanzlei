import { InputField } from '@/pages'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Index = () => {
    const [values, setValues] = useState({
        heading: '',
        paragraph: '',
        videoLink: ''
    })
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const cancelSetValues = () => {
        setValues({
            _id: 'video-embedding',
            heading: '',
            paragraph: '',
            videoLink: ''
        })
    }

    const uploadvaluesToDB = () => {
        if (values.heading === '' || values.paragraph === '' || values.videoLink === '') {
            setError('Please fill all the fields')
            setTimeout(() => {
                setMessage('')
            }, 3000);
            setTimeout(() => {
                setError('')
            }, 3000);
            return
        }
        const data = values;
        try {
            fetch("/api/uploadVideoEmbedding", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((response) => response.json())
                .then((data) => {
                    setMessage('Successfully Submitted')
                })
        } catch (error) {
            setError('An error has occurred')
        }
        setTimeout(() => {
            setMessage('')
        }, 3000);
        setTimeout(() => {
            setError('')
        }, 3000);
    }
    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center gap-8'>
            <h5 className={`bg-green-600 text-white px-5 py-3 border rounded-md fixed z-50 w-[90%] md:w-[80%] top-[50px] right-[10%] ${message === '' ? 'hidden' : ''}`}>{message}</h5>
            <h5 className={`bg-red-600 text-white px-5 py-3 border rounded-md fixed z-50 top-[50px] w-[90%] md:w-[80%] right-[10%] ${error === '' ? 'hidden' : ''}`}>{error}</h5>
            <section className="w-[80%] m-auto flex flex-col items-center justify-between gap-5">
                <Link href='/see-admin' className='bg-blue-600 btn-text text-white px-5 py-3 border rounded-md font-bold flex flex-row items-center justify-between gap-3'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Back</p>
                </Link>
                <InputField label="Heading" type="text" name="heading" id="heading" value={values.heading} onChange={(e) => setValues({ ...values, heading: e.target.value })} />
                <InputField label="Paragraph" type="text" name="paragraph" id="paragraph" value={values.paragraph} onChange={(e) => setValues({ ...values, paragraph: e.target.value })} />
                <InputField label="Video Link" type="text" name="videoLink" id="videoLink" value={values.videoLink} onChange={(e) => setValues({ ...values, videoLink: e.target.value })} />
                <div className="flex flex-row items-center gap-4 justify-end w-full">
                    <button onClick={cancelSetValues} className="bg-slate-500 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2">Cancel</button>
                    <button onClick={uploadvaluesToDB} className="bg-green-600 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2">Add</button>
                </div>
            </section>

        </main>
    )
}

export default Index