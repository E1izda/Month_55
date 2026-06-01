import "./ViewUsers.css";

const users = [
  {
    id: 1,
    name: "Лорд Волдеморт",
    role: "Тёмный Лорд",
    blood: "Полукровка",
    age: 70,
    quote: "Величие пробуждает зависть, зависть рождает злобу, злоба плодит ложь.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcVeqKlc7WFsKse7jHav1LDoplYtfY-5FYQ&s"
  },
  {
    id: 2,
    name: "Беллатриса Лестрейндж",
    role: "Пожиратель смерти",
    blood: "Чистокровная",
    age: 47,
    quote: "Будь у меня сыновья, я бы с радостью отдала их на службу Темному Лорду",
    avatar: "https://upload.wikimedia.org/wikipedia/ru/f/f5/Bellatrix_Lestrange.jpg"
  },
  {
    id: 3,
    name: "Северус Снейп",
    role: "Пожиратель смерти / шпион",
    blood: "Полукровка",
    age: 38,
    quote: "Всегда.",
    avatar:  "https://i.pinimg.com/236x/9c/a1/6e/9ca16ecc7176f62a80159e01de3bdb37.jpg"
  },
  {
    id: 4,
    name: "Люциус Малфой",
    role: "Пожиратель смерти",
    blood: "Чистокровный",
    age: 49,
    quote: "Малфои никогда не выглядят виноватыми — даже когда они ими являются.",
    avatar: "https://i.pinimg.com/236x/5e/36/de/5e36de44729ad1c7ffe1e6d8b15a220d.jpg"
  },
  {
    id: 5,
    name: "Рабастан Лейстрейндж",
    role: "Пожиратель смерти",
    blood: "Чистокровный",
    age: 40,
    quote: "За темного Лорда я готов на всё.",
    avatar: "https://fanfics.me/images/fanart/2021/02/24/1556691614119411.jpg"
  },
  {
    id: 6,
    name: "Антонин Долохов",
    role: "Пожиратель смерти",
    blood: "Чистокровный",
    age: 56,
    quote: "Мы будем хозяевами мира! Ты, я и он... Повелитель...",
    avatar: "https://i.pinimg.com/736x/53/93/18/5393180ef8b72854bb371cb916d670b7.jpg"
  },
  {
    id: 7,
    name: "Баркемий Крауч мл.",
    role: "Пожиратель смерти",
    blood: "Чистокровный",
    age: 28,
    quote: "Я нашёл Тёмного Лорда там, где другие потерпели неудачу.",
    avatar: "https://i.pinimg.com/webp/736x/aa/d7/b2/aad7b2d3477ec4d7e3002314ee6c16e3.webp"
  },
  {
    id: 8,
    name: "Фенрир Сивый",
    role: "Пожиратель смерти / оборотень",
    blood: "Получеловек",
    age: 55,
    quote: "Я кусаю, кого хочу. Это моя природа.",
    avatar: "https://i.pinimg.com/736x/3d/84/fc/3d84fce6a1b37bde9930fe09bb6cdd8b.jpg"
  },
  {
    id: 9,
    name: "Нарцисса Малфой",
    role: "Пожиратель смерти",
    blood: "Чистокровная",
    age: 46,
    quote: "Жив ли мой сын? Скажи мне — только это имеет значение.",
    avatar: "https://i.pinimg.com/736x/2e/dd/3c/2edd3c89814802c45c62e3c0a8fcd0e3.jpg"
  },
  {
    id: 10,
    name: "Драко Малфой",
    role: "Пожиратель смерти",
    blood: "Чистокровный",
    age: 17,
    quote: "Ты пожалеешь, что не выбрал меня своим другом, Поттер.",
    avatar: "https://i.pinimg.com/736x/a6/ad/84/a6ad84adcd1729fc1325d294a8ebc44d.jpg"
  },
  {
    id: 11,
    name: "Гарри Поттер",
    role: "Избранный / студент Гриффиндора",
    blood: "Полукровка",
    age: 17,
    quote: "Я не хочу быть знаменитым. Я просто хочу быть обычным.",
    avatar: "https://i.pinimg.com/webp/736x/6e/83/c5/6e83c5c64213db019584ed5d86089e6d.webp"
  },
  {
    id: 12,
    name: "Гермиона Грейнджер",
    role: "Студентка Гриффиндора",
    blood: "Маглорождённая",
    age: 17,
    quote: "Когда сомневаешься — иди в библиотеку.",
    avatar: "https://i.pinimg.com/736x/28/8c/45/288c45bc018139e696b2f8331a30866c.jpg"
  },
  {
    id: 13,
    name: "Рон Уизли",
    role: "Студент Гриффиндора",
    blood: "Чистокровный",
    age: 17,
    quote: "Когда рос с Фредом и Джорджем — страх становится привычкой.",
    avatar: "https://i.pinimg.com/736x/76/a0/0b/76a00bfb18e2f4f8e2d1e323c3d31371.jpg"
  },
  {
    id: 14,
    name: "Альбус Дамблдор",
    role: "Директор Хогвартса",
    blood: "Полукровка",
    age: 115,
    quote: "Счастье можно найти даже в самые тёмные времена — если не забыть включить свет.",
    avatar: "https://i.pinimg.com/736x/60/5d/f4/605df454b8be76a3d40e5b63fdaf6280.jpg"
  },
  {
    id: 15,
    name: "Минерва МакГонагалл",
    role: "Профессор трансфигурации",
    blood: "Полукровка",
    age: 70,
    quote: "Пять баллов от Гриффиндора. И ещё пять — за дерзость.",
    avatar: "https://i.pinimg.com/736x/64/bd/ae/64bdae42ecf7416411276f693135a8f2.jpg"
  },
  {
    id: 16,
    name: "Невилл Долгопупс",
    role: "Студент Гриффиндора",
    blood: "Чистокровный",
    age: 17,
    quote: "Нужна смелость, чтобы стоять против врагов. Но и против друзей — тоже.",
    avatar: "https://i.pinimg.com/736x/4c/0d/1e/4c0d1ef98f7fb1d3b9400d2df39b285b.jpg"
  },
  {
    id: 17,
    name: "Луна Лавгуд",
    role: "Студентка Когтеврана",
    blood: "Чистокровная",
    age: 16,
    quote: "Вещи, в которые мы верим, не видны другим. Это не делает их ненастоящими.",
    avatar: "https://i.pinimg.com/736x/89/4b/fb/894bfbc37bab59110c474283c30eeeba.jpg"
  },
  {
    id: 18,
    name: "Сириус Блэк",
    role: "Анимаг / крёстный отец Гарри",
    blood: "Чистокровный",
    age: 36,
    quote: "Мир не делится на хороших людей и пожирателей смерти.",
    avatar: "https://i.pinimg.com/736x/27/e8/cf/27e8cf8ffbe9ca499cdf7b1cd5e17bf5.jpg"
  },
  {
    id: 19,
    name: "Рубеус Хагрид",
    role: "Лесник / преподаватель",
    blood: "Великан-полукровка",
    age: 64,
    quote: "Я не должен был это говорить.",
    avatar: "https://i.pinimg.com/736x/45/12/58/45125804a03e51a577920cdc64b313e1.jpg"
  },
  {
    id: 20,
    name: "Джинни Уизли",
    role: "Студентка Гриффиндора",
    blood: "Чистокровная",
    age: 16,
    quote: "Не трогайте Гарри. Никогда.",
    avatar: "https://i.pinimg.com/736x/93/d5/c4/93d5c48432061c041d6f6267ca4087b5.jpg"
  },
];

const ViewUsers = () => {
  return (
    <div className="view-users">
      <h2 className="view-users__title">Персонажи Гарри Поттера (глазами пожирателей смерти)</h2>

      <div className="users-grid">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => console.log(user)}>

            <img
              className="user-avatar"
              src={user.avatar}
              alt={user.name}
            />

            <div className="user-info">
               {index < 10 && (
              <span className="premium-badge">☠️ Пожиратель смерти</span>
            )}
              <h3 className="user-name">{user.name}</h3>
              <p className="user-role">{user.role}</p>
              <p className="user-blood">Кровь: {user.blood}</p>
              <p className="user-age">Возраст: {user.age}</p>
              <p className="user-quote">"{user.quote}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;