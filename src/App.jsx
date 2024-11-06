import { useEffect, useState } from 'react'

import Header from './components/Header'
import PatientList from './components/PatientList'
import axios from 'axios';
import PatientDetail from './components/PatientDetail'
import LabResult from './components/LabResult';
import DiagnosticHistory from './components/DiagnosticHistory';
import DiagnosticList from './components/DiagnosticList';

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  let username = import.meta.env.VITE_BASIC_USERNAME;
  let password = import.meta.env.VITE_BASIC_PASSWORD;
  
  const getData = async () => {
    let auth = 'Basic ' + btoa(`${username}:${password}`);
    try {
      let res = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          'Authorization': auth
        }
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {loading ? (<div></div>) : (
        <div className='bg-[#F6F7F8] p-5 flex flex-col gap-5'>
          <Header />
          <div className='flex gap-5'>
            <div className='w-1/5 mt-5'>
              <PatientList patientList={data} />
            </div>
            <div className='w-3/5 mt-5 flex flex-col gap-5'>
              <DiagnosticHistory  detail={data[3]}/>
              <DiagnosticList detail={data[3]}/>
            </div>
            <div className='w-1/5 flex flex-col gap-5'>
              <PatientDetail detail={data[3]} />
              <LabResult detail={data[3]} />
            </div>
          </div>

        </div>
      )}


    </>
  )
}

export default App
