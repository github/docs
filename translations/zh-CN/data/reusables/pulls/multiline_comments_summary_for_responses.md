{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

##### 多行评论摘要

{% note %}

**注：**开发人员可以预览新的参数和响应字段。 在预览期间，这些响应字段可能会更改，恕不提前通知。 有关完整详情，请参阅[博客文章](https://developer.github.com/changes/2019-10-03-multi-line-comments)。

{% endnote %}

使用 `comfort-fade` 预览标头和 `line` 参数在响应中显示多行评论支持的字段。

如果使用 `comfort-fade` 预览标头，您的响应将显示：
- 对于多行评论，显示 `start_line`、`original_start_line`、`start_side`、`line`、`original_line` 和 `side` 的值。
- 对于单行评论，显示 `line`、`original_line` 和 `side` 的值，以及 `start_line`、`original_start_line` 和 `start_side` 的 `null` 值。

如果不使用 `comfort-fade` 预览标头，多行和单行评论将在具有单个 `position` 属性的响应中以相同的方式显示。 您的响应将会显示：
- 对于多行评论，显示 `position` 属性的评论范围的最后一行。
- For single-line comments, the diff-positioned way of referencing comments for the  `position` attribute. 更多信息请参阅[输入参数](/v3/pulls/comments/#parameters-2)表中的 `position`。

{% endif %}
