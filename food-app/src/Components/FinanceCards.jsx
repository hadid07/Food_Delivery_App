import React from 'react'
import F_Cards from './F_Cards'

const FinanceCards = () => {
  return (
    <div className='d-flex flex-row mt-4 vw-100 align-items-center justify-content-center'>
        <F_Cards Amount = '78000' Desc = 'Income' Color = 'rgb(103, 174, 110)'/>
        <F_Cards Amount = '46' Desc = 'Total Orders' Color = 'rgb(225, 238, 188)'/>
        <F_Cards Amount = '40' Desc = 'Completed' Color = 'rgb(129, 154, 145)'/>
        <F_Cards Amount = '6' Desc = 'In Que' Color = 'rgb(255, 208, 199)'/>
    </div>
  )
}

export default FinanceCards