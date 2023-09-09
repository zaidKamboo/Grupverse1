import React from 'react';
import "./CSS/Scrollbar.css"
const Scrollbar = ({ items }) => {
    return (
        <div style={{ height: '300px', overflowY: 'scroll', overflowX: "hidden" }} className='sb'>
            <ul className='topTeams'>
                {items.map((item, index) => (<>
                    <li key={index} className='topTeam'>
                        <div className="top">
                            <div className="lim">
                                <img src={item.logo} alt="" className="log" />
                            </div>
                            <div className="Name mx-2">
                                {item.name}
                            </div>
                            <div className="but" >
                                <button className="btn">{item.type}</button>
                            </div>
                        </div>
                    </li>
                </>
                ))}
            </ul>
        </div>
    );
};

export default Scrollbar;
