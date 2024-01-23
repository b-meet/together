import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { useState, useEffect, useCallback, useRef } from "react";

const MainLayout = ({ children }) => {
	const { isThemeDark } = useSelector((state) => state.utils);
	const [isDragging, setIsDragging] = useState(false);
	const [initialX, setInitialX] = useState(0);
	const [sideBarWidth, setSideBarWidth] = useState("300px");
	const [inlineStyles, setinlineStyles] = useState({
		mainLayourStyles: { width: `calc(100% - 20px - ${sideBarWidth})` },
		handleSyles: { left: `calc(${sideBarWidth} - 12px)` },
	});
	const navRef = useRef(null);

	const handleMouseDown = useCallback(
		(e) => {
			if (parseInt(sideBarWidth) >= 300) {
				setIsDragging(true);
				setInitialX(e.clientX);
				navRef.current.classList.add("blur-[2px]", "opacity-50");
			}
		},
		[sideBarWidth]
	);

	const handleMouseMove = useCallback(
		(e) => {
			if (isDragging) {
				const changeInX = e.clientX - initialX;
				let newWidth = parseInt(sideBarWidth) + changeInX;
				newWidth = Math.max(300, Math.min(450, newWidth));
				setSideBarWidth(newWidth + "px");
				setInitialX(e.clientX);
			}
		},
		[initialX, sideBarWidth, isDragging]
	);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
		navRef.current.classList.remove("blur-[2px]", "opacity-50");
	}, []);

	const handleSideBarClose = (e) => {
		if (parseInt(sideBarWidth) > 0) {
			setSideBarWidth("0px");
			navRef.current.classList.add("-translate-x-[350px]", "opacity-50");
			setinlineStyles({
				handleSyles: {
					left: `calc(10px)`,
				},
				mainLayourStyles: {
					left: "1.25rem",
				},
			});
		} else {
			setSideBarWidth("300px");
			navRef.current.classList.remove(
				"-translate-x-[350px]",
				"opacity-50"
			);
			setinlineStyles({
				handleSyles: { left: `calc(300px - 12px)` },
				mainLayourStyles: {
					width: `calc(100% - 20px - 300px)`,
					left: "auto",
				},
			});
		}
	};

	useEffect(() => {
		if (parseInt(sideBarWidth) > 300) {
			setinlineStyles({
				handleSyles: { left: `calc(${sideBarWidth} - 12px)` },
				mainLayourStyles: {
					width: `calc(100% - 20px - ${sideBarWidth})`,
				},
			});
		}
	}, [sideBarWidth]);

	useEffect(() => {
		if (isDragging) {
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		} else {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isDragging, handleMouseMove, handleMouseUp]);

	return (
		<article className={`${isThemeDark ? "dark" : ""} flex min-h-screen`}>
			<nav
				ref={navRef}
				style={{ width: sideBarWidth }}
				className='transition-all duration-[150ms] ease-linear'
			>
				<Sidebar />
			</nav>
			<div
				onMouseDown={handleMouseDown}
				onDoubleClick={handleSideBarClose}
				className='fixed top-[calc(50%-20px)] z-50 w-1 h-10 rounded-full bg-slate-600 hover:bg-slate-200 active:bg-slate-200 cursor-col-resize'
				style={inlineStyles.handleSyles}
			></div>
			<article
				className='transition-left duration-[150ms] ease-linear h-[calc(100%-40px)] bg-white text-slate-800 dark:bg-secondary-dark-bg dark:text-slate-200 absolute top-5 bottom-5 right-5 rounded-2xl p-4'
				style={inlineStyles.mainLayourStyles}
			>
				{children}
			</article>
		</article>
	);
};

export default MainLayout;
