---
title: Proteger o repositório
intro: 'Você pode usar uma série de funcionalidades de {% data variables.product.prodname_dotcom %} para ajudar a manter seu repositório protegido.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### Introdução
Este guia mostra como configurar as funcionalidades de segurança para um repositório. Você deve ser um administrador ou proprietário da organização do repositório para definir as configurações de segurança para um repositório.

As suas necessidades de segurança são únicas para o seu repositório. Portanto, talvez não seja necessário habilitar todos os recursos para o seu repositório. Para obter mais informações, consulte "[Funcionalidades de segurança de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

Alguns recursos de segurança estão disponíveis apenas {% if currentVersion == "free-pro-team@latest" %}para repositórios públicos, e para repositórios privados pertencentes a organizações com {% else %}se você tiver {% endif %}uma licença de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}

### Fixar um problema no repositório

O primeiro passo para proteger um repositório é configurar quem pode ver e modificar o seu código. Para obter mais informações, consulte "[Gerenciar configurações do repositório](/github/administering-a-repository/managing-repository-settings)".

Na página principal do seu repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}configurações**e, em seguida, desça a barra de rolagem até a "Zona de perigo".

- Para alterar quem pode visualizar seu repositório, clique em **Alterar a visibilidade**. Para obter mais informações, consulte "[Configurar a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)."{% if currentVersion == "free-pro-team@latest" %}
- Para alterar quem pode acessar o seu repositório e ajustar as permissões, clique em **Gerenciar acesso**. Para obter mais informações, consulte[Gerenciar equipes e pessoas com acesso ao seu repositório](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
### Definir uma política de segurança

1. Na página principal do repositório, clique em **{% octicon "shield" aria-label="The shield symbol" %} Segurança**.
2. Clique em **Política de segurança**.
3. Clique em **Start setup** (Iniciar configuração).
4. Adicione informações sobre versões compatíveis do seu projeto e como relatar vulnerabilidades.

Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Gerenciar o gráfico de dependências

O gráfico de dependência é gerado automaticamente para {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} repositórios públicos e você pode optar por habilitá-lo para repositórios privados.{% else %} todos os repositórios.{% endif %}

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %} Configurações**.
2. Clique em **Segurança & análise**.
3. Ao lado do gráfico de dependência, clique em **Habilitar ** ou **Desabilitar**.

Para obter mais informações, consulte "[Explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### Gerenciar {% data variables.product.prodname_dependabot_alerts %}

Por padrão, {% data variables.product.prodname_dotcom %} detecta vulnerabilidades em repositórios públicos e gera {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.prodname_dependabot_alerts %} também podem ser habilitado para repositórios privados.

1. Clique na foto do seu perfil e clique em **Configurações**.
2. Clique em **Segurança & análise**.
3. Clique em **Habilitar todos** ao lado de {% data variables.product.prodname_dependabot_alerts %}.

Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% if currentVersion == "free-pro-team@latest" %}" e[Gerenciar as configurações de segurança e análise da sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
### Gerenciando revisão de dependências

A revisão de dependências permite que você visualize as alterações de dependência em pull requests antes de serem mescladas no seu repositório. A revisão de dependência está disponível em todos os repositórios públicos e nos repositórios pertencentes a organizações com uma licença de {% data variables.product.prodname_advanced_security %} que tem o gráfico de dependências habilitado. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Gerenciar {% data variables.product.prodname_dependabot_security_updates %}

Para qualquer repositório que usar {% data variables.product.prodname_dependabot_alerts %}, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} para abrir pull requests com atualizações de segurança quando forem detectadas vulnerabilidades.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança & análise**.
3. Próximo a {% data variables.product.prodname_dependabot_security_updates %}, clique em **Habilitar**.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" e "[Configurando {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)".

### Gerenciar {% data variables.product.prodname_dependabot_version_updates %}

Você pode habilitar {% data variables.product.prodname_dependabot %} para aumentar automaticamente os pull requests para manter suas dependências atualizadas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar {% data variables.product.prodname_dependabot_version_updates %}, você deve criar um arquivo de configuração *dependabot.yml*. Para obter mais informações, consulte "[Habilitar e desabilitar atualizações da versão](/code-security/supply-chain-security/enabling-and-disabling-version-updates)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Configurar o {% data variables.product.prodname_code_scanning %};

{% data variables.product.prodname_code_scanning_capc %} está disponível {% if currentVersion == "free-pro-team@latest" %}para todos os repositórios públicos e para repositórios privados pertencentes a organizações com {% else %} para repositórios pertencentes a organização se você tiver {% endif %}uma licença {% data variables.product.prodname_advanced_security %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para identificar automaticamente vulnerabilidades e erros no código armazenado no seu repositório usando uma ferramenta de {% data variables.product.prodname_codeql_workflow %} ou de terceiros. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

### Configurar o {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} está disponível {% if currentVersion == "free-pro-team@latest" %}para todos os repositórios públicos e para repositórios privados pertencentes a organizações com {% else %} para repositórios pertencentes a organização, se você tiver {% endif %}uma licença de {% data variables.product.prodname_advanced_security %}.

{% data variables.product.prodname_secret_scanning_caps %} pode ser habilitado para seu repositório por padrão dependendo das configurações da sua organização.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança & análise**.
3. Se {% data variables.product.prodname_GH_advanced_security %} não estiver habilitado, clique em **Habilitar**.
4. Próximo a {% data variables.product.prodname_secret_scanning_caps %}, clique em **Habilitar**.

{% endif %}

### Próximas etapas
Você pode visualizar e gerenciar alertas de funcionalidades de segurança para resolver dependências e vulnerabilidades no seu código. Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} "[Visualizar e atualizar dependências vulneráveis no seu repositório](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),{% endif %} {% if currentVersion == "free-pro-team@latest" %}"[Gerenciar pull requests para atualizações de dependência](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}"[Gerenciar {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" e "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% if currentVersion == "free-pro-team@latest" %}Se você tiver uma vulnerabilidade de segurança, você poderá criar uma consultoria de segurança para discutir em privado e corrigir a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" e " "[Criar uma consultoria de segurança](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
