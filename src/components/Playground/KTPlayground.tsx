import React, {
  useEffect,
  PropsWithChildren,
  createElement,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { KTPlaygroundProps } from './Props';
import { convertPropsToAttrs, getPlaygroundOptions } from './util/utils';

const KTPlayground = (props: PropsWithChildren<KTPlaygroundProps>) => {
  const [id, setId] = useState('dummy');
  useEffect(() => {
    setId('id' + uuidv4().toString());
    // Defer import for SSR purposes
    import('kotlin-playground').then((module) => {
      module.default('.' + id, getPlaygroundOptions(props));
    });
  }, []);

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
      ...Object.fromEntries(convertPropsToAttrs(props)),
    },
    children,
  );
};

export default KTPlayground;
