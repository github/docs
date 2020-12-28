{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  {% tip %}

  {% data variables.product.product_location %}上でアウトバウンドメールのサポートが有効化されている場合にのみ、メールを受信することになります。 詳しい情報については、サイト管理者にお問い合わせください。

  {% endtip %}
{% endif %}
