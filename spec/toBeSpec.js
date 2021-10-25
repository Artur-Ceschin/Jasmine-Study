describe('Comparador toBe', function () {
  it('Validar o uso do toBe', function () {
    const obj1 = { value: 1 };
    const obj2 = { value: 1 };
    expect(true).toBe(true);
    expect('Teste').toBe('Teste');
    expect(obj1).not.toBe(obj2);
  });
});
