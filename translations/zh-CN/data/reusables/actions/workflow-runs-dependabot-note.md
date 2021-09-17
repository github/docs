{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注意：** 由 {% data variables.product.prodname_dependabot %} 拉取请求触发的工作流程运行就像是来自复刻的仓库一样， 并因此使用只读 `GITHUB_TOKEN`。 这些工作流程运行无法访问任何密钥。 请参阅[“确保 GitHub Actions 和工作流程安全：阻止 pwn 请求”](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)，了解确保这些工作流程安全的策略。

{% endnote %}
{% endif %}
