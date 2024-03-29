import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Footer = () => {
    const [brandName, setBrandName] = useState([])

    useEffect(() => {
        const getBrandNameFromDB = async () => {
            const response = await fetch('/api/getBrandNameFromDB')
            const data = await response.json();
            if (data) {
                setBrandName(data);
            }
        }
        getBrandNameFromDB()
    }, [])
    return (
        <footer className='min-h-[40vh] mt-[40px] md:mt-[80px] flex items-center'>
            <section className="w-[80%] m-auto flex flex-col md:flex-row items-center justify-start gap-20">
                <h3>{brandName.brandTitle}</h3>
                <div className="flex flex-col items-start justify-between gap-2 text-center">
                    <h5 className='font-semibold'>Wichtige Links</h5>
                    <div className="flex flex-col items-start justify-between gap-2">
                        <Link className='font-normal' href={'/impressum'}>Impressum</Link>
                        <Link className='font-normal' href={'/datenschutzerklarung'}>Datenschutzerklärung</Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer