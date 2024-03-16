'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faDownload } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const index = () => {
    const [users, setUsers] = useState([]);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const fetchUsers = async () => {
        const response = await fetch('/api/getUsersData');
        const data = await response.json();
        if (Array.isArray(data)) {
            setUsers(data);
        } else {
            console.log('data is not an array');
        }
    };
    useEffect(() => {
        console.log(users);
        fetchUsers();
    }, []);

    const handleHeaderCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            const allCheckboxes = Array.from(document.querySelectorAll('.table-body-checkbox')).map((checkbox, index) => {
                checkbox.checked = true;
                return index;
            });
            setSelectedCheckboxes(allCheckboxes);
        } else {
            setSelectedCheckboxes([]);
            const allCheckboxes = Array.from(document.querySelectorAll('.table-body-checkbox')).map((checkbox, index) => {
                checkbox.checked = false;
            });
        }
    };

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

    const generateData = (selectedCheckboxes) => {
        const headers = [
            'First Name', 'Last Name', 'Phone Number', 'Email Address'
        ];

        const data = [headers]

        selectedCheckboxes.forEach((index) => {
            const firstName = users[index].firstName;
            const lastName = users[index].lastName;
            const phoneNumber = users[index].phoneNumber;
            const emailAddress = users[index].emailAddress;

            data.push([firstName, lastName, phoneNumber, emailAddress]);
        });

        return data;
    };

    const generateExcelFile = (data, fileName) => {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, fileName);
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        saveAs(new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), `${fileName}.xlsx`);
    };

    const handleExport = () => {
        const newCheckBoxes = selectedCheckboxes;
        if (newCheckBoxes.length === 0) {
            alert('Please select at least one user');
        } else {
            const data = generateData(newCheckBoxes);
            const fileName = 'users'
            generateExcelFile(data, fileName);
        }
    };

    const deleteUsers = async () => {
        let userIds = []
        selectedCheckboxes.forEach((index) => {
            userIds.push(users[index].emailAddress)
        })
        if (userIds.length === 0) {
            alert('Please select at least one user');
        } else {
            const response = await fetch('/api/deleteUsers', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userIds })
            });
        }
        fetchUsers()
    }
    return (
        <main className='w-full min-h-screen flex flex-col items-center justify-center gap-8'>
            <section className='w-[80%] flex flex-row items-center justify-start gap-5'>
                <button onClick={handleExport} className='bg-blue-600 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2'>
                    <FontAwesomeIcon icon={faDownload} />
                    <p>Export Users</p>
                </button>
                <button onClick={deleteUsers} className='bg-red-600 text-white px-5 py-2 btn-text border rounded-md font-bold flex flex-row items-center justify-between gap-2'>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <p>Delete Users</p>
                </button>
            </section>
            <section className="w-[80%]">
                <table className="w-full">
                    <thead className="flex flex-row items-center justify-between gap-5 border-b py-2 px-5">
                        <label className="control control-checkbox py-2">
                            <input type="checkbox" onChange={handleHeaderCheckboxChange} />
                            <div className="control_indicator"></div>
                        </label>
                        <h4 className="text-xl font-bold grow basis-1/6">First Name</h4>
                        <h4 className="text-xl font-bold grow basis-1/6">Last Name</h4>
                        <h4 className="text-xl font-bold grow basis-1/6">Phone Number</h4>
                        <h4 className="text-xl font-bold grow basis-1/6">Email Address</h4>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index} >
                                    <p className={`flex flex-row items-center justify-between gap-5 py-2 px-5`}>
                                        <label className="control control-checkbox pt-5">
                                            <input type="checkbox" onChange={(e) => handleRowCheckboxChange(e, index)} className='table-body-checkbox' />
                                            <div className="control_indicator"></div>
                                        </label>
                                        <td className="basis-1/6 grow">{user.firstName}</td>
                                        <td className="basis-1/6 grow">{user.lastName}</td>
                                        <td className="basis-1/6 grow">{user.phoneNumber}</td>
                                        <td className="basis-1/6 grow">{user.emailAddress}</td>
                                    </p>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default index