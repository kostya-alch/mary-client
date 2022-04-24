import { Layout } from '@/components/Layout/Layout';
import { FC } from 'react';
import { IHome } from './interface/Home.interface';

type Props = {};

export const Home: FC<IHome> = (props: Props) => {
	return (
		<Layout>
			<h1>home</h1>
		</Layout>
	);
};
