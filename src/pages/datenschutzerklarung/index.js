import React from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'

const Index = () => {
    return (
        <>
            <TopNav />
            <main className='w-full flex flex-col items-start justify-between gap-8'>
                <section className='mt-8 w-full py-8  bg-[#fbedea] flex flex-col items-center justify-between gap-5 z-40'>
                    <h2>Datenschutzerklarung</h2>
                </section>
                <section className='mt-8 w-full flex flex-col items-center justify-between gap-5 z-40'>
                    <Link href={'/'} className='w-[90%] md:w-[80%] m-auto text-xl font-bold underline underline-offset-4'>Datenschutzerklärung Webseite</Link>
                    <Link href={'/'} className='w-[90%] md:w-[80%] m-auto text-xl font-bold underline underline-offset-4'>Datenschutzhinweise für unsere Facebook-Fanpage Insights</Link>
                </section>
                <section className='w-[90%] md:w-[80%] m-auto flex flex-col items-start justify-between gap-5 z-40'>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <h4 className='font-bold'> 1) Präambel</h4>
                        <p className='text-lg'>Herzlich Willkommen auf unserer Webseite! Wir legen größten Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Wir möchten nachfolgend darstellen, welche Daten wir wann und zu welchem Zweck und auf welcher Rechtsgrundlage verarbeiten. Hierbei soll Ihnen erläutert werden, wie unsere angebotenen Dienste arbeiten und wie hierbei der Schutz Ihrer personenbezogenen Daten gewährleistet wird.</p>
                        <p className='text-lg'>Personenbezogene Daten sind gemäß Art. 4 Ziff. 1 DSGVO alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt identifiziert werden kann. Weitere Informationen hierzu finden Sie u.a. in Art. 4 Ziff. 1 DSGVO.</p>
                        <p className='text-lg'>Auch zu anderen Zwecken verarbeiten wir Ihre personenbezogenen Daten nach einem Widerspruch nicht, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (vgl. etwa Art. 21 Abs. 1 DSGVO, sog. „eingeschränktes Widerspruchsrecht“). In diesem Fall müssen Sie für den Widerspruch Gründe darlegen, die sich aus Ihrer besonderen Situation ergeben.</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <h4 className='font-bold'> 2) Verantwortlicher</h4>
                        <p className='text-lg'>Verantwortlicher im Sinne des Art. 4 Ziff. 7 DSGVO für die Verarbeitung personenbezogener Daten ist:</p>
                        <p className='text-lg'>WILDE BEUGER SOLMECKE</p>
                        <p className='text-lg'>Rechtsanwälte Partnerschaft mbB</p>
                        <p className='text-lg'>Eupener Straße 67</p>
                        <p className='text-lg'>50933 Köln</p>
                        <p className='text-lg'>Tel.: 0221 / 9688 8181 83</p>
                        <p className='text-lg'>Fax: 0221 / 400 675 52</p>
                        <p className='text-lg'>E-Mail: info@wbs.legal</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <h4 className='font-bold'> 3) Ansprechpartner für Datenschutz</h4>
                        <p className='text-lg'>Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten, sowie zu Ihren Rechten rund um den Datenschutz wenden Sie sich bitte an:</p>
                        <p className='text-lg'>WILDE BEUGER SOLMECKE</p>
                        <p className='text-lg'>Rechtsanwälte Partnerschaft mbB</p>
                        <p className='text-lg'>– Datenschutzbeauftragter –</p>
                        <p className='text-lg'>Eupener Straße 67</p>
                        <p className='text-lg'>50933 Köln</p>
                        <p className='text-lg'>Tel: 0221 / 400 675 52</p>
                        <p className='text-lg'>Fax: 0221 / 400 675 52</p>
                        <p className='text-lg'>E-Mail: info@wbs.legal</p>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index