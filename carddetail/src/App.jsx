import React, { useState } from 'react'
import front from './images/bg-card-front.png'
import back from './images/bg-card-back.png'
import './App.css'

function App() {

  const [cardholder, setCardholder] = useState('')

  const onChangeCardholder = (e) => {
      e.preventDefault()
      setCardholder({
        [e.target.name] : e.target.value
      })
  }

  console.log(cardholder)
  return (
    <div className="App">
      <section className='cards'>
        <img src={front} alt='front' className='front' />
        <p>{cardholder.name}</p>
        <img src={back} alt='back' className='back' />
      </section>


      <form className='forms'>
        <div className='inputs'>
          <label htmlFor='name'>CARDHOLDER NAME</label>
          <input type='text' name='name' placeholder='e.g. Jane Appleseed' value={cardholder.name} onChange={onChangeCardholder}/>

          <label htmlFor='number'>CARD NUMBER</label>
          <input type='text' name='number' placeholder='e.g. 1234 5678 9123 0000' />

          <div className='labels'>
            <label htmlFor='date'>EXP. DATE (MM/YY)</label>
            <label htmlFor='number'>CVC</label>
          </div>

          <div className='date_input'>
            <input type='text' name='date' placeholder='MM' className='MMYY' />
            <input type='text' name='date' placeholder='YY' className='MMYY' />
            <input type='text' name='cvv' placeholder='e.g. 123' />
          </div>
          <input type='submit' value='Confirm' className='submit' />
        </div>
      </form>

    </div>
  )
}

export default App
