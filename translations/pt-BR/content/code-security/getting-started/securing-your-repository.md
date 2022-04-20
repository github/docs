---
title: Proteger o repositório
intro: 'Você pode usar uma série de funcionalidades de {% data variables.product.prodname_dotcom %} para ajudar a manter seu repositório protegido.'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: Proteja seu repositório
---

## Introdução
Este guia mostra como configurar as funcionalidades de segurança para um repositório. Você deve ser um administrador ou proprietário da organização do repositório para definir as configurações de segurança para um repositório.

As suas necessidades de segurança são únicas para o seu repositório. Portanto, talvez não seja necessário habilitar todos os recursos para o seu repositório. Para obter mais informações, consulte "[Funcionalidades de segurança de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% data reusables.advanced-security.security-feature-availability %}

## Fixar um problema no repositório

O primeiro passo para proteger um repositório é configurar quem pode ver e modificar o seu código. Para obter mais informações, consulte "[Gerenciar configurações do repositório](/github/administering-a-repository/managing-repository-settings)".

Na página principal do seu repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}configurações**e, em seguida, desça a barra de rolagem até a "Zona de perigo".

- Para alterar quem pode visualizar seu repositório, clique em **Alterar a visibilidade**. Para obter mais informações, consulte "[Configuração da visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
- Para alterar quem pode acessar o seu repositório e ajustar as permissões, clique em **Gerenciar acesso**. Para obter mais informações, consulte[Gerenciar equipes e pessoas com acesso ao seu repositório](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

## Definir uma política de segurança

1. Na página principal do repositório, clique em **{% octicon "shield" aria-label="The shield symbol" %} Segurança**.
2. Clique em **Política de segurança**.
3. Clique em **Start setup** (Iniciar configuração).
4. Adicione informações sobre versões compatíveis do seu projeto e como relatar vulnerabilidades.

Para obter mais informações, consulte "[Adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## Gerenciar o gráfico de dependências

{% ifversion fpt or ghec %}
O gráfico de dependências é gerado automaticamente para todos os repositórios públicos e você pode optar por habilitá-lo para repositórios privados. Ele interpreta o manifesto e os arquivos de bloqueio em um repositório para identificar dependências.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %} Configurações**.
2. Clique em **Segurança & análise**.
3. Ao lado do gráfico de dependência, clique em **Habilitar ** ou **Desabilitar**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obter mais informações, consulte "[Explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## Gerenciar {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} são gerados quando {% data variables.product.prodname_dotcom %} identifica uma dependência no gráfico de dependências com uma vulnerabilidade. {% ifversion fpt or ghec %}Você pode habilitar {% data variables.product.prodname_dependabot_alerts %} para qualquer repositório.{% endif %}

{% ifversion fpt or ghec %}
1. Clique na foto do seu perfil e clique em **Configurações**.
2. Clique em **Segurança & análise**.
3. Clique em **Habilitar todos** ao lado de {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}" e "[Gerenciando configurações de segurança e análise da sua conta pessoal](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}".

{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
## Gerenciando revisão de dependências

A revisão de dependências permite visualizar alterações de dependência em pull requests antes de serem mescladas nos seus repositórios. Para obter mais informações, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

A revisão de dependência é um recurso de {% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt or ghec %}A revisão de Dependência já está habilitada para todos os repositórios públicos. {% ifversion fpt %}As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %} podem habilitar a revisão de dependências adicionalmente para repositórios privados e internos. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}Para habilitar a revisão de dependências para um repositório {% ifversion ghec %}privado ou interno {% endif %}, assegure que o gráfico de dependências esteja habilitado e habilite {% data variables.product.prodname_GH_advanced_security %}.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança & análise**.
3. {% ifversion ghec %}Se o gráfico de dependências não estiver habilitado, clique em **Ativar**.{% elsif ghes or ghae %}Verifique se o gráfico de dependências está configurado para a sua empresa.{% endif %}
4. Se {% data variables.product.prodname_GH_advanced_security %} não estiver habilitado, clique em **Habilitar**.

{% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}

## Gerenciar {% data variables.product.prodname_dependabot_security_updates %}

Para qualquer repositório que usar {% data variables.product.prodname_dependabot_alerts %}, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} para abrir pull requests com atualizações de segurança quando forem detectadas vulnerabilidades.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança & análise**.
3. Próximo a {% data variables.product.prodname_dependabot_security_updates %}, clique em **Habilitar**.

Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" e "[Configurando {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)".

## Gerenciar {% data variables.product.prodname_dependabot_version_updates %}

Você pode habilitar {% data variables.product.prodname_dependabot %} para aumentar automaticamente os pull requests para manter suas dependências atualizadas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

Para habilitar {% data variables.product.prodname_dependabot_version_updates %}, você deve criar um arquivo de configuração *dependabot.yml*. Para obter mais informações, consulte "[Configurando as atualizações da versão de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".

{% endif %}

## Configurar o {% data variables.product.prodname_code_scanning %};

Você pode configurar {% data variables.product.prodname_code_scanning %} para identificar automaticamente vulnerabilidades e erros no código armazenado no seu repositório usando uma ferramenta de {% data variables.product.prodname_codeql_workflow %} ou de terceiros. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data variables.product.prodname_code_scanning_capc %} está disponível {% ifversion fpt or ghec %}para todos os repositórios públicos e para os repositórios privados pertencentes a organizações que fazem parte de uma empresa com uma licença para {% else %}repositórios pertencentes a organização, se a empresa usar {% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## Configurar o {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} está {% ifversion fpt or ghec %}habilitado para todos os repositórios públicos e está disponível para repositórios privados pertencentes a organizações que fazem parte de uma empresa com uma licença para {% else %}disponível para repositórios de propriedade da organização se a empresa usar {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}{% data variables.product.prodname_secret_scanning_caps %} pode já estar habilitado para o repositório, dependendo das configurações da sua organização.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança & análise**.
3. Se {% data variables.product.prodname_GH_advanced_security %} não estiver habilitado, clique em **Habilitar**.
4. Próximo a {% data variables.product.prodname_secret_scanning_caps %}, clique em **Habilitar**.
{% endif %}

## Próximas etapas
Você pode visualizar e gerenciar alertas de funcionalidades de segurança para resolver dependências e vulnerabilidades no seu código. Para obter mais informações, consulte {% ifversion fpt or ghes or ghec %} "[Visualizando {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}"[Gerenciando pull requests para atualizações de dependências](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates), {% endif %}"[Gerenciando {% data variables.product.prodname_code_scanning %} para o seu repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" e "[Gerenciando alertas de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}Se você tiver uma vulnerabilidade de segurança, você poderá criar uma consultoria de segurança para discutir em privado e corrigir a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)" e " "[Criar uma consultoria de segurança](/code-security/security-advisories/creating-a-security-advisory)".
{% endif %}
