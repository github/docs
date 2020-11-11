{% warning %}

**Aviso:**

- Se você remover o acesso de uma pessoa a um repositório privado, todas as suas bifurcações desse repositório privado serão excluídas. Os clones locais do repositório privado são mantidos. Se o acesso de uma equipe a um repositório privado for revogado ou uma equipe com acesso a um repositório privado for excluída, e os integrantes da equipe não tiverem acesso ao repositório por meio de outra equipe, as bifurcações privadas do repositório serão excluídas.{% if enterpriseServerVersions contains currentVersion %}
- When [LDAP Sync is enabled](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#enabling-ldap-sync), if you remove a person from a repository, they will lose access but their forks will not be deleted. Se a pessoa for adicionada a uma equipe com acesso ao repositório original da organização dentro de três meses, seu acesso às bifurcações será automaticamente restaurado na próxima sincronização.{% endif %}
- Você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.

- People with admin permissions to a private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %} repository can disallow forking of that repository, and organization owners can disallow forking of any private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %} or internal{% endif %} repository in an organization. Para mais informações, consulte "[Gerenciar a política de bifurcação da sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization)" e "[Gerenciar a política de bifurcação do seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% endwarning %}
