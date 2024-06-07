'use client'

import Navbar from '@/src/utils/components/Navbar/Navbar'
import Hero from '@/src/utils/components/Hero/Hero'
import BrandingVideo from '@/src/utils/components/BrandingVideo/BrandingVideo'
import Whatwedo from '@/src/utils/components/Whatwedo/Whatwedo'
// import OurDiff from '@/src/utils/components/OurDiff/OurDiff'
import {motion, useAnimation} from 'framer-motion'
import './page.css'
// import WhoWeInvestIn from '@/src/utils/components/WhoWeInvestIn/WhoWeInvestIn'
// import HowItWorks from '@/src/utils/components/HowItWorks/HowItWorks'

export default function Home(){
    const controls = useAnimation()
    return(
        <motion.div className="app" animate={controls}>
            <Navbar/>
            <Hero/>
            <BrandingVideo/>
            <Whatwedo/>
           
        </motion.div>
    );

}
