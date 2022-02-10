---
title: Gerenciando os gerentes de segurança da sua organização
intro: Você pode conceceder à sua equipe de segurança o acesso mínimo necessário à sua organização atribuindo uma equipe à função de gerente de segurança.
versions:
  fpt: '*'
  ghes: '>=3.3'
  feature: security-managers
topics:
  - Organizations
  - Teams
shortTitle: Função de gerente de segurança
permissions: Organization owners can assign the security manager role.
---

{% data reusables.organizations.security-manager-beta-note %}

{% data reusables.organizations.about-security-managers %}

## Permissões para a função de gerente de segurança

Os integrantes de uma equipe com a função de gerente de segurança só têm as permissões necessárias para gerenciar efetivamente a segurança da organização.

- Acesso de leitura em todos os repositórios da organização, além de acesso a qualquer repositório existente
- Acesso de gravação em todos os alertas de segurança na organização {% ifversion not fpt %}
- Acesso à visão geral de segurança da organização {% endif %}
- A habilidade de configurar as configurações de segurança no nível da organização{% ifversion not fpt %}, incluindo a capacidade de habilitar ou desabilitar {% data variables.product.prodname_GH_advanced_security %}{% endif %}
- A habilidade de configurar as configurações de segurança no nível{% ifversion not fpt %}do repositório, incluindo a habilidade de habilitar ou desabilitar {% data variables.product.prodname_GH_advanced_security %}{% endif %}

{% ifversion fpt %}
Funcionalidades adicionais, incluindo uma visão geral de segurança para a organização, estão disponíveis em organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %}. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
{% endif %}

Se uma equipe tiver a função de gerente de segurança, as pessoas com acesso de administrador à equipe e um repositório específico poderão alterar o nível de acesso da equipe a esse repositório, mas não poderão remover o acesso. Para obter mais informações, consulte "[Gerenciando o acesso da equipe ao repositório de uma organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository){% ifversion ghes %}."{% else %} e "[Gerenciando as equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)."{% endif %}

  ![Gerenciar a interface do usuário do repositório com gerentes de segurança](/assets/images/help/organizations/repo-access-security-managers.png)

## Atribuindo a função de gerente de segurança a uma equipe da sua organização
É possível atribuir a função de gerente de segurança a, no máximo, 10 equipes na sua organização.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Sob **Gerentes de Segurança**, procure e selecione a equipe para conceder a função. Cada equipe que você selecionar aparecerá em uma lista abaixo da barra de pesquisa. ![Adicionar gerente de segurança](/assets/images/help/organizations/add-security-managers.png)
## Removendo a função de gerente de segurança de uma equipe da sua organização

{% warning %}

**Aviso:** A remoção da função de gerente de segurança de uma equipe removerá a capacidade da equipe de gerenciar alertas de segurança e configurações em toda a organização, mas a equipe manterá o acesso de leitura aos repositórios que foram concedidos quando a função foi atribuída. Você precisa remover qualquer acesso de leitura indesejado manualmente. Para obter mais informações, consulte "[Managing team access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository#removing-a-teams-access-to-a-repository)."

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
1. Em **Gerentes de segurança**, à direita da equipe que você deseja remover como gerentes de segurança, clique em {% octicon "x" aria-label="The X icon" %}. ![Remover gerentes de segurança](/assets/images/help/organizations/remove-security-managers.png)
