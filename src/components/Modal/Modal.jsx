import React from "react";

const Modal = ({onClick ,startTime , EndTime , Description})=>{
    return(
        <div class=" z-[99] overflow-y-auto bg-[rgb(212,212,212,0.7)] backdrop-blur fixed overflow-x-hidden h-[100vh] top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
               
                <div class="p-4 md:p-5 text-center">
                   
                     <h5 className="inter text-[18px] text-left">Start Time : <span className="pl-[20px] text-[18px]">{startTime} </span></h5>
                     <h5 className="inter text-[18px] text-left">End Time :  <span className="pl-[20px]">{EndTime} </span></h5>
                     <h5 className="inter text-[18px] text-left pb-[30px]">Description : <span className=" pl-[10px] "> {Description} </span></h5>
                    <button onClick={onClick} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                        Yes, I'm sure
                    </button>
                    <button  onClick={onClick} data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal;