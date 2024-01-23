import { TbMoonFilled } from "react-icons/tb";
import { MdSunny } from "react-icons/md";
import { useDispatch } from "react-redux";

import { utilitySliceActions } from "@/redux/slice/UtilitySlice";
import Switch from "@/components/Utility/Switch";

const ThemeChanger = () => {
	const dispatch = useDispatch();

	//handle theme change
	const handleThemeChange = (theme) => {
		if (theme === "light") {
			dispatch(utilitySliceActions.makeThemeLight());
		} else {
			dispatch(utilitySliceActions.makeThemeDark());
		}
	};

	return (
		<Switch
			handleOnClick={handleThemeChange}
			btnOneContent={
				<>
					<MdSunny />
					Light
				</>
			}
			btnTwoContent={
				<>
					<TbMoonFilled />
					Dark
				</>
			}
		/>
	);
};

export default ThemeChanger;
