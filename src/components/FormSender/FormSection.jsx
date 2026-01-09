import React from 'react'
import FormList from './FormList'
import InformDetails from './InformDetails'

const FormSection = () => {
  return (
    <section
      className="contact-section flex justify-center items-center min-h-[60vh] bg-[rgba(20,20,30,0.7)] rounded-3xl shadow-2xl gap-10 p-10 py-10 px-4 my-12 mx-auto max-w-[900px] flex-wrap"
    >
      <div
        className="contact-info-card flex-1 min-w-[280px] bg-[rgba(30,30,40,0.95)] rounded-2xl shadow-lg p-8 flex flex-col justify-center items-start"
      >
        <InformDetails />
      </div>
      <div
        className="contact-form-card flex-1 min-w-[300px] bg-[rgba(30,30,40,0.95)] rounded-2xl shadow-lg p-8 flex flex-col justify-center"
      >
        <FormList />
      </div>
    </section>
  );
}

export default FormSection