import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-toastify'
import { BASE_URL,  } from '../BASE_URL';
import * as XLSX from 'xlsx';


const ContactList = () => {
    const [contactsData, setContactsData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetchContacts();
        fetchUsers()
    }, []);



    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/apis/v1/contact-form/`);
            setContactsData(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/apis/v1/users/`);
            setUsersData(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };



    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd-MM-yyyy');
    };

    const handleAssignedContactChange = (rowIndex, selectedContact) => {
        const updatedData = [...contactsData];
        updatedData[rowIndex].assigned_contact = selectedContact;

        console.log(selectedContact, "hkygf", updatedData[rowIndex])



        axios
            .patch(`${BASE_URL}/apis/v1/contact-form/${updatedData[rowIndex].contact_id}/`, { assigned_contact: selectedContact }, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem("access")}`,
                    'Content-Type': 'application/json', // You can set other headers as needed
                },
            })
            .then((response) => {
                // Handle the response here
                console.log(response.data);
            })
            .catch((error) => {
                // Handle errors here
                console.error(error);
            });
        // You can also make an API call to update it on the server
    };

    const handleDeleteContact = (contactId) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            // Perform the delete operation here
            axios
                .delete(`${BASE_URL}/apis/v1/contact-form/${contactId}/`,
                    // {
                    //     headers: {
                    //         'Authorization': `Bearer ${sessionStorage.getItem("access")}`,
                    //         'Content-Type': 'application/json',
                    //     },
                    // }
                )
                .then((response) => {
                    // Handle the successful deletion, and then refresh the data
                    toast.success("Contact deleted successfully");
                    fetchContacts(); // Refresh the contacts data
                })
                .catch((error) => {
                    toast.error("Error deleting contact");
                    console.error(error);
                });
        }
    };

    const exportToExcel = () => {
        const dataToExport = contactsData.map((dataItems) => ({
            'S.No': dataItems.contact_id,
            'First Name': dataItems.first_name,
            'Last Name': dataItems.last_name,
            'Phone Number': dataItems.phonenumber,
            'Email': dataItems.email,
            'State': dataItems.state,
            'City': dataItems.city,
            'Query Solved': dataItems.query_solved ? 'True' : 'False',
            'Date of Creation': formatDate(dataItems.date_time),
            'Assigned Contact': dataItems.assigned_contact,
        }));

        const ws = XLSX.utils.json_to_sheet(dataToExport);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'ContactList');

        // Generate a unique filename for the Excel file
        const fileName = `ContactList_${format(new Date(), 'yyyyMMddHHmmss')}.xlsx`;

        // Create a blob containing the Excel file
        XLSX.writeFile(wb, fileName);
    };


    return (
        <div className="min-h-screen flex  bg-gray-100">
            <div className="w-full max-w-4xl ml-5">

                <div className="mb-4">
                    <button onClick={exportToExcel} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        Export to Excel
                    </button>
                </div>

                <h1 className="text-2xl font-semibold mb-4">User List</h1>
                <div className="overflow-x-auto" style={{ width: "130%" }}>
                    <table className="min-w-full bg-white border rounded-lg" style={{ maxHeight: '400px' }}>
                        <thead>
                            <tr>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">S.No</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">First Name</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Last Name</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Phone Number</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Email</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">State</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">City</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Query Solved</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Date of Creation</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Assigned Contact</th>
                                <th className="bg-blue-100 border text-left text-gray-600 px-4 py-2">Delete</th> {/* New column header */}
                            </tr>
                        </thead>
                        <tbody>
                            {contactsData.map((dataItems, rowIndex) => (
                                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
                                    <td className="border px-4 py-2">{rowIndex + 1}</td>
                                    <td className="border px-4 py-2">{dataItems.first_name}</td>
                                    <td className="border px-4 py-2">{dataItems.last_name}</td>
                                    <td className="border px-4 py-2">{dataItems.phonenumber}</td>
                                    <td className="border px-4 py-2">{dataItems.email}</td>
                                    <td className="border px-4 py-2">{dataItems.state}</td>
                                    <td className="border px-4 py-2">{dataItems.city}</td>
                                    <td className="border px-4 py-2">{dataItems.query_solved ? "True" : "False"}</td>
                                    <td className="border px-4 py-2">{formatDate(dataItems.date_time)}</td>
                                    <td className="border px-4 py-2">
                                        <select
                                            value={dataItems.assigned_contact || ''}
                                            onChange={(e) => handleAssignedContactChange(rowIndex, e.target.value)}
                                            className="w-full"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            {usersData.map((contact, index) => (
                                                <option key={index} value={contact?.user_id}>
                                                    {contact?.full_name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button onClick={() => handleDeleteContact(dataItems.contact_id)} className="text-red-500">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContactList;
