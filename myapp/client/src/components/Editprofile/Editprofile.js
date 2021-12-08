import React from 'react'

function Editprofile() {
    
    const handlesubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="flex w-screen h-screen bg-red-400 items-center justify-center ">
            <form className="w-500 sl:w-full sl:bg-blue-200 h-96 bg-black flex flex-col items-center justify-evenly p-2 rounded-xl shadow-2xl">
                <input className="text-black rounded-md border-transparent p-2 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" defaultValue="rajesh"/>
                <input className="text-black rounded-md border-transparent p-2 text-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value="jesh@nitt.edu"/>
           
                <button type="submit" onClick={handlesubmit}>submit</button>
            </form>
        </div>
    )
}

export default Editprofile
