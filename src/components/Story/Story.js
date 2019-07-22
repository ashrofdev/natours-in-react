import React from 'react'
import './story.css'
import {Heading, Link} from '../Btns/Btn'

const Story = () => {
    return (
        <section className="story">
                <Heading text={'EXCITING TOURS FOR ADVENTUROUS PEOPLE'}/>

                <div className="about-grid">
                    <div className="left">
                        <h3 className="heading-tertiary">You're going to fall in love with nature</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary">Live adventures like you never have before</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>
                        <Link text={'Learn more'}/>
                        
                    </div>
                    <div className="right">
                        <img src={require('./nat-1.jpg')} alt="" className="photo p1"/>
                        <img src={require('./nat-2.jpg')} alt="" className="photo p2"/>
                        <img src={require('./nat-3.jpg')} alt="" className="photo p3"/>
                    </div>
                    
                </div>
            </section>
    )
}
export default Story