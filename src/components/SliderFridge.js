import React from 'react'
import {motion} from 'framer-motion'

import fridge from '../images/fridge-ico.png'
import statistics from '../images/statistics-ico.png'
import heart from '../images/heart-ico.png'


export const SliderFridge = () => {
    return (
            <motion.div className="Categories-page-fridge"
            initial={{opacity: 0, x:100}}
            animate={{opacity:1, x:0, transition: {duration: 1}}} 
            >
                <div className="Categories-page-fridge__tech">
                    <img src={fridge} alt="" />
                </div>
                <div className="Categories-page-fridge__desc">
                    <p>Холодильник Beko 289</p>
                    <h4>15 699 руб</h4>
                    <div className="Categories-page-fridge__desc-local">
                        <div className="Categories-page-fridge__desc-local--item">
                            <img src={statistics}/><img src={heart}/>
                        </div>
                        <motion.button 
                            className="btn btn-enter"
                            whileHover={{scale: 1.1, backgroundColor:'#fe7f2e', color: '#000'}}
                            whileTap={{scale: 0.95}}
                            transition={{duration: 0.3}}
                            >В корзину
                        </motion.button>
                    </div>
                </div>
            </motion.div>        
    )
}
