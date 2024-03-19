import Footer from '@/components/Footer'
import TopNav from '@/components/TopNav'
import React from 'react'

const Index = () => {
    return (
        <>
            <TopNav />
            <main className='w-full flex flex-col items-start justify-between gap-8'>
                <section className='mt-8 w-full py-8  bg-[#fbedea] flex items-center justify-between z-40'>
                    <h2 className='w-[90%] md:w-[80%] m-auto'>Impressum</h2>
                </section>
                <section className='w-[90%] md:w-[80%] m-auto flex flex-col items-start justify-between gap-5 z-40'>
                    <div className='flex flex-col items-start justify-between gap-1 font-bold'>
                        <h4>Dr. Tron eKanzlei</h4>
                        <h6>RA Dr. Patrick Tron</h6>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Bad Nauheimer Str. 4</p>
                        <p className='text-lg'>64289 Darmstadt</p>
                        <p className='text-lg'>Deutschland</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Tel.: 0221 / 95 15 63 0</p>
                        <p className='text-lg'>Fax: 0221 / 400 675 52</p>
                        <p className='text-lg'>E-Mail: info@niggers.de</p>
                    </div>
                </section>
                <section className='w-[90%] md:w-[80%] m-auto flex flex-col items-start justify-between gap-8 z-40'>
                    <div className='flex flex-col items-start justify-between gap-1 font-bold'>
                        <h4>Berufshaftpflichtversicherung:</h4>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Markel International Insurance Company Limited</p>
                        <p className='text-lg'>Niederlassung für Deutschland</p>
                        <p className='text-lg'>Sophienstraße 26</p>
                        <p className='text-lg'>80333 München</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Der räumliche Geltungsbereich des Versicherungsschutzes umfasst Tätigkeiten in den Mitgliedstaaten der Europäischen Union.</p>
                    </div>
                </section>
                <section className='w-[90%] md:w-[80%] m-auto flex flex-col items-start justify-between gap-8 z-40'>
                    <div className='flex flex-col items-start justify-between gap-1 font-bold'>
                        <h4>Zuständige Aufsichtsbehörde (iSv. § 5 Abs. 1 Nr. 3 TMG):</h4>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Rechtsanwaltskammer Frankfurt am Main</p>
                        <p className='text-lg'>Bockenheimer Anlage 36</p>
                        <p className='text-lg'>60322 Frankfurt am Main</p>
                        <p className='text-lg'>Deutschland</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Tel. 0221-97 30 10-0</p>
                        <p className='text-lg'>Fax. 0221-97 30 10-50</p>
                        <p className='text-lg'>E-Mail: kontakt@rak-koeln.de</p>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>Die Berufsbezeichnung „Rechtsanwalt“ bzw. „Rechtsanwältin“ sowie Fachanwaltsbezeichnungen wurden in der Bundesrepublik Deutschland verliehen.</p>
                        <p className='text-lg'>Mitglied der Rechtsanwaltskammer Köln.</p>
                    </div>
                </section>
                <section className='w-[90%] md:w-[80%] m-auto flex flex-col items-start justify-between gap-8 z-40'>
                    <div className='flex flex-col items-start justify-between gap-1 font-bold'>
                        <h4>Berufsrechtliche Regelungen:</h4>
                    </div>
                    <ul className='flex list-disc flex-col items-start justify-between gap-1 text-xl'>
                        <li className='text-lg'>Bundesrechtsanwaltsordnung (BRAO)</li>
                        <li className='text-lg'>Berufsordnung für Rechtsanwälte (BORA)</li>
                        <li className='text-lg'>Fachanwaltsordnung (FAO)</li>
                        <li className='text-lg'>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                        <li className='text-lg'>Berufsregelungen der Rechtsanwälte der Europäischen Union Die Regelungen können bei der Bundesrechtsanwaltskammer unter http://www.brak.de/seiten/06.php#tdg eingesehen werden***</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index
