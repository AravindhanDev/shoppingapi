import React, { useEffect, useState } from 'react';
import Card from './Card';
import StoreIcon from '@material-ui/icons/Store';

const App = () => {
	const [items, setItems] = useState([]);
	const year = new Date().getFullYear();

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setItems(data);
			});
	}, []);

	return (
		<div className="main">
			<header className="animate__animated animate__pulse animate__slow animate__infinite">
				<StoreIcon style={{ fontSize: '2rem' }} /> SHOP API
			</header>
			<div className="app">
				{items.map((item) => {
					return <Card key={item.id} item={item} />;
				})}
			</div>
			<footer>Copyright &copy; {year}</footer>
		</div>
	);
};

export default App;

// this is an api https://fakestoreapi.com/products
