function MenuItems({ menuItems }) {
	return (
		<div className="portfolios">
			{menuItems.map((item) => {
				return (
					<div className="portfolio" key={item.id}>
						<div className="image-data">
							<img src={item.image} alt="menu item" />
							<ul className="hover-items">
								<li className="flex">
									<a rel="noopener noreferrer" target="_blank" className="github" href={item.link1}>
										{item.icon1}
									</a>
									<a rel="noopener noreferrer" target="_blank" href={item.link2}>
										{item.icon2}
									</a>
								</li>
							</ul>
						</div>
						<h5>{item.title}</h5>
						<p>Placeholder paragraph</p>
					</div>
				);
			})}
		</div>
	);
}

export default MenuItems;
