---
title: Configuring automated security updates
intro: Você pode usar pull request automatizadas ou manuais para atualizar facilmente dependências vulneráveis.
redirect_from:
  - /articles/configuring-automated-security-fixes
  - /github/managing-security-vulnerabilities/configuring-automated-security-fixes
versions:
  free-pro-team: '*'
---

### About automated security updates

You can enable automated security updates for any repository that uses security alerts and the dependency graph. You can disable automated security updates for an individual repository or for all repositories owned by your user account or organization.

When you receive a security alert about a vulnerable dependency in your repository, you can resolve the vulnerability using an automated security update in a pull request that corresponds to the security alert. Automated security updates are available in repositories that use the dependency graph. Por padrão, o {% data variables.product.prodname_dotcom %} cria automaticamente uma pull request no repositório de modo a atualizar a dependência vulnerável para a menor versão segura necessária para evitar a vulnerabilidade. Se preferir, você pode desabilitar as pull requests automáticas e criá-las manualmente para atualizar dependências somente quando for conveniente.

As solicitações de segurança automatizadas contêm tudo o que você precisa para fazer a revisão e o merge de modo rápido e seguro de uma correção proposta no seu projeto, incluindo informações sobre a vulnerabilidade, como notas de versão, entradas no log de mudanças e detalhes do commit.

Automated security updates are opened by Dependabot on behalf of {% data variables.product.prodname_dotcom %}. The Dependabot {% data variables.product.prodname_github_app %} is automatically installed on every repository where automated security updates are enabled.

As pessoas com acesso aos alertas de segurança do seu repositório verão um link para o alerta de segurança relevante, embora outras pessoas com acesso à pull request não possam ver qual vulnerabilidade a pull request resolve.

When you merge a pull request that contains an automated security update, the corresponding security alert is marked as resolved for your repository.

{% note %}

**Note:** Automated security updates resolve security vulnerabilities only. Automated security updates are not created to resolve vulnerabilities in private registries or packages hosted in private repositories.

{% endnote %}

### Supported repositories

{% data variables.product.prodname_dotcom %} automatically enables automated security updates for every repository that meets these requirements.

{% note %}

**Note**: For repositories created before November 2019, {% data variables.product.prodname_dotcom %} has automatically enabled automated security updates if the repository meets the following criteria and has received at least one push since May 23, 2019.

{% endnote %}

| Requirement                                                                                                                                                                                                          | More information                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Repository is not a fork                                                                                                                                                                                             | "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)"                                                                                                                                               |
| Repository is not archived                                                                                                                                                                                           | "[Archiving repositories](/github/creating-cloning-and-archiving-repositories/archiving-repositories)"                                                                                                                         |
| Repository is public, or repository is private and you have enabled read-only analysis by {% data variables.product.prodname_dotcom %}, dependency graph, and vulnerability alerts in the repository's settings | "[Opting into data use for your private repository](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)" |
| Repository contains dependency manifest file from a package ecosystem that {% data variables.product.prodname_dotcom %} supports                                                                                | "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"                                                               |
| Automated security updates are not disabled for the repository                                                                                                                                                       | "[Managing automated security updates for your repository](#managing-automated-security-updates-for-your-repository)"                                                                                                          |
| Repository is not already using an integration for dependency management                                                                                                                                             | "[Sobre integrações](/github/customizing-your-github-workflow/about-integrations)"                                                                                                                                             |

If automated security updates are not enabled for your repository and you don't know why, you can [contact support](https://support.github.com/contact).

### Sobre pontuações de compatibilidade

Automated security updates also include compatibility scores to let you know whether updating a vulnerability could cause breaking changes to your project. We look at previously-passing CI tests from public repositories where we've generated a given automated security update to learn whether the update causes tests to fail. Uma pontuação de compatibilidade da atualização é a porcentagem de execuções de CI que foram aprovadas durante a atualização entre versões relevantes da dependência.

### Managing automated security updates for your repository

You can enable or disable automated security updates for an individual repository.

Automated security updates require specific repository settings. For more information, see "[Supported repositories](#supported-repositories)."

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
4. Above the list of alerts, use the drop-down menu and select or unselect **Automated security updates**. ![Drop-down menu with the option to enable automated security updates](/assets/images/help/repository/enable-automated-security-updates-drop-down.png)

### Managing automated security updates for your user account

You can disable automated security updates for all repositories owned by your user account. If you do, you can still enable automated security updates for individual repositories owned by your user account.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Managing automated security updates for your organization

Organization owners can disable automated security updates for all repositories owned by the organization. If you do, anyone with admin permissions to an individual repository owned by the organization can still enable automated security updates on that repository.

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.repositories.opt-out-automated-security-updates %}

### Leia mais

- "[Sobre alertas de segurança para dependências vulneráveis](/articles/about-security-alerts-for-vulnerable-dependencies)"
- "[Opting into data use for your private repository](/github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository#opting-into-data-use-for-your-private-repository)"
- "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on#supported-package-ecosystems)"
