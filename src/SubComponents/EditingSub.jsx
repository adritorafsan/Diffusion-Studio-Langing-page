

const EditingSub = ({ tittle, des, image }) => {
    return (
        <div className='flex flex-col  w-[85%] gap-y-2 py-4 justify-between items-center bg-radial-[at_40%_10%] from-gray-800 via-blue-400 to-indigo-700 to-97%  rounded-md '>
            <h1 className='text-xl  w-[80%] font-primary text-pretty text-primary text-center'>{tittle}</h1>
            <p className='text-sm  w-[70%] text-center text-secondary font-primary'>{des}</p>
            <img className='mt-3 rounded-xl' src={image} alt="image" />
        </div>
    )
}

export default EditingSub