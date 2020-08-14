import React from 'react';
import { AppProps } from 'next/app';

//Global SCSS
import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
	return <Component {...pageProps} />;
};

export default App;