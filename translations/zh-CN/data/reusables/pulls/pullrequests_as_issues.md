{% note %}

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. 因此，“议题”端点可能返回响应中的议题和拉取请求。 您可以通过 `pull_request` 键识别拉取请求。

请注意，从“议题”端点返回的拉取请求的 `id` 将是 _issue id_。 要查找拉取请求 id，请使用“[列出拉取请求](/v3/pulls/#list-pull-requests)”端点。

{% endnote %}
