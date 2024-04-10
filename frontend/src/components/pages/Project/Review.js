import React from 'react'
import './Review.css'
import thumbsUp from "../../assets/thumbs-up.png";

function Review() {
  return (
    <div>
        <div className='heading'>
            Project Heading
            <p className='update-btn'>Completed</p>
        </div>

        <div className='section'>
            <div className='user-info'>
                <div className='user-user'>
                    <div className='user-name'>
                        Owner
                        <div className='my-name'>
                            <img src=""></img>
                            <div className='final-name'>
                                <p className='p1'>Rishi Kiran</p>
                                <p className='p2'>134 projects - 3 following</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-proj'>
                        <div className='category'>
                            Category 
                            <div className='cat-names'>
                                <div className='badge1'>Web Development</div>
                                <div className='badge2'>App Development</div>
                            </div>
                        </div>
                        <div className='tools-used'>
                            Tools Used 
                            <p>Figma, React.js, VS Code, NodeJs</p>
                        </div>
                    </div>
                </div>
                <button className='edit-me'>
                    Edit Project
                </button>
            </div>

            <div className='right-review'>
                <div className='right-head'>
                    <p>Reviews & FeedBack</p>
                    <button>562 <img src={thumbsUp}></img></button>
                </div>
                <div className='right-content'>
                    <div className='post-div'>
                        <input type='text' placeholder='What are your comments on this project?'></input>
                        <button className='post-btn'>POST</button>
                    </div>
                    <div className='posted-reviews'>
                        <div className='one-post'>
                            <div className='poster-pic'><img src=""></img></div>
                            <div className='poster-content'>
                                <div className='div-1'>
                                    <div className='d1'>Shashwat Sharma</div>
                                    <div className='d2'>&nbsp; . 14 mins ago</div>
                                </div>
                                <div className='the-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Review;