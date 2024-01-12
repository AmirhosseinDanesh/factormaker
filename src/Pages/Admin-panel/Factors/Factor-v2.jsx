import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import Input from '../../../Components/Input/Input';
import toast from 'react-hot-toast';
import { factorValidate } from '../../../Components/Input/Validate';
import swal from 'sweetalert';


export default function FactorV2() {

    const [data, setDate] = useState("")
    useEffect(() => {
        document.title = 'ساخت فاکتور ورژن 2';
        const factorOBJ = JSON.parse(localStorage.getItem("factor-v2"))
        setDate(factorOBJ)
    }, [])

    return (
        <>
            <div className='flex flex-col md:flex-row gap-4'>
                <button onClick={() => {
                    swal({
                        title: "آیا همه اطلاعات را حذف میکنید؟",
                        buttons: ["خیر", "بله"]
                    }).then((res) => {
                        if (res) {
                            localStorage.removeItem("factor-v2")
                            window.location.reload(false);
                        }
                    })
                }} className='transition-colors rounded-lg text-sm px-5 py-2.5 text-center font-DanaMedium text-white bg-red-500 '>
                    پاک کردن همه اطلاعات
                </button>
                <a href='/client-factor-v2' target='_blank' className='transition-colors rounded-lg text-sm px-5 py-2.5 text-center font-DanaMedium text-white bg-blue-500 '>
                    دیدن فاکتور
                </a>
            </div>
            <Formik
                validate={factorValidate}
                enableReinitialize
                initialValues={{
                    customTitle : data?.customTitle,
                    serialNumber : data?.serialNumber,
                    date : data?.date,
                    exporter : data?.exporter,
                    seller : data?.seller,
                    currency: data?.currency,
                    customer : data?.customer,
                    paymentNameDestination : data?.paymentNameDestination,
                    paymentCardNumber : data?.paymentCardNumber,
                    paymentIBANNumber: data?.paymentIBANNumber,
                    infos: data?.infos || [],
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    localStorage.setItem("factor-v2", JSON.stringify(values))
                    toast.success("فاکتور با موفقیت ایحاد شد")
                    setSubmitting(false)

                }}
            >
                {({ isSubmitting, values }) => (
                    <div className="mt-5 text-sm md:text-lg">
                        <Form className="mt-5 space-y-4">
                            <div className="flex justify-center">
                                <Input label="متن دلخواه" type="text" name="customTitle" placeholder="به نام خدا" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                                <Input label="اسم مجموعه" type="text" name="exporter" placeholder="" />
                                <Input label="شماره سریال" type="text" name="serialNumber" placeholder="" />
                                <Input label="تاریخ فاکتور" type="text" name="date" placeholder="" />
                            </div>
                            <div className="grid w-1/2 gap-4 ">
                                <Input label="فروشنده" type="text" name="seller" placeholder="" />
                                <Input label="مشتری" type="text" name="customer" placeholder="" />
                            </div>
                            <div className='w-1/4 md:w-1/10'>
                                <span className='input-label'>واحد پول</span>
                                <Field className="input" as="select" name="currency">
                                    <option value="toman">تومان</option>
                                    <option value="rial">ریال</option>
                                </Field>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <span className='text-gray-900 dark:text-white'>خدمات</span>
                                <FieldArray name="infos">
                                    {({ push, remove }) => (
                                        <>
                                            {Array.isArray(values.infos) &&
                                                values.infos.map((_, index) => (
                                                    <div key={index} className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-900 dark:border-gray-100">
                                                        <Field
                                                            as={Input}
                                                            label="َشرح کالا"
                                                            type="text"
                                                            name={`infos[${index}].infoProductTitle`}
                                                            placeholder=""
                                                        />
                                                        <Field
                                                            as={Input}
                                                            label="تعداد"
                                                            type="number"
                                                            name={`infos[${index}].infoProductCount`}
                                                            placeholder="تومان"
                                                        />
                                                        <Field
                                                            as="textarea"
                                                            className="col-start-1 col-end-3 input"
                                                            label="قیمت واحد"
                                                            type="number"
                                                            name={`infos[${index}].infoProductPrice`}
                                                            placeholder=""
                                                        />

                                                        <span className='flex justify-center col-span-2 dele text-gray-900 dark:text-white' onClick={() => {
                                                            swal({
                                                                title: "آیا این مورد را حذف میکنید؟",
                                                                buttons: ["خیر", "بله"]
                                                            }).then((res) => {
                                                                if (res) {
                                                                    remove(index)
                                                                }
                                                            })
                                                        }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                ))}
                                            <span className="flex items-center justify-center" onClick={() => push({ infoProductTitle: '', infoProductCount: '', infoProductPrice: '' })}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-gray-900 dark:text-white"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                        </>
                                    )}
                                </FieldArray>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-400 dark:bg-blue-400 p-6 mb-4 rounded-2xl">
                                <Input label="نام دریافت کننده" type="text" name="paymentNameDestination" placeholder="" />
                                <Input label="شماره کارت" type="text" name="paymentCardNumber" placeholder="" />
                                <Input label="شماره شبا" type="text" name="paymentIBANNumber" placeholder="" />
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className={isSubmitting ? 'input-submit bg-blue-500 mt-4' : 'input-submit bg-blue-600 mt-4'}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'لطفاً صبر کنید ...' : 'آپدیت'}
                                </button>
                            </div>
                        </Form>
                    </div >
                )
                }
            </Formik >
        </>
    );
}