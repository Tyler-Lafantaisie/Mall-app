import "react";
function Footer(){
    function Foot_nav(){
        const Footer_Nav = (
            <nav className="text-white m-3 p-2 flex justify-start">
                <ul>
                    <li className="hover:underline">Home</li>
                    <li className="hover:underline">About</li>
                    <li className="hover:underline">Support</li>
                    <li className="hover:underline">Settings</li>
                </ul>
            </nav>
        );
        return(Footer_Nav);
    }
    function Rights(){
        const AllRights:string = "All right reserver to Tyler Lafantaisie";
        const Rights_Concat = (<div className="flex justify-center"><p className="text-white text-lg">{AllRights}</p></div>);

        return(Rights_Concat);
    }
    return(
        <>
            <footer className="bg-slate-700">
                <Foot_nav/>
                <Rights/> 
            </footer> 
            </>);
}
export default Footer;
