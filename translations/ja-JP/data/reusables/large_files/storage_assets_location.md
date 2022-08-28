{% if enterpriseServerVersions contains currentVersion %}
デフォルトでは、
{% data variables.large_files.product_name_long %}クライアントは大きなアセットをGitリポジトリがホストされているのと同じサーバーに保存します。 {% data variables.product.product_location %}で{% data variables.large_files.product_name_short %}が有効化されている場合、大きなアセットは`/data/user/storage`にあるデータパーティションに保存されます。
{% endif %}