import { Download } from 'lucide-react';



function LabResult({ detail }) {

    return (
        <div className='bg-white flex flex-col p-5 rounded-md gap-10'>
            <h2 className='font-bold text-2xl'>Lab Results</h2>
            <div className='flex flex-col gap-5'>

            {detail.lab_results.map((item, index) => (
                <div key={index} className='flex justify-between'>{item} <Download /></div>
            ))}
            </div>

            
        </div>

    )
}

export default LabResult
