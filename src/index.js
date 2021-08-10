// var React = require('react');
import React from 'react';

// var ReactDom = require('react-dom');
import ReactDom from 'react-dom';


//In actual normal Javascript

/*
var p=document.createElement("p");
p.innerHTML="The David RS";
document.getElementById("root").appendChild(p);
*/


// ReactDom.render('what to show?', 'where to show?', 'call back function');
/*
ReactDom.render(
  //render needs only one element

  <h1>Hello World</h1>,// this JSX or Javascript XML or Javascript exts
  document.getElementById('root')

);*/





/*
ReactDom.render(
  //render needs only one element but multiple element use <div> tag or return an array of element in 16.0.0 up version
  [
    <h1>Hello World</h1>,
    <h5>David RS</h5>,
    <p>This is React</p>
  ]
  ,
  document.getElementById('root')

);*/





// React Freagment
/*
ReactDom.render(
  //render needs only one element but React.fregment <> </>
  
  // <React.Fragment>


  //short form of React.Fragment <>   </> 
  <> 
    <h1>Hello World</h1>
    <h5>David RS</h5>
    <p>This is React</p>
  </>

  // </React.Fragment>
  ,

  document.getElementById('root')

);*/






//Challenge #1

/*
ReactDom.render(

  <>
    <h1>David Netflix Pick</h1>
    <p>List of favourire top 3 series</p>

    <ol>
      <li>Sacred Games</li>
      <li>Sex Education</li>
      <li>Bulbul</li>

    </ol>

  </>,

  document.getElementById('root')
);
*/






//JSX Expressions
/*
const n="David RS"

ReactDom.render(

  //in JSX  use javascript Expresion form is '{}', statement is not working
  <>
    <h1>My name is {n} </h1> 
    <p>sum 2 and 3 = {2+3}</p>
  </>
  ,

  document.getElementById('root')
);
*/






// Template Literals
/*
const n="David";
const l="RS";
const o="Rajib";
const a = ` but my original name is ${o} `; //template literals

ReactDom.render(

  <>
    <h1>My name is {n+l} {a} </h1> 
    <p>sum 2 and 3 = {2+3}</p>
  </>
  ,

  document.getElementById('root')
);
*/




//challenge #2

/*
const d = new Date().toLocaleDateString();
const t= new Date().toLocaleTimeString();

ReactDom.render(
  
  <>
    <h1>David RS</h1>
    <p>today date is : {d}</p>
    <p>today date is : {t}</p>
  </>
  ,
  document.getElementById('root')
);
*/







//JSX Attribute

/*
const imgSrc="https://picsum.photos/200/300";

ReactDom.render(
  
  //herf, targtet, contentEditable these called JSX Attribute but in JSX camplecase madatory
  <>
    <h1 contentEditable="true">The David RS</h1>
    <a href="https://rajib-sadhu.github.io/portfolio" target="_blank">JSX Attribue</a> 
    <br/> <br/> 
    <img alt="random images" title="random images" src={imgSrc}></img>
  </>
  ,
  document.getElementById('root')
);
*/






// JSX Style CSS and Google Fonts

/*
import './index.css'; //index.css file link

const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";


ReactDom.render(
  //class attribute in JSX className
    <>
    <h1 className="head">The David RS</h1>
   
    <div className="img_div">

    <img alt="random images" title="random images" src={img1}></img>
    <img alt="random images" title="random images" src={img2}></img>
    <img alt="random images" title="random images" src={img3}></img>

    

    </div>
  </>
  ,
  document.getElementById('root')
);
*/









// inline CSS

/*
const img1="https://picsum.photos/200/300";

const headColor= {
  color: 'blue',
  fontSize: '3rem',

};
const main={
  width: '100%',
  height: 'auto',
  display: 'grid',
  placeItem: 'center',
  marginLeft:'35px',
};

ReactDom.render(
  //inline css use style={}
    <>
    <h1 style={ {headColor}, { textTransform:'uppercase'}}>The David RS</h1>
   
    <div style={main}>

    <img style={{ boxShadow:"8px 10px 10px -8px #000"}} alt="random images"  src={img1}></img>

    </div>
  </>
  ,
  document.getElementById('root')
);
*/






// challenge #3 - project 1

const center_div={ //center div inline css
  width:'500px',
  height:'150px',
  backgroundColor: '#ffe8d6',
  borderRadius:'12px',
  display:'grid',
  placeItems:'center',
  textTransform: 'uppercase',
  fontSize: '13px',
  fontWeight:'100',
  fontFamily: 'sans-serif'
}

let timeChange=""; //dynamic text change

let cssStyle={}; //dynamic color change


let currDate = new Date(); //current date time time-zone function
 currDate = currDate.getHours(); // current hour function


  if(currDate>=5 && currDate<12 )
  {
    timeChange="Good Morning";
    cssStyle.color="blue";
  }
  else if(currDate>=12 && currDate<18 )
  {
    timeChange="Good Afternoon";
    cssStyle.color="yellow";
  }
  else if(currDate>=18 && currDate<20 )
  {
    timeChange="Good Evening";
    cssStyle.color="#2a9d8f";
  }
  else
  {
    timeChange="Good Night";
    cssStyle.color="#264653";
  }


ReactDom.render(
  //inline css use style={}
    <>


      <div style={{width:'100vw', height:'100vh', backgroundColor:'#e9c46a', display:'grid', placeItems:'center'}}>

        <div style={center_div}>
            <h1>Hello Sir, <span style={cssStyle}>{timeChange}</span> </h1>
        </div>

      </div>

    </>
  ,
  document.getElementById('root')
);