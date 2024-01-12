import React, { useEffect, useState } from 'react'
import { Num2persian } from 'nums2persian';

export default function ClientFactorV2() {
    const factorOBJ = JSON.parse(localStorage.getItem("factor-v2"))
    const [isShowPrintButton, setIsShowPrintButten] = useState(true);

    const handleAfterPrint = () => {
        setIsShowPrintButten(true);
    };
    window.onafterprint = handleAfterPrint;
    useEffect(() => {
        document.title = 'فاکتور ورژن 2';
    }, [])
    return (
        <div className='w-[895px] mx-auto mt-20 font-Dana'>
            <button className={`${isShowPrintButton ? "transition-colors rounded-lg text-sm px-5 py-2.5 text-center font-DanaMedium text-white bg-blue-500" : "hidden"}`}
                onClick={() => {
                    setIsShowPrintButten(false)
                    setTimeout(() => {
                        window.print()
                    }, 1000);
                }}
            >
                پرینت
            </button>
            <div className='flex justify-between'>
                <div className='w-[100px]'>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <span className='text-sm'>{factorOBJ?.customTitle}</span>
                    </div>
                    <div className='mt-14'>
                        <span className='text-xl font-DanaBold'>{factorOBJ?.exporter}</span>
                    </div>
                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between items-center'>
                        <span className='text-sm font-DanaBold ml-1'>سریال : </span>
                        <span className='font-DanaBold'> {factorOBJ?.serialNumber}</span>
                    </div>
                    <div className='flex justify-end font-DanaBold'>
                        <span className=''>{factorOBJ?.date}</span>
                    </div>

                </div>
            </div>

            <div className='mt-4'>
                <div className='flex justify-between items-center gap-x-4'>
                    <div className='w-1/12 '><span className='bg-blue-500 p-3 rounded-lg text-white font-DanaMedium'>فروشنده</span></div>
                    <div className='w-11/12 bg-gray-50 border-2 border-gray-400  p-3 rounded-lg font-DanaBold'>{factorOBJ?.seller}</div>
                </div>
                <div className='flex justify-between items-center gap-x-4 mt-4'>
                    <div className='w-1/12 '><span className='bg-blue-500 p-3 rounded-lg text-white font-DanaMedium px-4'>مشتری</span></div>
                    <div className='w-11/12 bg-gray-50 border-2 border-gray-400  p-3 rounded-lg font-DanaBold'>{factorOBJ?.customer}</div>
                </div>
            </div>

            {/* infoos */}
            <div className='px-4 mt-10 '>
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

            <div className='border border-gray-200 w-full mt-8 my-2'></div>
            <div className='flex justify-end items-center'>
                <div className='w-1/2 flex justify-between items-center'>
                    <span className='bg-blue-500 text-white font-DanaBold pl-12 pr-2 py-3'>مبلغ نهایی فاکتور</span>
                    <div className='py-3 text-xl font-DanaBold'>
                        <span>{(11000000).toLocaleString()}</span>
                        <span className='mr-2'>{factorOBJ?.currency == "toman" ? "تومان" : "ریال"}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-center mt-8'>
                <div className='w-1/2 flex justify-between items-center'>
                    <span className='font-DanaBold text-lg'>
                        {
                            (Num2persian(25000000))
                        }
                        {
                            (factorOBJ?.currency == "toman" ? "تومان" : " ریال")

                        }
                    </span>
                </div>
            </div>


            <div className='w-1/3 rounded-lg border border-blue-500 '>
                <div className='flex items-center p-3 rounded-lg bg-blue-500 text-white font-DanaBold'>
                    <span className='ml-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                    </span>
                    <span>اطلاعات پرداخت</span>
                </div>
                <div className='p-4'>
                    <div className='flex flex-col items-center font-DanaBold space-y-2'>
                        <span>{factorOBJ?.paymentCardNumber}</span>
                        <span>{factorOBJ?.paymentNameDestination}</span>
                        <span>{factorOBJ?.paymentIBANNumber}</span>
                        <span></span>
                    </div>
                </div>
            </div>



        </div>
    )
}
