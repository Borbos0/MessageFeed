export function getMonthName(monthNumber) {
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
  
    if (monthNumber < 1 || monthNumber > 12) {
      throw new Error('Некорректный номер месяца. Ожидается значение от 1 до 12.');
    }
  
    return months[monthNumber - 1];
  }
  