import { useState } from 'react';
import { Prompt } from '../lib/type-defs.graphqls';

export const Card = (prompt: Prompt) => {
    const [word, setWord] = useState('');
    const errors = null;
  
    const onSubmit = async (event: any) => {
      event.preventDefault();
  
    //   await doRequest();
    };
    const image = { url: "http://www.transparenttextures.com/patterns/45-degree-fabric-light.png" }
    return (
        <div>
        <style jsx>{`
            .card {
                border: 1px solid #dadada;
                box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: 0.2s;
                padding:20px 20px 15px;
                background: url(${image.url}) top/100% auto no-repeat;
                background-color: #004f8c;
                background-repeat:no-repeat;
            }
            .card h3 {
                padding: 2px;
                margin: 8px 0;
            }
            .tile-info {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .tile-quote {
                color: #fff;
                font-size: 32px;
                line-height: 56px;
                text-align: center;
                padding: 0;
                width: 100%;
                margin: 0;
            }
            .word {
                padding: 15px;
                margin: 12px;
                font-size: 22px;
                line-height: 14px;
                bottom: -18px;
                border-top: 2px solid;
                color: #203e92;
                background-color: white;
            }
            label {
                color: white;
            }
        `}
        </style>
        <div className="card">
            <div className="tile-info">
            <form onSubmit={onSubmit}>
                <p className="tile-quote">
                    {prompt.header}
                    <span className="word">
                        {prompt.word}
                    </span> 
                    {prompt.footer}
                </p>
                <div className="form-group">
                <label>{prompt.word}</label>
                <input
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    className="form-control"
                />
                </div>
                {errors}
                <button className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </div>
    );
  };