{% ifversion not fpt %}

Security overview for an organization is available to all members of the organization. The views and data displayed are determined by your role in the organization, and by your permissions for individual repositories within the organization. {% ifversion security-overview-org-risk-coverage %}For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview#permission-to-view-data-in-security-overview)."{% endif %}

{% ifversion ghec or ghes %}
Security overview for an enterprise shows organization owners and security managers data for the organizations they have access to. Enterprise owners can only view data for organizations where they are added as an organization owner or security manager. {% ifversion enterprise-owner-join-org %}For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."{% endif %}
{% endif %}

{% endif %}
