import React from "react";
import Monster from "./monster.component";
import "./monsters-list.css";

export default function MonstersList({ monstersData }) {
    return (
        <div className="app__monsters-list">
            {monstersData.map((monsterObj) => (
                <Monster
                    id={monsterObj.id}
                    name={monsterObj.name}
                    key={monsterObj.id}
                    email={monsterObj.email}
                />
            ))}
        </div>
    );
}
