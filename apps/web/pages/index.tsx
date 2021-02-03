import React, { FC, useState } from 'react';

import { Message } from '@ihaowu-blog/api-interfaces'

import styles from './index.module.scss';

export interface PageProps {
  msg: Message
}

const Index: FC<PageProps> = ({ msg }) => {
  const [state, setState] = useState(false);

  return (
    <div className={styles.page}>
      <p>{msg.message}</p>
      <button onClick={() => setState((value) => !value)}>
        测试 {String(state)}
      </button>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: PageProps }> {
  const res = await fetch('http://localhost:3333')
  const msg: Message = await res.json()

  return {
    props: { msg },
  };
}

export default Index;
