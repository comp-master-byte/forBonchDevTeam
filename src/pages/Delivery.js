import React from 'react'
import { motion } from 'framer-motion'
import DeliveryBox from '../components/DeliveryBox'

import tri from '../images/triangle-1.png'

const elements = [
    {   bold: 'Доставка день в день в пределах КАД в течение дня с 13:00 до 23:00:', 
        text:'до 5 кг - 390 руб. от 5 до 15 кг - 490 руб. от 15 до 100 кг - 890 рубот 100 до 200 кг - 1400 рубот 200 до 260 кг - 2800 руб.', 
        deadline:'Заявки принимаются до 17:00.'},

    {   bold: 'Доставка день в день в пределах КАД в течение 3 часов:', 
    text:'до 5 кг - 540 руб. от 5 до 10 кг - 610 руб. от 10 до 25 кг - 780 руб.от 25 до 100 кг - 1350 руб.от 100 до 200 кг - 2200 руб.от 200 до 500 кг - 4700 руб.', 
    deadline:'Заявки принимаются до 19:00.'},

    {   bold: ' Доставка на следующий день:', 
    text:'Санкт-Петербург (в пределах КАД + 5км.) от 290руб.Ленинградская область (от 5 до 30км от КАД) от 500руб.Ленинградская область (от 30 до 150км от КАД) от 900руб.', 
    deadline:'Заявки принимаются до 19:00.'},
]

export const Delivery = () => {
    return (
        <div className="delivery">
            <img className='img-1' src={tri} alt="" />
            <motion.h2
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
            >Доставка</motion.h2>
            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
            
                className="delivery-order">
                <input style={{color: '#fff'}} className="delivery-order__item" placeholder="Ваше имя" type="text" />
                <input className="delivery-order__item" placeholder="Ваш телефон" type="text" />
                <motion.button 
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5}}
                    whileTap={{scale: 0.95}}
                    className="delivery-order__btn">Заказать доставку</motion.button>
            </motion.div>

            <img className='img-2' src={tri} alt="" />

            <motion.div 
                initial={{opacity: 0, x: 100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                className="delivery-stata">
                {elements.map((stata, index) => {
                    return <DeliveryBox data={stata} key={index}/>
                })}
            </motion.div>

            <img className='img-3' src={tri} alt="" />
        </div>
    )
}
