import React , {useRef, useState, useEffect}from "react"
import styled from "styled-components"
import pic from "./bollore.png"
import pik from "./HR.png"


const Hero =()=>{
  const [byDays, setByDays] = useState("00")
    const [byHours, setByHours] = useState("00")
    const [byminutes, setByminutes]= useState("00")
    const [bySec, setBySec]= useState("00")
    // const [byHours, setByHours]= useState(00)

    let interval = useRef()

    const startTime = ()=>{
        const countDown = new Date("August 5, 2022, 00:00:00").getTime()

        interval=setInterval(()=>{
            const now = new Date().getTime();
            const distance = countDown - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000* 60 * 60 * 24)/(1000* 60 * 60)))
            const minutes = Math.floor((distance % (1000* 60 * 60 )/(1000* 60 )))
            const secs = Math.floor((distance % (1000* 60 )/1000))

            if(distance < 0){
   clearInterval(interval.current)
            }else{
                setByDays(days) 
                setByHours(hours) 
                setByminutes(minutes)
                setBySec(secs)
            }
        }, 1000)

        
    }

    useEffect(()=>{
startTime();
return ()=>{
    clearInterval(interval.current)
}
    })
    return(
        <Div>
            
 <Logo>
    <img src = {pic} alt ="logo"/>
 </Logo>
        <Text>
            OUR HR SYSTEM HAS CHANGED
            </Text> 
            <Logs>
                <img src = {pik} alt = "hr"/>
                {/* <D></D> */}
            </Logs>
            <Lun>Launching soon...</Lun>
            <Card>
                <Span>{byDays}
                <Small>days</Small>
                </Span>
                <Span>{byHours}
                <Small>Hours</Small>
                
                </Span>
                <Span>{byminutes}
                <Small>Mins</Small>
                
                </Span>
                <Spans>{bySec}
                <Small>Secs</Small>
                
                </Spans>
                </Card> 
            <Watch>Keep your inbox refreshed!</Watch>

        </Div>
    )
}

export default Hero
const Lun = styled.div`
margin-bottom:20px ;
font-family:pacifico ;
font-weight:medium ;
color:red
`
const Small = styled.div`
font-size:20px
`
const Span = styled.div`
display:flex ;
justify-content:center ;
flex-direction:column ;
border-right:5px solid #004E98 ;
width:100px;
height: 150px;
align-items:center ;
font-family:poppins ;
font-size:30px ;
font-weight:bold ;
/* color:#004E98  */
`
const Spans = styled.div`
display:flex ;
justify-content:center ;
flex-direction:column ;
/* border-right:5px solid #004E98 ; */
width:100px;
font-family:poppins ;

height: 150px;
align-items:center ;
font-size:30px ;
font-weight:bold ;
/* color:#004E98  */
`
const Logs = styled.div`
width:120px;
filter: blur(2px);
img{
    width:100%;

}
`
const Card = styled.div`
width:300px;
height:150px;
border:5px solid #004E98;
display:flex ;
justify-content:space-between ;
align-items:center ;
`

const Watch = styled.div`
font-size:20px;
/* font-weight:bold ; */
margin-top:15px ;
`

  const Text = styled.div`
  font-size:1.7rem;
  font-weight:bold ;
  opacity:0.9 ;
  width:400px;
  text-align:center ;
  margin-bottom: 10px;
font-family:poppins ;

  `
const Logo = styled.div`
width:300px;
img{
    width:100%
}
`
const Div = styled.div`
background-image: url("/bg.png");
width:100%;
height:100vh;
background-position:center  ;
background-size:cover ;
background-repeat: no-repeat;
display:flex;
justify-content:center ;
align-items:center ;
flex-direction:column ;
position:relative;
/* background: #000; */
`