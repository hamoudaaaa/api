import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
    const [Data, setDatat] = useState([]); //for riturn data
    useEffect(() => {
        function fetchData() {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                // .then((res) => console.log(res));
                .then((res) => setDatat(res.data));
        }
        fetchData();
    }, []);

    return (
        <div>
            {Data.map((e, i) => (
                <UserCard user={e} key={i} />
            ))}
        </div>
    );
}
export default UserList;
