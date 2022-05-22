Esta tabela dá exemplos de como os nomes de usuário são normalizados em {% data variables.product.prodname_ghe_server %}:

| Nome de usuário        | Nome de usuário normalizado | Resultado                                                                                           |
| ---------------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| Ms.Bubbles             | `ms-bubbles`                | Nome de usuário criado com sucesso.                                                                 |
| !Ms.Bubbles            | `-ms-bubbles`               | Este nome de usuário não é criado, porque começa com um traço.                                      |
| Ms.Bubbles!            | `ms-bubbles-`               | Este nome de usuário não é criado, porque termina com um traço.                                     |
| Ms!!Bubbles            | `ms--bubbles`               | Este nome de usuário não é criado, porque contém dois traços consecutivos.                          |
| Ms!Bubbles             | `ms-bubbles`                | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| Ms.Bubbles@example.com | `ms-bubbles`                | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
