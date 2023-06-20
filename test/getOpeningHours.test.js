const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna todo cronograma se nenhum argumento for passado', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('verifica se o Zoo abre na segunda às 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('verifique se o Zoo abre na terça às 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  it('verifica se o Zoo abre na Quarta às 09:00-AM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('verifica se o dia da semana informado é válido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('verifica se a abreviação da hora informada é AM ou PM, senão lança erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('verifica se a hora informada é um número, senão lança erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError('The hour should represent a number');
  });

  it('verifica se os minutos informados são números, senão lança erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError('The minutes should represent a number');
  });

  it('verifica se a hora informada está entre 0 e 12, senão lança erro', () => {
    expect(() => getOpeningHours('Friday', '15:30-AM')).toThrowError('The hour must be between 0 and 12');
  });

  it('verifica se o minuto informado está entre 0 e 59, senão lança erro', () => {
    expect(() => getOpeningHours('Friday', '03:70-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
