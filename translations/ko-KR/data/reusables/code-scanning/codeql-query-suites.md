The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

  | Query suite            | 설명                                                                             |
  |:---------------------- |:------------------------------------------------------------------------------ |
  | `security-extended`    | Queries of lower severity and precision than the default queries               |
  | `security-and-quality` | Queries from `security-extended`, plus maintainability and reliability queries |

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the queries contained within the suite for you, in addition to the default set of queries.
