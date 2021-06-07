{% warning %}

**警告:** Pull RequestやIssueのコメントに画像を添付した場合、その匿名の画像URLは認証なしに誰でも見ることができます。{% if enterpriseServerVersions contains currentVersion %}これは、そのPull Requestがプライベートリポジトリ内にあったり、プライベートモードが有効化されていてもです。 認証なしでの画像へのアクセスを避けるには、{% data variables.product.product_location %}を含む、画像を提供するシステムへのネットワークアクセスを確実に制限してください。{% endif %}{% if currentVersion == "github-ae@latest" %}{% data variables.product.product_name %}上の画像URLへの認証なしのアクセスを避けるには、企業へのネットワークトラフィックを制限することを検討してください。 詳しい情報については「[企業へのネットワークトラフィックの制限](/admin/configuration/restricting-network-traffic-to-your-enterprise)」を参照してください。{% endif %}

{% endwarning %}
