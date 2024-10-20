import React, { useEffect } from 'react';
import playground from 'kotlin-playground';

export interface KTPlaygroundProps {
  code: string;
}

const KTPLayground = (props: KTPlaygroundProps) => {
  useEffect(() => {
    playground('code');
  });
  return (
    <div>
      <code>{props.code}</code>
    </div>
  );
};

export default KTPLayground;
