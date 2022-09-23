import React from 'react'
import '../meetTeam/MeetTeam.css'

const MeetTeam = () => {
    return (
        <>

            <section>
                <h1 className="meetTitle animate__animated animate__backInDown animate__delay-0.5s ">Meet The Team</h1>
                <div className="container-fluid">
                    <div className="meet-card animate__animated animate__pulse animate__delay-0.5s">
                        <div className="img-m-card">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/team-11-420x424.jpg" className="img-fluid MeetImg" alt="MeetToTeam" />

                            <div className="m-titel">
                                <h3 className="m-name">Ryan Wilson</h3>
                                <div className="m-work">Director of Production</div>
                            </div>
                        </div>
                        <div className="img-m-card">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/team-12-420x424.jpg" className="img-fluid MeetImg" alt="MeetToTeam" />
                            <div className="m-titel">
                                <h3 className="m-name">Jill Peterson</h3>
                                <div className="m-work">UI Designer</div>
                            </div>
                        </div>
                        <div className="img-m-card">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/team-13-420x424.jpg" className="img-fluid MeetImg" alt="MeetToTeam" />
                            <div className="m-titel">
                                <h3 className="m-name">Sam Robinson</h3>
                                <div className="m-work">Senior Developer</div>
                            </div>
                        </div>
                        <div className="img-m-card ">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/team-14-420x424.jpg" className="img-fluid MeetImg" alt="MeetToTeam" />
                            <div className="m-titel">
                                <h3 className="m-name">Mary Lee</h3>
                                <div className="m-work">Software Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>

                <h1 className="meetTitle mt-5 meetTitle animate__animated animate__backInUp animate__delay-0.5s">What People Say</h1>

                <div className="container-fluid peo mb-5 animate__animated animate__flipInX animate__delay-0.5s">
                    <div className="people-Say">
                        <div className="box-people">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/user-11-75x75.jpg" className='img-fulid img-people' alt="" />
                            <div className="peotitelimg">
                                <h3 className="peo-name">Catherine Williams</h3>
                                <h5 className="r-client">Regular client</h5>
                        </div>
                        </div>
                        <p className='people-text'>DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.</p>
                    </div>
                    <div className="people-Say">
                        <div className="box-people">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/user-12-75x75.jpg" className='img-fulid img-people' alt="" />
                            <div className="peotitelimg">
                                <h3 className="peo-name">Rupert Wood</h3>
                                <h5 className="r-client">Regular client</h5>
                        </div>
                        </div>
                        <p className='people-text'>DreamSoft powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.</p>
                    </div>
                    <div className="people-Say">
                        <div className="box-people">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/user-20-75x75.jpg" className='img-fulid img-people' alt="" />
                            <div className="peotitelimg">
                                <h3 className="peo-name">Samantha Brown</h3>
                                <h5 className="r-client">Regular client</h5>
                        </div>
                        </div>
                        <p className='people-text'>DreamSoft is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.</p>
                    </div>
                    
                </div>
            </section>

        </>
    )
}

export default MeetTeam