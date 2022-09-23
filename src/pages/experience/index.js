import React, { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Experience({ className }) {
  return (
    <main className={classnames(styles.Experience, className)}>
      <Head title="Experience" />

      <h1>Experience Page</h1>
    </main>
  );
}

Experience.defaultProps = {};

export default memo(Experience);
