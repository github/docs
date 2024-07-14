{% ifversion ghec or fpt %}

{% note %}

**Note**: Team Discussions are now deprecated and this REST API endpoint will be removed from {% data variables.product.prodname_dotcom_the_website %} on 2023-07-05. You can read more about this deprecation on the [GitHub Blog](https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/).

You can use {% data variables.product.prodname_discussions %} to create organization-level discussions. For more information about {% data variables.product.prodname_discussions %}, see "[AUTOTITLE](/discussions)."

{% endnote %}

{% elsif ghes %}

{% note %}

**Note**: Team Discussions are now deprecated and this REST API endpoint will be removed in {% data variables.product.product_name %} 3.12. You can read more about this deprecation on the [GitHub Blog](https://github.blog/changelog/2023-02-08-sunset-notice-team-discussions/).

You can use {% data variables.product.prodname_discussions %} to create organization-level discussions. For more information about{% data variables.product.prodname_discussions %}, see "[AUTOTITLE](/discussions)."

{% endnote %}

{% endif %}
