import 'flatpickr/dist/themes/dark.css'
import Flatpickr from 'react-flatpickr'

function DatePicker({ date, getDate }) {
  return (
    <div>
      <Flatpickr
        className="flatPicker"
        options={{ maxDate: new Date() }}
        value={date}
        onChange={([date]) => {
          getDate(date)
        }}
      />
    </div>
  )
}

export default DatePicker
