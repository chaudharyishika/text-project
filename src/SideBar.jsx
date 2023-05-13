import React from "react";
function SideBar(){
    return(
   <div>
    <div className='flex flex-col bg-gray-700 w-80 h-screen '>
     <a href='/assignment'>Assignment</a>
     <a href='/lecture'>Lecture</a>
   </div>
   </div>
    );
}
export default SideBar;