import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

export function NotificationsTab() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
          <Typography variant="h3">Account</Typography>
          <Typography variant="subtitle2">
            Choose what notifications you want to receive
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1,
                }}
                primary="Widthdraw Activity"
                secondary="Receive an email when a widthdrawal is made"
              />
              <Switch
                color="primary"
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 3 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1,
                }}
                primary="Weekly Report"
                secondary="Receive account status weekly report in your inbox"
              />
              <Switch
                color="primary"
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}
