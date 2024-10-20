import React, { useEffect, PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';
import playground from 'kotlin-playground';

export interface KTPlaygroundProps {
  darkMode?: boolean;
}

const KTPLayground = (props: PropsWithChildren<KTPlaygroundProps>) => {
  const id = 'id' + uuidv4().toString();
  useEffect(() => {
    playground('.' + id, {
      theme: props.darkMode ? 'darcula' : 'default',
    });
  });
  return <div className={id}>{props.children}</div>;
};

export default KTPLayground;
