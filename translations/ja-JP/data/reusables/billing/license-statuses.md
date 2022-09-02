{% ifversion ghec %}
ライセンスに{% data variables.product.prodname_vss_ghe %}が含まれているなら、{% data variables.product.prodname_dotcom_the_website %}上のユーザアカウントが{% data variables.product.prodname_vs %}サブスクライバーと正しくマッチしたかを、追加のライセンス詳細を含むCSVファイルをダウンロードすることによって確認できます。 ライセンスのステータスは下記のいずれかになります。
- "Matched": {% data variables.product.prodname_dotcom_the_website %}のユーザアカウントは{% data variables.product.prodname_vs %}サブスクライバーとリンクしています。
- "Pending Invitation": 招待が{% data variables.product.prodname_vs %}サブスクライバーに送信されていますが、サブスクライバーは招待を承諾していません。
- 空白: 考慮すべき{% data variables.product.prodname_vs %}との関連が、{% data variables.product.prodname_dotcom_the_website %}上のユーザアカウントにありません。
{% endif %}
