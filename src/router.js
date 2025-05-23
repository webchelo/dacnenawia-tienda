import { renderPage } from './App';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { Cart } from './pages/Cart';
import { NoPage } from './pages/NoPage';

export const router = (route) => {
	switch (route) {
		case '/':
			renderPage(Home());
			break;
		case '/tienda':
			renderPage(Store());
			break;
		case '/carrito':
			renderPage(Cart());
			break;
		default:
			renderPage(NoPage());
			break;
	}
};

export const paths = [
	{
		route: '/',
		name: 'Inicio',
	},
	{
		route: '/tienda',
		name: 'Tienda',
	},
	{
		route: '/nosotros',
		name: 'Nosotros',
	},
	{
		route: '/carrito',
		name: 'Carrito'
	}
];
