日志列出每个操作的以下信息：

* 执行操作的仓库
* 执行操作的用户
* 执行的操作内容
* 发生操作的国家/地区
* 操作发生的日期和时间

请注意，无法使用文本搜索条目。 但是，您可以使用各种过滤器构建搜索查询。 查询日志时使用的许多运算符，如 `-`、`>` 或 `<`，与在 {% data variables.product.product_name %} 上搜索时的格式相同。 更多信息请参阅“[在 {% data variables.product.prodname_dotcom %} 上搜索](/github/searching-for-information-on-github/about-searching-on-github)”。

#### 基于操作搜索

使用`操作`限定符将操作限于特定类型的操作。 例如：

  * `operation:access` 查找其中资源被访问过的所有事件。
  * `operation:authentication` 查找其中执行了身份验证事件的所有事件。
  * `operation:create` 查找在其中创建了资源的所有事件。
  * `operation:modify` 查找在其中修改了现有资源的所有事件。
  * `operation:remove` 查找在其中删除的现有资源的所有事件。
  * `operation:restore` 查找在其中恢复了现有资源的所有事件。
  * `operation:transfer` 查找在其中转移了现有资源的所有事件。

#### 基于仓库搜索

使用 `repo` 限定符将操作限于特定仓库。 例如：

  * `repo:my-org/our-repo` 会找到在 `my-org` 组织的 `our-repo` 仓库中发生的所有事件。
  * `repo:my-org/our-repo repo:my-org/another-repo` 会找到在 `my-org` 组织的 `our-repo` 和 `another-repo` 仓库中发生的所有事件。
  * `-repo:my-org/not-this-repo` 会排除在 `my-org` 组织的 `not-this-repo` 仓库中发生的所有事件。

请注意，您必须在 `repo` 限定符中包含帐户名称；仅搜索 `repo:our-repo` 将不起作用。

#### 基于用户搜索

`actor` 限定符可将事件范围限于执行操作的人员。 例如：

  * `actor:octocat` 会找到 `octocat` 执行的所有事件。
  * `actor:octocat actor:hubot` 会找到 `octocat` 和 `hubot` 执行的所有事件。
  * `-actor:hubot` 会排除 `hubot` 执行的所有事件。

请注意，只能使用 {% data variables.product.product_name %} 用户名，而不是个人的真实姓名。
