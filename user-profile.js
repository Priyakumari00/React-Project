import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserProfile(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-profile-container">
      {userProfile && (
        <div className="user-profile-card">
          <img className="user-profile-image" src={userProfile.picture.large} alt="Profile" />
          <div className="user-profile-info">
            <h1 className="user-profile-name">{userProfile.name.first} {userProfile.name.last}</h1>
            <p className="user-profile-detail">Gender: ${userProfile.gender}</p>
            <p className="user-profile-detail">Phone: ${userProfile.phone}</p>
          </div>
        </div>
      )}
    </div>  );
};

export default UserProfile;
