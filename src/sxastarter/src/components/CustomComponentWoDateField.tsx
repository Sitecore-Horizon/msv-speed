import React from 'react';

import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SingleLineText: Field<string>;
  SomeDate: Field<string>;
  SomeNumber: Field<string>;
  MultiLineText: Field<string>;
  Integer: Field<string>;
}

type CustomComponentProps = {
  params: { [key: string]: string };

  fields: Fields;
};

export const Default = (props: CustomComponentProps): JSX.Element => {
  return (
    <div className={`component customcomponent ${props.params.styles}`}>
      <div
        className="component-content"
        style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}
      >
        <div>
          <Text field={props.fields.SomeNumber} />
        </div>
        <div>
          <Text field={props.fields.Integer} />
        </div>
        <div>
          <Text field={props.fields.SingleLineText} />
        </div>
        <div>
          <Text field={props.fields.MultiLineText} />
        </div>
      </div>
    </div>
  );
};
