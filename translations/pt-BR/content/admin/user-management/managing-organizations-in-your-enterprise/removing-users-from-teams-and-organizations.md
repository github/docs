---
title: Remover usuários de equipes e organizações
intro: 'Se algum integrante da organização não precisar mais de acesso a determinados repositórios, você poderá removê-lo da equipe que concede esse acesso. Se um integrante não precisar mais acessar os repositórios pertencentes à organização, você poderá removê-lo da organização.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
---
Somente proprietários ou administradores de equipe podem remover integrantes da organização. Quando um usuário é removido de uma equipe ou organização, seus problemas, pull requests e comentários nos repositórios da organização continuam intactos e atribuídos a ele.

{% warning %}

**Aviso**: ao ser removido de uma organização, o usuário perderá o acesso a qualquer bifurcação privada que tenha nos **repositórios privados** da organização. Ele ainda terá acesso às cópias locais dessas bifurcações, mas não conseguirá sincronizá-las com os repositórios da organização. Você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual. Se o usuário removido for integrante da organização, o acesso dele às bifurcações dos repositórios da organização pode ser restaurado se ele for [reintegrado como integrante da organização](/articles/reinstating-a-former-member-of-your-organization) dentro de três meses após sua remoção.

{% endwarning %}

### Remover um integrante da equipe

{% warning %}

**Observação:** {% data reusables.enterprise_management_console.badge_indicator %}

Para remover um integrante de uma equipe sincronizada com um grupo LDAP, entre em contato com o administrador LDAP.

{% endwarning %}

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Selecione um ou mais integrantes que deseja remover. ![Caixa de seleção ao lado de integrante de organização](/assets/images/help/teams/team-member-check-box.png)
5. Use o menu suspenso acima da lista de integrantes da equipe e clique em **Remove from team** (Remover da equipe). ![Menu suspenso com opção change role (alterar função)](/assets/images/help/teams/bulk-edit-drop-down.png)

### Remover um usuário da organização

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Clique na caixa de seleção ao lado do nome dos usuários que você pretende remover.![Caixa de seleção Remove user (Remover usuário)](/assets/images/help/organizations/Organization-remove-user.png)
5. Na parte superior da página, abaixo do nome da organização, clique em **Remove from organization** (Remover da organização). ![Botão Remove from organization (Remover da organização)](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
