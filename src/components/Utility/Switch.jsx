import { useSelector } from "react-redux";

const Switch = ({ handleOnClick, btnOneContent, btnTwoContent }) => {
	const { isThemeDark } = useSelector((state) => state.utils);

	return (
		<section className='bg-secondary-dark-bg p-1 rounded-lg flex relative'>
			<button
				onClick={() => handleOnClick("light")}
				className={`flex-1 p-2 rounded-lg center relative z-10 transition-all delay-150 ${
					isThemeDark ? "text-slate-500" : ""
				}`}
			>
				{btnOneContent}
			</button>
			<button
				onClick={() => handleOnClick("dark")}
				className={`flex-1 p-2 rounded-lg center relative z-10 transition-all delay-150 ${
					!isThemeDark ? "text-slate-500" : ""
				}`}
			>
				{btnTwoContent}
			</button>
			<div
				className={`absolute bg-primary-dark-bg h-10 w-[calc(50%-4px)] rounded-lg transition-all duration-500 ${
					isThemeDark ? "translate-x-full duration-500" : ""
				}`}
			></div>
		</section>
	);
};

export default Switch;
