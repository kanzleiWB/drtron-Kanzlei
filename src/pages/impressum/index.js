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
E-Mail: kontakt@etron-ekanzlei.de


4) Log-Files

Bei jedem Aufruf unserer Webseite durch Sie erfassen wir automatisiert Daten und Informationen vom System Ihres Geräts und speichern diese in sog. Server-Log-Files. Bei diesen Daten handelt es sich um Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (hier: Webseitenbesucher) beziehen. Die Daten werden automatisch durch Ihren jeweiligen Browser bei einem Aufruf unserer Webseite übertragen. Hiervon sind folgende Angaben erfasst:

    Die Uhrzeit des Aufrufs unserer Webseite (Anfrage an den Server des Hostproviders),
    URL der Webseite, von welcher aus Sie unsere Webseite aufgerufen haben,
    das Betriebssystem, welches Sie verwenden,
    Typ und Version des von Ihnen verwendeten Browsers,
    IP-Adresse Ihres Computers maskiert, d.h. das letzte Oktet wird genullt.

Zweck dieser Verarbeitung ist die Abrufbarkeit unserer Webseite von Ihrem Gerät und das Ermöglichen einer korrekten Darstellung unserer Webseite auf Ihrem Gerät bzw. in Ihrem Browser. Weiterhin dienen uns die Daten zur Optimierung unserer Webseite und zur Sicherstellung der Sicherheit unserer Systeme. Eine Auswertung dieser Daten zum Zwecke des Marketings findet nicht statt.

Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, Ihnen eine für Ihren Browser optimierte Webseite zu präsentieren und Ihnen eine Kommunikation zwischen unserem Server und Ihrem Endgerät zu ermöglichen. Für letzteres ist insbesondere die Verarbeitung Ihrer IP-Adresse erforderlich.

Die Daten werden 10 Tage gespeichert, die 11. Datei überschreibt dann am Ende der Periode die älteste Logdatei.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.

5) Cookies

Unsere Webseite verwendet KEINE Cookies. 

6) Informationen zu Google-Diensten

Wir nutzen auf unserer Webseite verschiedene Dienste der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.

Nähere Informationen zu den einzelnen konkreten Diensten von Google, die wir auf dieser Webseite nutzen, finden Sie in der weiteren Datenschutzerklärung.

Durch die Einbindung der Google Dienste erhebt Google unter Umständen Informationen (auch personenbezogene Daten) und verarbeitet diese. Dabei kann nicht ausgeschlossen werden, dass Google die Informationen auch an einen Server in einem Drittland übermittelt.

Die Übermittlung in die USA ist dabei abhängig davon, in welcher Funktion personenbezogene Daten übermittelt werden. Dabei können wir als Verantwortliche selbst Daten an Google in die USA übermitteln zur weiteren Verwendung.

Zurzeit liegt kein Angemessenheitsbeschluss gem. Art. 45 DSGVO vor.

Die Übermittlung kann aber auf Standardvertragsklauseln gestüzt werden. Google hat sich dazu verpflichtet die Standardvertragsklauseln für die Übermittlung personenbezogener Daten in Drittländer nach der Richtlinie 95/46/EG (Standard Contractual Clauses – SCC) einzuhalten.

Nähere Informationen zu den Standardvertragsklauseln erhalten Sie unter https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractuals-clauses-scc_de sowie unter https://policies.google.com/privacy/frameworks?hl=de

Wir selbst können nicht beeinflussen, welche Daten Google tatsächlich erhebt und verarbeitet. Google gibt jedoch an, dass grundsätzlich unter anderen folgende Informationen (auch personenbezogene Daten) verarbeitet werden können:

    Protokolldaten (insbesondere die IP-Adresse)
    Standortbezogene Informationen
    Eindeutige Applikationsnummern
    Cookies und ähnliche Technologien

Informationen zu den von Google verwendeten Cookie Arten finden Sie unter https://policies.google.com/technologies/types .

Wenn Sie in Ihrem Google-Konto angemeldet sind, kann Google die verarbeiteten Informationen abhängig von Ihren Kontoeinstellungen Ihrem Konto hinzufügen und als personenbezogene Daten behandeln.

Google führt hierzu u.a. Folgendes aus:

“Wenn Sie nicht in einem Google-Konto angemeldet sind, speichern wir die von uns erhobenen Daten mit eindeutigen Kennungen, die mit dem Browser, der App oder dem Gerät verknüpft sind, welche Sie verwenden. Damit können wir beispielsweise gewährleisten, dass Ihre Spracheinstellungen be allen Browsersitzungen beibehalten werden.

Wenn Sie in einem Google-Konto angemeldet sind, erheben wir auch Daten, die wir in Ihrem Google-Konto speichern und als personenbezogene Daten erachten.” (https://privacy.google.com/take-control.html)

Ein direktes Hinzufügen dieser Daten können Sie verhindern, indem Sie sich aus Ihrem Google-Konto ausloggen oder auch die entsprechenden Kontoeinstellungen in Ihrem Google-Konto vornehmen.

Weiterhin können Sie Ihre Cookie-Einstellungen ändern (z.B. Cookies löschen, blockieren u.a.). Weitere Informationen hierzu finden Sie unter „5) Cookies“.

Nähere Informationen finden Sie in den Datenschutzhinweisen von Google, die Sie hier abrufen können: https://www.google.com/policies/privacy/

Hinweise zu den Privatsphäreeinstellungen von Google finden Sie unter https://privacy.google.com/take-control.html
7) Google Ads (vormals: AdWords)

Diese Webseite benutzt Google Ads (vormals: AdWords) und im Rahmen von Google AdWords das Conversion-Tracking, einen Online-Werbedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.

Wir nutzen das Online-Werbeprogramm “Google Ads” für Such- und Displayanzeigen und in diesem Rahmen Conversion-Tracking (Besuchsaktionsauswertung). Das Google Conversion-Tracking ist ein Analysedienst. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das Conversion-Tracking auf Ihrem Rechner abgelegt. Diese Cookies verlieren nach 30 Tagen seine Gültigkeit, enthalten keine personenbezogenen Daten und dienen somit nicht der persönlichen Identifizierung. Besuchen Sie bestimmte Seiten von uns und der gespeicherte Cookie ist noch nicht abgelaufen, ist für Google und uns erkennbar, dass jemand auf die Anzeige geklickt hat und so zu unserer Webseite weitergeleitet wurde. Jeder AdWords-Kunde erhält ein anderes Cookie. Cookies können somit über die Webseiten von AdWords-Kunden nachverfolgt werden. Die Zuordnung erfolgt über eine statistische Auswertung nicht personenbezogener Daten.

Informationen zu den Standardvertragsklauseln und der Übermittlung in die USA von uns an Google und weiteren relevanten Daten zur Datenverarbeitung durch Google im Rahmen der Nutzung der Google Dienste finden Sie in dieser Datenschutzerklärung unter dem Abschnitt „6) Informationen zu Google-Diensten“.

Darüber hinaus finden Sie weitere detaillierte Informationen zu den verarbeiteten Informationen unter https://www.google.com/intl/de/policies/privacy/#infocollect unter „Daten, die wir aufgrund Ihrer Nutzung unserer Dienste erhalten“, sowie unter https://privacy.google.com/businesses/adsservices/ .

Durch die Einbindung von Google AdSense verfolgen wir den Zweck, Ihnen interessenbezogen Werbeanzeigen anbieten zu können

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. a) DSGVO.

Rechtsgrundlage der Verarbeitung derjenigen Daten, die im Rahmen der Einholung der Einwilligung verarbeitet werden, ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, die von Ihnen erteilte Einwilligung in das Messverfahren nachweisen zu können (Art. 7 Abs. 1 DSGVO).

Die Daten werden dabei nur solange gespeichert, wie dies für die Bereitstellung der Funktion erforderlich ist.

Ihre Rechte:

Widerrufsrecht

Ihnen steht ein Widerrufsrecht zu.

Unter https://support.google.com/ads/answer/2662922?hl=de können Sie die Einstellungen zur personalisierten Werbung deaktivieren.

Weiterhin können Sie Ihre Cookie-Einstellungen ändern (z.B. Cookies löschen, blockieren u.a.). Weitere Informationen hierzu finden Sie unter „5) Cookies“.

Nähere Informationen finden Sie in den Datenschutzhinweisen von Google, die Sie hier abrufen können: www.google.com/policies/privacy/

Hinweise zu den Privatsphäreeinstellungen von Google finden Sie unter https://privacy.google.com/take-control.html?categories_activeEl=sign-in

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie diese Funktion unserer Webseite nicht bzw. nicht vollumfänglich nutzen können.
8) Google Analytics

Wir nutzen auf unserer Webseite Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.

Google Analytics verwendet sogenannte „Cookies“, Textdateien, die auf Ihrem Gerät gespeichert werden und die eine Analyse der Benutzung der durch Sie besuchten Webseiten ermöglichen. Google Analytics kann auch sogenannte Web Beacons (nicht sichtbare Grafiken) verwenden. Durch diese Web Beacons können Informationen wie der Besucherverkehr auf Webseiten ausgewertet werden. Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung unserer Webseite (einschließlich der IP-Adresse der Nutzer) werden an einen Server von Google, möglicherweise in den USA oder anderen Drittstaaten, übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weiter gegeben werden.

Informationen zu den Standardvertragsklauseln und der Übermittlung in die USA von uns an Google und weiteren relevanten Daten zur Datenverarbeitung durch Google im Rahmen der Nutzung der Google Dienste finden Sie in dieser Datenschutzerklärung unter dem Abschnitt „6) Informationen zu Google-Diensten“.

Folgende Datenarten werden von Google verarbeitet:

    Online-Kennzeichnungen (einschließlich Cookie-Kennungen)
    IP-Adresse
    Gerätekennungen

Darüber hinaus finden Sie weitere detaillierte Informationen zu den verarbeiteten Informationen unter https://www.google.com/intl/de/policies/privacy/#infocollect unter „Daten, die wir aufgrund Ihrer Nutzung unserer Dienste erhalten“, sowie unter https://privacy.google.com/businesses/adsservices/.

Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung („anonymize IP“) ein. Hierdurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.

Weiterhin haben wir für den Einsatz von Google Analytics mit Google einen Vertrag zur Auftragsverarbeitung geschlossen (Art. 28 DSGVO). Google verarbeitet die Daten in unserem Auftrag, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten für uns zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen uns gegenüber zu erbringen. Google kann diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.

Durch die Einbindung von Google Analytics verfolgen wir den Zweck, das Nutzerverhalten auf unserer Webseite zu analysieren und hierauf reagieren zu können. Dadurch können wir unser Angebot kontinuierlich verbessern.

Zweck der Verarbeitung der Daten, die im Zuge der Einwilligungserklärung erhoben werden, ist die Protokollierung Ihrer Einwilligung.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten im Rahmen des Messverfahrens ist eine von Ihnen ausdrücklich erteilte Einwilligung gem. Art. 6 Abs. 1 lit. a) DSGVO.

Rechtsgrundlage der Verarbeitung derjenigen Daten, die im Rahmen der Einholung der Einwilligung verarbeitet werden, ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, die von Ihnen erteilte Einwilligung in das Messverfahren nachweisen zu können (Art. 7 Abs. 1 DSGVO).

Im Rahmen der Auftragsverarbeitung ist Google berechtigt, Subunternehmer zu beauftragen. Eine Liste dieser Subunternehmer können Sie unter https://privacy.google.com/businesses/subprocessors/ finden.
Widerrufsrecht

Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung davon berührt wird. 

Unter https://support.google.com/ads/answer/2662922?hl=de können Sie die Einstellungen zur personalisierten Werbung deaktivieren.

Weiter können Sie die Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plug-In herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de

Auch können Sie die Erfassung durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim Besuch dieser Webseite verhindert: Google Analytics deaktivieren.

Darüber hinaus können Sie die Erfassung der Daten durch Web Beacons verhindern, indem Sie das unter folgendem Link verfügbare Add-On für den jeweiligen Browser herunterladen und installieren: https://adblockplus.org/

Weiterhin können Sie die Installation der Cookies durch entsprechende Einstellungen in ihren Browser verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht alle Funktionen dieser Webseite vollumfänglich nutzen können. 

Wie Sie Cookies in den geläufigen Browsern löschen und die CookieEinstellungen ändern erfahren Sie u.a. hier: 

Google Chrome:                    Webseite

Mozilla Firefox:                      Webseite

Apple Safari:                         Webseite

Microsoft Internet Explorer:    Webseite 

Die verarbeiteten Informationen werden nur so lange gespeichert, wie dies für den vorgesehenen Zweck notwendig oder gesetzlich vorgeschrieben ist.

Weitere Informationen zum Datenumgang im Zusammenhang mit Google Analytics entnehmen Sie bitte der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de

Hinweise zu den Privatsphäreeinstellungen von Google finden Sie unter https://privacy.google.com/take-control.html?categories_activeEl=sign-in

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.
9) Google Optimize

Wir nutzen auf unserer Webseite Google Optimize, einen Webanalysedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
Google Optimize ist ein Unterstützungsdienst von Google Analytics. Mit Google Optimize können wir gestalterische Varianten unserer Webseiten testen und sehen, wie sie im Hinblick auf bestimmte Ziele abschneiden. Wir haben so die Möglichkeit, neue Websitedesigns, Layouts und Inhalte mit einem Teil unserer Besucher zu testen.
Google Optimize macht sich die Leistungsfähigkeit von Analytics zunutze, um die Tests auszuwerten, dabei werden Ihre Analytics-Zielvorhaben als Testziele verwendet. Außerdem haben Sie die Möglichkeit, Tests mit bestimmten Nutzergruppen auszuführen, die in Analytics als Zielgruppen festgelegt wurden.

Google Optimize verwendet sogenannte „Cookies“, dabei handelt es sich um Textdateien, die auf Ihrem Gerät gespeichert werden und die eine Analyse der Benutzung, der durch Sie besuchten Webseiten ermöglichen. Die durch Cookies erzeugten Informationen über die Benutzung unserer Webseite (einschließlich der IP-Adresse der Nutzer) werden an einen Server von Google, möglicherweise in den USA oder anderen Drittstaaten, übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weitergegeben werden.

Informationen zur vorhandenen Privacy-Shield-Zertifizierung von Google und weiteren relevanten Daten zur Datenverarbeitung durch Google im Rahmen der Nutzung der Google Dienste finden Sie in dieser Datenschutzerklärung unter dem Abschnitt „6) Informationen zu Google-Diensten“.
Folgende Datenarten werden von Google verarbeitet:

    Online-Kennzeichnungen (einschließlich Cookie-Kennungen)
    IP-Adresse

Darüber hinaus finden Sie weitere detaillierte Informationen zu den verarbeiteten Informationen unter https://www.google.com/intl/de/policies/privacy/#infocollect unter „Daten, die wir aufgrund Ihrer Nutzung unserer Dienste erhalten“, sowie unter https://privacy.google.com/businesses/adsservices/ .
Wir setzen Google Optimize nur mit aktivierter IP-Anonymisierung („anonymize IP“) ein. Hierdurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
Weiterhin haben wir für den Einsatz von Google Optimize mit Google einen Vertrag zur Auftragsverarbeitung geschlossen (Art. 28 DSGVO). Google verarbeitet die Daten in unserem Auftrag, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten für uns zusammenzustellen und um weitere mit der Webseitennutzung und der Internetnutzung verbundene Dienstleistungen uns gegenüber zu erbringen. Google kann diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
Durch die Einbindung von Google Optimize verfolgen wir den Zweck, das Nutzerverhalten auf unserer Webseite zu analysieren und hierauf reagieren zu können. Dadurch können wir unser Angebot kontinuierlich verbessern.
Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten im Rahmen des Messverfahrens ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt darin, Ihnen eine komfortable Nutzung unserer Webseite anbieten zu können.
Im Rahmen der Auftragsverarbeitung ist Google berechtigt, Subunternehmer zu beauftragen. Eine Liste dieser Subunternehmer können Sie unter https://privacy.google.com/businesses/subprocessors/ finden.

Widerspruchsrecht
Soweit die Verarbeitung Ihrer Daten nicht von der Einwilligung umfasst ist (Nachweis der Einwilligung), steht Ihnen ein Widerspruchsrecht zu. 

Widerspruchsrecht
Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Nähere Informationen finden Sie in den Datenschutzhinweisen von Google, die Sie hier abrufen können: www.google.com/policies/privacy/

Die im Rahmen des Messverfahrens erhobenen und verarbeiteten Daten werden für 50 Monate gespeichert und nach Ablauf dieser Aufbewahrungsdauer automatisch gelöscht.


Hinweise zu den Privatsphäreneinstellungen von Google finden Sie unter https://privacy.google.com/take-control.html?categories_activeEl=sign-in


Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.
10) Verwendung von Google Apis bzw. Google Hosted Libraries

Wir nutzen auf unserer Webseite Google Hosted Libraries. Google Hosted Libraries ist ein Dienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.

Über Google Hosted Libraries binden wir verschiedene Open Source JavaScript Bibliotheken ein. Dabei werden die entsprechenden Bibliotheken durch Google zur Verfügung gestellt und durch einen entsprechenden Befehl auf unserer Webseite geladen, so dass unsere Webseite die Bibliothek nutzen kann. Google lädt die Bibliothek über ein sogenanntes Content Delivery Network (CDN), also über ein Netzwerk aus Datenzentren, welches die Inhalte verteilt.

Die Einbindung der Libraries erfolgt über eine Schnittstelle („API“) zu den Google-Diensten. Durch die Einbindung der Libraries erhebt Google unter Umständen Informationen (auch personenbezogene Daten) und verarbeitet diese. Dabei kann nicht ausgeschlossen werden, dass Google die Informationen auch an einen Server in einem Drittland übermittelt.

Insbesondere werden folgende personenbezogenen Daten durch Google Hosted Libraries verarbeitet:

    Protokolldaten (insbesondere die IP-Adresse)
    Standortbezogene Informationen
    Eindeutige Applikationsnummern
    Cookies und ähnliche Technologien

Informationen zu den Standardvertragsklauseln und der Übermittlung in die USA von uns an Google und weiteren relevanten Daten zur Datenverarbeitung durch Google im Rahmen der Nutzung der Google Dienste finden Sie in dieser Datenschutzerklärung unter dem Abschnitt „6) Informationen zu Google-Diensten“.

Die Beteiligung von Google an der Datenverarbeitung beschränkt sich auf das Laden der Bibliothek auf unserer Seite. Nachdem die Bibliothek(en) durch Google auf unserer Seite geladen und gegebenenfalls im Cache abgelegt wurde(n), findet über die vorgenannten Daten hinaus keine weitere Verarbeitung durch Google in Bezug auf die Bibliothek statt. Solche dateb, welche im Rahmen der Nutzung der Bibliotheken (z.B. bei Einbinden der Bibliothek im Rahmen von Formularen) von Ihnen eingegeben werden, werden ausschließlich durch uns verarbeitet und nicht an Google weitergeleitet. 

Detaillierte Informationen finden Sie unter https://www.google.com/intl/de/policies/privacy/index.htmlunter dem Abschnitt „Daten, die wir aufgrund Ihrer Nutzung unserer Dienste erhalten“.

Details zu den Bedingungen von Google Hosted Libraries finden Sie unter: https://developers.google.com/speed/libraries/terms

Technische Informationen zu den Google Hosted Libraries finden Sie unter: https://developers.google.com/speed/libraries/

Google legt für die Verwendung von Google Hosted Libraries möglicherweise Cookies auf Ihrem Gerät ab. Google gibt an diese Cookies nur aus Gründen der Sicherheit und der Missbrauchsprävention zu nutzen.

Durch die Einbindung von Google Hosted Libraries verfolgen wir den Zweck, die für die optimale Funktion der Seite benötigten Bibliotheken einzubinden.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. f) DSGVO. Unser hierfür erforderliches berechtigtes Interesse liegt dabei in dem großen Nutzen, den eine Einbindung der Google Hosted Libraries bringt. Durch die Möglichkeit der Einbindung der Bibliotheken über Google verringern wir unseren Wartungsaufwand sowie den Ladeaufwand der Webseite und die Server und Traffic Belastung. Google hat darüber hinaus u.a. ein berechtigtes Interesse an den erhobenen (personenbezogenen) Daten um die eigenen Dienste zu verbessern.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de ).

Hierzu können Sie die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie die Installation der Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht alle Funktionen dieser Webseite vollumfänglich nutzen können. 

Wie Sie Cookies in den geläufigsten Browsern löschen und die Cookie Einstellungen ändern erfahren Sie u.a. hier: 

Google Chrome:                    Webseite

Mozilla Firefox:                      Webseite

Apple Safari:                         Webseite

Microsoft Internet Explorer:    Webseite 

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.
11) Google Tag Manager

Wir nutzen auf unserer Webseite den Google Tag Manager. Der Google Tag Manager ist ein Dienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.

Durch den Google Tag Manager können wir verschiedene Codes und Dienste geordnet und vereinfacht auf unserer Webseite einbinden. Der Google Tag Manager implementiert dabei die Tags bzw. „löst“ die eingebundenen Tags aus. Beim Auslösen eines Tags verarbeitet Google unter Umständen Informationen (auch personenbezogene Daten) und verarbeitet diese. Dabei kann nicht ausgeschlossen werden, dass Google die Informationen auch an einen Server in einem Drittland übermittelt.

Informationen zu den Standardvertragsklauseln und der Übermittlung in die USA  von uns an Google und weiteren relevanten Daten zur Datenverarbeitung durch Google im Rahmen der Nutzung der Google Dienste finden Sie in dieser Datenschutzerklärung unter dem Abschnitt „6) Informationen zu Google-Diensten“.

Insbesondere werden folgende personenbezogenen Daten durch den Google Tag Manager verarbeitet:

    Online-Kennzeichnungen (einschließlich Cookie-Kennungen)
    IP-Adresse

Darüber hinaus finden Sie weitere detaillierte Informationen zu dem Google Tag Manager auf den Webseiten https://www.google.de/tagmanager/use-policy.html  sowie unter https://www.google.com/intl/de/policies/privacy/index.html unter dem Abschnitt „Daten, die wir aufgrund Ihrer Nutzung unserer Dienste erhalten“.

Weiterhin haben wir für den Einsatz des Google Tag Managers mit Google einen Vertrag zur Auftragsverarbeitung geschlossen (Art. 28 DSGVO). Google verarbeitet die Daten in unserem Auftrag, um die hinterlegten Tags auszulösen und die Dienste auf unserer Webseite darzustellen. Google kann diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.

Sofern Sie einzelne Trackingdienste deaktiviert haben (z.B. durch das Setzenlassen eines Opt-Out-Cookies), bleibt die Deaktivierung für alle betroffenen Tracking-Tags bestehen, die durch den Google Tag Manager eingebunden werden.

Durch die Einbindung des Google Tag Managers verfolgen wir den Zweck, eine vereinfachte und übersichtliche Einbindung verschiedener Dienste vornehmen zu können. Darüber hinaus optimiert die Einbindung des Google Tag Managers die Ladezeiten der verschiedenen Dienste.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten im Rahmen des Messverfahrens ist eine von Ihnen ausdrücklich erteilte Einwilligung gem. Art. 6 Abs. 1 lit. a) DSGVO.

Rechtsgrundlage der Verarbeitung derjenigen Daten, die im Rahmen der Einholung der Einwilligung verarbeitet werden, ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, die von Ihnen erteilte Einwilligung in das Messverfahren nachweisen zu können (Art. 7 Abs. 1 DSGVO).

Widerrufsrecht

Sie haben die Möglichkeit, das Senden sämtlicher Tags des Google Tag Managers zu unterbinden. Hierfür müssen Sie nur diesen Opt-Out-Link anklicken, um den Google-Tag-Manager-Deaktivierungs-Cookie in Ihrem Browser abzulegen.

Weiterhin können Sie die Installation der Cookies durch entsprechende Einstellungen in Ihrem Browser verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht alle Funktionen dieser Webseite vollumfänglich nutzen können. 

Wie Sie Cookies in den geläufigsten Browsern löschen und die Cookie Einstellungen ändern erfahren Sie u.a. hier: 

Google Chrome:                    Webseite

Mozilla Firefox:                      Webseite

Apple Safari:                         Webseite

Microsoft Internet Explorer:    Webseite 

Wir weisen jedoch darauf hin, dass die Deaktivierung zur Folge haben kann, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. 

Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de)

Die verarbeiteten Informationen werden nur so lange gespeichert, wie dies für den vorgesehenen Zweck notwendig oder gesetzlich vorgeschrieben ist.

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.
12) Verwendung von YouTube

Wir nutzen auf unserer Webseite Videos von YouTube und YouTube Plug-Ins. YouTube ist ein Dienst der YouTube LLC („YouTube“), 901 Cherry Ave., San Bruno, CA 94066, USA und wird von dieser bereitgestellt. Die YouTube LLC ist eine Tochtergesellschaft der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.

Die Einbindung von YouTube erfolgt durch das Einbetten des Service auf unserer Webseite mittels eines sog. „iFrames“. Beim Laden dieses iFrames erheben YouTube bzw. Google unter Umständen Informationen (auch personenbezogene Daten) und verarbeiten diese. Dabei kann nicht ausgeschlossen werden, dass YouTube bzw. Google die Informationen auch an einen Server in einem Drittland übermittelt.

Informationen zur vorhandenen Privacy-Shield-Zertifizierung von Google und weiteren relevanten Daten zur Datenverarbeitung durch Google im Rahmen der Nutzung der Google Dienste finden Sie in dieser Datenschutzerklärung unter dem Abschnitt „6) Informationen zu Google-Diensten“.

Durch die Einbindung von YouTube verfolgen wir den Zweck, Ihnen verschiedene Videos auf unserer Webseite präsentieren zu können, damit Sie diese unmittelbar auf unserer Webseite anschauen können.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. f) DSGVO. Unser hierfür erforderliches berechtigtes Interesse liegt dabei in dem großen Nutzen, den YouTube bietet. Durch die Einbindung von externen Videos entlasten wir unsere Server und können entsprechende Ressourcen anderweitig nutzen. Dies kann u.a. Stabilität unserer Server erhöhen. YouTube bzw. Google hat darüber hinaus ein berechtigtes Interesse an den erhobenen (personenbezogenen) Daten um die eigenen Dienste zu verbessern.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de ).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.

Nähere Informationen finden Sie in den Datenschutzhinweisen von YouTube bzw. Google, die Sie hier abrufen können: www.google.com/policies/privacy/

Hinweise zu den Privatsphäreeinstellungen von Google finden Sie unter https://privacy.google.com/take-control.html?categories_activeEl=sign-in
13) Kontaktformular Erstberatung

Auf unserer Webseite befindet sich ein Kontaktformular, welches Sie für die elektronische Kontaktaufnahme nutzen können. Wenn Sie über dieses Kontaktformular mit uns in Kontakt treten, werden dabei die in den Eingabefeldern eingegebenen Daten von uns verarbeitet.

Hiervon sind folgende Daten als Pflichtangaben umfasst:

    Diejenigen Informationen, die Sie in das Feld „Worum geht es?“ eingeben
    Vorname
    Nachname
    Telefonnummer
    Gewünschte Rückrufzeit
    E-Mail

Darüber hinaus können Sie weitere Daten als freiwillige Angaben hinzufügen. Dies kann die Bearbeitung Ihrer Anfrage gegebenenfalls vereinfachen und beschleunigen. Hierbei sind folgende Daten potentiell betroffen:

    Diejenigen Informationen, die sich aus Ihren angefügten Dokumenten ergeben
    Die Angabe, ob eine Rechtsschutzversicherung vorhanden ist

Pflichtangaben und freiwillige Angaben werden durch uns gleichbehandelt. Die Pflichtangaben sind notwendig, um mit Ihnen in Kontakt treten und Ihre Anfrage bearbeiten zu können.

Beim Absenden des Formulars werden zudem folgende Daten gespeichert:

    Ihre IP-Adresse
    Datum und Uhrzeit des Absendens

Bitte beachten Sie, dass der Umfang der erhobenen personenbezogenen Daten im Rahmen des Kontaktformulars auch davon abhängt, welche Daten Sie selbst im Kontaktformular im insbesondere im Feld „Worum geht es?“ und durch Anfügen Ihrer Dokumente preisgeben.

Zweck der Verarbeitung der personenbezogenen Daten im Rahmen der Pflichtangaben sowie der freiwilligen Angaben ist es, die Kontaktanfrage zu bearbeiten und zwecks Ihrer Anfrage mit Ihnen in Kontakt treten zu können.

Rechtsgrundlage für die Verarbeitung der von Ihnen angegebenen personenbezogenen Daten im Rahmen des Kontakts ist Art. 6 Abs. 1 lit. b) DSGVO.

Die sonstigen während des Absendens verarbeiteten personenbezogenen Daten (IP Adresse, Datum und Uhrzeit des Absendens) dienen dazu, einen Missbrauch unseres Kontaktformulars zu verhindern.

Rechtsgrundlage hierfür ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, einen Missbrauch unseres Kontaktformulars zu verhindern bzw. nachweisen zu können.

Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

 Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unser Kontaktformular nicht nutzen können.
14) Kontaktaufnahme

Sie haben die Möglichkeit mit uns postalisch, telefonisch, per Fax oder per E-Mail in Kontakt zu treten.

Nehmen Sie postalisch Kontakt zu uns auf, so können wir insbesondere Ihre Adressdaten (z.B. Name, Vorname, Straße, Wohnort, Postleitzahl), Datum und Zeitpunkt des Posteinganges sowie jene Daten, welche sich aus Ihrem Schreiben selbst ergeben verarbeiten.

Sofern eine Kontaktaufnahme erfolgt, verarbeitet möglicherweise auch ein Sekretariat-Service Ihre Daten und überträgt diese im Anschluss an Ihre Kontaktaufnahme an uns. Abhängig davon, welche Daten Sie hier angeben, treten wir dann wahlweise per Telefon, Fax oder E-Mail wieder in Kontakt und rufen Sie ggfs. zurück bzw. schreiben Ihnen.

Wir haben für den Einsatz des Sekretariats dem Dienst Anwaltssekretariat.de einen Vertrag zur Auftragsverarbeitung geschlossen (Art. 28 DSGVO). Anwaltssekretariat.de ist ein Dienst der ebuero AG, Hauptstr. 8, 10827 Berlin. Anwaltssekretariat.de verarbeitet die Daten in unserem Auftrag und stellt uns Ihre Kontaktanfragen dann zur Verfügung.

Treten Sie mit uns per Telefon in Kontakt, werden insbesondere Ihre Telefonnummer sowie ggfs. im Rahmen des Gespräches auf Nachfrage Ihr Name, Ihre E-Mailadresse, Zeitpunkt des Anrufs, sowie Details zu Ihrem Anliegen verarbeitet.

Treten Sie mit uns per Fax in Kontakt, so werden insbesondere die Faxnummer bzw. die Absenderkennung sowie die sich aus dem Fax ergebenen Daten verarbeitet.

Bei einer Kontaktaufnahme per E-Mail werden insbesondere Ihre E-Mailadresse, Zeitpunkt der E-Mail sowie diejenigen Daten, welche sich aus dem Nachrichtentext (ggfs. auch Anhänge) ergeben verarbeitet.

Zweck der Verarbeitung der o.g. Daten ist es, die Kontaktanfrage zu bearbeiten und zur Beantwortung des Anliegens mit dem Anfragenden in Kontakt treten zu können.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse ist es, Ihnen die Möglichkeit zu bieten sich jederzeit an uns wenden zu können und Ihre Anfragen beantworten zu können.

Die personenbezogenen Daten werden dabei nur solange verarbeitet, wie dies für die Abwicklung der Kontaktanfrage erforderlich ist.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de oder per Telefon an 0221 / 9688 8181 83 bzw. per Fax an 0221 / 400 675 52).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie die Möglichkeit zur Kontaktaufnahme nicht nutzen können.
15) Kommentarfunktion

Auf unserer Webseite haben Sie die Möglichkeit Kommentare zu unseren Artikeln abzugeben. Wenn Sie über dieses Kommentarformular einen Kommentar abgeben, werden dabei die in den Eingabefeldern eingegebenen Daten von uns verarbeitet. Dabei werden der Name und der Text, welchen Sie in das Kommentarfeld eingeben, auf unserer Seite veröffentlicht. Geben Sie eine Website an, wird diese mit Ihrem Namen verlinkt und dieser Link im Rahmen Ihres Kommentars auf unserer Seite veröffentlicht.

Hiervon sind folgende Daten als Pflichtangaben (mit „Pflichtangabe“ gekennzeichnet) umfasst:

    Name
    Email

Darüber hinaus können Sie folgende weitere Daten als freiwillige Angaben hinzufügen:

    Website
    Diejenigen Daten, welche Sie in dem Kommentarfeld eingeben

Bitte beachten Sie, dass der Umfang der erhobenen personenbezogenen Daten im Rahmen des Kommentarformulars auch davon abhängt, welche Daten Sie selbst im Kommentarformular preisgeben.

Pflichtangaben und freiwillige Angaben werden durch uns gleichbehandelt. Die Pflichtangaben sind notwendig, um das Risiko eines Missbrauches der Kommentarfunktion zu verringern.

Beim Absenden der Nachricht werden zudem folgende Daten verarbeitet:

    Ihre IP-Adresse
    Datum und Uhrzeit des Absendens

Zweck der Verarbeitung der personenbezogenen Daten im Rahmen der Pflichtangaben sowie der freiwilligen Angaben ist es, Ihnen die Möglichkeit zu geben, unsere Artikel zu kommentieren. Dabei dienen uns die Pflichtangaben auch dazu, den Missbrauch unserer Kommentarfunktion zu verhindern.

Rechtsgrundlage für die Verarbeitung der von Ihnen angegebenen personenbezogenen Daten im Rahmen der Kommentarfunktion ist Art. 6 Abs. 1 lit. f) DSGVO. Unser dafür berechtigtes Interesse liegt in dem Ziel, den Nutzern unserer Webseite die Möglichkeit der Kommentierung unserer Artikel und damit der Rückmeldung zu geben. Wir haben außerdem auch ein berechtigtes Interesse daran, durch Abfrage der Pflichtangaben einen Missbrauch unserer Kommentarfunktion zu verhindern.

Die sonstigen während des Absendens des Kommentarformulars verarbeiteten personenbezogenen Daten (IP Adresse, Datum und Uhrzeit des Absendens) dienen dazu, einen Missbrauch unserer Kommentarfunktion zu verhindern.

Rechtsgrundlage hierfür ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, einen Missbrauch unserer Kommentarfunktion zu verhindern bzw. nachweisen zu können.

Die verarbeiteten Daten werden nur so lange gespeichert, wie dies für die Bereitstellung der Kommentarfunktion notwendig ist.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf unser berechtigtes Interesse stützen, steht Ihnen ein Widerspruchsrecht zu.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unser Kontaktformular nicht nutzen können.
16) Bewerbung

Wir bieten Ihnen auf unserer Webseite zudem die Möglichkeit, sich auf Stellenangebote zu bewerben und uns per E-Mail oder postalisch Ihre Bewerbung zukommen zu lassen.

Wenn Sie uns Ihre Bewerbung zukommen lassen, werden wir diejenigen Informationen verarbeiten, die Sie uns im Rahmen der Bewerbung bereitstellen (z.B. die E-Mail-Adresse, wenn Sie uns Ihre Bewerbung per E-Mail zukommen lassen).

Sofern Sie uns Ihre Bewerbung elektronisch übersenden, verarbeiten wir Ihre E-Mail-Adresse um die Bewerbung zu bearbeiten und um zur Beantwortung des Anliegens mit dem Bewerber in Kontakt treten zu können. Bei postalischer Übersendung verarbeiten wir die von Ihnen bereitgestellten Daten. Zweck der Verarbeitung der sich aus den von Ihnen übersandten Bewerbungsunterlagen ergebenden personenbezogenen Daten ist, einen geeigneten Bewerber ermitteln zu können.

Rechtsgrundlage für die Verarbeitung Ihrer E-Mail Adresse ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse ist es, Ihnen die Möglichkeit zu bieten sich jederzeit an uns wenden zu können und Ihre Anfragen beantworten zu können. Rechtsgrundlage für die Verarbeitung der sich aus der Bewerbung ergebenden personenbezogenen Daten ist Art. 6 Abs. 1 lit. b), Art. 88 Abs. 1 DSGVO, § 26 Abs. 1 BDSG-neu.

Die Bewerbungs-E-Mail und die übersandten Unterlagen werden solange aufbewahrt, bis eine Entscheidung für oder gegen den Bewerber gefallen ist und werden danach gelöscht. Sofern Sie uns Ihre Bewerbungsunterlagen per Post zugeschickt haben, schicken wir Ihnen Ihre eingereichten Bewerbungsunterlagen nach Abschluss des Bewerbungsverfahrens an Sie zurück.

Soweit wir die Verarbeitung Ihrer Daten auf unser berechtigtes Interesse stützen, steht Ihnen ein Widerspruchsrecht zu:

Widerspruchsrecht 

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Die Bereitstellung der personenbezogenen Daten ist für die Einreichung einer Bewerbung erforderlich. Die Nichtbereitstellung hat zur Folge, dass wir Ihre Bewerbung nicht bearbeiten und berücksichtigen können.
17) Matelso

Wir nutzen auf unserer Webseite den Dienst Matelso. Matelso wird durch matelso GmbH, Heilbronner Str. 150, 70191 Stuttgart, Deutschland bereitgestellt.

Dabei handelt es sich um ein Telefonanruf-Trackingtool, welches der Analyse und Auswertung des Nutzerverhaltens dient. Insbesondere setzen wir Matelso ein, um zu analysieren auf welchem Wege unsere Werbemaßnahmen die Kunden erreichen.

Wenn Sie auf einer von Matelso für uns geschalteten Rufnummer anrufen, werden Informationen zu dem Telefonat in einen von uns verwendeten Webanalysedienst (z.B. Google Analytics) übertragen.

Wir haben für den Einsatz von Matelso einen Vertrag zur Auftragsverarbeitung geschlossen (Art. 28 DSGVO). Die entsprechenden Informationen werden gemäß unseren Weisungen von Matelso verarbeitet und auf Servern in der EU gespeichert.

Die Einbindung von Matelso erfolgt auf unserer Seite mittels einer entsprechenden durch das Laden eines entsprechenden Java-Scripts. Ebenso setzt Matelso Cookies. Matelso liest ferner von unserem Analysedienst gesetzte Cookies oder andere Parameter der von Ihnen besuchten Internetseite aus, zum Beispiel referrer, document path, remote user agent.

Beim Einsatz von Matelso verarbeiten wir insbesondere folgende (auch personenbezogene) Daten:

    Subscriberdaten
    Caller ID / Anruferkennung
    Inhalte der Daten der TK-Dienste
    Cookie IDs
    Sonstige Tracking Daten

Zweck der Verarbeitung der personenbezogenen Daten ist es, durch die Messdaten das Surfverhalten sowie den Erfolg unserer Werbekanäle unserer Nutzer zu analysieren und auszuwerten, um den Erfolg und die Reichweite unserer Werbekampagnen nachverfolgen zu können.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. a) DSGVO.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

Widerrufsrecht

Ihnen steht ein Widerrufsrecht zu.

Sie können Ihre Cookie-Einstellungen ändern (z.B. Cookies löschen, blockieren u.a.). Weitere Informationen hierzu finden Sie unter „5) Cookies“.

Die verarbeiteten Informationen werden nur so lange gespeichert, wie dies für den vorgesehenen Zweck notwendig oder gesetzlich vorgeschrieben ist.

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unsere Webseite nicht bzw. nicht vollumfänglich nutzen können.
18) Trusted Shops Trustbadge®

Wir nutzen auf unserer Webseite das Trustbadge® Plug-In bzw. Widget von Trusted Shops. Trusted Shops wird betrieben von Trusted Shops GmbH, Colonius Carré, Subbelrather Straße 15c, 50823 KölnTelefon: 0221 – 77 53 66, Fax: 0221 – 77 53 6 89, E-Mail: info@trustedshops.de.

Durch das Trusted Shops Trustbadge® Plug-In bzw. Widget können wir Ihnen eine Zusammenfassung unseres aktuellen Profils bei Trusted Shops direkt auf unserer Webseite präsentieren. So ist auch auf unserer Webseite ersichtlich, wie andere Nutzer uns bewertet bzw. welche Position wir bei Trusted Shops haben. Die Einbindung ermöglicht schließlich ein sofortiges Auffinden unseres Profils, so dass Sie auch weitere Informationen über uns einholen können und uns auch selbst bewerten können.

Die Einbindung des Plug-Ins bzw. Widgets von Trusted Shops auf unserer Webseite erfolgt über eine Schnittstelle („API“) zu Trusted Shops mittels Javascript. Das Trustbadge setzt auch Cookies.

Bei dem Aufruf des Trustbadge speichert der Webserver automatisch ein sogenanntes Server-Logfile, das z.B. Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält und den Abruf dokumentiert. Diese Zugriffsdaten werden nicht ausgewertet.

Weitere personenbezogene Daten werden lediglich an Trusted Shops übertragen, soweit Sie hierzu eingewilligt haben, sich nach Abschluss einer Bestellung für die Nutzung von Trusted Shops Produkten entscheiden oder sich bereits für die Nutzung registriert haben. In diesem Fall gilt die zwischen Ihnen und Trusted Shops getroffene vertragliche Vereinbarung.

Wir selbst erheben keine Daten, sofern Sie sich das Trustbadge anschauen.

Zweck der Verarbeitung der Daten ist die Einbindung einer Zusammenfassung unseres Trusted Shops-Profils auf unserer Webseite, insbesondere der Anzeige unseres Trusted Shops Gütesiegels und der gegebenenfalls gesammelten Bewertungen.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit f.) DSGVO. Unser hierfür erforderliches berechtigtes Interesse ist es, den Besuchern unserer Webseite unser Profil und unsere Bewertung bei Trusted Shops zu präsentieren. Dadurch soll den Besuchern ermöglicht werden, einen ersten Eindruck von uns zu erhalten. Darüber hinaus haben wir ein berechtigtes Interesse daran, dass die Besucher unserer Webseite zu unserem richtigen Profil geleitet werden. So können wir verhindern, dass Besucher über Websuchen versehentlich falsche Trusted Shops-Profile mit ähnlichen oder gleichen Bezeichnungen aufrufen. Trusted Shops hat darüber hinaus ein berechtigtes Interesse seine Dienste zu verbessern und das Angebot zu verbessern.

Trusted Shops gibt an die Daten spätestens sieben Tagen nach Ende Ihres Seitenbesuchs automatisch zu überschreiben.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu.

Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Sie können Ihre Cookie-Einstellungen ändern (z.B. Cookies löschen, blockieren u.a.). Weitere Informationen hierzu finden Sie unter „5) Cookies“.

Weiterhin können Sie die Ausführung von Trusted Shops-spezifischen Java-Script sowie die Übermittlung personenbezogener Daten unterbinden, indem Sie einen Java-Script Blocker installieren und aktivieren oder Java-Script in Ihrem Browser deaktivieren.

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie diese Funktion unserer Webseite nicht bzw. nicht vollumfänglich nutzen können.
19) Abmahncheck

Auf unserer Webseite befindet sich das Tool Abmahncheck. Dabei handelt es sich um ein Programm, mit welchem Sie aufgrund Ihrer Angaben Ihre Website sofort und kostenfrei rechtlich prüfen lassen können. Ihre Website wird hinsichtlich der derzeit häufigsten Abmahngründe gecheckt. Sie erhalten umgehend ein Prüfergebnis, das Ihnen das Gefährdungspotential Ihrer Website aufzeigt. Geben Sie hierfür einfach Ihre Internetadresse in die entsprechende Eingabemaske ein und klicken Sie auf die Schaltfläche „Go!“.

Wenn Sie den Abmahncheck nutzen, werden dabei die in den Eingabefeldern eingegebenen Daten von uns verarbeitet.

Hiervon sind folgende Daten als Pflichtangaben umfasst:

    Die zu prüfende Webseite

oder alternativ

    Die einzeln zu prüfenden URLs

Darüber hinaus können Sie weitere Daten als freiwillige Angaben hinzufügen. Hierbei sind folgende Daten potentiell betroffen:

    Die Angabe, dass Sie über Ihre Seite keine Waren oder Dienstleistungen verkaufen

Pflichtangaben und freiwillige Angaben werden durch uns gleichbehandelt. Die Pflichtangaben sind notwendig, um die von Ihnen angegebene Webseite zu prüfen.

Beim Absenden des Formulars werden zudem folgende Daten verarbeitet:

    Ihre IP-Adresse
    Datum und Uhrzeit des Absendens

Im Rahmen der Prüfung der Webseite verarbeiten wir Informationen über den Aufbau und die Seiteninhalte der Webseite und insbesondere über gegebenenfalls vorhandene Allgemeine Geschäftsbedingungen, Datenschutzbestimmung, Impressum und Widerrufsbelehrung.

Zweck der Verarbeitung der personenbezogenen Daten im Rahmen der Pflichtangaben sowie der freiwilligen Angaben ist es Ihre Webseite hinsichtlich der derzeit häufigsten Abmahngründe zu prüfen.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse ist es, Ihnen die Möglichkeit zu bieten, sich durch Prüfung Ihrer Webseite einen ersten Überblick über das Gefährdungspotential Ihrer Website hinsichtlich der derzeit häufigsten Abmahngründe verschaffen zu können.

Die sonstigen während des Absendens verarbeiteten personenbezogenen Daten (IP Adresse, Datum und Uhrzeit des Absendens) dienen dazu, einen Missbrauch unseres Abmahnchecks zu verhindern.

Rechtsgrundlage hierfür ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, einen Missbrauch unseres Kontaktformulars zu verhindern bzw. nachweisen zu können.

Die personenbezogenen Daten werden dabei nur solange verarbeitet, wie dies für die Bereitstellung der Funktion erforderlich ist. Eine Speicherung der Daten findet nicht statt.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unser Kontaktformular nicht nutzen können.
20) Datenschutzgenerator

Auf unserer Webseite befindet sich ein Datenschutzgenerator den wir gemeinsam mit der DGD Deutsche Gesellschaft für Datenschutz GmbH, Robert-Bosch-Str. 11, 85221 Dachau (bei München) entwickelt haben. Dabei handelt es sich um ein Programm, mit welchem Sie aufgrund Ihrer Angaben eine Datenschutzerklärung erstellen lassen können. Wenn Sie diesen Generator nutzen, werden dabei die in den Eingabefeldern eingegebenen Daten von uns verarbeitet.

Hiervon sind folgende Daten als Pflichtangaben umfasst:

    Firmenname
    Straße & Hausnummer
    PLZ
    Ort
    Land
    Telefon
    E-Mail
    Webseite
    Sprache der Datenschutzerklärung
    Die Angabe, ob Sie die rechtlichen Hinweise zur Kenntnis genommen haben
    Die Angabe, ob Sie die Datenschutzerklärung der DGD und eTron eKanzlei zur Kenntnis genommen haben

Darüber hinaus können Sie weitere Daten als freiwillige Angaben hinzufügen. Hierbei sind folgende Daten potentiell betroffen:

    Angaben zum Aufbau Ihrer Webseite und den verwendeten Diensten
    Auf Ihrer Webseite angebotene Zahlungsmöglichkeiten
    Die Angabe, ob Sie eine Einwilligung zu Werbezwecken erteilen
    Die Angaben, welche Sie im Feld Kommentar hinterlassen

Pflichtangaben und freiwillige Angaben werden durch uns gleichbehandelt. Die Pflichtangaben sind notwendig, um die Datenschutzerklärung vollständig erstellen zu können sowie um im Rahmen von Werbemaßnahmen mit Ihnen in Kontakt treten zu können, sofern Sie dazu eingewilligt haben.

Beim Absenden des Formulars werden zudem folgende Daten gespeichert:

    Ihre IP-Adresse
    Datum und Uhrzeit des Absendens

Bitte beachten Sie, dass der Umfang der erhobenen personenbezogenen Daten im Rahmen des Kontaktfeldes auch davon abhängt, welche Daten Sie selbst im Kontaktformular im Nachrichtentext preisgeben.

Zweck der Verarbeitung der personenbezogenen Daten im Rahmen der Pflichtangaben sowie der freiwilligen Angaben ist es Ihnen durch den Generator eine Datenschutzerklärung erstellen zu lassen.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse ist es, Ihnen die Möglichkeit zu bieten, sich durch Generierung einer Datenschutzerklärung einen ersten Überblick über Ihre Webseite verschaffen zu können.

Soweit Sie uns Ihre Einwilligung für Werbemaßnahmen erteilt haben, stellt dies auch einen weiteren Verarbeitungszweck dar. Rechtsgrundlage für diese Verarbeitung ist die von Ihnen erteilte Einwilligung gemäß Art. 6 Abs. 1 lit. a) DSGVO.

Zweck der Verarbeitung der Daten hinsichtlich der „Häkchen“ im Rahmen der Checkboxen zur Einwilligung, den rechtlichen Hinweisen sowie der Datenschutzerklärung ist es, einen Missbrauch unseres Kontaktformulars zu verhindern und – sofern erfolgt – eine erteilte Einwilligung und/ oder die Kenntnisnahme der rechtlichen Hinweise und der Datenschutzhinweise zu dokumentieren.

Rechtsgrundlage hierfür ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Darüber hinaus haben wir ein berechtigtes Interesse daran, die von Ihnen erteilte Einwilligung und/ oder Kenntnisnahme der rechtlichen Hinwiese und Datenschutzhinweise zu protokollieren und nachweisen zu können.

Die sonstigen während des Absendens verarbeiteten personenbezogenen Daten (IP Adresse, Datum und Uhrzeit des Absendens) dienen dazu, einen Missbrauch unseres Kontaktformulars zu verhindern.

Rechtsgrundlage hierfür ist unser berechtigtes Interesse gem. Art. 6 Abs. 1 lit. f) DSGVO. Wir haben ein berechtigtes Interesse daran, einen Missbrauch unseres Kontaktformulars zu verhindern bzw. nachweisen zu können.

Die personenbezogenen Daten werden dabei nur solange verarbeitet, wie dies für die Bereitstellung der Funktion erforderlich ist.

Empfänger der Daten ist unser Server-Host, der im Rahmen einer Auftragsdatenvereinbarung für uns tätig ist.

Außerdem ist Empfänger der Daten die DGD Deutsche Gesellschaft für Datenschutz GmbH, Robert-Bosch-Str. 11, 85221 Dachau (bei München), Deutschland, Tel.: +49 (0) 8131-77987-0, E-Mail: info@dg-datenschutz.de.

Widerspruchsrecht

Ihnen steht ein Widerspruchsrecht zu. Ihren Widerspruch können Sie uns jederzeit zusenden bzw. mitteilen (z.B. per E-Mail an datenschutzbeauftragter@etron-ekanzlei.de).

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie unser Kontaktformular nicht nutzen können.
21) Einsatz Facebook Pixel, Facebook Custom Audiences und Facebook Conversions

Das Netzwerk Facebook wird von dem Unternehmen Meta Platforms betrieben. Wenn im Folgenden von “Facebook” die Rede ist, ist hiermit Meta Platforms gemeint.

Auf unserer Webseite nutzen wir das „Facebook Pixel“, Custom Audiences und Facebook Conversions von Facebook. „Facebook“ wird von der Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland betrieben.

Das Marketing-Tool „Custom Audiences“ von Facebook trägt zur Senkung von Streuverlusten im Rahmen des Marketings bei. Im Head-Bereich der Webseite haben wir einen „Zählpixel“ von Facebook („Facebook-Pixel“) installiert, der bei jedem Aufruf unserer Webseite von den Servern von Facebook abgerufen wird und dort den Zugriff registriert. Hiermit können Webseitenbesucher gezielt in eine Custom Audience aufgenommen werden. Das Marketing-Tool ist eine Targeting-Option, die anhand des Facebook-Pixels Besucher unserer Webseite mit Personen auf Facebook abgleicht. Wir können Besuchergruppen gezielt mit Facebook-Werbeanzeigen ansprechen.

Nach den Angaben von Facebook spielt das Pixel hierfür Browserinformationen, besuchte Webseiten sowie gehashte Facebook-ID des Webseitennutzers aus.

Dabei kann nicht ausgeschlossen werden, dass Facebook die Informationen auch an einen Server in einem Drittland übermittelt.

Weitere Informationen zum Facebook-Pixel finden Sie unter: https://www.facebook.com/business/help/651294705016616

Weitere Informationen zu Facebook Custom Audiences finden Sie unter: https://developers.facebook.com/docs/marketing-api/audiences-api/websites und https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking.

Wie aus der Privacy-Shield-Zertifizierung von Facebook, Inc. hervorgeht (unter https://www.privacyshield.gov/list unter dem Suchbegriff „Facebook“ zu finden), hat sich Facebook, Inc., zur Einhaltung des vom US-Handelsministerium veröffentlichten EU-US Privacy Shield Framework und des Swiss-US Privacy Shield Framework über die Erhebung, Nutzung und Speicherung von personenbezogenen Daten aus den Mitgliedsstaaten der EU bzw. der Schweiz verpflichtet. Facebook, Inc., hat durch Zertifizierung erklärt, dass es die Privacy-Shield-Prinzipien einhält.

Weitere Informationen dazu finden Sie unter: https://de-de.facebook.com/about/privacyshield

Facebook selbst führt zu dem Thema Datensammeln Folgendes aus:

„Informationen von Partnern.

Werbetreibende, App-Entwickler und ‑Publisher können uns über die von ihnen genutzten Facebook Business-Tools, u. a. unsere sozialen Plugins (wie den „Gefällt mir“-Button), Facebook Login, unsere APIs und SDKs oder das Facebook-Pixel, Informationen senden. Diese Partner stellen uns Informationen über deine Aktivitäten außerhalb von Facebook bereit, u. a. Informationen über dein Gerät, von dir besuchte Webseiten, von dir getätigte Käufe, Werbeanzeigen, die du siehst und darüber, wie du ihre Dienste nutzt, und zwar unabhängig davon, ob du ein Facebook-Konto hast oder bei Facebook eingeloggt bist. Beispielsweise könnte ein Spieleentwickler unsere API nutzen, um uns mitzuteilen, welche Spiele du spielst, oder ein Unternehmen könnte uns von einem Kauf berichten, den du in seinem Geschäft getätigt hast. Wir erhalten außerdem Informationen über deine Online- und Offline-Handlungen und ‑Käufe von Dritt-Datenanbietern, die berechtigt sind, uns deine Informationen bereitzustellen.

Partner erhalten deine Daten, wenn du ihre Dienste besuchst oder nutzt, oder durch Dritte, mit denen sie zusammenarbeiten. Wir verlangen von jedem dieser Partner, dass er die gesetzlich festgelegten Rechte besitzt, deine Daten zu erfassen, zu verwenden und zu teilen, bevor er uns irgendwelche Daten bereitstellt. Erfahre mehr über die Arten von Partnern, von denen wir Daten erhalten.“ (https://de-de.facebook.com/about/privacy/)

Durch die Einbindung des Facebook Pixels, der Nutzung von Facebook Custom Audiences und Facebook Conversions verfolgen wir den Zweck, Streuverluste im Rahmen des Marketings zu reduzieren und für die Webseitenbesucher optimierte Werbung zu schalten. Zweck der Verarbeitung der Daten unter Verwendung von Facebook Custom Audiences from Website ist die Erstellung von Statistiken zur Bildung von Nutzerkategorien, um eine interessengerechte Ausrichtung von Werbemitteln bzw. Werbemaßnahmen im Internet zu ermöglichen. Dadurch können wir unser Angebot kontinuierlich verbessern.

Rechtsgrundlage für die hier beschriebene Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 lit. a) DSGVO.

Widerrufsrecht

Ihnen steht ein Widerrufsrecht zu.

Zur Speicherdauer der Informationen gibt Facebook an, dass die Daten solange gespeichert werden, wie dies erforderlich ist, um Ihnen oder anderen Produkte und Dienste bereitzustellen (https://de-de.facebook.com/about/privacy/ unter „Datenspeicherung, Deaktivierung und Löschung von Konten“).

Für weitere Fragen benennt Facebook folgende Kontaktmöglichkeiten und gibt folgende Informationen an (Stand: 29. September 2016):

1. Wenn du in den USA oder in Kanada lebst:

Bitte kontaktiere Facebook, Inc. online oder per Post unter:

Facebook, Inc.
1601 Willow Road
Menlo Park, CA 94025

2. Wenn du irgendwo anders lebst:

Der Datenverantwortliche bezüglich deiner Informationen ist Facebook Ireland Ltd. Dieses Unternehmen kannst du online kontaktieren oder per Post unter:

Facebook Ireland Ltd.
4 Grand Canal Square
Grand Canal Harbour
Dublin 2 Ireland

Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben und auch nicht für einen Vertragsabschluss erforderlich. Sie sind auch nicht verpflichtet, die personenbezogenen Daten bereitzustellen. Die Nichtbereitstellung hätte jedoch unter Umständen zur Folge, dass Sie diese Funktion unserer Webseite nicht bzw. nicht vollumfänglich nutzen können.
22) VG Wort Zählmarken

1. Cookies und Meldungen zu Zugriffszahlen

Wir setzen „Session-Cookies“ der VG Wort, München, zur Messung von Zugriffen auf Texte ein, um die Kopierwahrscheinlichkeit zu erfassen. Session-Cookies sind kleine Informationseinheiten, die ein Anbieter im Arbeitsspeicher des Computers des Besuchers speichert. In einem Session-Cookie wird eine zufällig erzeugte eindeutige Identifikationsnummer abgelegt, eine sogenannte Session-ID. Außerdem enthält ein Cookie die Angabe über seine Herkunft und die Speicherfrist. Session-Cookies können keine anderen Daten speichern. Diese Messungen werden von der INFOnline GmbH nach dem Skalierbaren Zentralen Messverfahren (SZM) durchgeführt. Sie helfen dabei, die Kopierwahrscheinlichkeit einzelner Texte zur Vergütung von gesetzlichen Ansprüchen von Autoren und Verlagen zu ermitteln. Wir erfassen keine personenbezogenen Daten über Cookies.

Viele unserer Seiten sind mit JavaScript-Aufrufen versehen, über die wir die Zugriffe an die Verwertungsgesellschaft Wort (VG Wort) melden. Wir ermöglichen damit, dass unsere Autoren an den Ausschüttungen der VG Wort partizipieren, die die gesetzliche Vergütung für die Nutzungen urheberrechtlich geschützter Werke gem. § 53 UrhG sicherstellen.

Eine Nutzung unserer Angebote ist auch ohne Cookies möglich. Die meisten Browser sind so eingestellt, dass sie Cookies automatisch akzeptieren. Sie können das Speichern von Cookies jedoch deaktivieren oder Ihren Browser so einstellen, dass er Sie benachrichtigt, sobald Cookies gesendet werden.

Sie können Ihre Cookie-Einstellungen ändern (z.B. Cookies löschen, blockieren u.a.). Weitere Informationen hierzu finden Sie unter „5) Cookies“.

2. Datenschutzerklärung zur Nutzung des Skalierbaren Zentralen Messverfahrens, Webangebote

Unsere Website und unser mobiles Webangebot nutzen das „Skalierbare Zentrale Messverfahren“ (SZM) der INFOnline GmbH (https://www.infonline.de) für die Ermittlung statistischer Kennwerte zur Ermittlung der Kopierwahrscheinlichkeit von Texten.

Dabei werden anonyme Messwerte erhoben. Die Zugriffszahlenmessung verwendet zur Wiedererkennung von Computersystemen alternativ ein Session-Cookie oder eine Signatur, die aus verschiedenen automatisch übertragenen Informationen Ihres Browsers erstellt wird. IP-Adressen werden nur in anonymisierter Form verarbeitet.

Das Verfahren wurde unter der Beachtung des Datenschutzes entwickelt. Einziges Ziel des Verfahrens ist es, die Kopierwahrscheinlichkeit einzelner Texte zu ermitteln.

Zu keinem Zeitpunkt werden einzelne Nutzer identifiziert. Ihre Identität bleibt immer geschützt. Sie erhalten über das System keine Werbung.

30) Datensicherheit

Wir sichern unsere Webseite und sonstigen Systeme durch technische und organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen. Trotz regelmäßiger Kontrollen ist ein vollständiger Schutz gegen alle Gefahren jedoch nicht möglich.
31) Widerruf

Sie haben das Recht, einmal erteilte Einwilligungen mit Wirkung für die Zukunft jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung davon berührt wird.
31) Betroffenenrechte

Sie haben grundsätzlich folgende Rechte:

    Auskunftsrecht (Art. 15 DSGVO)
    Recht auf Berichtigung (Art. 16 DSGVO)
    Widerspruchsrecht (Art. 21 DSGVO)
    Recht auf Löschung (Art. 17 DSGVO)
    Recht auf Einschränkung der Verarbeitung (Art. 18f. DSGVO)
    Recht auf Datenübertragbarkeit (Art. 20 DSGVO)

Bei Anfragen dieser Art, wenden Sie sich bitte an datenschutzbeauftragter@etron-ekanzlei.de. Bitte beachten Sie, dass wir bei derartigen Anfragen sicherstellen müssen, dass es sich tatsächlich um die betroffene Person handelt.

Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.

Automatisierte Entscheidungsfindung findet auf unserer Webseite nicht statt.

`}</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index
