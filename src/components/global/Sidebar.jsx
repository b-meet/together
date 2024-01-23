import { TbMessage } from "react-icons/tb";
import { MdOutlineFeed } from "react-icons/md";
import { CgFeed } from "react-icons/Cg";
import { GoSearch, GoGear } from "react-icons/Go";
import { FcFaq } from "react-icons/fc";

import ProfileComponent from "./sidebar/ProfileComponent";
import ThemeChanger from "./sidebar/ThemeChanger";
import Link from "next/link";
import { ROUTES } from "@/constants/constant";

const Sidebar = () => {
	const sidebarItems = {
		title: "activities",
		activities: [
			{
				text: "Chat",
				icon: <TbMessage />,
				color: "main-blue",
				to: ROUTES.LISTEN_MUSIC,
			},
			{
				text: "Feed",
				icon: <MdOutlineFeed />,
				color: "main-purple",
				to: ROUTES.LISTEN_MUSIC,
			},
			{
				text: "Blogs",
				icon: <CgFeed />,
				color: "main-green",
				to: ROUTES.LISTEN_MUSIC,
			},
			{
				text: "Listen To Music",
				icon: <CgFeed />,
				color: "main-green",
				to: ROUTES.LISTEN_MUSIC,
			},
		],
		itemList: [
			{
				text: "Search",
				icon: <GoSearch />,
				color: "main-pink",
				to: ROUTES.LISTEN_MUSIC,
			},
			{
				text: "Settings",
				icon: <GoGear />,
				color: "main-red",
				to: ROUTES.LISTEN_MUSIC,
			},
			{
				text: "Updates & FAQ",
				icon: <FcFaq />,
				color: "",
				to: ROUTES.LISTEN_MUSIC,
			},
		],
	};

	return (
		<section className='bg-primary-dark-bg h-full p-5 flex flex-col justify-between'>
			<article className='space-y-3'>
				<Link href={"/"} className='text-3xl'>
					logo
				</Link>
				<ul className='flex flex-col'>
					{sidebarItems.itemList.map(({ text, icon, color, to }) => (
						<Link
							href={to}
							key={text}
							className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer hover:bg-slate-800`}
						>
							<span className={`text-[23px] text-${color}`}>
								{icon}
							</span>
							<span className='sidebarItems'>{text}</span>
						</Link>
					))}
				</ul>
				<ul className='flex flex-col'>
					<p className='text-xs text-slate-500 my-2'>
						{sidebarItems.title}
					</p>
					{sidebarItems.activities.map(
						({ text, icon, color, to }) => (
							<Link
								href={to}
								key={text}
								className='flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer hover:bg-slate-800 '
							>
								<span className={`text-2xl text-${color}`}>
									{icon}
								</span>
								<span className='sidebarItems'>{text}</span>
							</Link>
						)
					)}
				</ul>
			</article>
			<article className='flex flex-col gap-4'>
				<ProfileComponent />
				<ThemeChanger />
			</article>
		</section>
	);
};

export default Sidebar;
