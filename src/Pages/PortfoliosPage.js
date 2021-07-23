import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Tittle";
import portfolios from "../data/allportfolios";
import { useState } from "react";

const allCategories = [ "All", ...portfolios.map((item) => item.category) ];

function PortfoliosPage() {
	const [ categories, setCategories ] = useState(allCategories);
	const [ menuItems, setMenuItems ] = useState(portfolios);

	const filter = (category) => {
		if (category === "All") {
			return setMenuItems(portfolios);
		}
		const filteredData = portfolios.filter((item) => {
			return item.category === category;
		});
		setMenuItems(filteredData);
	};

	return (
		<div className="PortfolioPage">
			<div className="title">
				<Tittle title={"Portfolios"} span={"portfolios"} />
			</div>
			<div>
				<Categories filter={filter} categories={categories} />
				<MenuItems menuItems={menuItems} />
			</div>
		</div>
	);
}

export default PortfoliosPage;
