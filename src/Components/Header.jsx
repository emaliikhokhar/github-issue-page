import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { AiOutlinePlus, AiFillGithub } from 'react-icons/ai'
import { TiArrowSortedDown } from 'react-icons/ti'
import DP from '../Ali Aftab Khokhar.jpg'
// import Logo from '../github-logo.png'

const Header = () => {
    return (
        <div className="bg-dark text-white p-4 d-flex">
            <div className="ps-5">
            {/* <img src={Logo} width="25" height="25" style={{borderRadius:"100px"}}/> */}
            <AiFillGithub className="fs-3"/>
            </div>
            <div className="ps-4 mt-1">
                <div className="input-group" style={{marginTop: "-8px", marginBottom: "-10px"}}>
                    <span className="input-group-text text-white border-0" id="basic-addon1" style={{backgroundColor: "#3a3e3f"}}>This Repository</span>
                    <input type="text" className="form-control border-0 text-white shadow-none" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"  style={{backgroundColor: "#3a3e3f"}} />
                </div>
            </div>
            <div className="ps-5 mt-1">
                Pull Requests
            </div>
            <div className="ps-5 mt-1">
                Issues
            </div>
            <div className="ps-5 mt-1">
                Marketplace
            </div>
            <div className="ps-5 mt-1">
                Explore
            </div>
            <div className="fs-4" style={{marginTop: "-8px", marginLeft: "400px"}}>
                <IoIosNotifications />
            </div>
            <div className="fs-4 ps-4" style={{marginTop: "-8px"}}>
                <AiOutlinePlus />
                <TiArrowSortedDown />
            </div>
            <div className="fs-4 ps-4" style={{marginTop: "-8px"}}>
                <img src={DP} width="25" height="25" style={{borderRadius:"100px"}}/>
                <TiArrowSortedDown />
            </div>
        </div>
    )
}

export default Header