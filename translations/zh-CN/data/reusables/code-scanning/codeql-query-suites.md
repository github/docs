The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

  | 查询套件                   | 描述                                      |
  |:---------------------- |:--------------------------------------- |
  | `security-extended`    | 严重性和精度低于默认查询的查询                         |
  | `security-and-quality` | 来自 `security-extended` 的查询，加上可维护性和可靠性查询 |

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the queries contained within the suite for you, in addition to the default set of queries.
