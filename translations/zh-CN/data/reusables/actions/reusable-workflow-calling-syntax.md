* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} ，用于公共 {% ifversion ghes or ghec or ghae %}或内部{% endif %} 存储库中可重用的工作流程。
* `..github/workflows/{filename}`，用于在同一资源库中重新使用的工作流程。{% endif %}

`{ref}` 可以是 SHA、发布标记或分支名称。 使用提交 SHA 对于稳定性和安全性是最安全的。 更多信息请参阅“[GitHub Actions 的安全性增强](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)”。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}如果使用第二个语法选项（不带 `{owner}/{repo}` 和 `@{ref}`），则被调用的工作流程与调用方工作流程来自同一提交。{% endif %}
