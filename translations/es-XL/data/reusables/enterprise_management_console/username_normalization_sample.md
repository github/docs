Esta tabla brinda ejemplos de cómo se normalizan los nombres de usuarios en el {% data variables.product.prodname_ghe_server %}:

| Nombre de usuario      | Nombre de usuario normalizado | Resultado                                                                                                 |
| ---------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| Ms.Bubbles             | `ms-bubbles`                  | El nombre de usuario se crea correctamente.                                                               |
| !Ms.Bubbles            | `-ms-bubbles`                 | No se crea este nombre de usuario debido a que comienza con una raya.                                     |
| Ms.Bubbles!            | `ms-bubbles-`                 | No se crea este nombre de usuario debido a que termina con una raya.                                      |
| Ms!!Bubbles            | `ms--bubbles`                 | No se crea este nombre de usuario debido a que contiene dos rayas seguidas.                               |
| Ms!Bubbles             | `ms-bubbles`                  | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| Ms.Bubbles@example.com | `ms-bubbles`                  | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
