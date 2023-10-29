import React from "react";
import UserImage from '../logo/user.jpg';
import '../сomponents/Profile.css';


const Profile = () => {
  return ( 
    <div className="main-profile container-fluid min-vh-75 m-auto  mt-sm-auto  p-0 mb-md-4  col-xl-9 col-md-10">
    <div className="main-profile-container w-100 ">
        <div className="profile ">Profile</div>

        <div className="profile-info container-fluid ">
            <ul className="profile-li ">
                <li className=" active">User Info</li>
                <li className="profile-info-li">Address</li>
                <li className="profile-info-li">Contact</li>
                <li className="profile-info-li">Social Networks</li>
            </ul>


            <div className="profile-img">
                <img className="profile-img-user" src={UserImage} alt="User" />
            </div>

            <button className="profile-button">Upload your photo</button>
        </div>


        <form action="#" method="get" className="profile-form  row-cols-lg-9 ">
            <p className="first-name ps-2 pb-0 mt-3 mb-1"> First Name <span className="form-name">*</span> </p>
                <input type="text" className="form-control ps-1" id="first-name" placeholder=" Jack" />
           
            <p className="last-name ps-2 pb-0 mt-3 mb-1">Last Name <span className="form-name">*</span></p>
                <input type="text" className="form-control w-100 " id="last-name" placeholder=" Douglas" />
            
            <p className="username ps-2 pb-0 mt-3 mb-1">
                Username </p>
                <input type="text" className="form-control" id="username" placeholder=" JackD" />
            
            <button type="button" className="profile-save mt-4">Save</button>

        </form>



    </div>
</div>

  )
}

export default Profile