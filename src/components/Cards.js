import React from 'react'
import Navbar from './Navbar'

function Cards() {
    return (
        <>
            <div className="container-fluid">
                <Navbar />
                <h1>Cards</h1>
                <div className="row d-flex">
                    <div className="col-xs-2 col-md-4">
                        <div className="card mb-4">
                            <img className="card-img-top" src="https://loremflickr.com/750/400" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2 col-md-4">
                        <div className="card mb-4">
                            <img className="card-img-top" src="https://loremflickr.com/750/400" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2 col-md-4">
                        <div className="card mb-4">
                            <img className="card-img-top" src="https://loremflickr.com/750/400" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2 col-md-4">
                        <div className="card mb-4">
                            <img className="card-img-top" src="https://loremflickr.com/750/400" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text text-left">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Cards
