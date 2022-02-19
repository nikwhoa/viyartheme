window.addEventListener('DOMContentLoaded', (event) => {
    // timer

    const timer = document.querySelector('.timer');
    let days = timer.querySelector('.days');
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
    let second = timer.querySelector('.seconds');

    const dead = 'February 15 2022 18:00:00 GMT+0200';


    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        
        let secondsToDisplay = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false}).split('').map((num) => Number(num)) 
        let minutesToDisplay = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false}).split('').map((num) => Number(num)) 
        let hoursToDisplay = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false}).split('').map((num) => Number(num)) 
        let daysToDisplay = days.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false}).split('').map((num) => Number(num)) 
        
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
            daysToDisplay,
            minutesToDisplay,
            secondsToDisplay,
            hoursToDisplay
        };
    }

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
    function daysaaaa(day) {
        if (1 === day) {
            return 'день';
        } else if (day === 0) {
            return 'днiв';
        } else {
            return 'днiв';
        }
    }
    let aaaa = getTimeRemaining(dead).daysToDisplay.map(item => `<div class='timer-bg'>${item}</div>`)
        
        
        
        
        
        
        days.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).daysToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).daysToDisplay[1]}</div>  <div class='timer-extra'> ${daysaaaa(getTimeRemaining(dead).days)} </div>`;

    function showHours(hours) {

        return declOfNum(hours, ['година', 'години', 'годин']);

    }

    hours.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).hoursToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).hoursToDisplay[1]}</div> <div class='timer-extra'> ${showHours(getTimeRemaining(dead).hours)}</div>`;


    function showMinutes(minutes) {
        return declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
    }

    minutes.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).minutesToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).minutesToDisplay[1]}</div> <div class='timer-extra'>${showMinutes(getTimeRemaining(dead).minutes)}</div>`;

    function showSeconds(seconds) {
        return declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
    }
    second.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).secondsToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).secondsToDisplay[1]}</div> <div class='timer-extra'> ${showSeconds(getTimeRemaining(dead).seconds)}</div>`;
    
    
    setInterval(() => {
        function daysaaaa(day) {
            if (day === 1) {
                return 'день';
            } else if (day === 0) {
                return 'днiв';
            } else {
                return 'днiв';
            }
        }
        let aaaa = getTimeRemaining(dead).daysToDisplay.map(item => `<div class='timer-bg'>${item}</div>`)
        
        
        
        
        
        
        days.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).daysToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).daysToDisplay[1]}</div>  <div class='timer-extra'> ${daysaaaa(getTimeRemaining(dead).days)} </div>`;

        function showHours(hours) {

            return declOfNum(hours, ['година', 'години', 'годин']);

        }

        

        hours.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).hoursToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).hoursToDisplay[1]}</div> <div class='timer-extra'> ${showHours(getTimeRemaining(dead).hours)}</div>`;


        function showMinutes(minutes) {
            return declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
        }

        minutes.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).minutesToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).minutesToDisplay[1]}</div> <div class='timer-extra'>${showMinutes(getTimeRemaining(dead).minutes)}</div>`;

        function showSeconds(seconds) {
            return declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
        }
        second.innerHTML = `<div class='timer-bg'>${getTimeRemaining(dead).secondsToDisplay[0]}</div> <div class='timer-bg'>${getTimeRemaining(dead).secondsToDisplay[1]}</div> <div class='timer-extra'> ${showSeconds(getTimeRemaining(dead).seconds)}</div>`;
    }, 1000);

});