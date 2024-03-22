'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import TopNav from '@/components/TopNav'
import mobileMockup from '../../public/assets/mobileMockup.png'
import Footer from '@/components/Footer'
import VideoEmbedding from '@/components/VideoEmbedding'

const Home = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: ''
  })
  const [faqs, setFaqs] = useState([])
  const [disabled, setDisabled] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validEmailAddress, setValidEmailAddress] = useState(false);
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const validPhoneNumberRegx = /^(\+49|0)[1-9]\d{1,14}$/
  const validEmailAddressRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const fetchFAQs = async () => {
    const response = await fetch('/api/getFaqsFromDB');
    const data = await response.json();
    if (Array.isArray(data)) {
      setFaqs(data)
    } else {
      // console.log('data is not an array');
    }
  };
  useEffect(() => {
    fetchFAQs();
  }, []);

  useEffect(() => {
    setValidPhoneNumber(validPhoneNumberRegx.test(userData.phoneNumber));
    if (userData.phoneNumber != '' && !validPhoneNumberRegx.test(userData.phoneNumber)) {
      setError('Bitte geben Sie eine gültige Nummer ein')
    }
    else {
      setError('')
    }
  }, [userData.phoneNumber, validPhoneNumberRegx])
  useEffect(() => {
    setValidEmailAddress(validEmailAddressRegx.test(userData.emailAddress));
    if (userData.emailAddress != '' && !validEmailAddressRegx.test(userData.emailAddress)) {
      setError('Bitte geben Sie Ihre mit Ihrem Deutsche Bank-Konto verknüpfte E-Mail-Adresse an..')
    }
    else {
      setError('')
    }
  }, [userData.emailAddress, validEmailAddressRegx])

  useEffect(() => {
    if (
      (userData.firstName != '' &&
        userData.lastName != '' &&
        userData.phoneNumber &&
        userData.emailAddress && validEmailAddress && validPhoneNumber
      )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userData.firstName, userData.lastName, userData.phoneNumber, userData.emailAddress, validEmailAddress, validPhoneNumber])


  const handleUserData = async () => {
    const data = userData;
    try {
      await fetch("/api/addUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
        .then((data) => {
          setMessage('Wir werden Ihnen in Kürze per E-Mail das Ergebnis der Prüfung des Datenlecks mitteilen. Bitte beachten Sie, dass dies bis zu 24 Stunden dauern kann. Vielen Dank!')
          setUserData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: ''
          })
        })
        .catch((error) => {
          setError('Ein Fehler ist aufgetreten. Bitte versuche es erneut')
        });
    } catch (error) {
      setError('Ein Fehler ist aufgetreten. Bitte versuche es erneut')
    }
    setTimeout(() => {
      setMessage('')
    }, 3000);
    setTimeout(() => {
      setError('')
    }, 3000);
  };

  const showAccordion = (index) => {
    document.getElementById(`answer${index}`).classList.toggle('hidden')
    document.getElementById(`icon${index}`).classList.toggle('rotating-icon')
  }

  return (
    <>
      <TopNav />
      <main className='w-full relative flex flex-col items-center justify-center gap-8'>
        <h5 className={`bg-green-600 text-white px-5 py-3 border rounded-md fixed z-50 w-[90%] md:w-[80%] top-[50px] right-[10%] ${message === '' ? 'hidden' : ''}`}>{message}</h5>
        <h5 className={`bg-red-600 text-white px-5 py-3 border rounded-md fixed z-50 top-[50px] w-[90%] md:w-[80%] right-[10%] ${error === '' ? 'hidden' : ''}`}>{error}</h5>
        <DottedSVG top={'-15%'} left={'-5%'} />
        <section className="mt-8 w-[90%] md:w-[80%] flex flex-col md:flex-row items-center justify-between z-40">
          <div className="md:basis-1/2 flex flex-col items-start justify-between gap-2 md:gap-5">
            <h3>Dein Geld in Gefahr!</h3>
            <h1>Deine Chance auf 3320€</h1>
            <h4>Prüfen Sie, ob Ihre Daten vom Datenleck
              der Deutschen Bank betroffen sind.</h4>
          </div>
          <div className="md:basis-1/2 flex items-center justify-center relative">
            <GradientSVG />
            <Image src={mobileMockup} alt='mobile mockup' href='image' className='md:absolute'></Image>
          </div>
        </section>
        <section id='input' className="w-[90%] md:w-[80%] relative flex flex-col items-center justify-between gap-8 z-40">
          <div className="flex flex-col items-center justify-between gap-4 w-full md:w-[80%] text-center lg:w-[50%]">
            <h2 className='leading-[44px]'>Ihr Konto ist in Gefahr. <br />
              Jetzt auf Datenleck prüfen.</h2>
            <p>Sichern Sie sich bis zu 3.320€ Entschädigung für Betroffene des  Datenlecks durch Angriffe der russischen Hackergruppe
              Lazarus Group  auf Deutsche Bank-Server.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
            <InputField
              label="Vorname"
              type='text'
              name="firstName"
              id="firstName"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            />
            <InputField
              label="Nachname"
              type='text'
              name="lastName"
              id="lastName"
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
            <InputField
              label="E-Mail-Adresse"
              type='email'
              name="emailAddress"
              id="emailAddress"
              value={userData.emailAddress}
              onChange={(e) => setUserData({ ...userData, emailAddress: e.target.value })}
            />
            <InputField
              label="Telefonnummer"
              type='text'
              name="phoneNumber"
              id="phoneNumber"
              placeholder='+491234567890'
              value={userData.phoneNumber}
              onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
            />
          </div>
          <button className={`w-full bg-[#252B42] text-white p-2 px-3 rounded-md ${disabled ? 'bg-slate-500' : ''}`} onClick={handleUserData} disabled={disabled}>Einreichen</button>
          <p> <b> Hinweis:</b> Wir verwenden Deine Mobilfunknummer und E-Mail-Adresse zur Überprüfung, ob Du von dem Datenleck bei der Deutschen Bank betroffen bist. Der Abgleich Deiner Mobilfunknummer erfolgt auf unserem Server. Eine Weitergabe an Dritte findet nicht statt. Unmittelbar nach dem Abgleich und der Übermittlung des Ergebnisses an Dich wird Deine Mobilfunknummer bei uns gelöscht. Die Verarbeitung ist im Rahmen unserer Vertragserfüllung erforderlich, da die beauftragte Überprüfung sonst nicht möglich ist, Art. 6 Abs. 1 lit. b DSGVO.</p>
        </section>
        <section className="w-full bg-teal-400 py-8 my-10">
          <div className="w-[90%] md:w-[80%] m-auto flex flex-col md:flex-row items-center justify-evenly gap-5">
            <FontAwesomeIcon icon={faClockRotateLeft} size='2xl' />
            <div className='flex flex-col items-start justify-between gap-4'>
              <h4>Achtung: Seien Sie eine der ersten Personen, die Schadensersatz erhält!</h4>
              <p>Agieren Sie zügig, um anderen einen Schritt voraus zu sein! Je schneller wir Ihre Daten überprüfen können, desto schneller ist es uns möglich, eine Klage für Sie zu erheben.</p>
            </div>
          </div>
        </section>
        <section id='video' className="flex flex-col items-center justify-between gap-3 my-10 m-auto w-[90%] md:w-[80%]">
          {/* <h3>Some heading Here</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus enim ipsam sapiente eaque numquam quo recusandae voluptate corrupti voluptas! Labore iusto modi quasi vitae voluptatibus laudantium quas culpa quis nihil, perferendis quod. Cumque id quibusdam suscipit excepturi debitis cum praesentium autem maiores itaque pariatur deserunt, laborum adipisci, consequatur aperiam illum.</p> */}
          {/* <iframe className='mt-5 min-h-[300px] md:min-h-[600px] w-full' src="https://www.youtube.com/embed/R0wnnYboa2M?si=3soi4V3J7b72A6O5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          <VideoEmbedding />
        </section>
        <section id='fragen' className="w-[90%] md:w-[80%] mb-8 relative flex flex-col items-center justlify-betwene gap-2 mt-8 z-50" py-8>
          <svg className={`absolute hidden md:block top-[-15%] right-[-10%]`} height={400} width={400} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="fill" viewBox="0,0,100,100" width="10%" height="10%"><circle cx="50" cy="50" r="12.5" fill="#c4c4c4"></circle></pattern></defs><path d="M84,64.5Q73,79,56.5,86Q40,93,28.5,79.5Q17,66,14,48.5Q11,31,26,20Q41,9,56,16.5Q71,24,83,37Q95,50,84,64.5Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
          <h3 className=''>Häufig gestellte Fragen</h3>
          <div className="flex flex-col items-start justify-between gap-4 w-full">
            {
              faqs.map((faq, key) => {
                return (
                  <div key={key} className="flex w-full md:w-[60%] m-auto flex-col items-start gap-2 justify-between  border-b border-b-gray-300 pb-4">
                    <input onClick={() => showAccordion(key)} type="checkbox" id={key} className='hidden checkbox' />
                    <label htmlFor={key} className='cursor-pointer flex flex-row items-center justify-between gap-3 checkbox-label'>
                      <FontAwesomeIcon id={`icon${key}`} icon={faChevronDown} className='h-[10px] width-[10px] rotating-icon' />
                      <h5>{faq.question}</h5>
                    </label>
                    <h6 id={`answer${key}`} className="answer px-[20px] text-justify hidden">{faq.answer}</h6>
                  </div>
                )
              })
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home

export const InputField = (props) => {
  const { label, type, name, id, value, onChange, placeholder } = props
  return (
    <div className="flex flex-col items-start justify-between gap-1 w-full">
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={value} onChange={onChange} className="w-full outline-none border border-[#c4c4c4] text-[#252B42] p-2 px-3 rounded-md" placeholder={placeholder} />
    </div>
  )
}

export const GradientSVG = () => {
  return (
    <svg className='hidden lg:block' viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="c" gradientTransform="rotate(-30 .5 .5)"><stop offset="0%" stop-color="#74EBD5" /><stop offset="100%" stop-color="#9FACE6" /></linearGradient><clipPath id="b"><path fill="currentColor" d="M819 723Q645 946 394.5 852.5t-239-344Q167 258 384.5 222t413 121Q993 500 819 723Z" /></clipPath><filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh"><feFlood flood-color="#fff" result="neutral-gray" /><feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise" /><feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise" /><feComponentTransfer in="desaturatedNoise" result="theNoise"><feFuncA type="table" tableValues="0 0 0.4 0" /></feComponentTransfer><feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" /></filter></defs><g filter="url(#a)" clip-path="url(#b)"><path fill="url(#c)" d="M819 723Q645 946 394.5 852.5t-239-344Q167 258 384.5 222t413 121Q993 500 819 723Z" /></g></svg>
  )
}

export const DottedSVG = () => {
  return (
    <svg className={`absolute top-[-5%] left-[-5%] md:top-[-10%] md:left-[-8%] h-[250px] w-[250px]  md:h-[400px] md:w-[400px]`} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="fill" viewBox="0,0,100,100" width="10%" height="10%"><circle cx="50" cy="50" r="12.5" fill="#c4c4c4"></circle></pattern></defs><path d="M84,64.5Q73,79,56.5,86Q40,93,28.5,79.5Q17,66,14,48.5Q11,31,26,20Q41,9,56,16.5Q71,24,83,37Q95,50,84,64.5Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>
  )
}
