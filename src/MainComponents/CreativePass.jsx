import image1 from '../assets/pricingimg1.png'
import image2 from '../assets/pricingimg2.png'
import Button3 from '../SubComponents/Button3'

const CreativePass = () => {
  return (
    <div className='mt-60 mb-2  flex justify-between '>
        <div className='flex flex-col gap-y-2.5 justify-center items-center w-1/2'>
            <img className='rounded-2xl' src={image1} alt="Searching for image" />
            <img className='w-[40%] rounded-2xl' src={image2} alt="Searching for image" />
        </div>
        <div className='flex flex-col gap-y-7 w-[47%]'>
            <p className=' text-lg text-secondary font-primary uppercase '>Full Creative Pass</p>
            <h1 className='text-3xl max-w-[70%] font-primary  font-normal text-primary'>From raw assets to export, without switching tools.</h1>
            <p className='text-lg font-primary max-w-[55%] font-normal text-secondary'>From import to export, everything lives in one workspace, build scenes, edit on the timeline, and stay focused on the work.</p>
            <Button3 text={"view Pricing"} />
        </div>
    </div>
  )
}

export default CreativePass