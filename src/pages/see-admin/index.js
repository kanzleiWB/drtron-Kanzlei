import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center gap-8'>
            <section className='text-center w-[80%]'>
                <h2>Welcome to Admin Dashboard!</h2>
            </section>
            <section className="w-[80%] flex flex-row flex-wrap items-center justify-center gap-5">
                <Link href={'see-admin/users'} className='bg-blue-600 btn-text text-white px-5 py-3 border rounded-md font-bold'>See users</Link>
                <Link href={'see-admin/edit-faqs'} className='bg-blue-600 btn-text text-white px-5 py-3 border rounded-md font-bold'>Edit FAQs</Link>
                <Link href={'see-admin/edit-embeded-video'} className='bg-blue-600 btn-text text-white px-5 py-3 border rounded-md font-bold'>Edit Embeded Video Content</Link>
                <Link href={'see-admin/edit-brand-name'} className='bg-blue-600 btn-text text-white px-5 py-3 border rounded-md font-bold'>Edit Brand Name</Link>
            </section>
        </main>
    )
}

export default Index