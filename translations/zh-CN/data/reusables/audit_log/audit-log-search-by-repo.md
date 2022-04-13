### 基于仓库搜索

使用 `repo` 限定符将操作限于特定仓库。 例如：

  * `repo:my-org/our-repo` 会找到在 `my-org` 组织的 `our-repo` 仓库中发生的所有事件。
  * `repo:my-org/our-repo repo:my-org/another-repo` 会找到在 `my-org` 组织的 `our-repo` 和 `another-repo` 仓库中发生的所有事件。
  * `-repo:my-org/not-this-repo` 会排除在 `my-org` 组织的 `not-this-repo` 仓库中发生的所有事件。

请注意，您必须在 `repo` 限定符中包含帐户名称；仅搜索 `repo:our-repo` 将不起作用。
