const handlerElephants = require('../src/handlerElephants');

describe('handlerElephants', () => {
  it('deve retornar a quantidade de elefantes', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });

  it('deve retornar um array com os nomes dos elefantes', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });

  it('deve retornar a média de idade dos elefantes', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5, 1);
  });

  it('deve retornar a localização dos elefantes', () => {
    const result = handlerElephants('location');
    expect(result).toBe('NW');
  });

  it('deve retornar a popularidade dos elefantes', () => {
    const result = handlerElephants('popularity');
    expect(result).toBe(5);
  });

  it('deve retornar um array com os dias de disponibilidade dos elefantes', () => {
    const result = handlerElephants('availability');
    expect(result).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('deve retornar undefined se nenhum parâmetro for fornecido', () => {
    const result = handlerElephants();
    expect(result).toBeUndefined();
  });

  it('deve retornar uma mensagem de erro se o parâmetro não for uma string', () => {
    const result = handlerElephants(123);
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('deve retornar null se o parâmetro fornecido for inválido', () => {
    const result = handlerElephants('invalidParam');
    expect(result).toBeNull();
  });
});
