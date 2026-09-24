import { useState } from "react"

function Header ({onAddEntry}){
    const [isAddModal , setIsAddModal]= useState (false)
    return(
        <header className="flex items-center justify-between p-6">
            <h1 className="text-3xl font-bold">
                My Personal Diary

            </h1>

           

            <button onClick={onAddEntry} className="rounded-lg bg-black px-4 py-2 text-white">
                Add Entry
                </button>

       





        </header>




    )

}
export default Header