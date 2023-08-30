import React,{useState} from 'react';
import './App.css'
import Header from './componentinvest/Header';
import Card from './componentinvest/Card';
import DisplayResults from './componentinvest/DisplayResults';
import logo from './th.jpg';
const App = () => {
  const[data,setData]=useState([]);
  const[counter,setCounter]=useState(0);
  function func(values){
    setData(values);
    setCounter(values.duration);
    // console.log(values[0].duration);
  }

  const yearlyData = [];

  if (data) {
    let currentSavings = +data['current-savings'];
    const yearlyContribution = +data['yearly-contribution'];
    const expectedReturn = +data['expected-return'] / 100;
    const duration = +data['duration'];

    for (let i = 0; i < duration; i++) {

      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  
  // console.log(yearlyData);


  return (
    <div className='container'>
      <Header img={logo}/>
      
      <Card send={func}/>
      {yearlyData.length===0&&<h2 className='no-data'>No Data </h2>}
      {yearlyData.length && <DisplayResults data={yearlyData} initialInvestment={data['current-savings']}/>}
      
      
    </div>
    
    
  );
}

export default App;