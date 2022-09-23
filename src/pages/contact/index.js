import React, { memo } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

import Head from '@/components/Head/Head';

function Contact({ className }) {
  return (
    <main className={classnames(styles.Contact, className)}>
      <Head title="Contact" />

      <h1>Contact Page</h1>
    </main>
  );
}

Contact.defaultProps = {};

export default memo(Contact);
