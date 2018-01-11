import React, {Component} from "react";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            countClick: 0,
            titleName: "Card Title"
    };

        // TODO Register event
        this.counterClick = this.counterClick.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }

    // TODO Event
    counterClick(){
        this.setState({countClick: this.state.countClick+1});
        console.log(this.state.countClick);
    };

    changeTitle(event){
        this.setState({titleName: event.target.value});
        console.log(this.state.titleName);
    }
    
    render() {
        var myCard = {
            width: "18rem"
        };
        return (
            <div>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <p className="text text-center">
                        Count Click Card: <strong className="text text-danger">{this.state.countClick}</strong>
                    </p>
                    <p className="text text-center">
                        <input type="text" placeholder="Type for change title card" className="col-sm-5 form-control-lg" onChange={this.changeTitle}/>
                    </p>
                </div>
                </div>
            </div>
            <div className="row">
            
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                    <div className="card" style={myCard}>
                        <img
                            className="card-img-top"
                            src="http://via.placeholder.com/350x150"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.titleName}</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary" onClick={this.counterClick} role="buttom">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={myCard}>
                    <img
                        className="card-img-top"
                        src="http://via.placeholder.com/350x150"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titleName}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary" onClick={this.counterClick} role="buttom">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={myCard}>
                    <img
                        className="card-img-top"
                        src="http://via.placeholder.com/350x150"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titleName}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary" onClick={this.counterClick} role="buttom">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={myCard}>
                    <img
                        className="card-img-top"
                        src="http://via.placeholder.com/350x150"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titleName}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary" onClick={this.counterClick} role="buttom">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={myCard}>
                    <img
                        className="card-img-top"
                        src="http://via.placeholder.com/350x150"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titleName}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary" onClick={this.counterClick} role="buttom">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                <div className="card" style={myCard}>
                    <img
                        className="card-img-top"
                        src="http://via.placeholder.com/350x150"
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titleName}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary" onClick={this.counterClick} role="buttom">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </div>

            </div>
            </div>
        );
    }
}

export default Card;
