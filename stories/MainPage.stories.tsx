import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from '../ClientApp/components/pages/MainPage'

export default {
  title: 'RTSW/Main Page',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const PrimaryView = Template.bind({});
PrimaryView.args = {
  team: 'RTSW Team'
};