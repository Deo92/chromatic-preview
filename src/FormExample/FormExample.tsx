import { Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

export const FormExample: React.FC = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    return (
        <Stack sx={{ width: '375px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Paper
                elevation={3}
                sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '16px',
                }}
            >
                <Stack gap={3}>
                    <TextField
                        placeholder="First name"
                        value={firstName}
                        onChange={ev => setFirstName(ev.target.value)}
                        inputProps={{
                            'data-testid': 'input-first',
                        }}
                    />
                    <TextField
                        placeholder="Last name"
                        value={lastName}
                        onChange={ev => setLastName(ev.target.value)}
                        inputProps={{
                            'data-testid': 'input-last',
                        }}
                    />
                    <Typography>{`Welcome Here: ${firstName} ${lastName}`}</Typography>
                </Stack>
            </Paper>
        </Stack>
    );
};
