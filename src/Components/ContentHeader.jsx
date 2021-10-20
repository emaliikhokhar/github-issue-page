import React from 'react'
import { FaFile } from 'react-icons/fa'
import { AiFillEye, AiFillStar, AiOutlineBranches } from 'react-icons/ai'

const ContentHeader = () => {
    return (
        <div className="ps-5 p-4 ms-5 mt-2 d-flex">
            <div style={{letterSpacing: "0.5px"}} className="d-flex mt-2">
                <FaFile style={{marginTop:"3px"}}/> 
                <div className="text-primary ps-3" >emaliikhokhar / <b>github-issue-page</b></div>
            </div>
            <div style={{marginLeft: "600px"}} className="d-flex">
                <span className="input-group-text"><AiFillEye className="me-1"/> Watch</span>
                <span className="form-control">906</span>
            </div>
            <div className="d-flex ms-3">
                <span className="input-group-text"><AiFillStar className="me-1"/> Unstar</span>
                <span className="form-control">34,267</span>
            </div>
            <div className="d-flex ms-3">
                <span className="input-group-text"><AiOutlineBranches className="me-1"/> Folk</span>
                <span className="form-control">5,639</span>
            </div>
        </div>
    )
}

export default ContentHeader
