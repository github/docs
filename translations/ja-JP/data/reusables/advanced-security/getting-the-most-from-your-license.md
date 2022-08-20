{% data variables.product.prodname_GH_advanced_security %} の優先順位を高めるリポジトリと Organization を決定するには、それらを確認して次のことを特定する必要があります。

- 会社の成功にとって最も重要なコードベース。 これらは、脆弱なコード、ハードコードされたシークレット、または安全ではない依存関係の導入が会社に最大の影響を与えるプロジェクトです。
- コミット頻度が最も高いコードベース。 これらは最も積極的に開発されたプロジェクトであるため、セキュリティの問題が発生するリスクが高くなります。

これらのOrganizationやリポジトリで{% data variables.product.prodname_GH_advanced_security %}を有効化したら、個々のコミッタが支払いをすることなく追加できる他のコードベースを評価してください。 最後に、残りの重要で忙しいコードベースをレビューしてください。 {% ifversion fpt or ghes or ghec %}ライセンス中のシート数を増やしたい場合には、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。{% endif %}
