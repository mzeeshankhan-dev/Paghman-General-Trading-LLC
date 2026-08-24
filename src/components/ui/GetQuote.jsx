import React from 'react'
import { HandshakeIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const GetQuote = ({ bgColor = "bg-gray-200" }) => {
    const { t } = useTranslation();

    return (
        <div className={`px-5 sm:px-8 lg:px-12 w-full pb-6 ${bgColor} dark:bg-navy-900`}>
            <div className="px-8 py-3 max-w-300 mx-auto bg-navy-600 rounded-2xl flex justify-between items-center max-[800px]:flex-col gap-4 max-[800px]:gap-6 max-[800px]:text-center ">
                <span className='flex items-center gap-8 max-[800px]:flex-col max-[800px]:gap-4'>
                    <span className='p-4 bg-navy-800 rounded-full'>
                        <HandshakeIcon className='h-10 w-10 text-white' />
                    </span>
                    <span>
                        <h2 className='text-white font-semibold text-xl'>{t("getQuote.heading")}</h2>
                        <p className='text-white/70'>{t("getQuote.info")}</p>
                    </span>
                </span>
                <Link to="/contact" className='bg-gold-300 px-6 py-3 rounded-2xl text-lg'>{t("getQuote.btn")}</Link>
            </div>
        </div>
    )
}

export default GetQuote
