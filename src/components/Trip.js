import React, { useContext } from 'react'
import { UserContext } from '..';
import { useTranslation } from 'react-i18next';

function Trip({from, to}) {
    const [, setUser] = useContext(UserContext) 
    const {t} = useTranslation()


    function tripHandler(e) {
        setUser(prevState => ({
            ...prevState,
            trip:e.target.parentElement.innerText
        }))
        console.log(e.target.parentElement.innerText)
        window.open('#/customize', '_self')
    }

  return (
        <div className='flex sm:flex-row flex-col items-center justify-between
         border-black border-[2px] border-opacity-20 rounded-lg p-5 gap-5 w-[80%]
          bg-gray-100  
         '>
            <div className='flex flex-col sm:items-start items-center gap-2 w-[50%]'>
                <h1 className='self-start'>{t('lowest_rate')}</h1>
                <div className='flex items-center justify-center gap-5'>
                    <h1>05:00</h1>
                    <hr className='w-[95px] h-[2px] bg-black text-black text-center'/>
                    <h1>06:00</h1>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <h1>{from}</h1>
                    <h1 className='w-[100px] text-center'>{t('non_stop')}</h1>
                    <h1>{to}</h1>
                </div>
            </div>

            <div className='flex items-center sm:justify-between justify-center gap-3 w-[30%]'>
                <div className='flex flex-col items-center border-black border-[2px]
                 p-3 border-opacity-40 hover:bg-gray-200 cursor-pointer rounded-lg'
                    onClick={tripHandler}
                 >
                  <h1 className='select-none'>{t('economy')}</h1>  
                  <h1 className='select-none'>{t('sar')} 1600</h1>
                </div>

                <div className='flex flex-col items-center border-black border-[2px]
                 p-3 border-opacity-40 hover:bg-gray-200 cursor-pointer rounded-lg'
                 onClick={tripHandler}
                 >
                    <h1 className='select-none'>{t('first')}</h1>    
                    <h1 className='select-none'>{t('sar')} 5000</h1>
                </div>
            </div>
        </div>
  )
}

export default Trip