import dayjs from "dayjs";

export const createCalendar = () => {
    const firstDay = dayjs().startOf('month');

    // 初日の曜日のindexを取得
    const firstDayIndex = firstDay.day();

    return Array(35).fill(0).map((_, i) => {
        const diffFromFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFromFirstDay, "day");

        return day;
    });
};

export const getMonth = ({year, month}) => {
    return dayjs(`${year}-${month}`);
};

export const isSameDay = (d1, d2) => {
    const compareFormat = "YYYYMMDD";
    return d1.format(compareFormat) === d2.format(compareFormat);
}

export const isSameMonth = (m1, m2) => {
    const compareFormat = "YYYYMM";
    return m1.format(compareFormat) === m2.format(compareFormat);
}

export const isFirstDay = day => day.date() === 1;