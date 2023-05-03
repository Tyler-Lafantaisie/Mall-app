import {useState} from "react";
import cart from "./assets/img/Shopping cart.svg";
import hamburger from "./assets/img/hambuger.svg";

 export default function Header(){
   return( 
    <header className="bg-slate-700 grid grid-cols-3 grid-rows-1 w-full">
 
    <Navbar>
        <NavItem icon = {hamburger} >
            <DropdownMenu/> 
        </NavItem>
    </Navbar>
    <Main_Title/>
    <Shopping_Cart icon = {cart}/>
    <CartIndicator/>
    </header>
);
}
// Hamberger menu and dropdown menu
function DropdownMenu(){
   function DropdownItem(props){
   return(
    <a className="text-slate-50 font-Domine text-lg relative top-2 left-2">
         
        {props.children}

    </a>
   )
   } 
    return(
        <div className=" flex flex-col absolute top-10 left-2 bg-slate-700 border-slate-950 border-2 w-32  h-40 rounded-xl z-10">
            <DropdownItem> Home </DropdownItem>
            <DropdownItem> About </DropdownItem>
            <DropdownItem> Support </DropdownItem>
            <DropdownItem> Wishlists </DropdownItem>
            <DropdownItem> Settings</DropdownItem>
        </div>
    )
}
function Navbar(props){
    return(
         <nav>
             <ul className="my-2 mx-1">{props.children}</ul>
        </nav>
)
}
function NavItem(props){
    const [open, setOpen] = useState(false);
    return(
        <li className="flex m-2 p-2">
            <a onClick={()=> setOpen(!open)}>
                <img src={props.icon} className="w-14 sm:w-8"/> 
            </a>

            {open && props.children}
        </li>
    )
}
// title
function Main_Title(){
    function Title_Item(props){
    return(
        <a className="text-slate-50 font-Domine text-xl justify-self-center self-center"> 
            {props.children}
        </a>
    )
    } 
    return(
    <Title_Item> Mall app </Title_Item>
    )

}



// shopping cart
function Shopping_Cart(props){

 
    return(
        <div className="flex w-10 h-10 justify-self-end m-2">
            <img src={props.icon} />
        </div>
    )
}

function CartIndicator (props){
    const[numBadge, showBadge] = useState(false);
    let counter:number = 0;
    return( 
        <div className="bg-red-500 w-5 h-5 flex rounded-full z-10 justify-self-end justify-center absolute font-Domine text-sm text-slate-50 right-4 top-3">
            <p>{counter}</p>
        </div>
       )
}
