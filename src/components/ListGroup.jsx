import { useState, useEffect } from "react";
function ListGroup() {
  const items = ["Lahore", "Karachi", "Islamabad", "KPK", "Swat"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [random, setRandom] = useState([]);
  const [count, setCount] = useState(0);

  // const Counter = () => {
  //   setCount(count + 1);
  // };

  const RandomNumber = () => {
    setRandom([
      ...random,
      {
        id: random.length,
        value: Math.floor(Math.random() * 100) + 1,
      },
    ]);
  };

  const tick = () =>{
    setCount(count + 1)
    document.title = `You click ${count} times`
  }



  useEffect(()=>{
    const interval = setInterval(tick, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button onClick>You Dare touch me </button>
      {/* <p>you click me {count} times. AAAAAAAAAAA</p> */}
      <button onClick={RandomNumber}>Click me </button>
      <ul className="list-group">
        {random.map((rand) => (
          <li key={rand.id} className="list-group-item">
            {rand.value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
