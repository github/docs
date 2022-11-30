The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

  | Conjunto de consultas  | Descripción                                                                          |
  |:---------------------- |:------------------------------------------------------------------------------------ |
  | `security-extended`    | Las consultas de severidad y precisión más baja que aquellas predeterminadas         |
  | `security-and-quality` | Las consultas de `security-extended`, mas aquellas de mantenibilidad y confiabilidad |

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the queries contained within the suite for you, in addition to the default set of queries.
