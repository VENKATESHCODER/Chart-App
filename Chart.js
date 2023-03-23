import './ExpenseItem.css';
import React,{ useState } from 'react';
import ExpensesChart from './ExpensesChart';



const Expense = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
    const clickHandler = () =>{
        setTitle('Updated!');
        setAmount('100');
        console.log(amount);
        console.log(title);
    }
    const [amount, setAmount] = useState(props.amount);
    return (
        <div className='expense-item'>
            
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            <ExpensesChart expenses={filteredExpenses}/> 
            
        </div>
    );
}

export default Expense;

import React from "react";

import chartBar from "./ChartBar";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/> )}
    </div>
};

export default Chart;

import React from "react";

import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
    }
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height : barFillHeight}}></div>
            </div>
                <div className="chart-bar__label">{props.label}</div>
    </div>
};



export default ChartBar;


import React from "react";
import Chart from "./Chart";

const ExpensesChart = props => {
    const chartDataPoints = [
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0},
    ];
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}/> 
};

export default ExpensesChart;
