import React from 'react'
import './AskQuery.css'
import { useState } from 'react';
import axios from 'axios';

function AskQuery(props) {

    // const Post =() =>{
    //     props.Show_Open_Query_Main
    // }
    const [ques,setQues] = useState('');
    const [desc,setDesc] = useState('');
    const handleSubmit = async (e) => {
    
    if(localStorage.getItem('msalAccount')){
        if(ques && desc){
            const username = JSON.parse(localStorage.getItem('msalAccount'))['name'];
            const useremail = JSON.parse(localStorage.getItem('msalAccount'))['username'];
            axios.post('http://localhost:8080/api/addPost', 
            {
                authorEmail : useremail,
                authorName : username,
                question : ques,
                description : desc,
                postType: "QUERY"
            }
            ).then((res) => {
                console.log(res);
                console.log("post req success");
            })
            .catch((err) => {
                console.log(err);
            })
        }
        else {
            alert('Empty Question or Description');
        }
        window.location.reload();
    }
  }

  const handleChange = (e) => {
    const tag = e.target.className;
    const value = e.target.value;
    if(tag === 'type-ques') {
        setQues(value);
    }
    else setDesc(value);
  }


  return (
    <div className='boss'>
        <div className='ques'>
            <div className='q'>
                Question
                <textarea className='type-ques'
                    placeholder='How can I ensure my app complies with legal regulations, such as GDPR or COPPA, regarding user data privacy? Also How do I handle app localization and language support efficiently?'
                    onChange={handleChange}
                >

                </textarea>
            </div>
            <div className='description'>
                Description
                <textarea className='desp' placeholder='Add a Description' onChange={handleChange}></textarea>
            </div>
        </div>
        <div className='cancel'>
            <button className='can'
              onClick={props.ShowMain}
            >Cancel</button>
            <button className='post' onClick={handleSubmit}>Post</button>
        </div>
    </div>
  )
}

export default AskQuery;