{% ifversion org-sec-manager-update %}

The security manager role is an organization-level role that organization owners can assign to any member or team in the organization. When applied, it gives permission to view security alerts and manage settings for code security across your organization, as well as read permission for all repositories in the organization.

{% elsif ghes < 3.16 %}

Security manager is an organization-level role that organization owners can assign to any team in an organization. When applied, it gives every member of the team permission to view security alerts and manage settings for code security across your organization, as well as read permission for all repositories in the organization.

{% endif %}
