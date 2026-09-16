import DatePicker from "react-multi-date-picker";
import styles from "./CustomCalendar.module.css";
// import DateCalenderIcon from "@/icons/DateCalenderIcon";

function CustomCalendar({value, onChange, ...rest}) {
  return (
    <div className={styles.container}>
      <DatePicker
        // render={<DateCalenderIcon className="size-4" />}

        weekDays={weekDays}
        editable={false}
        arrow={false}
        value={value}
        onChange={onChange}
        {...rest}
        // hideOnScroll
      />
    </div>
  );
}

export default CustomCalendar;

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
