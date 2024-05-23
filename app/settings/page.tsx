import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default async function SettingsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Settings</h1>
        <p>Customize your account below.</p>
      </div>
      <div className="flex items-start">
      <table>
  <thead>
    <tr>
      <th>Default Settings</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <label>Minimum Deposit</label>
    <TextField id="outlined-basic" label="$0.00" variant="outlined" />
    </Box>
       </td>
     </tr>
     <tr>
      <td>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <label>Mark Property Vacant After:</label>
    <TextField id="outlined-basic" label="Amount of Days" variant="outlined" />
    </Box>
      </td>
     </tr>
  </tbody>
</table>
      </div>
    </main>
  );
}
