import React, { useEffect } from 'react'


export default function ClientFactor() {
    const factorOBJ = JSON.parse(localStorage.getItem("factor"))
    console.log(factorOBJ.currency)
    return (
        <div className='w-[895px] mx-auto mt-20 font-Dana'>
            <div className='font-DanaBold text-xl text-center'>{factorOBJ?.factorName}</div>
            <div className='flex justify-between my-10 p-8 bg-gray-200 rounded-3xl  border-r-4 border-blue-500 font-DanaMedium text-sm'>
                <div className='flex justify-between gap-x-2'>
                    <span>صادر کننده:</span>
                    <p>{factorOBJ?.exporter}</p>
                </div>
                <div className='flex justify-between gap-x-2'>
                    <span>فاکتور شده برای:</span>
                    <p>{factorOBJ?.factorFor}</p>
                </div>
                <div className='flex justify-between gap-x-2'>
                    <span>تاریخ فاکتور:</span>
                    <p className=''>{factorOBJ?.date}</p>
                </div>
            </div>

            {/* infoos */}
            <div className='px-4 mt-10 mb-10'>
                <div className='flex justify-between my-4'>
                    <span className='font-Dana text-xs text-gray-500'>توضیحات</span>
                    <span className='bg-gray-400 w-[85%] mt-2 h-px'></span>
                    <span className='font-Dana text-xs text-gray-500'>مبلغ</span>
                </div>
                <div className='my-4 divide-y-2 divide-gray-100 '>
                    {
                        factorOBJ?.infos?.map((info, index) => (
                            <div key={index} className=''>
                                <div className='flex justify-between py-6 gap-x-16 font-DanaMedium text-sm'>
                                    <div className='flex gap-x-1'>
                                        <span>{index + 1}.</span>
                                        <p>{info.infoName}</p>

                                    </div>
                                    {
                                        info?.infoPrice === 0 ? "رایگان"
                                            :
                                            <div className='flex gap-x-2 flex-shrink-0'>
                                                <span>{Number(info?.infoPrice).toLocaleString()}</span>
                                                <span>{factorOBJ?.currency == "toman" ? "تومان" : "ریال"}</span>
                                            </div>
                                    }
                                </div>
                                <div className='px-5 py-3 text-gray-800 text-xs leading-6'>
                                    <span>{info.infoDescription}</span>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className='flex justify-between my-4'>
                    <span className='bg-gray-400 w-[90%] mt-2 h-px'></span>
                    <span className='font-DanaBold text-xs text-green-700'>مجموع کل</span>
                </div>
                <div className='flex justify-end mt-8'>
                    <span className='flex gap-x-1 items-center font-DanaBold text-base'>
                        {
                            Number(factorOBJ?.infos?.reduce((acc, cur) => acc + cur.infoPrice, 0)).toLocaleString()
                        }
                        <span className='text-sm'>{factorOBJ?.currency == "toman" ? "تومان" : "ریال"}</span>

                    </span>
                </div>
            </div>



            <div className='bg-green-200 px-6 py-2 pb-4 mb-4 rounded-2xl'>
                <div className='flex justify-between font-Dana text-[10px] text-gray-600 my-8'>
                    <p>اطلاعات حساب برای پرداخت فاکتور</p>
                    <p>مبلغ کلی پرداختی</p>
                </div>
                <div className='flex justify-between font-DanaMedium text-sm'>
                    <div className='grid grid-rows-4 grid-flow-col gap-y-6 gap-x-10'>
                        <span className='text-xs'>نام:</span>
                        <span className='text-xs'>شماره کارت:</span>
                        <span className='text-xs'>شماره حساب:</span>
                        <span className='text-xs'>شماره شبا:</span>
                        <span>{factorOBJ?.paymentName}</span>
                        <span>{factorOBJ?.paymentCardNumber}</span>
                        <span>{factorOBJ?.paymentAccountNumber}</span>
                        <span>{factorOBJ?.paymentIBANNumber}</span>
                    </div>
                    <div className='flex flex-col gap-y-6 text-xs font-DanaMedium'>
                        <div className='flex justify-end gap-x-2 '>
                            <span className='flex gap-x-1 items-center font-DanaBold text-xs'>
                                {
                                    Number(factorOBJ?.infos?.reduce((acc, cur) => acc + cur.infoPrice, 0)).toLocaleString()
                                }
                                <span className='text-xs'>{factorOBJ?.currency == "toman" ? "تومان" : "ریال"}</span>

                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
