import React from "react";
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
function DisplayResults(props){
    let arr=props.data.map(function (e){
        return (
            <tr key={e.year}>
          <td>{e.year}</td>
          <td>{formatter.format(e.savingsEndOfYear)}</td>
          <td>{formatter.format(e.yearlyInterest)}</td>
          <td>{formatter.format(e.savingsEndOfYear -
                  props.initialInvestment -
                  e.yearlyContribution * e.year)}</td>
          <td>{ formatter.format(props.initialInvestment +
                e.yearlyContribution * e.year)
              }
          </td>
        </tr>
        );
    })
    return (
        
        <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {arr}
      </tbody>
    </table>

    );
}

export default DisplayResults;