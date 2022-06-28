{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
此外，
{% data variables.product.prodname_dotcom %} can review any dependencies added, updated, or removed in a pull request made against the default branch of a repository, and flag any changes that would reduce the security of your project. This allows you to spot and deal with vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} before, rather than after, they reach your codebase. 更多信息请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。
{% endif %}
