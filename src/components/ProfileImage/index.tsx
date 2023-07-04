const ProfileImage = () => {
	return (
		<div>
			<img
				className='animate-image-flow border-2 border-main-black w-[100px] h-[100px] xs:w-[150px] xs:h-[150px] lg:w-[300px] lg:h-[300px]'
				src='/assets/images/shiba.png'
				alt='Profile picture'
			/>
		</div>
	);
};

export default ProfileImage;
