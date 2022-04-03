import React from 'react';
import './Home.css';
import logo from '../images/sony.jpg';

const Home = () => {
    return (
        <>
            <section className='container'>
                <div className="row align-items-center my-3">
                    <div className="col col-md-8 border border-success">
                        <h1>Television Analyser</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis mollitia molestias, earum aliquam explicabo. Rem adipisci quas omnis ex.</p>
                        <button className='btn btn-info'>Live Demo</button>
                    </div>
                    <div className="col col-md-4 border border-success">
                        <img className='img-fluid' src={logo} alt="sonyTv" />
                    </div>
                </div>


            </section>
            <div className="container">
                <h1 className='text-center'>Customer reviews</h1>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;