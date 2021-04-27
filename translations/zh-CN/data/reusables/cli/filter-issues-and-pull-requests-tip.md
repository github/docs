{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_cli %} 过滤议题或拉取请求。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的 "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" 或 "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)"。

{% endtip %}
{% endif %}
