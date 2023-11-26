import Burger from '../assets/images/icon-menu.svg';

function NavBar() {
  return (<>
    <ul className="hidden sm:flex text-[18px] sm:w-[430px]
    sm:place-content-around sm:items-center sm:text-[16px] cursor-pointer ">
        <li><a href='#'>Home</a></li>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Categories</a></li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' 
    src={Burger} alt="menu burger"/>
    </>)
}

export default NavBar