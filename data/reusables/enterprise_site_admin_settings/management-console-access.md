## About access to the {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.management-console-overview %} For more information, see "[AUTOTITLE](/admin/configuration/administering-your-instance-from-the-management-console/about-the-management-console)."

You can access the {% data variables.enterprise.management_console %}{% ifversion enterprise-management-console-multi-user-auth %} as the root site administrator or a {% data variables.enterprise.management_console %} user{% elsif ghes < 3.8 %} using the {% data variables.enterprise.management_console %} password{% endif %}. An administrator created the {% ifversion enterprise-management-console-multi-user-auth %}root site administrator {% endif %}password during the initial setup process for {% data variables.location.product_location %}.
