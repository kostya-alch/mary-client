import { Layout } from '@/components/Layout/Layout';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			// предотвращаем лишний запрос к серверу, когда возвращаемся на страницу назад
		},
	},
});

interface HeaderProps {
	children: ReactNode;
}

export const MainProvider: FC<PropsWithChildren<HeaderProps>> = ({
	children,
}: HeaderProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout> {children}</Layout>
		</QueryClientProvider>
	);
};
