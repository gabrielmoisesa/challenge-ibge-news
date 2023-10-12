const formatDateToDaysAgo = (dateString: string) => {
  const parts = dateString.match(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
  if (!parts) {
    return '';
  }
  const publishedDate = new Date(
    Date.UTC(+parts[3], Number(parts[2]) - 1, +parts[1], +parts[4], +parts[5], +parts[6]),
  );

  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - publishedDate.getTime();

  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo === 0) {
    return 'Hoje';
  } if (daysAgo === 1) {
    return 'Ontem';
  }
  return `${daysAgo} dias atrás`;
};

export default formatDateToDaysAgo;
