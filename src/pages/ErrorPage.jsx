import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<Header />
			<div className='flex m-20  justify-center'>
				<div >
					<h1 className='text-5xl'>Oops!</h1>
					<p className='my-5'>Sorry, an unexpected error has occurred.</p>
					<p>
						<i>Error: {error.statusText || error.message}</i>
					</p>
				</div>
			</div>
		</>
	);
}
