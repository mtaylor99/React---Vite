import { PageTitleWrapper } from '@PROJECT/components/PageTitleWrapper';
import { Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, useState } from 'react';
import { EditProfileTab } from './EditProfileTab';
import { NotificationsTab } from './NotificationsTab';
import { PageHeader } from './PageHeader';
import { SecurityTab } from './SecurityTab';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

export function ManagementUserSettings() {
  const [currentTab, setCurrentTab] = useState<string>('edit_profile');

  const tabs = [
    { value: 'edit_profile', label: 'Edit Profile' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'security', label: 'Passwords/Security' },
  ];

  const handleTabsChange = (
    _event: ChangeEvent<object>,
    value: string
  ): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Typography variant="h3">User Settings - Applications</Typography>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map(tab => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'edit_profile' && <EditProfileTab />}
            {currentTab === 'notifications' && <NotificationsTab />}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
