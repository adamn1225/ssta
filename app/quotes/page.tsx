'use client'
import Box from '@mui/material/Box';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: .5,
});

export default async function quotePage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold pb-1 text-lg md:text-2xl">Transport Rates</h1>
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
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Freight Description</InputLabel>
        <Input
          id="component-helper"
          placeholder="The freight you're shipping goes here"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          e.g Make/model, pallet/box/crate ct., or simply your best description.
        </FormHelperText>
      </FormControl>

      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Images/Files of your freight (optional)
      <VisuallyHiddenInput type="file" />
    </Button>

    <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Shipment Origin</InputLabel>
        <Input
          id="component-helper"
          placeholder="Origin"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          enter either the city and state, or only the zip code
        </FormHelperText>
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Shipment Destination</InputLabel>
        <Input
          id="component-helper"
          placeholder="Destination"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          enter either the city and state, or only the zip code
        </FormHelperText>
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Load Date</InputLabel>
        <Input
          id="component-helper"
          placeholder="06-17-2024"
          aria-describedby="component-helper-text"
        />
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Anything else we should know? (optional)</InputLabel>
        <Input
          id="component-helper"
          placeholder="e.g. must be shipped by a specific date, fragile, inoperable, etc."
          aria-describedby="component-helper-text"
        />
      </FormControl>

    </Box>
      </div>
      <div>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Freight Description</TableHead>
              <TableHead className="max-w-[125px]">Origin</TableHead>
              <TableHead className="max-w-[100px]">Destination</TableHead>
              <TableHead className="max-w-[125px]">Shipping Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow>
            <TableCell>Cat D8T - No Blade</TableCell>
            <TableCell>Aurora, CO</TableCell>
            <TableCell>Houston, TX</TableCell>
            <TableCell>06-18-2024</TableCell>
          </TableRow>
          <TableRow>
          <TableCell>John Deere 336 Excavator</TableCell>
            <TableCell>Aurora, CO</TableCell>
            <TableCell>Houston, TX</TableCell>
            <TableCell>06-18-2024</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
