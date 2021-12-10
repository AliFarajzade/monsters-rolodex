import React from "react";
import "./monster.css";

export default function Monster({ id, name, email }) {
    return (
        <div className="app__monster">
            <img
                className="app__monster-image"
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt="Monster!!"
            />
            <h2 className="app__monster-name">{name}</h2>
            <h3 className="app__monster-email">{email}</h3>
        </div>
    );
}
