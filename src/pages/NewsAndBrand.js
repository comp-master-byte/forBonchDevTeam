import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group'
import { motion } from 'framer-motion'

import radio from '../icons/radio.png'
import watches from '../icons/watches.png'
import camera from '../icons/camera.png'
import fen from '../icons/fen.png'

import lg from '../icons/lg.png'
import bosch from '../icons/bosch.png'
import philips from '../icons/philips.png'
import haier from '../icons/haier.png'
import samsung from '../icons/samsung.png'
import sony from '../icons/sony.png'

import { BrandSlider } from '../components/BrandSlider'


const elements = [
    {img:radio, text:'Набор радиостанций Aceline G1', price:'1 299 руб'},
    {img:watches, text:'Фитнес-браслет BQ Fit 2.0', price:'670 руб'},
    {img:camera, text:'Видеокамера Rekam DVC-360 ', price:'4 899 руб'},
    {img:fen, text:'Фен DEXP HD-1000', price:'599 руб'},
]


export const NewsAndBrand = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="brand">
            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                className="brand-hide">
                <h2>Новинки</h2>
                <button onClick={() => setShow(!show)}>{show ? 'Скрыть несколько рядов' : 'Показать все'}</button>
            </motion.div>

            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                className="brand-flex-column">
                <motion.div 
                    
                    className="brand-flex-row">
                    {elements.map((info, index) => {
                        return <BrandSlider data={info} key={index}/>
                    })}
                </motion.div>
                <CSSTransition in={show} classNames="alert" timeout={300} unmountOnExit>
                    <div className="brand-flex-row">
                        {elements.map((info, index) => {
                            return <BrandSlider data={info} key={index}/>
                        })}
                    </div>
                </CSSTransition>  
                <CSSTransition in={show} classNames="alert" timeout={300} unmountOnExit>
                    <div className="brand-flex-row">
                        {elements.map((info, index) => {
                            return <BrandSlider data={info} key={index}/>
                        })}
                    </div>
                </CSSTransition>  
            </motion.div>

            <motion.h2 
                initial={{opacity: 0, x: 100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
            >Брэнды</motion.h2>
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                className="brand-logo" >
                <motion.img 
                    whileHover={{scale: 1.05, cursor: 'pointer'}}
                    transition={{duration: 0.3}}
                    src={lg} alt="" />
                <motion.img
                    whileHover={{scale: 1.05, cursor: 'pointer'}}
                    transition={{duration: 0.3}}
                    src={bosch} alt="" />
                <motion.img
                    whileHover={{scale: 1.05, cursor: 'pointer'}}
                    transition={{duration: 0.3}}
                    src={philips} alt="" />
                <motion.img
                    whileHover={{scale: 1.05, cursor: 'pointer'}}
                    transition={{duration: 0.3}}
                    src={haier} alt="" />
                <motion.img
                    whileHover={{scale: 1.05, cursor: 'pointer'}}
                    transition={{duration: 0.3}}
                    src={samsung} alt="" />
                <motion.img
                    whileHover={{scale: 1.05, cursor: 'pointer'}}
                    transition={{duration: 0.3}}
                    src={sony} alt="" />
            </motion.div>
        </div>
    )
}
