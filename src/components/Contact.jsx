import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import '../style/style.css'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
// import * as dotenv from 'dotenv';

// dotenv.config();
const Contact = () => {
  // console.log("public key", import.meta.env.VITE_PUBLIC_KEY);

  const {register, handleSubmit, reset, formState:{errors}} = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });


  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
  
    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };


  const onSubmit = async (data)=> {
    const {name, email, message, subject} = data;

    try{
      setDisabled(true);
      const templateParams = {
        name,
        email, 
        subject, 
        message
      };
      
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      await emailjs.send(serviceId, templateId, templateParams, publicKey);


      // await emailjs.send(
      //   process.env.REACT_APP_SERVICE_ID,
      //   process.env.REACT_APP_TEMPLATE_ID,
      //   templateParams,
      //   process.env.REACT_APP_PUBLIC_KEY,        
      // );
      toggleAlert('Form submission was successful!', 'success');
    }catch(e){
      console.log(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    }finally{
      //re-enabling form submission
      setDisabled(false);
      //resetting form fields after submission
      reset()
    }
  };


  {alertInfo.display && (
    <div
      className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
      role='alert'
    >
      {alertInfo.message}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={() =>
          setAlertInfo({ display: false, message: '', type: '' })
        } // Clear the alert when close button is clicked
      ></button>
    </div>
  )}


  //toast message
  const notify = () => toast("Form Submitted");



  return (
    <div className='ContactForm flexx dir'>
      <div className='contact-img-container'>
        <img src='' alt="" />
      </div>
      <p className='contact-title'>Get in Touch</p>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form className='flexx dir' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='flexx dir'>
                  <div className=''>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {value: true, message: 'Please enter your name'},
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className=''>
                    <input
                      type='email'
                      name='email'
                      {
                        ...register('email', {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                          }
                        })
                      }
                      className='formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && <span className='errorMessage'>Please enter a valid email address</span>}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className=''>
                  <div className=''>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='formInput'
                      placeholder='Subject'
                    ></input>
                    { errors.subject && <span className='errorMessage'>{errors.message.subject}</span>}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className=''>
                  <div className=''>
                    <input
                      name='message'
                      className='formInput'
                      {
                        ...register('message', {
                          required: true

                        })
                      }
                      type='text'
                      placeholder='Message'
                    ></input>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button 
                className='submitbtn' 
                type='submit'
                onClick={notify}>
                  Submit
                </button>
                <ToastContainer/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;