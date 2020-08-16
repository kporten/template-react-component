// https://storybook.js.org/docs/react/writing-stories/introduction
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Component from '../lib';

export default {
  title: 'Component',
  component: Component,
  argTypes: {
    headline: { control: 'text' },
  },
} as Meta;

type ComponentProps = React.ComponentPropsWithoutRef<typeof Component>;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  headline: 'test',
};
