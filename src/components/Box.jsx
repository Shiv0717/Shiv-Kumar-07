import {React,useRef} from 'react'
import { motion,useInView } from "motion/react"

const Box = ({tool,use,img}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 4 }}>
       <div className='flex items-center gap-3 ml-5 mr-5 border pr-7 lg:pr-9'>
       <div>
         <motion.img  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}  className='w-12' src={img}></motion.img>
       </div>
       
       <div>
            <h1 className='text-sm' >{tool}</h1>
            <h1 className='text-sm text-zinc-500' >{use}</h1>
       </div>
       </div>
    </motion.div>
  )
}

export default Box 