import { Fragment } from 'react';
import type { AppProps } from 'next/app';

import { Root } from '@modules/shared/components/Root';

import '@modules/shared/styles/app.scss';
import '@modules/shared/styles/prism.scss';
import '@modules/shared/styles/tailwind.scss';
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Fragment>
  );
}

export default MyApp;
