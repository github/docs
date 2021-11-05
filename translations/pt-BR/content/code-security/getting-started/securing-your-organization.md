---
title: Protegendo a sua organização
intro: 'Você pode usar uma série de funcionalidades de {% data variables.product.prodname_dotcom %} para ajudar a manter a sua organização protegida.'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Proteger a sua organização
---

## Introdução
Este guia mostra como configurar os recursos de segurança de uma organização. As necessidades de segurança da sua organização são únicas e pode ser que você não precise habilitar todas as funcionalidades de segurança. Para obter mais informações, consulte "[Funcionalidades de segurança de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

Some security features are only available {% ifversion fpt or ghec %}for public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license. {% data reusables.advanced-security.more-info-ghas %}

## Gerenciando o acesso à sua organização

You can use roles to control what actions people can take in your organization. {% if security-managers %}For example, you can assign the security manager role to a team to give them the ability to manage security settings across your organization, as well as read access to all repositories.{% endif %} For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}

## Criando uma política de segurança padrão

Você pode criar uma política de segurança padrão que será exibida em qualquer repositório público da organização que não tenha sua própria política de segurança. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae-issue-4864 or ghec %}
## Gerenciar {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências

{% ifversion fpt or ghec %}By default, {% data variables.product.prodname_dotcom %} detects vulnerabilities in public repositories and generates {% data variables.product.prodname_dependabot_alerts %} and a dependency graph. Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependência de todos os repositórios privados da sua organização.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique em **Habilitar todos** ou **Desabilitar todos** ao lado do recurso que você deseja gerenciar.
5. Opcionalmente, selecione **Habilitar automaticamente para novos repositórios**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)," "[Explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) e "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}

## Gerenciando revisão de dependências

A revisão de dependências permite visualizar alterações de dependência em pull requests antes de serem mescladas nos seus repositórios.
{% ifversion fpt or ghec %}Dependency review is available in all public repositories. Para repositórios privados e internos você precisa de uma licença para {% data variables.product.prodname_advanced_security %}. Para habilitar a revisão de dependências para uma organização, habilite o gráfico de dependências e habilite {% data variables.product.prodname_advanced_security %}.
{% elsif ghes or ghae %}A revisão de dependência está disponível quando o gráfico de dependências estiver habilitado para {% data variables.product.product_location %} e você habilitar {% data variables.product.prodname_advanced_security %} para a organização (veja abaixo).{% endif %}
Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

{% ifversion fpt or ghec %}
## Gerenciar {% data variables.product.prodname_dependabot_security_updates %}

Para qualquer repositório que usar {% data variables.product.prodname_dependabot_alerts %}, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} para abrir pull requests com atualizações de segurança quando forem detectadas vulnerabilidades. Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios da sua organização.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique em **Habilitar todos** ou **Desabilitar todos** ao lado de {% data variables.product.prodname_dependabot_security_updates %}.
5. Opcionalmente, selecione **Habilitar automaticamente para novos repositórios**.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" e "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Gerenciar {% data variables.product.prodname_dependabot_version_updates %}

Você pode habilitar {% data variables.product.prodname_dependabot %} para aumentar automaticamente os pull requests para manter suas dependências atualizadas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar {% data variables.product.prodname_dependabot_version_updates %}, você deve criar um arquivo de configuração *dependabot.yml*. Para obter mais informações, consulte "[Habilitar e desabilitar atualizações da versão](/code-security/supply-chain-security/enabling-and-disabling-version-updates)."

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae or ghec %}
## Gerenciar {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt or ghes > 2.22 or ghec %}
Se sua organização tiver uma licença de {% data variables.product.prodname_advanced_security %}, você poderá habilitar ou desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}.
{% elsif ghae %}
Você pode habilitar ou desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}.
{% endif %}

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique em **Habilitar todos** ou **Desabilitar todos** ao lado de {% data variables.product.prodname_GH_advanced_security %}.
5. Opcionalmente, selecione **Habilitar automaticamente para novos repositórios privados**.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)" e "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

## Configurar o {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} is available {% ifversion fpt or ghec %}for all public repositories, and for private repositories owned by organizations with {% else %}if you have {% endif %}an {% data variables.product.prodname_advanced_security %} license.

Você pode habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} para todos os repositórios na sua organização com {% data variables.product.prodname_advanced_security %} habilitado.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique **Habilitar todos** ou **Desabilitar todos ** ao lado de {% data variables.product.prodname_secret_scanning_caps %} (somente repositórios de {% data variables.product.prodname_GH_advanced_security %}).
5. Opcionalmente, selecione **Habilitar automaticamente para repositórios privados adicionados a {% data variables.product.prodname_advanced_security %}**.

Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% endif %}

## Próximas etapas
{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}You can view, filter, and sort security alerts for repositories owned by your organization in the security overview. Para obter mais informações, consulte "[Sobre a visão geral de segurança](/code-security/security-overview/about-the-security-overview)".{% endif %}

Você pode visualizar e gerenciar alertas de funcionalidades de segurança para resolver dependências e vulnerabilidades no seu código. For more information, see {% ifversion fpt or ghes > 2.22 or ghec %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% ifversion fpt or ghec %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" e " "[Criar uma consultoria de segurança](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
