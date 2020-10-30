The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

  | Suite de consulta      | Descrição                                                                       |
  |:---------------------- |:------------------------------------------------------------------------------- |
  | `security-extended`    | Consultas de menor gravidade e precisão que as consultas-padrão                 |
  | `security-and-quality` | Consultas de `security-extended`, mais consultas de manutenção e confiabilidade |

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the queries contained within the suite for you, in addition to the default set of queries.
