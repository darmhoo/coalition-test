import { Dot } from 'lucide-react';
import HeartBpm from '../assets/HeartBPM.svg';
import respiratory from '../assets/respiratory rate.svg';
import temperature from '../assets/temperature.svg';
import LineChart from './LineChart';



function DiagnosticHistory({ detail }) {

    return (
        <div className='bg-white flex flex-col p-5 rounded-md gap-10'>
            <h2 className='font-bold text-2xl'>Diagnostic History</h2>

            <div className='flex flex-col gap-5 '>
                <div className='flex bg-[#F4F0FE] p-5 rounded-lg'>
                    <div className='w-2/3'><LineChart chartData={detail.diagnosis_history} /></div>

                    <div className='w-1/3 flex flex-col gap-5'>
                        <div className='flex flex-col justify-start gap-2 py-5 border border-[#CBC8D4] border-t-0 border-l-0 border-r-0 ' >
                            <div className='flex items-center'>
                                <div className='w-1/12'><Dot size={30} color='#E66FD2' /></div> Systolic

                            </div>
                            <div className='font-bold text-3xl px-5'>
                                {detail.diagnosis_history[0].blood_pressure.systolic.value}
                            </div>
                            <div className='px-5 font-light'>
                                {detail.diagnosis_history[0].blood_pressure.systolic.levels}
                            </div>
                        </div>
                        <div className='flex flex-col justify-start gap-3' >
                            <div className='flex items-center'>
                                <div className='w-1/12 py-0' ><Dot size={30} color='#8C6FE6' /></div> Diastolic
                            </div>
                            <div className='font-bold text-3xl px-5'>
                                {detail.diagnosis_history[0].blood_pressure.diastolic.value}
                            </div>
                            <div className='px-5 font-light'>
                                {detail.diagnosis_history[0].blood_pressure.diastolic.levels}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='bg-[#E0F3FA] w-1/3 p-5 rounded-lg flex flex-col gap-5'>
                        <div>
                            <img src={respiratory} width={150} />
                        </div>
                        <div>Respiratory Rate <div className='font-extrabold text-3xl'>{detail.diagnosis_history[0].respiratory_rate.value} bpm</div></div>
                        <div>{detail.diagnosis_history[0].respiratory_rate.levels}</div>
                    </div>
                    <div className='bg-[#FFE6E9] w-1/3 p-5 rounded-lg flex flex-col gap-5'>
                        <div>
                            <img src={temperature} width={150} />
                        </div>
                        <div>Temperature <div className='font-extrabold text-3xl'>{detail.diagnosis_history[0].temperature.value} bpm</div></div>
                        <div>{detail.diagnosis_history[0].temperature.levels}</div>
                    </div>
                    <div className='bg-[#FFE6F1] w-1/3 p-5 rounded-lg flex flex-col gap-5'>
                        <div>
                            <img src={HeartBpm} width={150} />
                        </div>
                        <div>Respiratory Rate <div className='font-extrabold text-3xl'>{detail.diagnosis_history[0].heart_rate.value} bpm</div></div>
                        <div>{detail.diagnosis_history[0].heart_rate.levels}</div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default DiagnosticHistory
