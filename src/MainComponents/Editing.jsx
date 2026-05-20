import way1 from '../assets/way1.png'
import way2 from '../assets/way2.png'
import way3 from '../assets/way3.png'
import EditingSub from '../SubComponents/EditingSub'

const Editing = () => {
  return (
    <div className='mt-40 flex flex-col gap-y-8 items-center justify-center'>
        <div className='flex flex-col gap-y-7 items-center justify-center'>
            <p className=' text-md text-secondary font-primary uppercase text-center'>a modern editing experience</p>
            <h1 className='text-3xl max-w-[70%] font-primary text-center font-normal text-primary'>Edit video the way you design.</h1>
            <p className='text-md font-primary max-w-[55%] font-normal text-secondary text-center'>Editing was overdue for a rethink. We rebuilt it around the way modern design tools work. Familiar, intuitive, and capable.</p>
        </div>
        <div className='mt-7 flex gap-x-4 w-[80%] '>
            <EditingSub tittle={"Precise property control"} des={"Adjust timing, position, scale, and layout from a single inspector."} image={way1}/>
            <EditingSub tittle={"Effects and audio built in"} des={"Stack visual effects, mix audio, and apply filters without leaving the editor."} image={way2}/>
            <EditingSub tittle={"Craft the feel"} des={"Bezier curves, spring easing, and motion presets. Every move, intentional."} image={way3}/>
        </div>
    </div>
  )
}

export default Editing