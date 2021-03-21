import React from 'react'

import './resume.css'

import pdf from './Moises_Trejo_Resume.pdf';

const Resume = () => {

    let link = 'https://drive.google.com/file/d/1kF2FEqdvBEcCksgv8rMmDxnlfD3vDUaL/view?usp=sharing'

    let id = "1kF2FEqdvBEcCksgv8rMmDxnlfD3vDUaL"
    let src = `https://drive.google.com/file/d/${id}/preview`

    return <div class='wrapper'>
        <a href={pdf} download> <button class='button' >Download</button></a>
        <a href={link} download> <button class='button'>View</button></a>
        <iframe title='resume' class='pdf' src={src}/>

    </div>
}

export default Resume;