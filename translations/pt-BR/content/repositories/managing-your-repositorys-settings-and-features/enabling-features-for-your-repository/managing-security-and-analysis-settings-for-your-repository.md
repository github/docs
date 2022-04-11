---
title: Gerenciando as configurações de segurança e análise do seu repositório
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
shortTitle: Segurança & análise
---

{% ifversion fpt or ghec %}
## Habilitar ou desabilitar funcionalidades de segurança e análise para repositórios públicos

É possível gerenciar um subconjunto de recursos de segurança e análise para repositórios públicos. Outros recursos são habilitados permanentemente, incluindo gráfico de dependências e varredura de segredo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Segurança e análise de código", à direita do recurso, clique em **Habilitar** ou **Desabilitar**.{% ifversion fpt %} !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-public.png){% elsif ghec %}
!["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-public.png){% endif %}
{% endif %}

## Habilitar ou desabilitar os recursos de segurança e análise{% ifversion fpt or ghec %} para repositórios privados{% endif %}

Você pode administrar as funcionalidades de segurança e análise para o seu repositório{% ifversion fpt or ghec %}privado ou interno {% endif %}.{% ifversion ghes or ghec %} Se a sua organização pertencer a uma empresa que tem uma licença para {% data variables.product.prodname_GH_advanced_security %}, haverá opções adicionais disponíveis. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %} As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %} têm opções adicionais disponíveis. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% ifversion fpt or ghes or ghec %}
4. Em "Código de segurança e análise" à direita do recurso, clique em **Desabilitar ** ou **Habilitar **. {% ifversion not fpt %}O controle para "{% data variables.product.prodname_GH_advanced_security %}" está desabilitado se a sua empresa não tiver licenças disponíveis para {% data variables.product.prodname_advanced_security %}.{% endif %}{% ifversion fpt %} !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.2 %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% else %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}

  {% ifversion not fpt %}
  {% note %}

  **Observação:** Se você desabilitar {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}revisão de dependência, {% endif %}{% data variables.product.prodname_secret_scanning %} e {% data variables.product.prodname_code_scanning %} ficarão desabilitados. Todos os fluxos de trabalho, uploads de SARIF, ou chamadas de API para {% data variables.product.prodname_code_scanning %} falharão.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghes = 3.0 %}
4. Em "Código de segurança e análise" à direita do recurso, clique em **Desabilitar ** ou **Habilitar **. ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" ](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% ifversion ghae %}
4. Em "Código de segurança e análise" à direita do recurso, clique em **Desabilitar ** ou **Habilitar **. Antes de poder habilitar "{% data variables.product.prodname_secret_scanning %}" no seu repositório, talvez seja necessário habilitar {% data variables.product.prodname_GH_advanced_security %}. ![Habilite ou desabilite {% data variables.product.prodname_GH_advanced_security %} ou {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

## Conceder acesso aos alertas de segurança

Os alertas de segurança de um repositório são visíveis para pessoas com acesso de administrador ao repositório e quando o repositório pertencer a uma organização ou aos proprietários da organização. Você pode dar acesso aos alertas a outras equipes e pessoas.

{% note %}

Os proprietários da organização e os administradores do repositório só podem conceder acesso para ver os alertas de segurança como, por exemplo, alertas de {% data variables.product.prodname_secret_scanning %} para pessoas ou equipes que têm acesso de gravação no repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Acesso aos alertas", no campo de pesquisa, comece a digitar o nome da pessoa ou equipe que você gostaria de encontrar e, em seguida, clique em um nome na lista de correspondências.
   {% ifversion fpt or ghec or ghes > 3.2 %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% ifversion ghes < 3.3 %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/enterprise/3.2/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% ifversion ghae %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png)
   {% endif %}

5. Clique em **Save changes** (Salvar alterações).
   {% ifversion fpt or ghes > 3.2 or ghec %}
   ![Botão de "Salvar as alterações" para alterações nas configurações do alerta de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
   {% ifversion ghes < 3.3 %}
   ![Botão de "Salvar as alterações" para alterações nas configurações do alerta de segurança](/assets/images/enterprise/3.2/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
   {% ifversion ghae %}
   ![Botão de "Salvar as alterações" para alterações nas configurações do alerta de segurança](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png)
   {% endif %}

## Remover o acesso aos alertas de segurança

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Acesso aos alertas", à direita da pessoa ou da equipe cujo acesso você deseja remover, clique em {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes > 3.2 %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% ifversion ghes < 3.3 %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/enterprise/3.2/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% ifversion ghae %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png)
   {% endif %}
  5. Clique em **Save changes** (Salvar alterações).

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Gerenciando configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
