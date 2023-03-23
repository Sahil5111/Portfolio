import React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

import keys from "../keys.json"


function Contact() {
    const [form, setform] = useState({ 'Name': '', 'Email': '', 'Comment': '' })

    function handleChange(e) {
        setform(form => ({ ...form, [e.target.name]: e.target.value }))
    }

    function ValidateEmail(input) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
          return true;
        } else {
          alert("Invalid email address!");
          return false;
        }
      }

    function handleSubmit(e) {
        e.preventDefault()
        if (form.Name == '' || form.Email == '' || form.Comment == '') {
            alert('You probably forgot to add some field.')
            return
        }
        if(ValidateEmail(form.Email)){
            emailjs.send(
                keys[0],
                keys[1],
                {
                    from_name: form.Name,
                    to_name: 'Sahil',
                    from_email: form.Email,
                    to_email: 'sahilsingh7977@gmail.com',
                    message: form.Comment
                },
                keys[2]).then(() => {
                    alert('Thank you. for Contacting me I will get back to you as soon as possible.')
                    setform({ 'Name': '', 'Email': '', 'Comment': '' })
                }).catch(error => {
                    console.log(error);
                    alert('Something went wrong.')
                })
        }
    }

    return (
        <section className="section" id="Contact">
            <div className="container1 text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input type="text" size="50" name="Name" className="form-control" placeholder="Your Name" onChange={handleChange} required={1} value={form.Name} />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="email" name="Email" className="form-control" onChange={handleChange} placeholder="Enter Email" requried={1} value={form.Email} />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea name="Comment" id="comment" rows="6" className="form-control" required={1}
                                placeholder="Write Something" onChange={handleChange} value={form.Comment}></textarea>
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="Send Message" onClick={handleSubmit} className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default Contact