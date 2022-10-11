{% note %}

**注：**SARIF 上传支持每次上传最多 {% if currentVersion == "github-ae@next" or currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}5000{% else %}1000{% endif %} 个结果。 超过此限制的任何结果均被忽略。 如果工具产生太多结果，则应更新配置，以专注于最重要的规则或查询的结果。

{% endnote %}
