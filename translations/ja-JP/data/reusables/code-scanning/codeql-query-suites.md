以下のクエリスイートは{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}に組み込まれており、利用可能です。

  | クエリスイート                | 説明                                           |
  |:---------------------- |:-------------------------------------------- |
  | `security-extended`    | デフォルトのクエリよりも重要度と精度が低いクエリ                     |
  | `security-and-quality` | `security-extended` からのクエリ、および保守性と信頼性に関するクエリ |

クエリスイートを指定すると、{% data variables.product.prodname_codeql %}の分析エンジンは、デフォルトのクエリセットに加えてスイート内に含まれるクエリを実行します。
