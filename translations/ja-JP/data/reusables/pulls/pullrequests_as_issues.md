{% note %}

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. そのため、"Issues"エンドポイントはレスポンス中でIssueとプルリクエストの両方を返すことがあります。 プルリクエストは`pull_request`キーによって判別できます。

"Issues"エンドポイントから返されるプルリクエストの`id`は_issue id_になることに注意してください。 プルリクエストidを得るには、「[List pull requests](/v3/pulls/#list-pull-requests)」エンドポイントを使ってください。

{% endnote %}
