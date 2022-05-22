{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**ノート:** GitHub AppでこのAPIにアクセスするには、カスタムの[メディアタイプ](/rest/overview/media-types)をリクエストの`Accept`ヘッダで渡さなければなりません。

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
