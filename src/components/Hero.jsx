import {motion} from 'framer-motion'

import {styles} from '../style'
import { ModelCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4de1ee]'/>
          <div className='w-1 sm:h-80 h-40 cyan-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hey, I am <span className='text-[#4de1ee]'>Sunil Sapkota</span></h1>
          <p className={`${styles.heroSubText}`}>I develop Games and Apps<br className='sm:block hidden'/> along with Full-stacked Websites.</p>
        </div>
      </div>

      <ModelCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
            animate={{y:[0,24,0]}}
            transition={{duration:1.5, repeat:Infinity, repeatType:'loop'}}
            className='w-3 h-3 rounded-full mb-1 bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero