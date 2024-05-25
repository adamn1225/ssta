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
    { startDate: '2018-11-11T09:45', endDate: '2018-11-11T11:00', title: 'Mark Follow-Up' },


    { startDate: '2018-11-13T11:00', endDate: '2018-11-13T11:30', title: 'Post to Loadboard' },

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