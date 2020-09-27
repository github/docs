{% note %}

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API offers the `application/vnd.github.v3.diff` [media type](/v3/media/#commits-commit-comparison-and-pull-requests). 要查看拉取请求差异，请将此媒体类型添加到[单一拉取请求](/v3/pulls/#get-a-pull-request)端点的 `Accept` 标头。

`position` 值等于要添加注释的文件中从第一个 "@@" 块标头向下的行数。 "@@" 行正下方的行是位置 1，下一行是位置 2，依此类推。 差异中的位置继续通过空白行和附加块继续增加，直到新文件开始。

{% endnote %}
