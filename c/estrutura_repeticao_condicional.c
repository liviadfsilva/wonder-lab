#include <stdio.h>

int main()
{
    int numero = 1;
    int soma = 0;

    while (numero != 0){

        printf("Insira um número inteiro por vez: ");
        scanf("%d", &numero);

        soma += numero;

    }

    printf("%d \n", soma);

    return 0;
}