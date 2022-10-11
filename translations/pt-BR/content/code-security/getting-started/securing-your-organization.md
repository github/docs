---
title: Protegendo a sua organização
intro: 'Você pode usar uma série de funcionalidades de {% data variables.product.prodname_dotcom %} para ajudar a manter a sua organização protegida.'
permissions: Organization owners can configure organization security settings.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### Introdução
Este guia mostra como configurar os recursos de segurança de uma organização. As necessidades de segurança da sua organização são únicas e pode ser que você não precise habilitar todas as funcionalidades de segurança. Para obter mais informações, consulte "[Funcionalidades de segurança de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

Alguns recursos de segurança estão disponíveis apenas {% if currentVersion == "free-pro-team@latest" %}para repositórios públicos, e para repositórios privados pertencentes a organizações com {% else %}se você tiver {% endif %}uma licença de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

### Gerenciando o acesso à sua organização

Você pode usar níveis de permissão para controlar as ações que as pessoas podem tomar na sua organização. Para obter mais informações, consulte "[Níveis de permissão para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### Criando uma política de segurança padrão

Você pode criar uma política de segurança padrão que será exibida em qualquer repositório público da organização que não tenha sua própria política de segurança. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Gerenciar {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências

Por padrão, {% data variables.product.prodname_dotcom %} detecta vulnerabilidades em repositórios públicos e gera {% data variables.product.prodname_dependabot_alerts %} e um gráfico de dependência. Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências para todos os repositórios pertencentes à sua organização.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique em **Habilitar todos** ou **Desabilitar todos** ao lado do recurso que você deseja gerenciar.
5. Opcionalmente, selecione **Habilitar automaticamente para novos repositórios**.

Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)," "[Explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) e "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

### Gerenciando revisão de dependências

A revisão de dependências permite visualizar alterações de dependência em pull requests antes de serem mescladas nos seus repositórios. A revisão de dependência está disponível em todos os repositórios públicos e nos repositórios pertencentes a organizações com uma licença de {% data variables.product.prodname_advanced_security %} que tem o gráfico de dependências habilitado. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Gerenciar {% data variables.product.prodname_dependabot_security_updates %}

Para qualquer repositório que usar {% data variables.product.prodname_dependabot_alerts %}, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} para abrir pull requests com atualizações de segurança quando forem detectadas vulnerabilidades. Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %} para todos os repositórios da sua organização.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique em **Habilitar todos** ou **Desabilitar todos** ao lado de {% data variables.product.prodname_dependabot_security_updates %}.
5. Opcionalmente, selecione **Habilitar automaticamente para novos repositórios**.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" e "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

### Gerenciar {% data variables.product.prodname_dependabot_version_updates %}

Você pode habilitar {% data variables.product.prodname_dependabot %} para aumentar automaticamente os pull requests para manter suas dependências atualizadas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar {% data variables.product.prodname_dependabot_version_updates %}, você deve criar um arquivo de configuração *dependabot.yml*. Para obter mais informações, consulte "[Habilitar e desabilitar atualizações da versão](/code-security/supply-chain-security/enabling-and-disabling-version-updates)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Gerenciar {% data variables.product.prodname_GH_advanced_security %}

Se sua organização tiver uma licença de {% data variables.product.prodname_advanced_security %}, você poderá habilitar ou desabilitar funcionalidades de {% data variables.product.prodname_advanced_security %}.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique em **Habilitar todos** ou **Desabilitar todos** ao lado de {% data variables.product.prodname_GH_advanced_security %}.
5. Opcionalmente, selecione **Habilitar automaticamente para novos repositórios privados**.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)" e "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

### Configurar o {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} está disponível {% if currentVersion == "free-pro-team@latest" %}para todos os repositórios públicos e para repositórios privados pertencentes a organizações com {% else %}se você tiver {% endif %}uma licença de {% data variables.product.prodname_advanced_security %}

Você pode habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %} para todos os repositórios na sua organização com {% data variables.product.prodname_advanced_security %} habilitado.

1. Clique na sua foto de perfil e clique em **Organizações**.
2. Clique em **Configurações** ao lado da sua organização.
3. Clique em **Segurança & análise**.
4. Clique **Habilitar todos** ou **Desabilitar todos ** ao lado de {% data variables.product.prodname_secret_scanning_caps %} (somente repositórios de {% data variables.product.prodname_GH_advanced_security %}).
5. Opcionalmente, selecione **Habilitar automaticamente para repositórios privados adicionados a {% data variables.product.prodname_advanced_security %}**.

Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% endif %}

### Próximas etapas
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" %}Você pode visualizar, filtrar e organizar alertas de segurança em repositórios pertencentes à sua organização na visão geral de segurança. Para obter mais informações, consulte "[Explorar alertas de segurança](/code-security/security-overview/exploring-security-alerts)".{% endif %}

Você pode visualizar e gerenciar alertas de funcionalidades de segurança para resolver dependências e vulnerabilidades no seu código. Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} "[Visualizar e atualizar dependências vulneráveis no seu repositório](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),{% endif %} {% if currentVersion == "free-pro-team@latest" %}"[Gerenciar pull requests para atualizações de dependência](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}"[Gerenciar {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" e "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}Se você tiver uma vulnerabilidade de segurança, você poderá criar uma consultoria de segurança para discutir em privado e corrigir a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" e " "[Criar uma consultoria de segurança](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
