The following query suites are built into {{ site.data.variables.product.prodname_codeql }} {{ site.data.variables.product.prodname_code_scanning }} and are available for use.

  | クエリスイート                | 説明                                           |
  |:---------------------- |:-------------------------------------------- |
  | `security-extended`    | デフォルトのクエリよりも重要度と精度が低いクエリ                     |
  | `security-and-quality` | `security-extended` からのクエリ、および保守性と信頼性に関するクエリ |

When you specify a query suite, the {{ site.data.variables.product.prodname_codeql }} analysis engine will run the queries contained within the suite for you, in addition to the default set of queries.
