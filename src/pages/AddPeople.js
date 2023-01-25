import React from 'react'

function AddPeople() {
    return (
        <div>

            <div className='container c-addvillage'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-lg-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between'>
                                    <h5>Add People</h5>
                                    <button className="add-v-btn">
                                        Back
                                    </button>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-4 ">
                                        <div className="form-group">
                                            <label className="form-label">
                                                Villages
                                            </label>
                                            <select name="Select" className='form-control'>
                                                <option value="Select">Select</option>
                                                <option value="Pune">Pune</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Nagpur">Nagpur</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Mobile</label>
                                            <input name="gramsevak_name" type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Gender</label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Male</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">Female</label>
                                                <input type="radio" name="gender" id="gender2" value="Other"/>
                                                <label className="ms-1 me-2 " for="gender2">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Nimshashkiy Employee</label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Nimshashkiy Employee Position</label>
                                            <input name=" Nimshashkiy-Employee" type="text" className='form-control'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Political party activists
                                            </label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Political party activists party name</label>
                                            <input name=" Nimshashkiy-Employee" type="text" className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Highly educated person
                                            </label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Highly educated person Education</label>
                                            <input name=" Nimshashkiy-Employee" type="text" className='form-control'/>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>School Student
                                            </label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Gra.P.Sarpanch/Member(Current/Former)
                                            </label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='row md-3'>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Ex-Army/Army families of the village
                                            </label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Shopkeeper
                                            </label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>Progressive farmer</label>
                                            <div className="d-flex">
                                                <input type="radio" name="gender" id="gender0" value="Male"/>
                                                <label className="ms-1 me-2 " for="gender0">Yes</label>
                                                <input type="radio" name="gender" id="gender1" value="Female"/>
                                                <label className="ms-1 me-2 " for="gender1">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center pt-4 mt-5">
                                    <button className="reset">Reset</button>
                                    <button className=" submit d-flex align-items-center">submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddPeople
