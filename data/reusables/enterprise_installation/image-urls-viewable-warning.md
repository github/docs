{% warning %}

**Warning:** If you add an image attachment to a pull request or issue comment, anyone can view the anonymized image URL without authentication{% ifversion ghes %}, even if the pull request is in a private repository, or if private mode is enabled. To prevent unauthorized access to the images, ensure that you restrict network access to the systems that serve the images, including {% data variables.location.product_location %}{% endif %}.{% ifversion ghae %} To prevent unauthorized access to image URLs on {% data variables.product.product_name %}, consider restricting network traffic to your enterprise. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)."{% endif %}

{% endwarning %}
