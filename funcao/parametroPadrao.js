function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
// O zero vai ser falso, e vai ser somado a mais um, assumindo o resultado de 3
console.log(soma1(), soma1(3), soma(11, 2, 3), soma1(0, 0, 0))