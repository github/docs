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
shortTitle: Secure your repository
ms.openlocfilehash: c4552bc8ef49752567c5ed4f592de677d8e2a40f
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113878'
---
## Introdução
Este guia mostra como configurar as funcionalidades de segurança para um repositório. Você deve ser um administrador ou proprietário da organização do repositório para definir as configurações de segurança para um repositório.

As suas necessidades de segurança são únicas para o seu repositório. Portanto, talvez não seja necessário habilitar todos os recursos para o seu repositório. Para obter mais informações, confira "[Recursos de segurança do {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features)".

{% data reusables.advanced-security.security-feature-availability %}

## Fixar um problema no repositório

O primeiro passo para proteger um repositório é configurar quem pode ver e modificar o seu código. Para obter mais informações, confira "[Como gerenciar as configurações do repositório](/github/administering-a-repository/managing-repository-settings)".

Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações** e role a página para baixo até a "Zona de Perigo".

- Para alterar as pessoas que podem ver seu repositório, clique em **Alterar visibilidade**. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
- Para alterar as pessoas que podem acessar seu repositório e ajustar as permissões, clique em **Gerenciar acesso**. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)".{% endif %}

## Definir uma política de segurança

1. Na página principal do repositório, clique em **{% octicon "shield" aria-label="The shield symbol" %} Segurança**.
2. Clique em **Política de segurança**.
3. Clique em **Iniciar instalação**.
4. Adicione informações sobre versões compatíveis do seu projeto e como relatar vulnerabilidades.

Para obter mais informações, confira "[Como adicionar uma política de segurança ao seu repositório](/code-security/getting-started/adding-a-security-policy-to-your-repository)".

## Gerenciar o gráfico de dependências

{% ifversion fpt or ghec %} O grafo de dependência é gerado automaticamente para todos os repositórios públicos, e você pode optar por habilitá-lo em repositórios privados. Ele interpreta o manifesto e os arquivos de bloqueio em um repositório para identificar dependências.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %} Configurações**.
2. Clique em **Segurança e análise**.
3. Ao lado de Grafo de dependência, clique em **Habilitar** ou **Desabilitar**.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obter mais informações, confira "[Como explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".

## Gerenciar {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} são gerados quando {% data variables.product.prodname_dotcom %} identifica uma dependência no gráfico de dependências com uma vulnerabilidade. {% ifversion fpt or ghec %}Você pode habilitar {% data variables.product.prodname_dependabot_alerts %} para qualquer repositório.{% endif %}

{% ifversion fpt or ghec %}
1. Clique na foto do seu perfil e em **Configurações**.
2. Clique em **Segurança e análise**.
3. Clique em **Habilitar tudo** ao lado dos {% data variables.product.prodname_dependabot_alerts %}.
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}" e "[Como gerenciar as configurações de segurança e análise para sua conta pessoal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}".

## Gerenciando revisão de dependências

A revisão de dependências permite visualizar alterações de dependência em pull requests antes de serem mescladas nos seus repositórios. Para obter mais informações, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

A revisão de dependência é um recurso de {% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt or ghec %}A revisão de Dependência já está habilitada para todos os repositórios públicos. {% ifversion fpt %}As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_advanced_security %} podem habilitar a revisão de dependências adicionalmente para repositórios privados e internos. Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}Para habilitar a revisão de dependências para um repositório {% ifversion ghec %}privado ou interno {% endif %}, assegure que o gráfico de dependências esteja habilitado e habilite {% data variables.product.prodname_GH_advanced_security %}. 

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança e análise**.
3. {% ifversion ghec %}Se o grafo de dependência ainda não estiver habilitado, clique em **Habilitar**.{% elsif ghes or ghae %}Verifique se o grafo de dependência está configurado para sua empresa.{% endif %}
4. Se o {% data variables.product.prodname_GH_advanced_security %} ainda não estiver habilitado, clique em **Habilitar**.

{% endif %}

{% ifversion fpt or ghec or ghes %}

## Gerenciar {% data variables.product.prodname_dependabot_security_updates %}

Para qualquer repositório que usar {% data variables.product.prodname_dependabot_alerts %}, você pode habilitar {% data variables.product.prodname_dependabot_security_updates %} para abrir pull requests com atualizações de segurança quando forem detectadas vulnerabilidades.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança e análise**.
3. Ao lado das {% data variables.product.prodname_dependabot_security_updates %}, clique em **Habilitar**.

Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)" e "[Como configurar os {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)".

## Gerenciar {% data variables.product.prodname_dependabot_version_updates %}

Você pode habilitar {% data variables.product.prodname_dependabot %} para aumentar automaticamente os pull requests para manter suas dependências atualizadas. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)".

{% ifversion dependabot-settings-update-37 %}
1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %} Configurações**.
2. Clique em **Segurança e análise**.
3. Ao lado de {% data variables.product.prodname_dependabot_version_updates %}, clique em **Habilitar** para criar um arquivo de configuração *dependabot.yml* básico.
4. Especifique as dependências para atualizar o arquivo e fazer commit no repositório. Para obter mais informações, confira "[Como configurar as atualizações de versão do Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)".

{% else %} Para habilitar as {% data variables.product.prodname_dependabot_version_updates %}, crie um arquivo de configuração *dependabot.yml*. Para obter mais informações, confira "[Como configurar as atualizações de versão do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)".
{% endif %}

{% endif %}

## Como configurar a {% data variables.product.prodname_code_scanning %}

Você pode configurar {% data variables.product.prodname_code_scanning %} para identificar automaticamente vulnerabilidades e erros no código armazenado no seu repositório usando uma ferramenta de {% data variables.product.prodname_codeql_workflow %} ou de terceiros. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_code_scanning %} para um repositório](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

{% data variables.product.prodname_code_scanning_capc %} está disponível {% ifversion fpt or ghec %}para todos os repositórios públicos e para os repositórios privados pertencentes a organizações que fazem parte de uma empresa com uma licença para {% else %}repositórios pertencentes a organização, se a empresa usar {% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## Configurar o {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} está {% ifversion fpt or ghec %}habilitado para todos os repositórios públicos e está disponível para repositórios privados pertencentes a organizações que fazem parte de uma empresa com uma licença para {% else %}disponível para repositórios de propriedade da organização se a empresa usar {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}A {% data variables.product.prodname_secret_scanning_caps %} já pode estar habilitada no seu repositório, dependendo das configurações da sua organização.

1. Na página principal do repositório, clique em **{% octicon "gear" aria-label="The Settings gear" %}Configurações**.
2. Clique em **Segurança e análise**.
3. Se o {% data variables.product.prodname_GH_advanced_security %} ainda não estiver habilitado, clique em **Habilitar**.
4. Ao lado da {% data variables.product.prodname_secret_scanning_caps %}, clique em **Habilitar**. {% endif %}

## Próximas etapas
Você pode visualizar e gerenciar alertas de funcionalidades de segurança para resolver dependências e vulnerabilidades no seu código. Para saber mais, confira {% ifversion fpt or ghes or ghec %} "[Como exibir e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts),"{% endif %} {% ifversion fpt or ghec or ghes %}"[Como gerenciar solicitações de pull para atualizações de dependência](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)", {% endif %}"[Como gerenciar a {% data variables.product.prodname_code_scanning %} do repositório](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)" e "[Como gerenciar os alertas da {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)".

{% ifversion fpt or ghec %}Se você tiver uma vulnerabilidade de segurança, você poderá criar uma consultoria de segurança para discutir em privado e corrigir a vulnerabilidade. Para obter mais informações, confira "[Sobre os avisos de segurança do repositório](/code-security/security-advisories/about-github-security-advisories)" e "[Criar um consultor de segurança](/code-security/security-advisories/creating-a-security-advisory)."
{% endif %}
