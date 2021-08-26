import React from 'react';

const Card = ({ item }) => {
	return (
		<div className="card">
			<h4>{item.title}</h4>
			<img
				src={item.image}
				alt="shop-img"
				className="animate__animated animate__flipInX"
			/>
			<div className="container">
				<span>${item.price}</span>
				<p>{item.description}</p>
			</div>
			<button className="btn1">
				<i class="fas fa-shopping-cart"></i> Add to cart
			</button>
			<button className="btn2">Buy Now</button>
		</div>
	);
};

export default Card;
