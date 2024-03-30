import "./home.css"

const Home=({list})=>{
    return <div className="myhome">
        My Home
        <ol>
            {
                list.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ol>
        </div>;

};

export default Home;