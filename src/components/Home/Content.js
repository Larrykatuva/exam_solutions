import React,{useState, useEffect} from 'react'
import bg from '../../assets/bg1.jpg'
import {BiSearchAlt2} from 'react-icons/bi'
import dig from '../../assets/dig.jpg'
import {VscDebugBreakpointLogUnverified} from 'react-icons/vsc'
import Services from './Services'
import Footer from './Footer'
import { Redirect } from "react-router-dom"
import { Form,Button } from 'react-bootstrap';

const Content = () => {
    const [text, setText] = useState("");
    const handleText = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
         e.preventDefault();
        console.log("text")
        return <Redirect to="/search" />
    }
    return (
        <div className="App">
            <div id="content" style={{ backgroundImage:`url(${bg})` }}>
                <h1><strong>Credible Research Papers and Essays</strong></h1>
                <Form onSubmit={handleSubmit}>
                    <div id="form-group">
                        <input type="text" id="form-control" onChange={handleText}/>
                        <Button type="submit">Search</Button>
                    </div>
                </Form>
                <div id="dig">
                    <img src={dig} alt=""/>
                </div>
                <ul>
                    <li>
                        <VscDebugBreakpointLogUnverified id="point"/>
                        Institutions recommend our papers and services
                    </li>
                    <li>
                        <VscDebugBreakpointLogUnverified id="point"/>
                        Papers written based on specific instructions
                    </li>
                    <li>
                        <VscDebugBreakpointLogUnverified id="point"/>
                        Original papers without plagiarism elements
                    </li>
                    <li>
                        <VscDebugBreakpointLogUnverified id="point"/>
                        Papers from best academic writers
                    </li>
                </ul>
                <div id="learn">
                    <p>Are you an educator?   <a href="">Learn More</a></p>
                </div>
            </div>
            <Services/>
            <Footer/>
        </div>
    )
}

export default Content
