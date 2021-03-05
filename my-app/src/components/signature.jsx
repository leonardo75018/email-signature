import React, { useState, useEffect } from 'react'
import "./style.css"
import logo from "../logo.png"
import linkidin from "./social/linkidin.png"
import tweeter from "./social/tweeter.png"
import youtube from "./social/youtube.png"
import vimeo from "./social/vimeo.png"
import insta from "./social/insta.png"






import { db } from "../db/Firebase"

const Signature = () => {

    const [nom, setNom] = useState('')
    const [prenom, setPreNom] = useState('')
    const [mebers, setMembers] = useState([])
    const [telephone, setTelephone] = useState([])

    console.log(mebers)






    const agregar = async (e) => {
        e.preventDefault()
        if (!nom.trim()) {
            console.log('sin texto')
            return
        }
        if (!prenom.trim()) {
            console.log('sin texto')
            return
        }

        if (!telephone.trim()) {
            console.log('sin texto')
            return
        }

        createMember()
        e.target.reset()



    }

    const createMember = async () => {
        const member = {
            nom: nom,
            prenom: prenom,
            telephone: telephone
        }
        const data = await db.collection("equipe").add(member)
        takeMember()
    }


    const takeMember = async () => {
        const data = await db.collection("equipe").get()
        const team = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setMembers(team)
    }

    useEffect(() => {
        takeMember()
    }, [])







    return (
        <div >
            <div className="containe  mt-5">
                <h3>Generate email signature</h3>
                <form onSubmit={agregar} >
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='Nom '
                        onChange={e => setNom(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='Prénom'
                        onChange={e => setPreNom(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder='téléphone'
                        onChange={e => setTelephone(e.target.value)}
                    />

                    <button
                        type='submit'
                        className="btn btn-dark btn-block btn-sm"
                    >
                        générer
                     </button>
                </form>
            </div>

            <div className="card-content">
                {
                    mebers.map(item =>

                        <div className="email-card" style={{ width: "300px" }}>
                            <div className="logo-content" style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className="logo">
                                    <img src={logo} alt="" style={{ width: "200px" }} />
                                </div>
                            </div>


                            <div className="info-content" style={{ width: "70%" }}>
                                <div className="name" style={{ letterSpacing: "2px" }}>
                                    <div style={{ display: "flex", justifyContent: "flex-end" }} >
                                        <p> {item.prenom} {item.nom}   </p>

                                    </div>

                                    <div className="number" style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <p style={{ marginTop: "0" }}>{item.telephone}</p>
                                    </div>
                                    <div className="reseaux" style={{ display: "flex", justifyContent: "flex-end" }}   >

                                        <a href="https://www.linkedin.com/company/widactic/" target="_blank">
                                            <div className="insta">
                                                <img src={linkidin} alt="" style={{ width: "25px", paddingRight: "4px" }} />

                                            </div>
                                        </a>

                                        <a href="https://twitter.com/Widactic" target="_blank">
                                            <div className="insta">
                                                <img src={tweeter} alt="" style={{ width: "25px", paddingRight: "4px" }} />
                                            </div>
                                        </a>

                                        <a href="https://www.youtube.com/channel/UCLOnRmY2mLOpKEmztASOE-Q" target="_blank">
                                            <div className="insta">
                                                <img src={youtube} alt="" style={{ width: "25px", paddingRight: "4px" }} />

                                            </div>
                                        </a>

                                        <a href="https://vimeo.com/widactic" target="_blank">
                                            <div className="insta">
                                                <img src={vimeo} alt="" style={{ width: "25px", paddingRight: "4px" }} />

                                            </div>
                                        </a>

                                        <a href="https://www.instagram.com/widactic/?hl=fr" target="_blank">
                                            <div className="insta">
                                                <img src={insta} alt="" style={{ width: "25px", paddingRight: "4px" }} />

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>



    )
}

export default Signature
