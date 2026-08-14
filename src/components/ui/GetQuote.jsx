import React from 'react'
import { HandshakeIcon } from 'lucide-react'

const GetQuote = () => {
    return (
        <div className='container-page pb-6 bg-gray-200'>
            <div className="px-8 py-3 bg-navy-600 rounded-2xl flex justify-between items-center">
                <span className='p-4 bg-navy-800 rounded-full'>
                  <HandshakeIcon className='h-10 w-10 text-white'/>
                </span>
                <span>
                    <h2 className='text-white font-semibold text-xl'>Let's Grow Your Business Together</h2>
                    <p className='text-white/70'>PAGHMAN Cargo - Tour Trusted Logistics Partner</p>
                </span>
                <span>
                    <button className='bg-gold-300 px-6 py-3 rounded-2xl text-lg'>Get Your Quote</button>
                </span>
            </div>
        </div>
    )
}

export default GetQuote
