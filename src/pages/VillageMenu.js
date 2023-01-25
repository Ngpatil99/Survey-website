import React from "react";
import Icon from "@mdi/react";
import {mdiDownload, mdiEyeRefresh, mdiPencil} from "@mdi/js";
import {useNavigate} from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function VillageMenu() {
    const navigate = useNavigate();
    const downloadbtn = () => {
        const path = "/downloadpdf";
        navigate(path, {replace: true});
    };

    const viewbtn = () => {
        const path = "/viewpdf";
        navigate(path, {replace: true});
    };
    const editbtn = () => {
        const path = "/editpdf";
        navigate(path, {replace: true});
    };
    return (
        <div>
            <div className="container village-page">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="village-btn">
                                    <button className="add-village-btn">ADD VILLAGE</button>

                                </div>
                                <div className="d-flex align-item-center justify-content-between flex-row-reverse search-here">
                                    <label>
                                        <input type="text" className="form-control search" placeholder="Search Here..."/>
                                    </label>
                                </div>
                                <div className="table-data">
                                    <table>
                                        <tr className="v-tr">
                                            <th>Sr.No</th>
                                            <th>Village</th>
                                            <th>Post</th>
                                            <th>Pincode</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr className="v-tr">
                                            <td>1</td>
                                            <td>Pune</td>
                                            <td>At. Po. Pune</td>
                                            <td>456987</td>
                                            <div className="d-flex">
                                                <button className="download-btn"
                                                    onClick={downloadbtn}>
                                                    <Icon path={mdiDownload}
                                                        className="table-icon"/>
                                                </button>
                                                <button className="view-btn"
                                                    onClick={viewbtn}>
                                                    <Icon path={mdiEyeRefresh}
                                                        className="table-icon"/>
                                                </button>
                                                <button className="edit-btn"
                                                    onClick={editbtn}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="v-tr">
                                            <td>2</td>
                                            <td>Mumbai</td>
                                            <td>At. Po.Mumbai</td>
                                            <td>456987</td>
                                            <div className="d-flex">
                                                <button className="download-btn"
                                                    onClick={downloadbtn}>
                                                    <Icon path={mdiDownload}
                                                        className="table-icon"/>
                                                </button>
                                                <button className="view-btn"
                                                    onClick={viewbtn}>
                                                    <Icon path={mdiEyeRefresh}
                                                        className="table-icon"/>
                                                </button>
                                                <button className="edit-btn"
                                                    onClick={editbtn}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                        <tr className="v-tr">
                                            <td>3</td>
                                            <td>Nagpur</td>
                                            <td>At. Po.Nagpur</td>
                                            <td>456987</td>
                                            <div className="d-flex">
                                                <button className="download-btn"
                                                    onClick={downloadbtn}>
                                                    <Icon path={mdiDownload}
                                                        className="table-icon"/>
                                                </button>
                                                <button className="view-btn"
                                                    onClick={viewbtn}>
                                                    <Icon path={mdiEyeRefresh}
                                                        className="table-icon"/>
                                                </button>
                                                <button className="edit-btn"
                                                    onClick={editbtn}>
                                                    <Icon path={mdiPencil}
                                                        className="table-icon"/>
                                                </button>
                                            </div>
                                        </tr>
                                    </table>
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

export default VillageMenu;
