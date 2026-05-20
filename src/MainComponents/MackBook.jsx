import macbook from '../assets/macbook.png'
import { Claude, Google, Figma } from '@lobehub/icons'
import diffusion from '../assets/diffusion.png'
import trash from '../assets/trash.png'

const MackBook = () => {
  return (
    <div className="mt-20 flex flex-col gap-y-6 ">
        <div className="flex flex-col gap-y-6 items-center mb-3">
            <p className=" uppercase text-lg font-primary text-secondary">Coming Soon</p>
            <h1 className="text-3xl font-primary text-primary">Diffusion Studio for  Mac</h1>
            <p className="text-center text-md text-secondary font-primary max-w-[30%]">The full creative platform, on your desktop with MCP support. Soon, your AI agents can work alongside you.</p>
        </div>
        <div className="flex flex-col gap-y-4 rounded-xl px-12 pt-10 pb-6 bg-radial-[at_40%_10%] from-gray-800 via-blue-400 to-indigo-700 to-97% ">
            <div className="flex items-center justify-center">
                <img src={macbook} alt="MacBook" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div className='flex justify-center items-center'>

            <div className='flex gap-x-3 p-3 bg-blue-800/20 w-fit items-center justify-center rounded-3xl '>
                <div className='flex flex-col items-center gap-y-2'>
                  <Claude size={56} color="#D97757" className='bg-white p-1.5 rounded-lg hover:-translate-y-1.5 transform transition-transform ease-in duration-100' />
                  <p className='size-[6px] rounded-full bg-primary'></p>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                  <Google size={56}  color='#00A4EF'className='bg-white p-1.5 rounded-lg hover:-translate-y-1.5 transform transition-transform ease-in duration-100' />
                  <p className='size-[6px] rounded-full bg-primary'></p>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                  <Figma size={56}  color='#2468F2' className='bg-white p-1.5 rounded-lg hover:-translate-y-1.5 transform transition-transform ease-in duration-100'/>
                  <p className='size-[6px] rounded-full bg-primary'></p>
                </div>
                <div className='flex flex-col items-center gap-y-2 border-r-2 border-r-primary/40  pr-3'>
                 <img src={diffusion} alt="diffusion" className='bg-white p-1.5 rounded-lg size-[56px] hover:-translate-y-1.5 transform transition-transform ease-in duration-100'/>
                  <p className='size-[6px] rounded-full bg-primary'></p>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                  <img src={trash} alt="trash" className=' p-1.5 bg-white rounded-lg size-[56px] hover:-translate-y-1.5 transform transition-transform ease-in duration-100'/>
                  <p className='size-[6px] rounded-full bg-primary'></p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MackBook