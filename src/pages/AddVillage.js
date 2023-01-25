import React, {useState} from "react";
import Icon from "@mdi/react";
import {mdiPlus} from "@mdi/js";

function AddVillage() {


    return (
        <div>
            <div className="container c-addvillage">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h5>Add villages</h5>
                                    <button className="add-v-btn">Back</button>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Village Name</label>
                                            <input name="gramsevak_name" type="text" className="form-control "/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Post</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Pincode</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Talathi Office</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Grampanchayat</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">J.P.Circle</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">P.S.Circle</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Prathmik Aarogya Kendra
                                            </label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">MSEB Office</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Patsantha Shakha</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                            <div className="mb-3"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <span>
                                                    <Icon path={mdiPlus}
                                                        className="v-btn-icon"/>
                                                    Add MORE
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Gas Agency</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>

                                            <div className="mb-3"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <Icon path={mdiPlus}
                                                    className="v-btn-icon"/>

                                                <span>Add MORE</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">School</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>

                                            <div className="mb-3"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <Icon path={mdiPlus}
                                                    className="v-btn-icon"/>
                                                <span>Add MORE</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Villege Major Problems Demands
                                            </label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>

                                            <div className="mb-3">
                                                <span>
                                                    <small className="text-danger"></small>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <Icon path={mdiPlus}
                                                    className="v-btn-icon"/>
                                                <span>Add MORE</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Means of communication
                                            </label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                            <div className="mb-3"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <Icon path={mdiPlus}
                                                    className="v-btn-icon"/>
                                                <span>Add MORE</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Temple statue name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                            <div className="mb-3"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <Icon path={mdiPlus}
                                                    className="v-btn-icon"/>
                                                <span>Add MORE</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Bank</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                            <div className="mb-3"></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="add_more_btn" tabIndex="-1">
                                                <Icon path={mdiPlus}
                                                    className="v-btn-icon"/>
                                                <span>Add MORE</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Talathi name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Talathi mobile</label>
                                            <input name="talathi_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Gramsevak name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Gramsevak mobile</label>
                                            <input name="gramsevak_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Agri assistant name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Agri assistant mobile
                                            </label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Electrician name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Electrician mobile</label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                GramPachayat employee name
                                            </label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                GramPachayat employee mobile
                                            </label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Doctor name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Doctor mobile</label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Aasha name</label>
                                            <input name="aasha_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Aasha mobile</label>
                                            <input name="aasha_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Police patil name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Police patil mobile</label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Tantamukti chif</label>
                                            <input name="tantamukti_chif_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className=" row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Tantamukti chif mobile
                                            </label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Kotval name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Kotval mobile</label>
                                            <input name="kotval_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Insurance Agent Name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Insurance Agent Mobile
                                            </label>
                                            <input name="doctors_mobile" type="number" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Ration Shopkeeper Name
                                            </label>
                                            <input name="gramsevak_name" type="text" className="form-control "/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-2 ">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Ration Shopkeeper Mobile
                                            </label>
                                            <input name="kotval_mobile" type="number" className="form-control   "/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Village sketch</label>
                                            <input name="village_sketch" type="file" disabled="" className="form-control    "/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Roads connecting the village
                                            </label>
                                            <input name="kotval_mobile" type="number" className="form-control   "/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center pt-3">
                                    <button className="reset">Reset</button>
                                    <button className=" submit d-flex align-items-center">
                                        submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddVillage;
