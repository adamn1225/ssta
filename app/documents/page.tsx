import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table
  } from '@/components/ui/table';

export default async function documentssPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold pb-1 text-lg md:text-2xl">Your Documents</h1>
        <p>Upload & Receive Your Documents.</p>
      </div>
      <div className="flex flex-col items-start justify-center">

       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '65ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div className=''>
     
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">Upload multiple files</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />

    </div>
      <br />
    <div className='flex flex-col gap-y-1'>
    <label>Archive After:</label>
    <TextField id="outlined-size-small" label="Amount of Days" variant="outlined" size="medium" style = {{width: 200}} />
    </div>
    </Box>
      </div>
      <div>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Document Name</TableHead>
              <TableHead className="max-w-[125px]">Document Type</TableHead>
              <TableHead className="max-w-[100px]">Upload Date</TableHead>
              <TableHead className="max-w-[125px]">Days Until Deletion/Archived</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow>
            <TableCell>Order_form_2-5-24</TableCell>
            <TableCell>Shipping Order Form (signed)</TableCell>
            <TableCell>February 25th, 2024</TableCell>
            <TableCell>NA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>cc_auth_form_2-5-24</TableCell>
            <TableCell>Shipping Order Form (signed)</TableCell>
            <TableCell>February 25th, 2024</TableCell>
            <TableCell>3 days, 21 hours, 32 minutes</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
