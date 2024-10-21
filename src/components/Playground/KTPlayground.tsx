import React, { useEffect, PropsWithChildren, createElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { KTPlaygroundProps } from './Props';
import playground from 'kotlin-playground';
import { convertPropsToAttrs, getPlaygroundOptions } from './util/utils';

const KTPlayground = (props: PropsWithChildren<KTPlaygroundProps>) => {
  const id = 'id' + uuidv4().toString();
  useEffect(() => {
    playground('.' + id, getPlaygroundOptions(props));
  });

  let children = props.children;
  if (props.code) {
    if (props.children) {
      throw new Error('Cannot set code prop and have children, choose one!');
    }
    children = <pre>{props.code}</pre>;
  }
  return createElement(
    'div',
    {
      className: id,
      ...convertPropsToAttrs(props),
    },
    children,
  );
};

export default KTPlayground;
