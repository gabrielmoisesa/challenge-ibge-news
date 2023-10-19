import formatDateToDaysAgo from '../utils/formatDateToDaysAgo';

describe('formatDateToDaysAgo function', () => {
  it('should format the date correctly', () => {
    const currentDate = new Date();
    const yesterday = new Date();
    yesterday.setDate(currentDate.getDate() - 1);
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(currentDate.getDate() - 2);

    const currentDateStr = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    const yesterdayStr = `${yesterday.getDate()}/${yesterday.getMonth() + 1}/${yesterday.getFullYear()} ${yesterday.getHours()}:${yesterday.getMinutes()}:${yesterday.getSeconds()}`;
    const twoDaysAgoStr = `${twoDaysAgo.getDate()}/${twoDaysAgo.getMonth() + 1}/${twoDaysAgo.getFullYear()} ${twoDaysAgo.getHours()}:${twoDaysAgo.getMinutes()}:${twoDaysAgo.getSeconds()}`;

    expect(formatDateToDaysAgo(currentDateStr)).toBe('Hoje');
    expect(formatDateToDaysAgo(yesterdayStr)).toBe('Ontem');
    expect(formatDateToDaysAgo(twoDaysAgoStr)).toBe('2 dias atrás');
  });

  it('should return an empty string for invalid input', () => {
    expect(formatDateToDaysAgo('invalidDateString')).toBe('');
  });
});
