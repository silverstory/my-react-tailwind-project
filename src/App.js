import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function App() {
  const classes = useStyles();
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>

      <div className="bg-gray-300">
        <div className="bg-gray-100 grid grid-cols-2">
          <div className="px-8 py-12  max-w-md  mx-auto sm:max-w-xl lg:px-12 lg:py-24">
            <img className="h-10"
              src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-from-zero-to-production/98b52c61259c732226c2ec0207ba2246e67a34e6/02-the-utility-first-workflow/img/logo.svg" alt="Workcation" />
            <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-from-zero-to-production/main/02-the-utility-first-workflow/img/beach-work.jpg" alt="Woman workcationing on the beach" />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">You can work from anywhere.
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so
              you can enjoy some nice weather even when you're not on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a className="inline-block px-5 py-3 shadow-lg bg-indigo-500 text-white rounded-lg uppercase tracking-wider font-semibold text-sm sm:text-base" href="#">Book your escape</a>
            </div>
          </div>
          <div className="hidden relative lg:block">
            <img className="absolute inset-0 w-full h-full object-cover object-center" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-from-zero-to-production/main/02-the-utility-first-workflow/img/beach-work.jpg" alt="Woman workcationing on the beach" />
          </div>
        </div>
      </div>








      {/* <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              ???Tailwind CSS is the only framework that I've seen scale
              on large teams. It???s easy to customize, adapts to any design,
              and the build size is tiny.???
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">
              Sarah Dayan
            </div>
            <div className="text-gray-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider> */}

      
    </div>
  )
}
