---
title: Gerenciando as configurações de segurança e análise do seu repositório
intro: 'Você pode controlar recursos que protegem e analisam o código em seu projeto no {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
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
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" em um repositório público](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

## Habilitar ou desabilitar os recursos de segurança e análise{% ifversion fpt or ghec %} para repositórios privados{% endif %}

You can manage the security and analysis features for your {% ifversion fpt or ghec %}private or internal {% endif %}repository.{% ifversion fpt or ghes or ghec %} If your organization belongs to an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %} then extra options are available. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% ifversion fpt or ghes > 3.0 or ghec %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% ifversion fpt or ghec %} !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png){% else %}
!["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  {% note %}

  **Note:** If you disable {% data variables.product.prodname_GH_advanced_security %}, {% ifversion fpt or ghec %}dependency review, {% endif %}{% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_code_scanning %} are disabled. Todos os fluxos de trabalho, uploads de SARIF, ou chamadas de API para {% data variables.product.prodname_code_scanning %} falharão.
  {% endnote %}
  {% endif %}
  {% ifversion ghes = 3.0 %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" ](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% ifversion ghae %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. Antes de poder habilitar "{% data variables.product.prodname_secret_scanning %}" no seu repositório, talvez seja necessário habilitar {% data variables.product.prodname_GH_advanced_security %}. ![Habilite ou desabilite {% data variables.product.prodname_GH_advanced_security %} ou {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

## Conceder acesso aos alertas de segurança

Depois de habilitar alertas de {% ifversion not ghae %}{% data variables.product.prodname_dependabot %} ou {% endif %}{% data variables.product.prodname_secret_scanning %} de um repositório na organização, os proprietários da organização e administradores de repositórios poderão visualizar os alertas por padrão. Você pode dar acesso a outras equipes e pessoas aos alertas de um repositório.

{% note %}

Os proprietários da organização e os administradores do repositório só podem conceder acesso para ver os alertas de segurança como, por exemplo, alertas de {% data variables.product.prodname_secret_scanning %} para pessoas ou equipes que têm acesso de gravação no repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Acesso aos alertas", no campo de pesquisa, comece a digitar o nome da pessoa ou equipe que você gostaria de encontrar e, em seguida, clique em um nome na lista de correspondências.
   {% ifversion fpt or ghec %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% ifversion ghes %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png)
   {% endif %}

5. Clique em **Save changes** (Salvar alterações).
   {% ifversion fpt or ghes or ghec %}
   ![Botão de "Salvar as alterações" para alterações nas configurações do alerta de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
    {% ifversion ghae %}
   ![Botão de "Salvar as alterações" para alterações nas configurações do alerta de segurança](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png)
   {% endif %}

## Remover o acesso aos alertas de segurança

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Acesso aos alertas", à direita da pessoa ou da equipe cujo acesso você deseja remover, clique em {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% ifversion ghes %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png)
   {% endif %}

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Gerenciando configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
