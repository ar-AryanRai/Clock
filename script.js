function showTime(){
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const secDeg = ((sec)*6) +90;
  const minDeg = ((min)*6) + ((sec/60)*6) + 90;
  const hourDeg = ((hour) * 30) + ((min / 60) * 30) + 90;

  const secHand = document.querySelector('.second-hand');
  secHand.style.transform = `rotate(${secDeg}deg)`;
  const minHand = document.querySelector('.min-hand');
  minHand.style.transform = `rotate(${minDeg}deg)`;
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(() => showTime(),1000);