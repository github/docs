{% data variables.product.prodname_GH_advanced_security %} is available

{%- ifversion fpt %} and enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}. Organizations that use {% data variables.product.prodname_ghe_cloud %} can also access these features in private repositories with a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

{%- elsif ghec %} and enabled for public repositories on {% data variables.product.prodname_dotcom_the_website %}. It is also available for private or internal repositories that are owned by an organization that is part of an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

{%- elsif ghes %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}. It is restricted to repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}

{%- elsif ghae %} for repositories owned by an organization. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}
