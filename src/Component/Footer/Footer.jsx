
function Footer() {
  return (
    <>
    



    <footer className="  w-full p-4 bg-black border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 text-center h-60 items-center text-lg ">
      <div className='flex flex-col items-center sm:mt-8 gap-3'>
    <span className="text-md text-white sm:text-center dark:text-gray-400"> 2024 <a href="#" className="hover:underline text-white"> Founded By Omar Haytham and E/Mohammed Ebrahim</a> :  Copyright © All Rights Reserved
    </span>
    <span className="text-md text-white sm:text-center dark:text-gray-400">  <a href="#" className="hover:underline text-white">special thanks for : </a>  E/Mohammed Ebrahim
    </span>
    </div>   
    <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-300 dark:text-gray-400 sm:mt-8 justify-center ">
        <li className=''>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 ">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>


    
    </>
  )
}

export default Footer;