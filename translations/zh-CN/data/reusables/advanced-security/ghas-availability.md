{% data variables.product.prodname_GH_advanced_security %} features are available

{%- ifversion fpt %} for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} can also access these features in private repositories with a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

{%- elsif ghec %} and free of charge for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations within an enterprise that has a {% data variables.product.prodname_GH_advanced_security %} license can also access these features on private or internal repositories. {% data reusables.advanced-security.more-info-ghas %}

{%- elsif ghes %} for enterprises with a license for {% data variables.product.prodname_GH_advanced_security %}. The features are restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{%- elsif ghae %} for repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}
