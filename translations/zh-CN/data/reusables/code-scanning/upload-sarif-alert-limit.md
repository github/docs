{% note %}

**注意：**
- SARIF upload supports a maximum of 5000 results per upload. 超过此限制的任何结果均被忽略。 如果工具产生太多结果，则应更新配置，以专注于最重要的规则或查询的结果。

 - For each upload, SARIF upload supports a maximum size of 10 MB for the `gzip`-compressed SARIF file. Any uploads over this limit will be rejected. If your SARIF file is too large because it contains too many results, you should update the configuration to focus on results for the most important rules or queries.

{% endnote %}
