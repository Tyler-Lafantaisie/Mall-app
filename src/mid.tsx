import "react";
import Target_Img from "../src/assets/img/target.svg";
import New_Brew_img from "../src/assets/img/New Brew.svg";

function Mid(){
    function Popular_bar(){
           const Pop_Title = "Popular with others";
           {/*add and style real slider*/}
           const Pop_bar = (
            <div className="h-80 w-full grid bg-slate-300 overflow-x-auto sm:bg-green-400 sm:h-48 md:bg-slate-200 md:h-80 my-5 ">
                <h3 className="font-Domine font-bold p-1 flex justify-center mx-3 my-3 text-xl sm:text-lg  md:text-xl">{Pop_Title}</h3>
                <div className="flex ">
                    <div className=" m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48 "></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                    <div className="m-3 p-1 w-40 h-48 bg-slate-50 drop-shadow-2xl sm:w-20 sm:h-24 md:w-40 md:h-48"></div>
                </div>
                </div>
           ); 
           

        return(Pop_bar);
    }

    function SignIn_SignUp_Btns(){
        const Sign_Slogan_One = "The Mall At Your Finger Tips.";
        const Sign_Slogan_Two = "A New Store Is Always Awiteing You";
        function Sign_In(){
            const SignIn_Title = "Sign In";
            
            const SignIn_btn = (<button className="w-80 h-28 bg-slate-300 drop-shadow-xl rounded-full font-Domine text-4xl my-2">{SignIn_Title}</button>);
            return(SignIn_btn);
        }; 
        function Sign_up(){
            const SignUp_Title = "Sign_up";

            const SignUp_btn =(<button className="w-80 h-28 bg-slate-300 rounded-full font-Domine text-4xl my-2 drop-shadow-xl">{SignUp_Title}</button>);
            return(SignUp_btn);
        };
        return(<>
        <div className="flex justify-center my-2">
                    <div className="grid">
                    <h4 className="font-Domine italic text-3xl my-2">{Sign_Slogan_One}</h4>
                    <Sign_In />
                    <Sign_up />
                    <h4 className="font-Domine italic text-2xl my-2">{Sign_Slogan_Two}</h4>
                    </div>
                </div></>);
    };
    
    function Sponsor_bar(){
       function Sponsor_One(){
        const Sponsor_name_One = "Target";
        const Sponsor_Img_One = (<div className="">
                <img src = {Target_Img} alt="" className="" />
            </div>);
        const Sponsor_Concat_One = (
        <div className=" w-full h-28 flex border-black border-solid border-4 justify-center m-2 bg-slate-50 items-center">
         {Sponsor_Img_One}
        <h3 className="font-Domine text-4xl mx-4">{Sponsor_name_One}</h3> 
        </div>); 
        return Sponsor_Concat_One; 
        };
       function Sponsor_Two(){
        const Sponsor_name_Two = "New Brew Coffee";
        const Sponsor_Img_Two = (<div>
        <img src={New_Brew_img}/>
        </div>);
        const Sponsor_Concat_Two = (
            <div className="w-full h-28 flex border-black border-solid border-4 justify-center m-2 bg-slate-50 items-center">
            {Sponsor_Img_Two}
            <h3 className="font-Domine text-4xl mx-4">{Sponsor_name_Two}</h3>
            </div>
        );
       return(Sponsor_Concat_Two);
       };
        return <>
        <div className="flex justify-center"> 
            <div className="grid  w-1/2  sm:w-full sm:m-5  "> 
                <Sponsor_One />
                <Sponsor_Two />
            </div>
        </div>
        </>;
    }; 
    return(
        <>
            <main className="h-max">
                <Popular_bar/>
                <SignIn_SignUp_Btns />
                <Sponsor_bar />
            </main> 
        </>
    );
};
export default Mid;
