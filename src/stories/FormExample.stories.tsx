import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FormExample } from '../FormExample';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta = {
    title: 'FormExample',
    component: FormExample,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: Story = () => {
    return <FormExample />;
};

export const View = Template.bind({});

View.args = {};

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('input-first'), 'Deo');

    await userEvent.type(canvas.getByTestId('input-last'), 'Gochava');

    // // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    // await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(canvas.getByText('Welcome: Deo Gochava')).toBeInTheDocument();
};
