import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state= {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free Cocktail",
                info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, sequi."
            },{
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:"Dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor."
            },{
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"Fugiat cum inventore fugit, ab odio voluptas. Lorem ipsum dolor. Esse, sequi."
            },{
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Ab odio voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            }
        ]

    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">

                {this.state.services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}  

                </div>

                    
                         
            </section>
        )
    }
}

