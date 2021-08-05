import React, { useState }  from "react";
import { onDateClick, nextMonth, prevMonth } from '../../util/calendarUtil';
import dateFns from "date-fns";

function Calendar() {
    const currentMonth =  new Date();
    const selectedDate = new Date()

    const renderHeader = () => {

    }

    const renderDays = () => {

    }

    const renderCells = () => {

    }

    return (
        <div>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    )
}

export default Calendar;