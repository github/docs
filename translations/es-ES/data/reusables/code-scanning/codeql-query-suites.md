Las siguientes suites de consultas se compilan en el {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} y están disponibles para utilizarse.

  | Conjunto de consultas  | Descripción                                                                          |
  |:---------------------- |:------------------------------------------------------------------------------------ |
  | `security-extended`    | Las consultas de severidad y precisión más baja que aquellas predeterminadas         |
  | `security-and-quality` | Las consultas de `security-extended`, mas aquellas de mantenibilidad y confiabilidad |

Cuando especificas una suite de consultas, el motor de análisis de {% data variables.product.prodname_codeql %} ejecutará las consultas dentro de la suite para ti, adicionalmente a el conjunto de consultas adicional.
