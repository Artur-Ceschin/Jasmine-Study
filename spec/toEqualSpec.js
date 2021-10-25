describe('Teste do toEqual', function () {
  it('Deve validar o uso do toEqual', function () {
    const obj1 = { description: 'Teste' };
    const obj2 = { description: 'Teste' };
    expect(true).toEqual(true);
    expect(obj1).toEqual(obj2);
  });
});
