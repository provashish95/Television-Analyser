import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
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
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#915059" activeDot={{ r: 8 }} label />
                        <Line type="monotone" dataKey="revenue" stroke="#3f6bc5" activeDot={{ r: 8 }} label />
                    </LineChart>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <BarChart width={500} height={300} data={chartsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#7f1919" label />
                    </BarChart>
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
                            innerRadius={40}
                            fill="#e69138"
                            stroke="#7f1919"
                            label
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 ">
                    <AreaChart width={500} height={300} data={chartsData} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="investment" stroke="#7f1919" fill="#7f1919" label />
                        <Area type="monotone" dataKey="revenue" stroke="#3f6bc5" fill="#3f6bc5" label />
                    </AreaChart>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;