import React from 'react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const customViewports = {
    iPhone: {
        name: 'iPhone',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
};
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        },
    },
};
export const decorators = [
    Story => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Story />
        </LocalizationProvider>
    ),
];
