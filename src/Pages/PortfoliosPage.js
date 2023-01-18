import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Tittle";
import portfolios from "../data/allportfolios";
import { useState } from "react";

const allCategories = [ "All", ...new Set(portfolios.map((item) => item.category)) ];

function PortfoliosPage() {
	const [ portfolioItems, setMenuItems ] = useState(portfolios);

	const filter = (category) => {
		if (category === "All") {
			return setMenuItems(portfolios);
		}
		const filteredPortfolios = portfolios.filter((item) => {
			return item.category === category;
		});
		setMenuItems(filteredPortfolios);
	};

	return (
		<div className="PortfolioPage">
			<div className="title">
				<Tittle title={"Portfolios"} span={"portfolios"} />
			</div>
			<div>
				<Categories filter={filter} categories={allCategories} />
				<MenuItems menuItems={portfolioItems} />
			</div>
		</div>
	);
}

export default PortfoliosPage;
