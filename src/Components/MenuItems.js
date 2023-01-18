function MenuItems({ menuItems }) {
	const reversedPortfolioItems = [...menuItems].reverse()
	return (
		<div className="portfolios">
			{reversedPortfolioItems.map((item) => {
				return (
					<div className="portfolio" key={item.id}>
						<div className="image-data">
							<img src={item.image} alt="menu item" />
							<ul className="hover-items">
								<li className="flex">
									<a rel="noopener noreferrer" target="_blank" className="github" href={item.link1}>
										{item.link1 !== "" && item.icon1}
									</a>
									<a rel="noopener noreferrer" target="_blank" href={item.link2}>
										{item.link2 !== "" && item.icon2}
									</a>
								</li>
							</ul>
						</div>
						<h5>{item.title}</h5>
					</div>
				);
			})}
		</div>
	);
}

export default MenuItems;
