import React, { useState } from 'react';
import Nabvar from './Nabvar';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [employees, setEmployees] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        companyName,
        websiteUrl,
        employees,
        country,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error submitting form');
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
        alert('Error submitting form: ' + error.message);
      });
  };

  return (

    <div>
      <Nabvar/>

    <div className="max-w-md sm:min-w-[80vw] sm:bg-gray-200  flex flex-col items-center justify-center  mx-auto p-4 pt-6 pb-8 mb-4 mt-5  rounded shadow-md">
      
      <h1 className="text-3xl font-bold mb-4">Company Information Form</h1>
      <form onSubmit={handleSubmit}>

       <div className='sm:flex sm:gap-5'>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold w-full sm:w-[40%] mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        


        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm  font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        </div> 



    <div className='sm:flex sm:gap-5'>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>

        </div>   


<div className='sm:flex sm:gap-5'>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="websiteUrl"
          >
            Website URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="websiteUrl"
            type="url"
            value={websiteUrl}
            onChange={(event) => setWebsiteUrl(event.target.value)}
          />
        </div>

        </div>     


<div className='sm:flex sm:gap-5'>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="employees"
          >
            Employees
          </label>
          <select
             className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            id="employees"
            value={employees}
            onChange={(event) => setEmployees(event.target.value)}
          >
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="501+">501+</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country of Company Headquarters
          </label>
          <select
            className="shadow appearance-none border rounded w-full sm:w-[20vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            type="text"
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="">Select</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
        </div>
        </div>


        <button
          className="bg-orange-500 hover:bg-orange-700 mx-auto  text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;