import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Icon from "@mdi/react";
import {mdiPencil} from "@mdi/js";
import {useNavigate} from "react-router-dom";

function ExectiveFile() {

    const navigate = useNavigate();
    const active = () => {
        const path = "/active-edit";
        navigate(path, {replace: true});
    };
    return (
        <div>
            <div className="container village-page">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <button className="add-exective-btn">Add Exective</button>
                                <div className="d-flex align-item-center justify-content-between flex-row-reverse">
                                    <label>
                                        <input type="text" className="form-control exective-search" placeholder="Search Here..."/>
                                    </label>
                                </div>
                                <div className="table-data">
                                    <table>
                                        <tr className="e-tr">
                                            <th>Sr.No</th>
                                            <th>Name</th>
                                            <th>Mobile</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr className="e-tr">
                                            <td>1</td>
                                            <td>Admin</td>
                                            <td>7897876545</td>
                                            <td>admin</td>
                                            <td>
                                                <button className="active-btn ">Active</button>
                                            </td>
                                            <div className="e-tr">
                                                <button className="edit-btn"
                                                    onClick={active}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="e-tr">
                                            <td>2</td>
                                            <td>Jon doe</td>
                                            <td>7897876545</td>
                                            <td>exicative</td>
                                            <td>
                                                <button className="active-btn">Active</button>
                                            </td>
                                            <div className="">
                                                <button className="edit-btn"
                                                    onClick={active}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="e-tr">
                                            <td>3</td>
                                            <td>Admin</td>
                                            <td>7897876545</td>
                                            <td>exicative</td>
                                            <td>
                                                <button className="disable-btn">Disable</button>
                                            </td>
                                            <div className="e-tr">
                                                <button className="edit-btn"
                                                    onClick={active}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="e-tr">
                                            <td>4</td>
                                            <td>Jon doe</td>
                                            <td>7897876545</td>
                                            <td>exicative</td>
                                            <td>
                                                <button className="active-btn">Active</button>
                                            </td>
                                            <div className="">
                                                <button className="edit-btn"
                                                    onClick={active}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="e-tr">
                                            <td>5</td>
                                            <td>Admin</td>
                                            <td>7897876545</td>
                                            <td>exicative</td>
                                            <td>
                                                <button className="active-btn">Active</button>
                                            </td>
                                            <div className="e-tr">
                                                <button className="edit-btn"
                                                    onClick={active}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="e-tr">
                                            <td>6</td>
                                            <td>Jon doe</td>
                                            <td>7897876545</td>
                                            <td>exicative</td>
                                            <td>
                                                <button className="active-btn">Active</button>
                                            </td>
                                            <div className="">
                                                <button className="edit-btn"
                                                    onClick={active}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                    </table>
                                    <hr></hr>
                                </div>

                                <div className="main-pagination">
                                    <div className="page-no">
                                        <p>Page 1 of 1</p>
                                        <span className="drop-show">
                                            <select name="Show 10" className="show-page">
                                                <option value="volvo">Show 5</option>
                                                <option value="saab">Show 10</option>
                                                <option value="opel">Show 20</option>
                                            </select>
                                        </span>
                                    </div>

                                    <Pagination>
                                        <Pagination.First/>
                                        <Pagination.Prev/>
                                        <Pagination.Next/>
                                        <Pagination.Last/>
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExectiveFile;
