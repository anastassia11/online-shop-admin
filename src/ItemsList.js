import React from 'react'
import Item from './Item'

export default function ItemsList({ items, onDeleteClick}) {
    return (
        <ul className="list-none flex flex-row flex-wrap justify-evenly">
            {items.map(item => (
                <li className="flex flex-col items-center m-4 space-y-4">
                    <Item info={item} />
                    <button className="bg-white text-black border-[1px] border-light-gray py-[5px] px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer shadow-1px transition-opacity disabled:opacity-40 disabled:cursor-default hover:opacity-80 active:shadow-0px active:translate-y-px"
                    onClick={onDeleteClick(item.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    )
}
