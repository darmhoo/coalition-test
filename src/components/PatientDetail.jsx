import femaleIcon from '../assets/FemaleIcon.svg';
import birthIcon from '../assets/BirthIcon.svg';
import insuranceIcon from '../assets/InsuranceIcon.svg';
import phoneIcon from '../assets/PhoneIcon.svg';



function PatientDetail({ detail }) {

    return (
        <div className='bg-white flex flex-col p-5 rounded-md gap-10'>
            <div className='self-center flex flex-col gap-5 '>
                <div>
                    <img src={detail.profile_picture} width={200} />
                </div>
                <div className='text-center font-bold text-2xl'>
                    {detail.name}
                </div>
            </div>

            <div className='flex gap-3'>
                <div><img src={birthIcon} /></div>
                <div>
                    <div>Date of Birth</div>
                    <div>{detail.date_of_birth}</div>
                </div>
            </div>
            <div className='flex gap-3'>
                <div><img src={femaleIcon} /></div>
                <div>
                    <div>Gender</div>
                    <div>{detail.gender}</div>
                </div>
            </div>

            <div className='flex gap-3'>
                <div><img src={phoneIcon} /></div>
                <div>
                    <div>Contact Info</div>
                    <div>{detail.phone_number}</div>
                </div>
            </div>

            <div className='flex gap-3'>
                <div><img src={phoneIcon} /></div>
                <div>
                    <div>Emergency Contacts</div>
                    <div>{detail.emergency_contact}</div>
                </div>
            </div>

            <div className='flex gap-3'>
                <div><img src={insuranceIcon} /></div>
                <div>
                    <div>Insurance Provider</div>
                    <div>{detail.insurance_type}</div>
                </div>
            </div>

            <div className='self-center bg-[#01F0D0] rounded-full py-2 px-5'>
                Show All Information
            </div>


        </div>

    )
}

export default PatientDetail
