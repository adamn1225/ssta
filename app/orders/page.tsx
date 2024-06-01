import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default async function orderPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold pb-1 text-lg md:text-2xl">Settings</h1>
        <p>Customize your account below.</p>
      </div>
      <div className="flex flex-col items-start justify-center">

       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className='flex flex-row gap-y-1'>
    <label>Send SMS :
    <TextField id="outlined-basic" label="2 Days" variant="outlined" />
    Prior To Shipping Date</label>
    </div>
      <br />
    <div className='flex flex-col gap-y-1'>
    <label>Archive After:</label>
    <TextField id="outlined-basic" label="Amount of Days" variant="outlined" />
    </div>
    </Box>
      </div>
    </main>
  );
}
