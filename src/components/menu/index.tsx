import { useState } from "react"
export const tabs = [
   { name: 'Home', value: 'home', icon: 'ri-home-4-line' },
   { name: 'Resume', value: 'resume', icon: 'ri-article-line' },
   { name: 'Work', value: 'work', icon: 'ri-briefcase-line' },
   { name: 'Contact', value: 'contact', icon: 'ri-contacts-book-3-line' },
]
const Header = () => {
   const [tabname, setTabName] = useState<string>('Home');

   return (
      <>
         <div className="tab-container">
            {tabs.map((tab, index) => (
               <button
                  className={tabname == tab.name ? "tab active" : "tab"}
                  key={index}
                  onClick={() => setTabName(tab.name)}
               >
                  <div className="tab-icon">
                     <i className={tab.icon}></i>
                  </div>
                  {tab.name}
               </button>
            ))}
         </div>
      </>
   )
}
export default Header