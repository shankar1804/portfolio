'use client'
import Image from 'next/image'
import profilePic from '../../public/profile.jpg'

export const MainProfile = () => {
   return (
      <>
         <div className="sidebar">
            <div>
               <Image
                  src={profilePic}
                  alt="Beatrice Wambui"
                  // width={150}
                  // height={150}
                  className="profile-img"
               />
            </div>
            <div className="profile">
               <h2>Beatrice Wambui</h2>
               <p>Fullstack Developer</p>
            </div>
            <div className="contact">
               <p><b>Phone:</b> +254729930053</p>
               <p><b>Email:</b> beatricewambuiruta@gmail.com</p>
               <p><b>Location:</b> Nairobi, Kenya</p>
            </div>
            <button className="resume-btn">Download Resume</button>
         </div>
      </>
   )
}