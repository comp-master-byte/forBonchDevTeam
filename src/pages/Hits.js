import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'

import { HitElements } from '../components/HitElements'
import { Advert } from '../components/Advert'

import tri from '../images/triangle-1.png'
import radiator from '../icons/radiator.png'
import dizel from '../icons/dizel.png'
import heeter from '../icons/heeter.png'
import split from '../icons/split.png'

const consist = [
    {img:radiator, text:'Радиаторы отопления', price:'от 1 999 руб'},
    {img:dizel, text:'Дизельные тепловые пушки', price:'от 15 999 руб'},
    {img:heeter, text:'Конвекционные обогреватели', price:'от 9 999 руб'},
    {img:split, text:'Сплит-системы', price:'от 17 999 руб'},
]

const advert = [
    {title: 'Привет', text: 'Получай бонусы и спецпредложения, сохраняй и отслеживай заказы', href1:'Перейти в профиль', href2:'Мои заказы'},
    {title: 'Собери свой ПК!', text: 'Простой инструмент без проблем с совместимостью', 
    href1:'Собрать ПК', href2:'Сборки пользователей'},
]

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <svg onClick={onClick} 
            style={{width: '2.5rem', cursor: 'pointer', position: 'absolute', right: '1rem', bottom:'-80px'}}
        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z"></path></svg>
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <svg onClick={onClick} 
            style={{width: '2.5rem', cursor: 'pointer', position: 'absolute', transform: 'rotate(180deg)', right: '5rem', bottom:'-80px' }}
            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z">
            </path>
        </svg>
    );
  }

export const Hits = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>
      };
    return (
        <div className="hit">
             <img className='img-1' src={tri} alt="" />
            <motion.h2
                style={{marginBottom:'20px'}}
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
            >Хиты продаж</motion.h2>
            <motion.ul
                style={{marginBottom:'20px'}}
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                className="hit-list">
                <motion.li 
                    whileHover={{backgroundColor:'#fe7f2e',color: '#000', padding:'10px', cursor: 'pointer'}}
                    transition={{duration: 0.4}}
                className="hit-list__item">Тепло в каждый дом</motion.li>
                <motion.li whileHover={{backgroundColor:'#fe7f2e',color: '#000', padding:'10px', cursor: 'pointer'}}
                    transition={{duration: 0.4}}className="hit-list__item">Снова в школу!</motion.li>
                <motion.li whileHover={{backgroundColor:'#fe7f2e',color: '#000', padding:'10px', cursor: 'pointer'}}
                    transition={{duration: 0.4}}className="hit-list__item">В новый дом с новой техникой</motion.li>
                <motion.li whileHover={{backgroundColor:'#fe7f2e',color: '#000', padding:'10px', cursor: 'pointer'}}
                    transition={{duration: 0.4}}className="hit-list__item">Холод в жаркий день</motion.li>
            </motion.ul>
            <img className='img-2' src={tri} alt="" />
            <img className='img-3' src={tri} alt="" />
            <motion.div
                style={{marginBottom:'20px'}}
                initial={{opacity: 0, x: 100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
            >
                <Slider {...settings}>
                    {consist.map((arg, index) => {
                        return <HitElements data={arg} key={index}/>
                    })}

                    {consist.map((arg, index) => {
                        return <HitElements data={arg} key={index}/>
                    })}
                </Slider>
            </motion.div>


            <div className="hit-advert">
                {advert.map((stata, index) => {
                    return <Advert data={stata} key={index}/>
                })}
            </div>
        </div>
    )
}
