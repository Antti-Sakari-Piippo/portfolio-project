function Categories({ filter, categories }) {
	let filteredCategories = [ ...new Set(categories) ];
	return (
		<div className="buttons">
			{filteredCategories.map((category, i) => {
				return (
					<button type="button" className="btn-port btn btn-1" onClick={() => filter(category)} key={i}>
						<svg>
							<rect x="0" y="0" fill="none" width="100%" height="100%" />
						</svg>
						<p>{category}</p>
					</button>
				);
			})}
		</div>
	);
}

export default Categories;
