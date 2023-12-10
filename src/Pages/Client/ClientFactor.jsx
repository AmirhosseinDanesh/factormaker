import React from 'react'


export default function ClientFactor() {
    const factorOBJ = JSON.parse(localStorage.getItem("factor"))

    return (
        <div className='w-[895px] mx-auto mt-20 font-Iransans'>
            <div className='font-IransansBold text-xl text-center'>{factorOBJ?.factorName}</div>
            <div className='flex justify-between my-10 p-8 bg-gray-200 rounded-3xl  border-r-4 border-blue-500 font-IransansMedium text-sm'>
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
                    <span className='font-Iransans text-xs text-gray-500'>توضیحات</span>
                    <span className='bg-gray-400 w-[85%] mt-2 h-px'></span>
                    <span className='font-Iransans text-xs text-gray-500'>مبلغ</span>
                </div>
                <div className='my-4 divide-dotted divide-y-2 divide-gray-100'>
                    {
                        factorOBJ?.infos?.map((info, index) => (
                            <div key={index} className='flex justify-between py-6 gap-x-16 font-IransansMedium text-sm'>
                                <div className='flex gap-x-1'>
                                    <span>{index + 1}.</span>
                                    <p>{info.infoName}</p>
                                </div>
                                <div className='flex gap-x-2 flex-shrink-0'>
                                    <span>{info?.infoPrice.toLocaleString()}</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between my-4'>
                    <span className='bg-gray-400 w-[90%] mt-2 h-px'></span>
                    <span className='font-IransansBold text-xs text-green-700'>مجموع کل</span>
                </div>
                <div className='flex justify-end mt-8'>
                    <span className='flex gap-x-1 items-center font-IransansBold text-base'>
                        {
                            Number(factorOBJ?.infos?.reduce((acc, cur) => acc + cur.infoPrice, 0)).toLocaleString()
                        }
                        <span className='text-sm'>تومان</span>

                    </span>
                </div>
            </div>



            <div className='bg-green-200 px-6 py-2 pb-4 mb-4 rounded-2xl'>
                <div className='flex justify-between font-Iransans text-[10px] text-gray-600 my-8'>
                    <p>اطلاعات حساب برای پرداخت فاکتور</p>
                    <p>مبلغ کلی پرداختی</p>
                </div>
                <div className='flex justify-between font-IransansMedium text-sm'>
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
                    <div className='flex flex-col gap-y-6 text-xs font-IransansMedium'>
                        <div className='flex justify-end gap-x-2 '>
                            <span className='flex gap-x-1 items-center font-IransansBold text-xs'>
                                {
                                    Number(factorOBJ?.infos?.reduce((acc, cur) => acc + cur.infoPrice, 0)).toLocaleString()
                                }
                                <span className='text-xs'>تومان</span>

                            </span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
