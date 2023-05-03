import "react";
export default function Footer(){
    return(
        <footer className="bg-slate-700 h-fill w-fill">
            <Navfooter>
                <Navfooteritem>{navArr[0]}</Navfooteritem>
                <Navfooteritem>{navArr[1]}</Navfooteritem>
                <Navfooteritem>{navArr[2]}</Navfooteritem> 
            </Navfooter>
            <Trademark>{trademarkText}</Trademark>
           

        </footer>
    );
}
// footer nav
function Navfooter(props){
    
   return(
        <nav>
            <ul className="p-4">{props.children}</ul>
        </nav>
   ) 
}

function Navfooteritem(props){
    
    return(
        <li className="text-slate-50 font-Domine">
            {props.children}
        </li>
    )
}
const navArr = ["Home", "Socials", "Contact us",]
// trade mark
function Trademark(props){
        
        return(
        <p className="text-slate-50 font-Domine flex justify-center relative bottom-4"> 
            {props.children}
        </p>
        )
   }
const trademarkText = "All Rights are reserved to Tyler Lafantaisie";

