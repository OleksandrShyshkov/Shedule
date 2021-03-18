"use strict";


    const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  const d = new Date();
  const n = d.getDay();
  console.log(days[n]);
  document.write( days[n]);


