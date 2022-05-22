{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してIssueやPull Requestをフィルタすることもできます。 詳しい情報については、ドキュメントの「[`gh issue list`](https://cli.github.com/manual/gh_issue_list)」または「[`gh pr list`](https://cli.github.com/manual/gh_pr_list)」{% data variables.product.prodname_cli %} を参照してください。

{% endtip %}
{% endif %}
