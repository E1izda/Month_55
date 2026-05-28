import React from 'react';

const HarryPotter = () => {
  const spell = () => {
    const words = ['Экспелиармус!', 'Авада Кедавра!', 'Империус!', 'Легилеменс', 'Силенцио!', 'Риддикулус!', 'Петрификус Тоталус!', 'Алохомора!'];
    const random = words[Math.floor(Math.random() * words.length)];
    console.log(random);
    document.getElementById('spellText').textContent = random;
  };

  return (
    <div>
      <p id="spellText">Нажми на кнопку</p>
      <button onClick={spell}>Получить заклинание</button>
    </div>
  );
};

export default HarryPotter;