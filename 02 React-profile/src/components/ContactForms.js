import React from 'react'
import Contact from './ContactFormTwo'
import ContactSection from './ContactFormOne'
import { useState } from 'react'

function ContactForms() {

    const [view, setView] = useState("basic");
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
        </nav>
        {view === "basic" ? <ContactSection /> : <Contact />}
      </div>
    );
}

export default ContactForms