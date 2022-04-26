export const uniqueDates = (tasks) => {
  const unique = [];

  tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
  });

  return unique;
};

export const orderDates = (dates) => {
  return dates.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YYYY");
    const secondDate = moment(b, "DD/MM/YYYY");
    return firstDate - secondDate;
  }); //"sort" es un método de los Arrays más detalle en "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
};
