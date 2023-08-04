import React, { Component } from 'react'
import './Apple.css'
import one from './assests/1.jpeg'
import two from './assests/2.jpeg'
import three from './assests/3.jpeg'
import four from './assests/4.jpeg'
import five from './assests/5.jpeg'
import six from './assests/6.jpeg'
import seven from './assests/7.jpeg'
import eight from './assests/8.jpeg'
import nine from './assests/9.jpeg'
import ten from './assests/10.jpeg'
import eleven from './assests/11.jpeg'
import tweleve from './assests/12.jpeg'
import thirteen from './assests/13.jpeg'
import fourteen from './assests/14.jpeg'
import fiveteen from './assests/15.jpeg'
import sixteen from './assests/16.jpeg'
import seventeen from './assests/17.jpeg'


export class Apple extends Component {
    constructor(){
        super();
        this.state = {
            count : 0,
            time: 10,
            msg:'',
            msg1:'',
            src:one

        }       
    }
    incrementCount = () =>{
       
        if(this.state.time!=0)
        {
            this.setState({
            count : this.state.count + 1,
        
            
        })
        }
        if(this.state.count==1)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:three
            })
           }
            
        }

        if(this.state.count==2)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:four
            })
           }
            
        }

        if(this.state.count==3)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:five
            })
           }
            
        }
        if(this.state.count==4)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:six
            })
           }
            
        }
        if(this.state.count==5)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:seven
            })
           }
            
        }
        if(this.state.count==6)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:eight
            })
           }
            
        }
        if(this.state.count==7)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:nine
            })
           }
            
        }
        if(this.state.count==8)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:ten
            })
           }
            
        }
        if(this.state.count==9)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:eleven
            })
           }
            
        }
        if(this.state.count==10)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:tweleve
            })
           }
            
        }
        if(this.state.count==11)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:thirteen
            })
           }
            
        }
        if(this.state.count==12)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:fourteen
            })
           }
            
        }
        if(this.state.count==13)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:fiveteen
            })
           }
            
        }
        if(this.state.count==14)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:sixteen
            })
           }
            
        }
        if(this.state.count==15)
        {
            if(this.state.time!=0)
           {
            this.setState({
                src:seventeen
            })
           }
            
        }
        if(this.state.count==17)
        {
            this.setState(
                {
                    msg1:`Congratulations you eaten the full apple in ${10-this.state.time} Seconds`,
                    time:0,
                    src:'https://th.bing.com/th/id/OIP.leGwEmFLo_-6KT05VOaJzAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7'
                }
            )
        }
        
    }
    componentDidMount()
    {
       this.interval = setInterval(this.tick,1000)
    }
    
    tick = ()=>
    {
      
       if(this.state.time!=0)
       {
        this.setState(
            {
               time : this.state.time-1

            })
        }
        if(this.state.time==0 && this.state.count<18)
        {
         this.setState(
             {
                src:'',
                src2:'data:image/jpeg;base64,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',
                msg:" YOU LOSS THE GAME  "
 
             })
         }
    }
    restart=()=>
    { 
        this.setState(
        {
            time:10,
            count:0,
            msg:'',
            src: one,
            msg1:'',src2:''

        })

    }
    render() {
    return (
      <div className='bod'>
        <p className='time'>Eat The 18 Bites of Apple By   in {this.state.time} Seconds</p>
        <img className='imagee' src={this.state.src} onClick={this.incrementCount}></img>
        <img className='img' src={this.state.src2}></img><br></br><br></br>
        <p className='score'> You have eaten {this.state.count} bites only</p>
        <p className='msg'>{this.state.msg}</p>
        <p className='msg1'>{this.state.msg1}</p>
        <button onClick={this.restart}>Restart</button>
      </div>
    )
  }
}

export default Apple