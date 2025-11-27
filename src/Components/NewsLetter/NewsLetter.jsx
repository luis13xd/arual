import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletter-main">
        <h1>Recibe ofertas exclusivas por Correo</h1>
        <p>Suscribete para estar actualizado de la moda</p>
        <div className='newsletter-div'>
          <input type="email" placeholder='Correo electronico' />
          <button>Suscribir</button>
        </div>
      </div>
    </div>
  )
}
