---
title: Atribuindo a função de mantenedor da equipe a um integrante da equipe
intro: 'Você pode conceder a um integrante da equipe a capacidade de gerenciar a associação e as configurações da equipe, atribuindo a função de mantenedor da equipe.'
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Mantenedores da equipe
permissions: Organization owners can promote team members to team maintainers.
---

## Sobre os mantenedores da equipe

As pessoas com o papel de mantenedor da equipe podem gerenciar as configurações e os integrantes da equipe.

- [Alterar o nome e a descrição da equipe](/articles/renaming-a-team)
- [Alterar a visibilidade da equipe](/articles/changing-team-visibility)
- [Pedir para adicionar uma equipe secundária](/articles/requesting-to-add-a-child-team)
- [Solicitar a adição ou alteração de uma equipe principal](/articles/requesting-to-add-or-change-a-parent-team)
- [Definir a imagem de perfil da equipe](/articles/setting-your-team-s-profile-picture)
- [Editar discussões de equipe](/articles/managing-disruptive-comments/#editing-a-comment)
- [Excluir discussões de equipe](/articles/managing-disruptive-comments/#deleting-a-comment)
- [Adicionar integrantes da organização à equipe](/articles/adding-organization-members-to-a-team)
- [Remover membros da organização da equipe](/articles/removing-organization-members-from-a-team)
- Removea o acesso da equipe aos repositórios
- [Gerenciar atribuição de código para a equipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [Gerenciar lembretes agendados para pull requests](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## Promover um integrante de organização a mantenedor de equipe

Antes de poder promover um integrante da organização para chefe de uma equipe, a pessoa deverá ser integrante da equipe.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
4. Selecione a pessoa que você gostaria de promover a mantenedor de equipe. ![Caixa de seleção ao lado de integrante de organização](/assets/images/help/teams/team-member-check-box.png)
5. Acesse o menu suspenso que está acima da lista de integrantes da equipe e clique em **Change role...** (Alterar função). ![Menu suspenso com opção change role (alterar função)](/assets/images/help/teams/bulk-edit-drop-down.png)
6. Selecione uma nova função e clique em **Change role** (Alterar função). ![Botão de rádio para funções de Mantendor ou Integrante](/assets/images/help/teams/team-role-modal.png)
