import React from 'react'
import emailjs from "emailjs-com"
// import "./Mailer.css"
import styled from 'styled-components'
import { Box } from '@material-ui/core';
export const Mailer = () => {

    function handleSentEmaail(e){
        
        e.preventDefault();

        emailjs.sendForm('service_3rycb9s', 'S04whjGHXjjghaoBT', e.target, 'S04whjGHXjjghaoBT').then(res=>{
            alert("Email sent to Shivani")
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <Box id='project' w={{base:"100%",md:"60%",lg:"40%"}} border={"1px solid red"}>
        <StyledContactForm>
    <form className='row' onSubmit={handleSentEmaail}>
            <label  style={{color: "rgb(99, 7, 78)"}}>Name</label>
            <input  type="text" name='name' className='form-control'  style={{border: "1px solid black"}} />

            <label  style={{color: "rgb(99, 7, 78)"}}>Email</label>
            <input  type="email" name='user_email' className='form-control'  style={{border: "1px solid black"}}/>

            <label  style={{color: "rgb(99, 7, 78)"}}>Message</label>
            <textarea name='message' rows="4" className='form-control'  style={{border: "1px solid black"}}/>
            
            <input type="submit" value="Send" className='form-control btn btn-primary'   />
        </form>
        </StyledContactForm>



   </Box>
  )
}

const StyledContactForm = styled.div`
  width:100%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    // border:1px solid white;
    padding:20px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      color:white;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }`
