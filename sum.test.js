const sum = require('./sum');

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

test('3*3 =', () =>{
    expect(3*3).toBe(9)
})