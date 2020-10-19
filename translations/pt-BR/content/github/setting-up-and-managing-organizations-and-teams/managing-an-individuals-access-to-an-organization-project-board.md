---
title: Gerenciar o acesso de um indivíduo a um quadro de projeto da organização
intro: 'Como proprietário da organização ou administrador de quadro de projeto, você pode gerenciar o acesso de um integrante individual a um quadro de projeto pertencente à sua organização.'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Observação:** {% data reusables.project-management.cascading-permissions %} para obter mais informações, consulte "[Permissões do quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% endnote %}

### Conceder a um integrante da organização acesso a um quadro de projeto

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. Em "Pesquisar por nome de usuário, nome completo ou endereço de e-mail", digite o nome do colaborador, nome de usuário, ou
e-mail de {% data variables.product.prodname_dotcom %}.
   ![A seção Collaborators (Colaboradores) com o nome de usuário Octocat inserido no campo de pesquisa](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

### Alterar o acesso de um integrante da organização a um quadro de projeto

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

### Remover o acesso de um integrante da organização a um quadro de projeto

Quando você remove um colaborador de um quadro de projeto, a pessoa ainda pode ter acesso ao quadro com base nas permisões que tem para outras funções. Para remover completamente o acesso ao quadro de projeto, você deve remover o acesso à cada função que a pessoa tem. Por exemplo, uma pessoa pode ter acesso ao quadro de projeto como integrante de uma organização ou equipe. Para obter mais informações, consulte "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

### Leia mais

- "[Permissões de quadro de projeto para uma organização](/articles/project-board-permissions-for-an-organization)"
