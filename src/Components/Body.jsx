import React from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlinePendingActions } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const Body = () => {
    const data = useSelector(state => state.issueReducer)
    const [addIssueClick, setAddIssueClick] = useState(false);
    const addNewIssueFunc = () => {
        setAddIssueClick(true)
    }
    return (
        <div>
            <center>
                <div className="w-75">
                    <button className="btn" onClick={addNewIssueFunc} >
                        <AiOutlinePlus className="fs-1" title="Add an error" />
                    </button>
                </div>



                <div className="mt-4">
                    {
                        data.map((elem) => {
                            return (
                                <div className="d-flex p-3 w-75 border-bottom" style={{ height: "70px" }} key={elem.id}>
                                    <div style={{ float: "left", textAlign: "left" }} className="w-75">
                                        {
                                            elem.status === "pending" ?
                                                <MdOutlinePendingActions className="text-danger me-2 mb-1" /> :
                                                <AiOutlineCheck className="text-success me-2 mb-1" />
                                        }
                                        {elem.issueDesctiption}
                                        {
                                            elem.contribution === "" ?
                                                null : elem.contribution === "proposal" ?
                                                    <span className="bg-warning ms-2 p-1">contribution: {elem.contribution}</span> :
                                                    elem.contribution === "up for global" ?
                                                        <span className="ms-2 p-1 bg-success text-white">contribution: {elem.contribution}</span>
                                                        : null
                                        }
                                        {
                                            elem.difficulty === "" ?
                                                null :
                                                <span className="bg-info ms-2 p-1">difficulty: {elem.difficulty}</span>
                                        }
                                        {
                                            elem.issue === "" ?
                                                null :
                                                <span className="bg-danger ms-2 p-1 text-white">issue: {elem.issue}</span>
                                        }
                                    </div>
                                    <div className="w-25">
                                        {
                                            elem.status === "pending" ?
                                                <button className="btn btn-success p-1 ps-2 pe-2" style={{ marginTop: "-5px" }}>Completed</button> :
                                                <button className="btn btn-danger p-1 ps-2 pe-2" style={{ marginTop: "-5px" }}>Incomplete</button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </center>
        </div>
    )
}

export default Body
