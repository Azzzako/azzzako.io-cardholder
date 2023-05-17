import React, { useState } from 'react'
import front from './images/bg-card-front.png'
import back from './images/bg-card-back.png'
import './App.css'

function App() {

  const [cardholder, setCardholder] = useState('')


  const onChangeCardholder = (e) => {
    e.preventDefault()
    setCardholder({
      ...cardholder,
      [e.target.name]: e.target.value
    })

  }


  console.log(cardholder)
  return (
    <div className="App">
      <section className='cards'>
        <img src={front} alt='front' className='front' />
        <div className='info_front'>
          <p className='cardholder_number'>{cardholder.number ? cardholder?.number?.toUpperCase().replace(/\w{4}(?=\w)/g, '$& ') : '9999 9999 9999 9999'}</p>
          <p className='cardholder_name'>{cardholder.name ? cardholder?.name?.toUpperCase() : 'JANE APPLESEED'}</p>
          <p className='dat'></p>
        </div>

        <img src={back} alt='back' className='back' />
      </section>


      <form className='forms'>
        <div className='inputs'>
          <label htmlFor='name'>CARDHOLDER NAME</label>
          <input type='text' name='name' placeholder='e.g. Jane Appleseed' value={cardholder.name} onChange={onChangeCardholder} />

          <label htmlFor='number'>CARD NUMBER</label>
          <input type='text' name='number' placeholder='e.g. 1234 5678 9123 0000' value={cardholder.number} onChange={onChangeCardholder} maxLength={16}/>

          <div className='labels'>
            <label htmlFor='date'>EXP. DATE (MM/YY)</label>
            <label htmlFor='number'>CVC</label>
          </div>

          <div className='date_input'>
            <input type='text' name='date' placeholder='MM' className='MMYY' maxLength={2}/>
            <input type='text' name='date' placeholder='YY' className='MMYY' maxLength={2}/>
            <input type='text' name='cvv' placeholder='e.g. 123' maxLength={3}/>
          </div>
          <input type='submit' value='Confirm' className='submit' />
        </div>
      </form>

    </div>
  )
}

export default App
