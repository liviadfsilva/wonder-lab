#include <stdio.h>

int main()
{
    int a, b, c;

    printf("Digite 3 números inteiros, um de cada vez: \n");

    scanf("%d %d %d", &a, &b, &c);

    printf("Os números inteiros são: %d, %d e %d. \n", a, b, c);

    int soma = a + b + c;
    printf("A soma dos números inteiros equivale a %d. \n", soma);

    int subtracao = a - b - c;
    printf("A subtração dos números inteiros equivale a %d. \n", subtracao);

    int multiplicacao = a * b * c;
    printf("A multiplicação dos números inteiros equivale a %d. \n", multiplicacao);

    int divisao = a / b / c;
    printf("A divisão dos números inteiros equivale a %d. \n", divisao);

    if(a > b){
        printf("O número %d é maior que o número %d. \n", a, b);
    }

    if(b < c){
        printf("O número %d é menor que o número %d. \n", b, c);
    }

    if(a >= 0 && b % 2 == 0){
        printf("O número %d é positivo e o número %d é par.", a, b);
    }

    return 0;
}