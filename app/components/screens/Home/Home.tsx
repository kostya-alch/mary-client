import { Layout } from '@/components/Layout/Layout';
import { FC } from 'react';
import { IHome } from './interface/Home.interface';

export const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>home</h1>
		</Layout>
	);
};
