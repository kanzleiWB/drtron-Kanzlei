import { useState, useEffect } from "react"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCirclePlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { InputField } from "@/pages";

const Index = () => {
    const [faq, setFaq] = useState({
        question: '',
        answer: ''
    })
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [getFaqs, setGetFaqs] = useState([])
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);


    const fetchFAQs = async () => {
        const response = await fetch('/api/getFaqsFromDB');
        const data = await response.json();
        if (Array.isArray(data)) {
            setGetFaqs(data);
        } else {
            setError('data is not an array')
        }
    };
    useEffect(() => {
        fetchFAQs();
    }, []);



    const addNewFAQ = () => {
        document.getElementById('editFAQ').classList.remove('hidden')
        document.getElementById('editFAQ').classList.add('flex')
    }

    const cancelAddFAQOperation = () => {
        setFaq({
            question: '',
            answer: ''
        })
        document.getElementById('editFAQ').classList.add('hidden')
    }

    const addFAQToDB = async () => {
        const data = faq;
        try {
            await fetch("/api/addFaqToDB", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((response) => response.json())
                .then((data) => {
                    setMessage('Successfully Submitted')
                    setFaq({
                        question: '',
                        answer: ''
                    })
                    document.getElementById('editFAQ').classList.add('hidden')
                })
                .catch((error) => {
                    setError('An error has occurred')
                });
        } catch (error) {
            setError('An error has occurred')
        }
        setTimeout(() => {
            setMessage('')
        }, 3000);
        setTimeout(() => {
            setError('')
        }, 3000);
        fetchFAQs();
    }
    const showAccordion = (index) => {
        document.getElementById(`answer${index}`).classList.toggle('hidden')
        document.getElementById(`icon${index}`).classList.toggle('rotating-icon')
    }
    const deleteFAQs = async () => {
        let FAQIds = []
        selectedCheckboxes.forEach((index) => {
            FAQIds.push(getFaqs[index].question)
        })
        if (FAQIds.length === 0) {
            alert('Please select at least one FAQ');
        } else {
            const response = await fetch('/api/deleteFAQs', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ FAQIds })
            });
            if (response.status === 200) {
                setMessage('successfully deleted FAQ(s)')
            } else {
                setError('Failed to delete FAQ(s)')
            }
        }
        setTimeout(() => {
            setMessage('')
        }, 3000);
        setTimeout(() => {
            setError('')
        }, 3000);
        fetchFAQs()
    }
    const handleRowCheckboxChange = (e, index) => {
        const isChecked = e.target.checked;
        const updatedCheckboxes = [...selectedCheckboxes];
        if (isChecked) {
            if (!updatedCheckboxes.includes(index)) {
                updatedCheckboxes.push(index);
            }
        } else {
            const updatedCheckboxesIndex = updatedCheckboxes.indexOf(index);
            updatedCheckboxes.splice(updatedCheckboxesIndex, 1);
        }
        setSelectedCheckboxes(updatedCheckboxes);
    };
    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center gap-8 my-8'>
            <h5 className={`bg-green-600 text-white px-5 py-3 border rounded-md fixed z-50 top-[50px] w-[90%] md:w-[80%] right-[10%] ${message === '' ? 'hidden' : ''}`}>{message}</h5>
            <h5 className={`bg-red-600 text-white px-5 py-3 border rounded-md fixed z-50 top-[50px] w-[90%] md:w-[80%] right-[10%] ${error === '' ? 'hidden' : ''}`}>{error}</h5>
            <section className='w-[90%] md:w-[80%] flex flex-col md:flex-row items-center justify-start gap-5'>
                <button onClick={addNewFAQ} className='bg-blue-600 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2'>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    <p>Add New Question</p>
                </button>
                <button onClick={deleteFAQs} className='bg-red-600 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2'>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <p>Delete Questions</p>
                </button>
            </section>
            <section id="editFAQ" className="w-[90%] md:w-[80%] hidden input-fields flex-col items-start justify-between gap-3">
                <InputField label="Question" type="text" name="question" id="question" value={faq.question} onChange={(e) => setFaq({ ...faq, question: e.target.value })} />
                <div className="flex flex-col items-start justify-between gap-1 w-full">
                    <label htmlFor='faqAnswer'>Answer</label>
                    <textarea name="faqAnswer" id="faqAnswer" cols="30" rows="5" value={faq.answer} className="w-full outline-none border border-[#c4c4c4] text-[#252B42] p-2 px-3 rounded-md" onChange={(e) => setFaq({ ...faq, answer: e.target.value })}></textarea>
                </div>
                <div className="flex flex-row items-center gap-4 justify-end w-full">
                    <button onClick={cancelAddFAQOperation} className="bg-slate-500 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2">Cancel</button>
                    <button onClick={addFAQToDB} className="bg-green-600 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2">Add</button>
                </div>
            </section>
            <section className="w-[90%] md:w-[80%] flex flex-col items-center justify-between gap-3">
                <h3>Frequently Asked Questions</h3>
                <div className="flex flex-col items-start justify-between gap-4 w-full">
                    {
                        getFaqs.map((faq, key) => {
                            return (
                                <div key={key} className="flex flex-row items-start justify-between gap-3 w-full">
                                    <label className="control control-checkbox pt-5">
                                        <input type="checkbox" onChange={(e) => handleRowCheckboxChange(e, key)} className='table-body-checkbox' />
                                        <div className="control_indicator"></div>
                                    </label>
                                    <div key={key} className="flex w-full m-auto flex-col items-start gap-2 justify-between  border-b border-b-gray-300 pb-4">
                                        <input onClick={() => showAccordion(key)} type="checkbox" id={key} className='hidden checkbox' />
                                        <label htmlFor={key} className='cursor-pointer flex flex-row items-center justify-between gap-3 checkbox-label'>
                                            <FontAwesomeIcon id={`icon${key}`} icon={faChevronDown} className='h-[10px] width-[10px] rotating-icon' />
                                            <h5>{faq.question}</h5>
                                        </label>
                                        <h6 id={`answer${key}`} className="answer px-[20px] text-justify hidden">{faq.answer}</h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Index