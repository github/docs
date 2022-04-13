### 基于用户搜索

`actor` 限定符可将事件范围限于执行操作的人员。 例如：

  * `actor:octocat` 会找到 `octocat` 执行的所有事件。
  * `actor:octocat actor:hubot` 会找到 `octocat` 和 `hubot` 执行的所有事件。
  * `-actor:hubot` 会排除 `hubot` 执行的所有事件。

请注意，只能使用 {% data variables.product.product_name %} 用户名，而不是个人的真实姓名。
