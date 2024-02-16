import React, { useState } from 'react';
import { Button,  Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../body.css'
import axios from 'axios'
import { filterSendMessagge } from '../../../../config/config';
import './Contact.css'
import{EnvelopeFill, Github, Instagram, Whatsapp} from 'react-bootstrap-icons';


const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [loading,setLoading] = useState(false)

    
    
    const sendMessage=async()=>{
        setLoading(true)
        let ipv4 = {}
        const ipv  = await axios.get('https://api.ipify.org?format=json')
        .then((res)=>{
            ipv4= res.data.ip
        })
        const data = {
            nama:name,
            email:email,
            pesan:message,
            ip_addr:ipv4,
            
        }
        filterSendMessagge(data)
        .then((res)=>{
            axios.post("https://sheet.best/api/sheets/0071c000-22d8-490d-83e7-970e49a5c100",res)
           .then((res)=>{
                setMessage("")
                setEmail("")
                setName("")
                alert("succesfull")
                setLoading(false)
           }).catch((err)=>{
                alert("Sorry, something err")
                setLoading(false)
           })
        })
        .catch((err)=>{
           setLoading(false)
           alert(err.message)
        })
   
        
    }
    return (
        <div id='contacts' className='section' style={{minHeight:'max-content',paddingTop:'5em'}}>
            <div className='sec-title'>
                <h3>Information</h3>
            </div>
            <div>
                <div id="message-me">
                    <div style={{marginLeft:'15px',marginTop:'2em'}} >
                        <h4>Send Me Message</h4>
                    </div>
                    <div style={{padding:'1em 3em 1em 3em'}}>
                        <Form >
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="example" 
                                onChange={(e)=>setName(e.target.value)}
                                value= {name}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"  
                                 onChange={(e)=>{setEmail(e.target.value)}}
                                 value={email}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label >Message</Form.Label>
                                <Form.Control style={{resize:'none'}} as="textarea" type="text" rows={3} 
                                  onChange={(e)=>setMessage(e.target.value)}
                                  value = {message}/>
                            </Form.Group>
                            { loading && loading ?
                                <Button variant="primary" disabled>
                                  <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                  />
                                  sending message...
                                </Button>
                              :
                                <Button onClick={()=>{sendMessage()}}>
                                        Send
                                </Button>
                                
                              
                            }
                            
                        </Form>   
                    </div>

                </div>
                <div id="contact-me">
                    <div style={{marginLeft:'15px',marginTop:'2em',marginBottom:'3em'}}>
                        <h4>Contact's Info</h4>
                    </div>
                    <div style={{display:'flex',width:'100%',height:'max-content',justifyContent:'space-around'}}>
                           <a className='contact-container' 
                               href="https://github.com/Kororo212">
                                <Github size={40}/>
                                <p>Github</p>
                           </a> 
                           <a  className='contact-container'>
                                <Instagram size={40}/>
                                <p>Instagram</p>
                           </a> 
                           <a  className='contact-container ' 
                             href="https://wa.me/+6285883584374">
                                <Whatsapp size={40}/>
                                <p>Whatsapp</p>
                           </a>
                           <a  className='contact-container '
                             href='https://mail.google.com/mail/?view=cm&fs=1&to=hudiindrawan01@gmail.com'
                             >
                                <EnvelopeFill size={40}/>
                                <p>Gmail</p>
                           </a> 
                           
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
