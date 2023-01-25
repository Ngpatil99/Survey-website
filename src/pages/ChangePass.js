import React from 'react'
import {Icon} from '@mdi/react';
import {mdiEye} from '@mdi/js';

function ChangePass() {


    return (
        <div className=' container changepass'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <h4 className="mb-3">Change Password</h4>
                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label">Current Password</label>
                                    <div className="input-group input-group-merge">
                                        <input className="form-control" type="password" data-val="true" data-val-required="The Password field is required." id="Password" name="Password"/>
                                        <span className="input-group-text">
                                            <Icon path={mdiEye}
                                                className="pass-icon"
                                                id="togglePassword"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">New Password</label>
                                    <div className="input-group input-group-merge">
                                        <input className="form-control" type="password" data-val="true" data-val-required="The Password field is required." id="Password" name="Password"/>
                                        <span className="input-group-text">
                                            <Icon path={mdiEye}
                                                className="pass-icon"
                                                id="togglePassword"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label">
                                        New Confirm Password
                                    </label>
                                    <div className="input-group input-group-merge">
                                        <input className="form-control" type="password" data-val="true" data-val-required="The Password field is required." id="Password" name="Password"/>
                                        <span className="input-group-text">
                                            <Icon path={mdiEye}
                                                className="pass-icon"
                                                id="togglePassword"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center pt-3">
                                <button className="reset">Reset</button>
                                <button className=" submit d-flex align-items-center">ChangePassword</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePass
