import React from 'react'
import Item from './Item'

export default function ItemsList({ items, onDeleteClick}) {
    return (
        <ul className="list-none m-0 p-0 ">
            {items.map(item => (
                <li className="m-2.5 mb-20">
                    <Item info={item} />
                    <button className="bg-white text-black border-[1px] border-light-gray py-[5px] px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer mx-2.5 shadow-1px transition-opacity disabled:opacity-40 disabled:cursor-default hover:opacity-80 active:shadow-0px active:translate-y-px"
                    onClick={onDeleteClick(item.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    )
}
