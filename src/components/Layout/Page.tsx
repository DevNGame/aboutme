import {NextPage} from 'next';
import Head from 'next/head';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title}) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
