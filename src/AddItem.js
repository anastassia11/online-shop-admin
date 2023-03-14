import React from 'react'

export default function AddItem({ name, desc, onNameChange, onDescChange, onFormSubmit }) {
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor={name}></label>
                <input
                    type="text"
                    placeholder="Название товара"
                    className="py-3 px-2.5 m-2.5 rounded-[3px] border-[1px] border-light-gray"
                    value={name}
                    id={name}
                    onChange={onNameChange}
                />
            </div>
            <div>
                <label htmlFor={name}></label>
                <input
                    type="text"
                    placeholder="Описание товара"
                    className="py-3 px-2.5 m-2.5 rounded-[3px] border-[1px] border-light-gray"
                    value={desc}
                    id={desc}
                    onChange={onDescChange}
                />
            </div>
            <div className="">
                <input type="submit" className="bg-primary text-white m-2.5 border-0 rounded-[3px] py-[15px] px-5 min-w-[150px] text-base cursor-pointer shadow-1px transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-default active:shadow-0px active:translate-y-px" value="Добавить" disabled={!(!!name && !!desc)}/>
            </div>
        </form>
    )
}
