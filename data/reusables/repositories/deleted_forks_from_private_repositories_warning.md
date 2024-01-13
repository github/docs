{% warning %}

**Warning:**

- If you remove a person’s access to a private repository, any of their forks of that private repository are deleted. Local clones of the private repository are retained. If a team's access to a private repository is revoked or a team with access to a private repository is deleted, and team members do not have access to the repository through another team, private forks of the repository will be deleted.{% ifversion ghes %}
- When [LDAP Sync is enabled](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#enabling-ldap-sync), if you remove a person from a repository, they will lose access but their forks will not be deleted. If the person is added to a team with access to the original organization repository within three months, their access to the forks will be automatically restored on the next sync.{% endif %}
- You are responsible for ensuring that people who have lost access to a repository delete any confidential information or intellectual property.

- People with admin permissions to a private{% ifversion ghes or ghae or ghec %} or internal{% endif %} repository can disallow forking of that repository, and organization owners can disallow forking of any private{% ifversion ghes or ghae or ghec %} or internal{% endif %} repository in an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)" and "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)."

{% endwarning %}
