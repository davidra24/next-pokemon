import { CartCounter } from '@/shopping-cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Contador",
	description: "Contador next app",
};

export default function CounterPage() {

	return (
		<>
			<span> Contador de productos </span>
			<CartCounter value={20} />
		</>
	);
}
