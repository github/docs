---
title: Gerenciar as configurações de segurança e análise para a sua conta pessoal
intro: 'Você pode controlar recursos que protegem e analisam o código nos seus projetos no {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Gerenciar segurança & análise
---

## Sobre a gestão de configurações de segurança e análise

O {% data variables.product.prodname_dotcom %} pode ajudar a proteger seus repositórios. Este tópico diz como você pode gerenciar as funcionalidades de segurança e análise de todos os seus repositórios existentes ou novos.

Você ainda pode gerenciar os recursos de segurança e análise para repositórios individuais. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

Você também pode rever o registro de segurança de todas as atividades da sua conta pessoal. Para obter mais informações, consulte "[Revisar o log de segurança](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

Para obter uma visão geral da segurança do repositório, consulte "[Proteger seu repositório](/code-security/getting-started/securing-your-repository). "

## Habilitar ou desabilitar recursos para repositórios existentes

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Em "Código de segurança e análise" à direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**.
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Opcionalmente, habilite o recurso por padrão para novos repositórios que você possui.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Clique em **Desabilitar RECURSO** ou **Habilitar RECURSO** para habilitar ou desabilitar o recurso para todos os repositórios que você possui.
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Habilitar ou desabilitar recursos para novos repositórios

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Na opção "Código de segurança e análise", à direita do recurso, habilite ou desabilite o recurso por padrão para novos repositórios que você possui.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Leia mais

- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Manter suas dependências atualizadas automaticamente](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
