import React, { useRef } from "react";
import { useQueueState } from "rooks";
import './App.css'

export default function App() {
	const numberToPushRef = useRef(3);
	const [list, { enqueue, dequeue, peek,
		length }] = useQueueState([1, 2, 3]);

	function addToQueue() {
		numberToPushRef.current =
			numberToPushRef.current + 1;
		
		enqueue(numberToPushRef.current);
	}

	return (
		<div className="float">
			<h1 className="Head" style={{ color: 'white', margin: '20px' }}>Queue</h1>
			<div 
      style={{
				display: 'flex',
				flexDirection: 'horizontal',
				width: '400px',
				height: '70px',
				fontSize: '20px',
				margin: '40px',
				borderTop: '2px solid white',
				borderBottom: '2px solid white'
			}}>
				{list.map((item) => {
					return <div style={{
						width: '50px',
						height: '50px',
						background: 'white',
						borderRadius: '5px',
						margin: '10px',
						textAlign: 'center',
            fontSize: '30px'
					}}
						key={item}>{item}</div>;
				})}
			</div>
			<button style={{
				margin: '20px',
				background: 'lightblue',
				width: '200px',
        height: '50px',
        fontSize: '25px'
				
			}}
				onClick={addToQueue}>enqueue</button>
			<button style={{
				margin: '20px',
				background: 'lightblue',
				width: '200px',
        height: '50px',
        fontSize: '25px'

				
			}}
				onClick={dequeue} warning>
				dequeue
			</button>
			<p style={{
				color: 'white',
				fontSize: '20px',
				margin: '20px'
			}}>Front Element : {peek()}</p>

			<p style={{
				color: 'white',
				fontSize: '20px',
				margin: '20px'
			}}>Length of Queue : {length}</p>

		</div>
	);
}
