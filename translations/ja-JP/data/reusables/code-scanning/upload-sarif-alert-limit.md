{% note %}

**ノート:**
- SARIF upload supports a maximum of {% ifversion ghae-next or fpt or ghes > 3.0 or ghec %}5000{% else %}1000{% endif %} results per upload. この制限を超えた結果は無視されます。 ツールがあまりに多くの結果を生成する場合、最も重要なルールやクエリに対する結果に焦点を当てるよう、設定を更新すべきです。

 - For each upload, SARIF upload supports a maximum size of 10 MB for the `gzip`-compressed SARIF file. Any uploads over this limit will be rejected. If your SARIF file is too large because it contains too many results, you should update the configuration to focus on results for the most important rules or queries.

{% endnote %}
