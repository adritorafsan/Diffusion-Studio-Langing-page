import hero from '../assets/hero.png'
import Button2 from '../SubComponents/Button2'
import labs from '../assets/labs.svg'
import adobe from '../assets/adobe.svg'
import apache from '../assets/apache.svg'
import bytedance from '../assets/bytedance.svg'
import deno from '../assets/deno.svg'
import nyu from '../assets/nyu.svg'
import shopify from '../assets/shopify.svg'
import Twitter from '../assets/Twitter.svg'


const Hero = () => {
    const Logos =[
        labs,
        adobe,
        apache,
        bytedance,
        deno,
        nyu,
        shopify,
        Twitter
    ]
    return (
        <div className='flex flex-col justify-center gap-y-20 mt-20 mb-10'>
            <div className='flex flex-col gap-y-9 pl-2 ml-10'>
                <p className='text-xl font-primary text-[#fa413e] font-medium'>NOW IN OPEN ALPHA</p>
                <h1 className='text-4xl font-primary font-normal max-w-[38%] text-primary'>The creative platform for video and motion graphics.</h1>
                <p className='text-secondary text-pretty max-w-[27%]'>Create, edit, and iterate faster, right in your browser. A canvas for creative freedom, built for creators.</p>
                <Button2 text={"open in browser"}  />
            </div>
            <div className='flex justify-center items-center'>
                <img className='max-w-[110%]' src={hero} alt="Hero" />
            </div>
            <div>
                <p className=' uppercase font-primary text-sm text-secondary text-center'>Folks onboarded from</p>
                <div className='flex items-center justify-center gap-x-20 mt-9'>
                    {Logos.map((logo,index)=>{
                        return <img src={logo} alt='company logo' key={index} className='w-[40px] object-contain' />
                    })}
                
                </div>
            </div>
        </div>
    )
}

export default Hero