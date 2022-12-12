---
title: Gerenciando as configurações de segurança e análise do repositório
intro: 'Você pode controlar recursos que protegem e analisam o código em seu projeto no {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108012'
---
{% ifversion fpt or ghec %}
## Habilitar ou desabilitar funcionalidades de segurança e análise para repositórios públicos

É possível gerenciar um subconjunto de recursos de segurança e análise para repositórios públicos. Outros recursos são habilitados permanentemente, incluindo gráfico de dependências e varredura de segredo.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Segurança e análise de código", à direita do recurso, clique em **Desabilitar** ou **Habilitar**.
  ![Botão "Habilitar" ou "Desabilitar" para recursos de "Configurar segurança e análise" em um repositório público](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## Como habilitar ou desabilitar recursos de segurança e análise{% ifversion fpt or ghec %} em repositórios privados{% endif %}

Você pode administrar as funcionalidades de segurança e análise para o seu repositório{% ifversion fpt or ghec %}privado ou interno {% endif %}.{% ifversion ghes or ghec %} Se a sua organização pertencer a uma empresa que tem uma licença para {% data variables.product.prodname_GH_advanced_security %}, haverá opções adicionais disponíveis. {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} com o {% data variables.product.prodname_advanced_security %} têm opções adicionais disponíveis. Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. Em "Segurança e análise de código", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. {% ifversion not fpt %}O controle do "{% data variables.product.prodname_GH_advanced_security %}" será desabilitado se a empresa não tiver licenças disponíveis do {% data variables.product.prodname_advanced_security %}.{% endif %}{% ifversion fpt %} ![Captura de tela do botão "Habilitar" ou "Desabilitar" dos recursos em "Configurar segurança e análise"](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Captura de tela do botão "Habilitar" ou "Desabilitar" dos recursos em "Configurar segurança e análise"](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![Botão "Habilitar" ou "Desabilitar" dos recursos em "Configurar segurança e análise"](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %} {% note %}

  **Observação:** se você desabilitar o {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}a revisão de dependência, {% endif %}a {% data variables.product.prodname_secret_scanning %} e a {% data variables.product.prodname_code_scanning %} ficarão desabilitados. Todos os fluxos de trabalho, uploads de SARIF, ou chamadas de API para {% data variables.product.prodname_code_scanning %} falharão.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. Em "Segurança e análise de código", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. Antes de poder habilitar "{% data variables.product.prodname_secret_scanning %}" no seu repositório, talvez seja necessário habilitar {% data variables.product.prodname_GH_advanced_security %}.
   ![Habilite ou desabilite o {% data variables.product.prodname_GH_advanced_security %} ou a {% data variables.product.prodname_secret_scanning %} no seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## Permitir acesso a alertas de segurança

Os alertas de segurança de um repositório são visíveis para pessoas com acesso de administrador ao repositório e quando o repositório pertencer a uma organização ou aos proprietários da organização. Você pode dar acesso aos alertas a outras equipes e pessoas.

{% note %}

Os proprietários da organização e os administradores do repositório só podem conceder acesso para ver os alertas de segurança como, por exemplo, alertas de {% data variables.product.prodname_secret_scanning %} para pessoas ou equipes que têm acesso de gravação no repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Acesso aos alertas", no campo de pesquisa, comece a digitar o nome da pessoa ou equipe que você gostaria de encontrar e, em seguida, clique em um nome na lista de correspondências.
   {% ifversion fpt or ghec or ghes %} ![Campo de pesquisa para permitir acesso de pessoas ou equipes a alertas de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) {% endif %}
   
   {% ifversion ghae %} ![Campo de pesquisa para permitir acesso de pessoas ou equipes a alertas de segurança](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) {% endif %}
   
5. Clique em **Salvar alterações**.
   {% ifversion fpt or ghes or ghec %} ![Botão "Salvar alterações" para alterações nas configurações de alerta de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) {% endif %}
   
   {% ifversion ghae %} ![Botão "Salvar alterações" para alterações nas configurações de alerta de segurança](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) {% endif %}

## Remover o acesso aos alertas de segurança

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Acesso aos alertas", à direita da pessoa ou da equipe cujo acesso você deseja remover, clique em {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes %}  
   ![Botão "x" para remover o acesso de alguém aos alertas de segurança do repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) {% endif %}
   
   {% ifversion ghae %} ![Botão "x" para remover o acesso de alguém aos alertas de segurança do repositório](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) {% endif %}
  5. Clique em **Salvar alterações**.

## Leitura adicional

- "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
