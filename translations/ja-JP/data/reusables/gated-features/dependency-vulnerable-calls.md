{%- ifversion fpt %}
脆弱性のある呼び出しの検出は、パブリックリポジトリで有効化されています。 この分析は、{% data variables.product.prodname_ghe_cloud %}を使用し、ライセンスされた{% data variables.product.prodname_GH_advanced_security %}を持つOrganizationが所有するプライベートリポジトリでも利用できます。

{%- elsif ghec %}
脆弱性のある呼び出しの検出は、パブリックリポジトリで{% data variables.product.product_name %}に含まれています。 Organizationが所有するプライベートリポジトリで脆弱性のある呼び出しを検出するには、Organizationが{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っていなければなりません。

{%- elsif ghes > 3.5 %}
脆弱性のある呼び出しの検出は、{% data variables.product.product_name %}のOrganizationが所有するリポジトリで利用できます。 この機能には、{% data variables.product.prodname_GH_advanced_security %}のライセンスが必要です。

{%- elsif ghae-issue-6076 %}
脆弱性のある呼び出しの検出は、{% data variables.product.product_name %}のOrganizationが所有するリポジトリで利用できます。 これは{% data variables.product.prodname_GH_advanced_security %}の機能です（ベータリリースの期間中は無料）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
