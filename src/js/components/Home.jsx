import React, { useEffect, useState } from "react";
import Todos from './Todos';

const Home = () => {

	return (
		<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
			<div className="text-center">
				<h1 className="mb-4">📝 To-Do List</h1>
				<div className="card rounded-3 shadow p-4" style={{ width: "35rem" }}>
					<div className="card-body">
						<Todos />
					</div>
				</div>
			</div>
		</div>
	);
};


export default Home;
