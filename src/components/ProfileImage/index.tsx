import React from 'react';

const ProfileImage = () => {
	return (
		<div>
			<img
				className='animate-image-flow border-2 border-main-black w-[300px] h-[300px] bg-no-repeat'
				src='src/assets/shiba.png'
				alt='Shiba'
			/>
		</div>
	);
};

export default ProfileImage;
