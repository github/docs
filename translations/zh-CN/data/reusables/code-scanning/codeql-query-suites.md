以下查询套件内置于 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，可供使用。

  | 查询套件                   | 描述                                      |
  |:---------------------- |:--------------------------------------- |
  | `security-extended`    | 严重性和精度低于默认查询的查询                         |
  | `security-and-quality` | 来自 `security-extended` 的查询，加上可维护性和可靠性查询 |

在指定查询套件时，{% data variables.product.prodname_codeql %} 分析引擎将运行套件中包含的查询，以及默认查询集。
