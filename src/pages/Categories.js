import React from 'react'
import { Boxtech } from '../components/Boxtech'
import { Data } from '../components/Data'
import { SliderFridge } from '../components/SliderFridge'

import { motion } from 'framer-motion'
import Slider from 'react-slick'


import tri from '../images/triangle-1.png'
import home from '../images/home-ico.png'
import ad1 from '../images/ad-1.png'
import ad2 from '../images/ad-2.png'

import wash from '../images/wash-mash-img.png'
import phone from '../images/phone-ico.png'
import tv from '../images/tv-ico.png'
import comp from '../images/comp-ico.png'
import printer from '../images/printer-ico.png'
import instrument from '../images/instrument-ico.png'
import playstation from '../images/playstation-icopng.png'
import molot from '../images/molot-ico.png'

import ruller from '../images/ruller-ico.png'
import charge from '../images/charger-ico.png'
import proc from '../images/procent-ico.png'

import bigHome from '../images/home-big.png'
import device from '../images/photo-device.png'
import garant from '../images/garant-ico.png'
import wallet from '../images/wallet-ico.png'
import { Comments } from '../components/Comments'

const elements = [
    {img: wash, text: 'Бытовая техника'},
    {img: phone, text: 'Смартфоны и гаджеты'},
    {img: tv, text: 'ТВ и мультимедиа'},
    {img: comp, text: 'Компьютеры'},
    {img: printer, text: 'Офис и сеть'},
    {img: instrument, text: 'Инструменты'},
    {img: playstation, text: 'Отдых и развлечения'},
    {img: molot, text: 'Сроительство и ремонт'},
    {img: home, text: 'Дом, декор и кухня'},
    {img: ruller, text: 'Автотовары'},
    {img: charge, text: 'Аксессуары и услуги'},
    {img: proc, text: 'Акции, скидки, выгода'}
]

const ability = [
    {img: bigHome, bold: 'Более 2000', paragraph: 'Торговых точек'},
    {img: device, bold: 'Более 100 000 ', paragraph: 'Наименований товаров'},
    {img: garant, bold: 'Гарантия', paragraph: 'Официальные поставки'},
    {img: wallet, bold: 'Оплата', paragraph: 'Любые способы'},
]

const comments = [
    {name: 'Галина',comm:'Доверие магазину', text: 'Достоинства: Впервые обратилась в этот интернет -магазин, поскольку в другом разрекламированном "товар в наличии" отсутствовал. Менеджер Техпорта внимательно выслушала просьбу о подборе комплекта встраиваемой техники необходимых параметров и оперативно оформила заказ. ', date: '02 сентября 2021'},
    {name: 'Наталья',comm:'Покупка мойки Granula', text: 'Купила в техпорт мойку, первый раз заказывала на озон привезли ужасное не понятно что, потом решила заказать у официальных представителей и это был техпорт, доставка быстрая, за что отдельное спасибо. Теперь ждём кухню чтобы поставить мойку.', date: '02 сентября 2021'},
    {name: 'Галина',comm:'Доверие магазину', text: 'Достоинства: Впервые обратилась в этот интернет -магазин, поскольку в другом разрекламированном "товар в наличии" отсутствовал. Менеджер Техпорта внимательно выслушала просьбу о подборе комплекта встраиваемой техники необходимых параметров и оперативно оформила заказ. ', date: '02 сентября 2021'},
]

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <svg onClick={onClick} 
            style={{width: '2.5rem', cursor: 'pointer', position: 'absolute', right: '1rem', bottom:'30px'}}
        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z"></path></svg>
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <svg
            onClick={onClick} 
            style={{width: '2.5rem', cursor: 'pointer', position: 'absolute', transform: 'rotate(180deg)', right: '5rem', bottom:'30px' }}
            aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z">
            </path>
        </svg>
    );
  }

export const Categories = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>
      };
    return (
        <div className="Categories-page">
            <img className='img-1' src={tri} alt="" />
            <motion.h2 
                style={{marginBottom:'20px'}}
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                
            >Категории</motion.h2>       
            <img className='img-2' src={tri} alt="" />     
            <motion.div 
                initial={{opacity: 0, x: -100}}
                animate={{opacity:1, x:0, transition: {duration: 1}}}
                className="Categories-page--flex">
                <div className="categories-box"  
                >
                    {elements.map((arg, index) => {
                        return <Boxtech data={arg} key={index} />
                    })}
                </div>

                <Slider {...settings}>
                    <SliderFridge/>
                    <SliderFridge/>
                    <SliderFridge/>
                </Slider>
                <img className='img-3' src={tri} alt="" />
             
                {/* Slider */}
            </motion.div>
            <div className="Categories-page--shop">
                {ability.map((stata, index) => {
                    return <Data data={stata} key={index}/>
                })}
            </div>

            <div className="Categories-page-add">
                <img src={ad1} alt="" />
                <img src={ad2} alt="" />
            </div>

            <h2>Отзывы наших покупателей</h2>
            <div className="Categories-page-flexible">
               {comments.map((stata, index) => {
                   return <Comments data={stata} key={index}/>
               })}
            </div>
        </div>
    )
}
