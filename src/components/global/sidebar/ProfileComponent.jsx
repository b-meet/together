import { ROUTES } from "@/constants/constant";
import Link from "next/link";

const ProfileComponent = () => {
	return (
		<section className='bg-secondary-dark-bg flex items-center gap-3 p-3 rounded-lg shadow-2xl'>
			<Link href={ROUTES.PROFILE}>
				<img
					src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
					alt='profile'
					width={40}
					height={40}
					className='max-w-[40px] h-full rounded-full'
				/>
			</Link>
			<div className='w-full'>
				<div className='flex justify-between items-end'>
					<Link href={ROUTES.PROFILE}>
						<h4 className='text-sm'>Maria</h4>
					</Link>
					{/* <span className='bg-main-green py-[2px] px-3 text-[12px] rounded-md'>
								verified
							</span> */}
					<span className='bg-main-red py-[2px] px-3 text-[12px] rounded-md'>
						unverified
					</span>
				</div>
				<Link href={ROUTES.PROFILE}>
					<p className='text-slate-500 text-sm'>maria@ai23</p>
				</Link>
			</div>
		</section>
	);
};

export default ProfileComponent;
