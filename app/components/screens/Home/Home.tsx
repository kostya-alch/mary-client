import { Heading } from '@/components/ui/Heading/Heading';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import { IHome } from './interface/Home.interface';

export const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch Movie app movies and TV shows online right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	);
};
