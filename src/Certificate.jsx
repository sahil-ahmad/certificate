import React from 'react'
import award from '../src/award1.png'
import animal from '../src/animal.png'
import border from './Untitled design (2).png'
const Certificate = () => {
    return (
        <>
            <div className='certificate'>
            <img src={border}/>
                {/* <div className='c-container'> */}
                <div className='c-content'>
                    <div className='c-heading'>
                        <h1>CERTIFICATE</h1>
                        <h3>FOR DONATION</h3>

                    </div>
                    <div className='c-mid'>
                        <div className='c-name'>
                            <h4>PROUDLY PRESENTED TO</h4>
                            <h1>Ker Murphy</h1>
                        </div>

                        <p>Our accomplishments could not, would not,be achieved without the generous<br />
                            Support of donor like you. Your Support and donation provide the financial and <br />
                            moral Support needed to continue our mission. Thank you for investing in a <br />
                            better life for all the beneficary animals. Thank you for your generosity. </p>
                            
                    </div>
                    <div className='c-bottam'>
                        <div className='date'>
                            <p>DATE</p>
                        </div>
                        <div className='date'>
                            <p>DONATION Amount</p>
                        </div>
                        <div className='signature'>
                            <p>SIGNATURE</p>
                        </div>

                    </div>
                    <div className='img'>
                         <img src={award} />
                    <div className='animal'><img src={animal}/>
                    </div>
                    </div>
                   
                    
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Certificate
