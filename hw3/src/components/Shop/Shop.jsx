import { useState } from 'react'
import './Shop.css'

const Shop = () => {
  const [cartItems, setCartItems] = useState([])

  const list_products = [
    { id: 1, name: 'Белый чай', price: 890, image: 'https://i.pinimg.com/webp/736x/e6/98/0f/e6980f6240513c6465b5755a2c85d69a.webp' },
    { id: 2, name: 'Зеленый чай', price: 450, image: 'https://i.pinimg.com/736x/c0/0d/57/c00d576fcd0eadc055f114b90f94ab14.jpg' },
    { id: 3, name: 'Желтый чай', price: 1200, image: 'https://i.pinimg.com/736x/ee/a5/a2/eea5a2380cdb57e9f4ba6cc50eaefa50.jpg' },
    { id: 4, name: 'Улун', price: 1850, image: 'https://i.pinimg.com/736x/69/14/46/691446b7f9f44ece47d21a2ecaaad7d1.jpg' },
    { id: 5, name: 'Пуэр', price: 720, image: 'https://i.pinimg.com/736x/e2/e4/5e/e2e45e28f404c3dab3d91c3a69f16adc.jpg' },
    { id: 6, name: 'Ройбуш', price: 2300, image: 'https://i.pinimg.com/736x/ab/23/79/ab237904b016aebfbdf146450efe120c.jpg' },
  ]

  return (
    <div>
      <h1>Чайная</h1>

      <div className="shop__grid">
        {list_products.map((item, index) => {
          return <div key={index} className="card">
            <div className="card__img">
              <img src={item.image} alt={item.name} />
            </div>
            <p className="card__name">{item.name}</p>
            <p className="card__price">{item.price} com</p>
            <button onClick={() => setCartItems([...cartItems, item])}>
               В корзину
            </button>
          </div>
        })}
      </div>

      <div className="cart">
        <h2>Корзина</h2>
        {cartItems.map((item, index) => {
          return <div key={index} className="cart__item">
            <span>{item.name}</span>
            <span>{item.price} com</span>
          </div>
        })}
      </div>
    </div>
  )
}

export default Shop