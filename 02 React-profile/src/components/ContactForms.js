import React from 'react'
import ContactbyFormik from './ContactFormTwo'
import ContactbyuseFormik from './ContactFormOne'
import { useState } from 'react'
import ContactbyReactHookForm from './ContactformThree';

function ContactForms() {

    const [view, setView] = useState("basic");

    const  getButton =()=>{
      if(view === "basic"){
        return <ContactbyuseFormik />
      }
      else if(view === "advanced"){
        return <ContactbyFormik />
      
      }
      else {
        return <ContactbyReactHookForm />      }

    }

   
    return (
      <div className="bg-purple-700 ">
        <nav>
          <button
            onClick={() => setView("basic")}
            style={{ color: view === "basic" ? "#fff" : "" }}
            className="bg-blue-900 rounded px-4 py-2 m-5"
          >
           by useFormik
          </button>
          <button
            onClick={() => setView("advanced")}
            style={{ color: view === "advanced" ? "#fff" : "" }}
            className="bg-blue-900 rounded px-4 py-2 m-5"
          >
            by Formik
          </button>
          <button
            onClick={() => setView("reacthook")}
            style={{ color: view === "reacthook" ? "#fff" : "" }}
            className="bg-blue-900 rounded px-4 py-2 m-5"
          >
            by React hook form
          </button>
        </nav>
        {getButton()}
       
        
       

      </div>
    );
}

export default ContactForms