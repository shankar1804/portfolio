'use client'

import Header from "./menu"

const details_card = () => {
   return (
      <>
         <div className="profile-details">
            <div className="card-content">
               <Header />
            </div>
            <div className="content sidebar">
               <h1>About Me</h1>
               <p>Hello there! I'm thrilled to welcome you to my portfolio...</p>

               <section className="skills">
                  <div className="skill-card">
                     <h3>Web Development</h3>
                     <p>Designing interactive websites and ensuring scalability.</p>
                  </div>
                  <div className="skill-card">
                     <h3>App Development</h3>
                     <p>Building apps with cutting-edge technologies.</p>
                  </div>
                  <div className="skill-card">
                     <h3>UI/UX Designing</h3>
                     <p>Crafting visually stunning and user-friendly designs.</p>
                  </div>
                  <div className="skill-card">
                     <h3>Mentorship</h3>
                     <p>Helping others grow in their careers by offering insights and guidance.</p>
                  </div>
               </section>
            </div>
         </div>
      </>
   )
}
export default details_card;