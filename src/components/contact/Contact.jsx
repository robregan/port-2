import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const body = new URLSearchParams({
      'form-name': 'contact',
      name: data.name,
      email: data.email,
      subject: data.subject,
      comment: data.comment,
    }).toString()

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      setSubmitted(true)
      e.target.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      alert(
        'Something went wrong. Please try emailing me directly at rsr@robregan.dev',
      )
    }
  }

  if (submitted) {
    return (
      <div className='contact-success'>
        <h4>Message received!</h4>
        <p>
          Thanks for reaching out — I'll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type='hidden' name='form-name' value='contact' />
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <input
                type='text'
                className='form-control theme-light'
                placeholder='Full name'
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className='invalid-feedback'>Name is required</span>
              )}
            </div>
          </div>

          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <input
                type='email'
                className='form-control theme-light'
                placeholder='Email address'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <span className='invalid-feedback'>{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className='col-12'>
            <div className='form-group mb-3'>
              <input
                type='text'
                className='form-control theme-light'
                placeholder='Subject'
                {...register('subject', { required: true })}
              />
              {errors.subject && (
                <span className='invalid-feedback'>Subject is required.</span>
              )}
            </div>
          </div>

          <div className='col-12'>
            <div className='form-group mb-3'>
              <textarea
                rows='4'
                className='form-control theme-light'
                placeholder='Type comment'
                {...register('comment', { required: true })}
              ></textarea>
              {errors.comment && (
                <span className='invalid-feedback'>Comment is required.</span>
              )}
            </div>
          </div>

          <div className='col-12'>
            <div className='btn-bar'>
              <button className='px-btn px-btn-white' type='submit'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact
