import React, { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Work({ className }) {
  return (
    <main className={classnames(styles.Work, className)}>
      <Head title="Work" />

      <h1>Work Page</h1>
    </main>
  );
}

Work.defaultProps = {};

export default memo(Work);
