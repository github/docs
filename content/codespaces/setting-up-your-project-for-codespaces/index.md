#include <stdio.h>
#include <conio.h>
void main()
{

    int i, replace, replaced;
    int len;
    system("cls");
    system("cls");
    printf("Enter the arrey length:");
    scanf("%d", &len);
    int arrey[len];

    printf("enter  %d arrey elements:", len);
    for (i = 0; i < len; i++)
    {
        printf(" arr[%d] = ", i);
        scanf("%d", &arrey[i]);
    }

    printf("\nenter the number you wanna replace = ");
    scanf("%d", &replace);
    printf("\nenter the element to be placed = ");
    scanf("%d", &replaced);

    for (i = 0; i < len; i++)
    {
        if (arrey[i] == replace)
            arrey[i] = replaced;
    }

    printf("\nupdated arrey=");
    for (i = 0; i < len; i++)
    {
        printf("\narrey[%d] = %d", i, arrey[i]);
    }
}
