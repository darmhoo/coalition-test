function DiagnosticList({ detail }) {

    return (
        <div className='bg-white flex flex-col p-5 rounded-md gap-10'>
            <h2 className='font-bold text-2xl'>Diagnostic List</h2>
            <div className='flex flex-col gap-5'>
                <div className='flex justify-between gap-10 bg-[#F6F7F8] font-bold py-3 px-3 rounded-full'>
                    <div className='w-1/5'>Problem/Diagnosis</div>
                    <div className='w-3/5'>Description</div>
                    <div className='w-1/5'>Status</div>
                </div>

                {detail.diagnostic_list.map((item, index) => (
                    <div className='flex justify-between gap-10 py-3 px-3' key={index}>
                        <div className='w-1/5'>{item.name}</div>
                        <div className='w-3/5'>{item.description}</div>
                        <div className='w-1/5'>{item.status}</div>
                    </div>
                ))}
            </div>


        </div>

    )
}

export default DiagnosticList
