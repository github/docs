{% warning %}

**Aviso:**

- If you remove a person’s access to a private repository, any of their forks of that private repository are deleted. Local clones of the private repository are retained. If a team's access to a private repository is revoked or a team with access to a private repository is deleted, and team members do not have access to the repository through another team, private forks of the repository will be deleted.{% if currentVersion != "free-pro-team@latest" %}
- When [LDAP Sync is enabled](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap/#enabling-ldap-sync), if you remove a person from a repository, they will lose access but their forks will not be deleted. If the person is added to a team with access to the original organization repository within three months, their access to the forks will be automatically restored on the next sync.{% endif %}
- Você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.

- People with admin permissions to a private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %} repository can disallow forking of that repository, and organization owners can disallow forking of any private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %} repository in an organization. For more information, see "[Managing the forking policy for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)" and "[Managing the forking policy for your repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)."

{% endwarning %}
