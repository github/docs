### ユーザーに基づく検索

`actor`修飾子は、アクションを実行した人に基づいてイベントの範囲を指定できます。 例:

  * `actor:octocat`は`octocat`が行ったすべてのイベントを検索します。
  * `actor:octocat actor:hubot`は、`octocat`及び`hubot`が行ったすべてのイベントを検索します。
  * `-actor:hubot`は、`hubot`が行ったすべてのイベントを除外します。

使用できるのは {% data variables.product.product_name %} のユーザー名のみであり、個人の実名ではないことに注意してください。
