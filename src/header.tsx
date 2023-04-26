import {useState} from "react";
import {ReactComponet as cart}from "./assets/img/Shopping cart.svg";
import hamburger from "./assets/img/hambuger.svg";

 export default function Header(){
   return( 
    <header className="bg-slate-700 grid grid-cols-3 grid-rows-1 w-full">
 
    <Navbar>
        <NavItem icon = {hamburger} >
            <DropdownMenu/> 
        </NavItem>
    </Navbar>

    </header>
);
}

function DropdownMenu(){
   function DropdownItem(props){
   return(
    <a className="">
         
        {props.children}

    </a>
   )
   } 
    return(
        <div className="absolute top-5 bg-red-500 w-20 h-20">
        <DropdownItem> Home </DropdownItem>
        </div>
    )
}
function Navbar(props){
    return(
         <nav>
             <ul className="m-2">{props.children}</ul>
        </nav>
)
}
function NavItem(props){
    const [open, setOpen] = useState(false);
    return(
        <li className="flex m-2 p-2">
            <a className="" onClick={()=> setOpen(!open)}>
                <img src={props.icon} className="w-14 sm:w-8"/> 
            </a>

            {open && props.children}
        </li>
    )
}










    // change state 
    /*
    function Ham_menu(){
        
        const hamIcon = (  
              <div className="flex m-2  p-2">
                <img src = {hamburger} alt="Hamberger menu" className="w-14 sm:w-8 "/>
                
                <div className="border-2 bg-slate-700 border-slate-900 rounded-xl absolute z-10 w-48 h-72 open-close">
                    <nav>
                        <ul className="m-2">
                        <img src = {hamburger} alt="Hamberger menu" className="w-14 sm:w-14" />

                            <li className="text-slate-50 font-Domine text-lg my-1">My Home</li>
                            <li className="text-slate-50 font-Domine text-lg my-1">About</li>
                            <li className="text-slate-50 font-Domine text-lg my-1">Support</li>
                            <li className="text-slate-50 font-Domine text-lg my-1">Wishlists</li>
                            <li className="text-slate-50 font-Domine text-lg my-1">Settings</li>
                            <li className="text-slate-50 font-Domine text-base my-1 mx-3">Payemnt Settings</li>
                            <li className="text-slate-50 font-Domine text-base my-1 mx-3">Country</li>
                            <li className="text-slate-50 font-Domine text-base my-1 mx-3">Age filter</li>
                        </ul>
                    </nav>
                </div>
            </div>);
            
        return(hamIcon);

    }
    // links to home page
    function Main_Title(){

        const Title_name ="Mall app";
        const Title_contents = (
            <div className="flex justify-center m-2 p-2">
            <h1 className="text-slate-50 font-Domine text-2xl sm:text-lg md:text-xl">{Title_name}</h1>
        </div>) 
        return (Title_contents)
    }
    // changes state when someone adds something to the cart
    function Shopping_Cart(){
        const cart_items = 0;
        const Indicator =(
            <div className="w-10 h-10 absolute flex justify-center items-center indicator">
                    <div className="bg-red-500 w-5 h-5 rounded-full flex justify-center">
                        <p className="text-slate-50 text-sm">{cart_items}</p>
                    </div>
                </div>
        );
            function Indicator_Dispaly(){
                if(cart_items === 0){
                    return(null);
                } else if(cart_items > 0){
                    return Indicator;
                }
            }
        return(
            <div className="flex justify-end">
                <img src={cart} alt="shopping cart" className="w-10 h-10 z-0 static sm:w-8 md:w-10"/>

                {Indicator_Dispaly()}       
            </div>
        )
        }

    return(
        <>  
            <header className="bg-slate-700 grid grid-cols-3 grid-rows-1 w-full">
                <Ham_menu/>
                <Main_Title/>
                <Shopping_Cart/>
            </header>
        </>
    );*/


