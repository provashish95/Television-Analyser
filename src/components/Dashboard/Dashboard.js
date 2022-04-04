import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';
import '../Home/Home.css';


const Dashboard = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChartsData(data))
    }, []);


    return (
        <section className='container'>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <LineChart width={500} height={300} data={chartsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="investment" stroke="#915059" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#3f6bc5" activeDot={{ r: 8 }} />
                    </LineChart>
                    <h6 className='text-center text-style'>Line chart : Investment & Revenue</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <BarChart width={500} height={300} data={chartsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sell" fill="#7f1919" />
                    </BarChart>
                    <h6 className='text-center text-style'>Bar chart : Sells</h6>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="investment"
                            isAnimationActive={false}
                            data={chartsData}
                            nameKey="month"
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#ff7070"
                            stroke="#7f1919"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                    <h6 className='text-center text-style'>Pie chart : Investment</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                    <AreaChart width={500} height={300} data={chartsData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#915059" fill="#915059" />
                    </AreaChart>
                    <h6 className='text-center text-style'>Area chart : Revenue</h6>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;