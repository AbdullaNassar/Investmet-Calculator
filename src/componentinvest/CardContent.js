import React,{useState} from 'react';
import './CardContent.css'
function CardContent(props){
    const[first,setFirst]=useState('');
    const[second,setSecond]=useState('');
    const[third,setThird]=useState('');
    const[fourth,setFourth]=useState('');

    function change1(e){
        setFirst(e.target.value);
    }
    function change2(e){
        setSecond(e.target.value);
    }
    function change3(e){
        setThird(e.target.value);
    }
    function change4(e){
        setFourth(e.target.value);
    }

    function Reset(e){
        e.preventDefault();
        setFirst('');
        setSecond('');
        setThird('');
        setFourth('');
    }

    function clickHandler(e){
        e.preventDefault();
        const data=
           {
            'current-savings':first,
            'yearly-contribution': second,
            'expected-return':third,
            duration:fourth
           }
        ;
        // console.log(data);
        props.send(data);
    }

    return(
        <div>
            <form className="card-content-form">
                <div className="input">
                    <label>Current Savings ($)</label>
                    <input value={first} onChange={change1} type='number'></input>
                </div >
                <div className="input">
                    <label>Yearly Savings ($)</label>
                    <input value={second} onChange={change2} type='number'></input>
                </div >
                <div className="input">
                    <label>Expected Interest (%, per year)</label>
                    <input value={third} onChange={change3} type='number'></input>
                </div>
                <div className="input">
                    <label>Investment Duration (years)</label>
                    <input  value={fourth} onChange={change4} type='number'></input>
                </div>
                <div className='buttons'>
                    <button onClick={Reset} className='reset'>Reset</button>
                    <button onClick={clickHandler}className='calc'>Calculate</button>
                </div>

            </form>
        </div>
    );
}

export default CardContent;