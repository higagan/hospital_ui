import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UserProfile() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [qualification, setQualification] = useState('');
  const location = useLocation();
  const { user_id } = location.state;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (user_id) {
      // Create user profile data
      const userProfileData = {
        user: `http://127.0.0.1:8000/api/v1/signup/${user_id}/`,
        name: name,
        department: department,
        qualification: qualification
      };
      try {
        // Post user profile data to the API
        const response = await fetch('http://127.0.0.1:8000/api/v1/user_registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userProfileData)
        });
        if (response.ok) {
          // Handle successful response
          console.log('User profile data posted successfully');
          // ... other logic ...
        } else {
          // Handle error response
          console.error('Failed to post user profile data');
        }
      } catch (error) {
        // Handle fetch error
        console.error('Failed to fetch', error);
      }
    } else {
      console.log('User ID not available');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">User Profile</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group row border-top pt-3">
                  <label htmlFor="name" className="col-sm-4 col-form-label">Name:</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row border-top pt-3">
                  <label htmlFor="department" className="col-sm-4 col-form-label">Department:</label>
                  <div className="col-sm-8">
                    <select
                      id="department"
                      className="form-control"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="">Select Department</option>
                      <option value="Ward">Ward</option>
                      <option value="ICU">ICU</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row border-top pt-3">
                  <label htmlFor="qualification" className="col-sm-4 col-form-label">Qualification:</label>
                  <div className="col-sm-8">
                    <select
                      id="qualification"
                      className="form-control"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                    >
                      <option value="">Select Qualification</option>
                      <option value="MBBS">MBBS</option>
                      <option value="AYUSH">AYUSH</option>
                      <option value="BDS">BDS</option>
                      <option value="Nursing">Nursing</option>
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
