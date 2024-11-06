import { Ellipsis, Search} from 'lucide-react';

import emPng from '../assets/Layer 8.png';
import ryPng from '../assets/Layer 1.png';
import BrPng from '../assets/Layer 3.png';
import JsPng from '../assets/Layer 2.png';
import SjPng from '../assets/Layer 6.png';
import AmPng from '../assets/Layer 12.png';
import ObPng from '../assets/Layer 10.png';
import TdPng from '../assets/Layer 9.png';
import KaPng from '../assets/Layer 4.png';
import DtPng from '../assets/Layer 5.png';
import NePng from '../assets/Layer 7.png';
import MnPng from '../assets/pexels-photo-1222271.png';

function PatientList({patientList}) {
    const patients = [
        { name: "Emily Williams", gender: 'Female', age: 18, img: emPng },
        { name: "Ryan Johnson", gender: 'Male', age: 45, img: ryPng },
        { name: "Brandon Mitchell", gender: 'Male', age: 36,  img: BrPng},
        { name: "Jessica Taylor", gender: 'Female', age: 28, img: JsPng, active: true },
        { name: "Samantha Johnson", gender: 'Female', age: 56, img: SjPng },
        { name: "Ashley Martinex", gender: 'Female', age: 54, img: AmPng },
        { name: "Olivia Brown", gender: 'Female', age: 32, img: ObPng },
        { name: "Tyler Davis", gender: 'Male', age: 19, img: TdPng },
        { name: "Kevin Anderson", gender: 'Male', age: 30, img: KaPng },
        { name: "Dylan Thompson", gender: 'Male', age: 36, img: DtPng },
        { name: "Nathan Evans", gender: 'Male', age: 58, img: NePng },
        { name: "Mike Nolan", gender: 'Male', age: 58, img: MnPng },
    ]

    return (
        <div className='bg-white p-5 rounded-md'>
            <div className='flex justify-between my-3 p-3'>
                <h2 className='text-2xl'>Patients</h2>
                <div><Search /></div>
            </div>
            <div className='flex flex-col gap-5'>
                {patients.map((patient, index) => (
                    <div className='flex justify-between items-center p-3 cursor-pointer' key={index} style={{
                        backgroundColor: patient.active ? '#D8FCF7' : 'white'
                    }}>
                        <div className='flex gap-3'>
                            <div>
                                <img src={patient.img} alt="img"  />
                            </div>
                            <div>
                                <div>{patient.name}</div>
                                <div>{patient.gender}, {patient.age}</div>
                            </div>
                        </div>
                        <div><Ellipsis /></div>
                    </div>
                ))}
            </div>


        </div>

    )
}

export default PatientList
