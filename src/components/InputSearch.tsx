import React from 'react'


type InputSearchProps = {
    type: string
    name: string
    style: string
}



export const InputSearch = ({ type, name, style }: InputSearchProps) =>
    <input type="text" name="" id="" className={style} placeholder='Enter delivery addres' />
