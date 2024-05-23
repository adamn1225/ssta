'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

export default async function Calendars() {
  const currentDate = '2018-11-01';
  const schedulerData = [
    { startDate: '2018-11-01T09:45', endDate: '2018-11-08T11:00', title: 'Guest Check-in' },


    { startDate: '2018-11-08T11:00', title: 'Guest Checkout' }

    { startDate: '2018-11-10T12:00', endDate: '2018-11-10', title: 'Pool Cleaing' },
    { startDate: '2018-11-10T14:45', endDate: '2018-11-10', title: 'Cleaning' },
    { startDate: '2018-11-10T16:00', endDate: '2018-11-10', title: 'Mantainance' },
  ];
  
  return (
    <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <MonthView />
      <Appointments />
    </Scheduler>
  </Paper>
  )
}