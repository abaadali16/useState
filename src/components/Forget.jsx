import React from 'react'
import './Forget.css'

const Forget = () => {

    return (
        <div className='forget'>
            <h1>Forget Password</h1>
            <p>Enter your email so that we can send <br /> you a verification </p>
            <form className='forget-form'>
                <label className='labl'>Email</label>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" >Send</button>
            </form>

        </div>
    )
}

export default Forget
