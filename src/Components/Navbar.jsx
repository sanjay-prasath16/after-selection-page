import { useState, useEffect, useRef } from "react";
import logo from "../assets/image1.png";
import companyName from "../assets/Aspireit.png";
import profile from "../assets/Ellipse 1872.svg";
import PropTypes from "prop-types";

const Navbar = ({ assistant }) => {

    const [searchPhrase, setSearchPhrase] = useState("");
  const [isFocused1, setisFocused1] = useState(false);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearch = (e) => {
    setSearchPhrase(e.target.value);
  };

  useEffect(() => {
    if (isFocused1 === false) {
      setSearchPhrase("");
    }
  }, [isFocused1]);

  return (
    <div className="NavBar w-full h-[64px] px-10 py-4 bg-white border border-[#D2D2D2] backdrop-blur-[220px] flex justify-between items-center">
      <div className="logo-container w-[130px] h-[46px] relative  bg-[#FFF]">
        <div className="Rectangle7391 w-[130px] h-[46px] relative bg-[#0F0F36] rounded-[15px]" />
        <div className="logo w-[100px] h-[30.22px] absolute left-[15px] top-[8px] bg-[#0F0F36] rounded-[15px] flex justify-center items-center cursor-pointer">
          <img
            className="Aspireit w-[29.452px] h-[30.217px] bg-transparent shrink-0"
            src={logo}
          />
          <img
            className="Group1000007770 bg-transparent w-[64.384px] h-[13.735px] shrink-0"
            src={companyName}
          />
        </div>
      </div>
      <div className="SearchBarContainer w-full flex grow justify-center items-center gap-4">
        <div className="InputContainer w-[90%] flex justify-start items-center gap-4 h-[48px] max-w-[657px] pl-6 pr-6 pt-4 pb-4 bg-[#F5F5F5] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25)] rounded-[32px]">
          <div className="searchBar inline-flex items-center h-[34px] w-full max-w-[657px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              className={`w-[22px] h-[22px] shrink-0 rounded-full mr-[8px] ${
                isFocused1
                  ? "transform scale-105 transition-transform duration-300"
                  : ""
              }`}
            >
              <path
                d="M9.49996 2.75C8.16495 2.75 6.85991 3.14588 5.74989 3.88757C4.63986 4.62927 3.7747 5.68347 3.26381 6.91686C2.75292 8.15026 2.61925 9.50745 2.8797 10.8168C3.14015 12.1262 3.78302 13.3289 4.72702 14.2729C5.67102 15.2169 6.87375 15.8598 8.18311 16.1202C9.49248 16.3807 10.8497 16.247 12.0831 15.7361C13.3165 15.2252 14.3707 14.3601 15.1124 13.25C15.854 12.14 16.2499 10.835 16.2499 9.49996C16.2498 7.70979 15.5386 5.99298 14.2728 4.72714C13.0069 3.46131 11.2901 2.75011 9.49996 2.75Z"
                stroke="#353535"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M14.666 14.668L18.3327 18.3346"
                stroke="#353535"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <input
              className="justify-items-start px-2 w-full max-w-[657px] text-[#353535] pb-[10px] pt-[8px] text-[18px] leading-[18px] border-0 bg-[#F5F5F5] focus:outline-none focus:text-[#353535] placeholder:text-[#353535]"
              onClick={focusInput}
              type="text"
              name="searchBar"
              value={isFocused1 ? searchPhrase : ""}
              onChange={handleSearch}
              onFocus={() => setisFocused1(true)}
              onBlur={() => setisFocused1(false)}
              placeholder={isFocused1 ? "|" : "Search"}
              ref={inputRef}
            />
          </div>
        </div>
      </div>

      <div className="Frame1000008205 flex justify-start items-center gap-6 w-fit bg-[#fff]">
        <div className="Frame1000008204 px-[16px] py-[4px] bg-[#EBEBEB] flex justify-start items-center shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] rounded-[40px] backdrop-blur-[4px]">
          <div className="ButtonsNotification w-[44px] h-[44px] mr-[16px] relative bg-[#EBEBEB] cursor-pointer">
            <div className="Ellipse w-[44px] h-[44px] absolute left-0 top-0 bg-white rounded-full" />
            <div className="IconsBell w-[24px] h-[24px] absolute left-[10px] top-[10px] bg-white hover:transform hover:scale-[1.05] hover:transition-transform hover:duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 6.50001C21 8.43001 19.43 10 17.5 10C15.57 10 14 8.43001 14 6.50001C14 4.57001 15.57 3.00001 17.5 3.00001C19.43 3.00001 21 4.57001 21 6.50001ZM19 11.79C18.5 11.92 18 12 17.5 12C16.0421 11.9974 14.6447 11.4171 13.6138 10.3862C12.583 9.3553 12.0026 7.95788 12 6.50001C12 5.03001 12.58 3.70001 13.5 2.71001C13.3185 2.48755 13.0897 2.30838 12.8302 2.18555C12.5707 2.06272 12.2871 1.99934 12 2.00001C10.9 2.00001 10 2.90001 10 4.00001V4.29001C7.03 5.17001 5 7.90001 5 11V17L3 19V20H21V19L19 17V11.79ZM12 23C13.11 23 14 22.11 14 21H10C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23Z"
                  fill="#0072DC"
                />
              </svg>
            </div>
          </div>
          <div className="Profile flex justify-start items-center bg-[#EBEBEB] hover:transform hover:scale-[1.05] hover:transition-transform hover:duration-300 cursor-pointer">
            <img
              className="AvatarPic w-[44px] min-w-[44px] h-[44px] bg-none rounded-full"
              src={profile}
            />
          </div>
        </div>
        <div className="Ai w-[56px] h-[56px] bg-none cursor-pointer">
          <img
            className="Layila min-w-[61px] h-[61px] bg-none rounded-full mt-[-2.5px] hover:transform hover:scale-[1.05] hover:transition-transform hover:duration-300"
            src={assistant}
          />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
    assistant: PropTypes.string.isRequired,
}

export default Navbar;