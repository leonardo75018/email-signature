import React from 'react'
import "./style.css"

const signature = () => {






    return (
        <div >
            <div className="containe  mt-5">
                <h3>Genete email signature</h3>
                <form >
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='Photo'
                    />

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='Nom '
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='Prenom'
                    />
                    <input
                        type="email"
                        className="form-control mb-2"
                        placeholder='email'
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='linkedin'
                    />

                    <button
                        type='submit'
                        className="btn btn-dark btn-block btn-sm"
                    >
                        generer
                     </button>
                </form>
            </div>
            <div className="card-content">
                <div className="email-card"> </div>
                <div className="email-card"> </div>
                <div className="email-card"> </div>
                <div className="email-card"> </div>
                <div className="email-card"> </div>
                <div className="email-card"> </div>
                <div className="email-card"> </div>
                <div className="email-card"> </div>
            </div>
        </div>
    )
}

export default signature
