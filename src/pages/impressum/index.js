import React from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'

const Index = () => {
    return (
        <>
            <TopNav />
            <main className='w-full flex flex-col items-start justify-between gap-8'>
                <section className='mt-8 w-full py-8 bg-[#fbedea] flex flex-col items-center justify-between gap-5 z-40'>
                    <h2>Datenschutzerklärung</h2>
                </section>
                <section className='mt-8 w-full flex flex-col items-center justify-between gap-5 z-40'>
                    <Link href={'/'} className='w-[90%] md:w-[80%] m-auto text-xl font-bold underline underline-offset-4'>Datenschutzerklärung Webseite</Link>
                    <Link href={'/'} className='w-[90%] md:w-[80%] m-auto text-xl font-bold underline underline-offset-4'>Datenschutzhinweise für unsere Facebook-Fanpage Insights</Link>
                </section>
                <section className='w-[90%] md:w-[80%] m-auto flex flex-col items-start justify-between gap-5 z-40'>
                    {/* Beginn des eingefügten Textes */}
                    <div className='flex flex-col items-start justify-between gap-1 text-xl'>
                        <p className='text-lg'>{`1) Vorwort

Herzlich Willkommen auf unserer Webseite! Wir legen größten Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Wir möchten nachfolgend darstellen, welche Daten wir wann und zu welchem Zweck und auf welcher Rechtsgrundlage verarbeiten. Hierbei soll Ihnen erläutert werden, wie unsere angebotenen Dienste arbeiten und wie hierbei der Schutz Ihrer personenbezogenen Daten gewährleistet wird.

Personenbezogene Daten sind gemäß Art. 4 Ziff. 1 DSGVO alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt identifiziert werden kann. Weitere Informationen hierzu finden Sie u.a. in Art. 4 Ziff. 1 DSGVO.

Soweit wir als Rechtmäßigkeitsgrundlage für die Verarbeitung personenbezogener Daten unser berechtigtes Interesse oder ein berechtigtes Interesse eines Dritten (Art. 6 Abs. 1 lit. f) DSGVO) anführen, steht Ihnen ein Widerspruchsrecht gemäß Art. 21 DSGVO zu:

Gemäß Art. 21 DSGVO haben Sie das Recht

jederzeit gegen die Verarbeitung personenbezogener Daten Widerspruch einzulegen. Wir verarbeiten die personenbezogenen Daten dann nicht mehr zu Zwecken des Direktmarketings oder einem damit in Verbindung stehenden Profilings.

Auch zu anderen Zwecken verarbeiten wir Ihre personenbezogenen Daten nach einem Widerspruch nicht, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (vgl. etwa Art. 21 Abs. 1 DSGVO, sog. „eingeschränktes Widerspruchsrecht“). In diesem Fall müssen Sie für den Widerspruch Gründe darlegen, die sich aus Ihrer besonderen Situation ergeben.

Sie können auch Widerspruch gegen eine Verarbeitung Ihrer personenbezogenen Daten aus Gründen, die sich aus Ihrer besonderen Situation ergeben, einlegen, die zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1 DSGVO erfolgt, es sei denn, die Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich (vgl. Art. 21 Abs. 6 DSGVO).

Wir werden Sie in den einzelnen Abschnitten auf das Widerspruchsrecht auch noch einmal gesondert hinweisen (z.B. durch den Hinweis: „Ihnen steht ein Widerspruchsrecht zu“), sofern dieses Recht besteht. Dort finden Sie auch weitere Informationen zur Ausübung Ihres Widerspruchsrechts.

Um die folgende Datenschutzerklärung übersichtlich zu halten, verweisen wir an verschiedenen Stellen durch Links auf Informationen und Datenschutzhinwiese, die sich auf externen Webseiten (vgl. auch Abschnitt „Soziale Netzwerke & Externe Links“ in dieser Datenschutzerklärung) befinden. Wir sind sehr bemüht die Verlinkungen, die wir in dieser Datenschutzerklärung aufführen auch aktuell zu halten. Dennoch ist aufgrund der stetigen Aktualisierung der Webseiten nicht ausgeschlossen, dass Verlinkungen nicht korrekt funktionieren. Sollte Ihnen eine solche Verlinkung auffallen, würden wir uns freuen, wenn Sie uns dies mitteilen, damit wir den aktuellen Link einpflegen können.
2) Verantwortlicher

Verantwortlicher im Sinne des Art. 4 Ziff. 7 DSGVO für die Verarbeitung personenbezogener Daten ist:

Dr. Tron eKanzlei
RA Dr. Patrick Tron
Bad Nauheimer Str. 4
64289 Darmstadt
Tel.: 0221 / 9688 8181 83
Fax: 0221 / 400 675 52
E-Mail: kontakt@etron-ekanzlei.de

3) Ansprechpartner für Datenschutz

Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten, sowie zu Ihren Rechten rund um den Datenschutz wenden Sie sich bitte an:

Dr. Tron eKanzlei
RA Dr. Patrick Tron
– Datenschutzbeauftragter –
Bad Nauheimer Str. 4
64289 Darmstadt
Tel.: 0221 / 9688 8181 83
Fax: 0221 / 400 675 52
E-Mail: kontakt@etron-ekanzlei.de`}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index
