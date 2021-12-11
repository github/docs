{% data variables.product.prodname_GH_advanced_security %} の優先順位を付けるリポジトリと Organization を決定するときは、それらを確認して次のことを特定する必要があります。

- 会社の成功にとって最も重要なコードベース。 これらは、脆弱なコード、ハードコードされたシークレット、または脆弱な依存関係の導入が会社に最大の影響を与えるプロジェクトです。
- コミット頻度が最も高いコードベース。 これらは最も積極的に開発されたプロジェクトであるため、セキュリティの問題が発生するリスクが高くなります。

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, assess which other codebases you could add without incurring billing for unique committers. Finally, review the remaining important and busy codebases. {% ifversion fpt or ghes or ghec %}If you want to increase the number of seats in your license, contact {% data variables.contact.contact_enterprise_sales %}.{% endif %}
