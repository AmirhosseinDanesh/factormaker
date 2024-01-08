import React, { useEffect, useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



export default function AdminPanel() {
  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate();



  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-x-1">
              <button type="button" className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => {
                sidebar ? (setSidebar(false)) : (setSidebar(true))

              }}>
                <span className="sr-only">Open sidebar</span>
                {
                  sidebar ? (
                    <svg className="w-5 h-5 md:w-7 md:h-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 md:w-7 md:h-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  )
                }
              </button>
              <h1 className="flex">
                <span className="self-center text-sm md:text-lg sm:text-2xl whitespace-nowrap dark:text-white">پنل کاربری</span>
              </h1>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3 gap-x-5">

                <div>
                  <div className='py-3' id='toggle-theme' onClick={() => {
                    if (localStorage.theme === 'dark') {
                      document.documentElement.classList.remove('dark')
                      localStorage.theme = "light"
                    } else {
                      document.documentElement.classList.add('dark')
                      localStorage.setItem("theme", "dark")
                    }
                  }} >
                    <svg className='w-5 h-6 md:w-7 md:h-7  inline-block dark:hidden' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    <svg className='w-5 h-6 md:w-7 md:h-7  hidden dark:inline-block text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar"
        className={sidebar ? ("fixed duration-500 top-0 z-40 w-64 h-screen pt-20  transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700")
          : (
            "fixed duration-500 top-0 z-40 w-64 h-screen pt-20  translate-x-full transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700")}
        onMouseLeave={() => {
          setSidebar(false)
        }}
        onClick={() => {
          setSidebar(false)
        }}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 text-xs md:text-base font-medium">
            <li>
              <NavLink to="/p-admin/factor-v1" className={({ isActive }) => (isActive ? "flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 bg-gray-700 text-white dark:bg-gray-500 " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700")}>
                <svg className="w-5 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="flex-1 font-DanaMedium mr-2 whitespace-nowrap">فاکتور ساده</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/p-admin/factor-v2" className={({ isActive }) => (isActive ? "flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-700 bg-gray-700 text-white dark:bg-gray-500 " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700")}>
                <svg className="w-5 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="flex-1 font-DanaMedium mr-2 whitespace-nowrap">فاکتور متوسط</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:mr-64 bg-gray-100 dark:bg-zinc-800">
        <div className="p-4 dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  )
}
