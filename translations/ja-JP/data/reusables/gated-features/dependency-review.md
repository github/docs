{%- ifversion fpt %}
依存関係レビューは、パブリックリポジトリで有効化されています。 依存関係レビューは、{% data variables.product.prodname_ghe_cloud %}を使い、{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っているOrganizationが所有するプライベートリポジトリでも利用できます。

{%- elsif ghec %}
依存関係レビューは、パブリックリポジトリに対して{% data variables.product.product_name %}に含まれています。 依存関係レビューをOrganizationが所有するプライベートリポジトリで使うには、{% data variables.product.prodname_GH_advanced_security %}のライセンスを持っていなければなりません。

{%- elsif ghes %}
依存関係レビューは、{% data variables.product.product_name %}のOrganizationが所有するリポジトリで利用できます。 この機能には、{% data variables.product.prodname_GH_advanced_security %}のライセンスが必要です。

{%- elsif ghae %}
依存関係レビューは、{% data variables.product.product_name %}のOrganizationが所有するリポジトリで利用できます。 これは{% data variables.product.prodname_GH_advanced_security %}の機能です（ベータリリースの期間中は無料）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
