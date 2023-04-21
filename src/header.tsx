import "react";
import cart from "./assets/img/Shopping cart.svg";
import hamburger from "./assets/img/hambuger.svg";
function Header(){
  
    function Ham_menu(){
        const hamIcon = (  
              <div className="flex m-2  p-2">
                <img src = {hamburger} alt="Hamberger menu" className="w-14 sm:w-8 " />
                {/* div to open and close*/}
            </div>);
        return(hamIcon);

    };

    function Main_Title(){

        const Title_name :string ="Mall app";
        const Title_contents = (
            <div className="flex justify-center m-2 p-2">
            <h1 className="text-slate-50 font-Domine text-2xl sm:text-lg md:text-xl">{Title_name}</h1>
        </div>) 
        
        return(Title_contents)
    };

    function Shopping_Cart(){
        let cart_items :number = 0;
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
    );
}

export default Header;
