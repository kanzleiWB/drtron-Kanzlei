import { InputField } from '@/pages'
import React, { useState } from 'react'

const Index = () => {
    const [values, setValues] = useState({
        heading: '',
        paragraph: '',
        videoLink: ''
    })

    const cancelSetValues = () => {
        setValues({
            heading: '',
            paragraph: '',
            videoLink: ''
        })
    }

    const uploadvaluesToDB = () => {
        
    }
    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center gap-8'>
            <section className="w-[80%] m-auto flex flex-col items-center justify-between gap-5">
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