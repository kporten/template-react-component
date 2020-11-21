// https://storybook.js.org/docs/react/writing-stories/introduction
import type { Story, Meta } from '@storybook/react/types-6-0';

import Component from '@lib';

export default {
  title: 'Component',
  component: Component,
} as Meta;

type ComponentProps = React.ComponentProps<typeof Component>;

const Template: Story<ComponentProps> = (args) => <Component {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  headline: 'test',
};
