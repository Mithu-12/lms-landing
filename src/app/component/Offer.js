'use-client'
import React, { useEffect, useRef, useState } from 'react';
import './Offer.css'
import Image from 'next/image';
import dicountImage from '/public/discount.webp'
 
const Offer = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinute, setTimerMinute] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    let interval = useRef();
    const setTimer = () => {
        const countdownDate = new Date('may 5, 2024 12:57:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
             let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(interval.current)
            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinute(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000);
    }
    useEffect(() => {
        setTimer()
        return() => {
            clearInterval(interval.current)
        }
    },[])
    
    return (
        <div className="offer-container flex  bg-cover bg-no-repeat bg-center h-screen w-full my-10 "
        style={{
          backgroundImage: `url(/offer.jpg)`,
          backgroundPosition: "center",
        }}>
        <div className='time text-white w-6/12'>
            <section className='timer-counter'>
    <section className='timer mt-5'>
    <div className='flex justify-center items-center'><Image src={dicountImage} alt='discount' width={200} height={200}/></div>
    <div className='text-center  text'>
    <h2 className=" fixed-center lg:text-2xl font-bold">Welcome To School</h2>                
      <h1 className='lg:text-5xl sm:text-lg font-bold'>BIG OFFER</h1>                  
                        
                        
    </div>
<div className='timeSet py-2'>
<section className='singleTime'>
    <p className="timeColor py-2">{timerDays}</p>
    <p><small>Days</small></p>
</section >
    <span>:</span>
    <section className='singleTime'>
    <p className="timeColor py-2">{timerHours}</p>
    <p><small>Hrs</small></p>
</section>
    <span>:</span>
    <section className='singleTime'>
    <p className="timeColor py-2">{timerMinute}</p>
    <p><small>Min</small></p>
</section>
    <span>:</span>
    <section className='singleTime'>
    <p className="timeColor py-2">{timerSeconds}</p>
    <p><small>Secs</small></p>
</section>
</div>
</section>
</section>
        </div>
            <div className='w-6/12'></div>

        </div>
    );
};

export default Offer;