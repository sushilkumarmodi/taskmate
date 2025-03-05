import Logo from "../assests/logo.svg"
export const Header = () => {
  return (
    <header>
        <span className="logo">
            <img src={Logo} alt="Taskmate Logo"/>
            <span>Taskmate</span>
        </span>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>    
  )
}
