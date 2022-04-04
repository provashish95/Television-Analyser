import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [chartsData, setChartsData] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChartsData(data))
    }, []);

    console.log(chartsData);
    return (
        <section className='container'>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <LineChart width={500} height={300} data={chartsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />

                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                    <h6 className='text-center'>This is Line chart</h6>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">



                </div>
            </div>
        </section>
    );
};

export default Dashboard;