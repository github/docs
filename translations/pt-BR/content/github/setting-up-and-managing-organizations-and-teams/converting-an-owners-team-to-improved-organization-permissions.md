---
title: Migrar uma equipe de proprietários para permissões de organização aprimoradas
intro: 'Se sua organização foi criada depois de setembro de 2015, tem permissões de organização aprimoradas por padrão. Organizações criadas antes de setembro de 2015 podem precisar migrar proprietários e equipes de administradores antigos para o modelo de permissões aprimoradas. O "proprietário" é agora uma função administrativa fornecida a integrantes individuais da sua organização. Os integrantes da equipe de proprietários legada recebem automaticamente privilégios de proprietário.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program/
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions/
  - /articles/converting-an-owners-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---

Você tem algumas opções para converter sua equipe de proprietários legada:

- Dê à organização um novo nome que denote que os integrantes têm um status especial na organização.
- Exclua a equipe após garantir que todos os integrantes foram adicionados às equipes que concedem acesso necessário aos repositórios da organização.

### Dar à equipe de proprietários um novo nome

{% tip %}

   **Observação:** como "administrador" é um termo para integrantes da organização com [acesso específico a determinados repositórios](/articles/repository-permission-levels-for-an-organization) na organização, é recomendável evitar esse termo em nomes de equipe sobre os quais você decide.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. No campo de nome da equipe, escolha um novo nome para a equipe de proprietários. Por exemplo:
    - Se apenas alguns integrantes da organização forem integrantes da equipe de proprietários, você poderá dar à equipe o nome de "Principal".
    - Se todos os integrantes da organização forem integrantes da equipe de proprietários, de modo que eles podem [@mencionar equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), você pode dar à equipe o nome de "Funcionários". ![O campo de nome da equipe, com a equipe de proprietários renomeada para Principal](/assets/images/help/teams/owners-team-new-name.png)
6. Abaixo da descrição da equipe, clique em **Save and continue** (Salvar e continuar). ![O botão Save and continue (Salvar e continuar)](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Como opção, [torne a equipe *pública*](/articles/changing-team-visibility).

### Excluir a equipe de proprietários legada

{% warning %}

**Aviso:** se houver integrantes da equipe de proprietários que não sejam integrantes de outras equipes, excluir a equipe removerá esses integrantes da organização. Antes de excluir a equipe, certifique-se de que os integrantes já sejam integrantes diretos da organização ou que tenham acesso de colaborador aos repositórios necessários.

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. Na parte inferior da página, revise o aviso e clique em **Delete the Owners team** (Excluir a equipe de proprietários). ![Link para excluir a equipe de proprietários](/assets/images/help/teams/owners-team-delete.png)
