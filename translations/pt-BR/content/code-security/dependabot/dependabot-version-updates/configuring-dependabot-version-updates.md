---
title: Configurando a versão das atualizações do Dependabot
intro: 'Você pode configurar seu repositório para que o {% data variables.product.prodname_dependabot %} atualize automaticamente os pacotes que você usa.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: 8513bd41ec86d353241297d2a5bd6111a49fec3d
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135811'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre atualizações de versão para dependências

Habilite as {% data variables.product.prodname_dependabot_version_updates %} fazendo o check-in de um arquivo de configuração *dependabot.yml* no diretório `.github` do seu repositório. Em seguida, o {% data variables.product.prodname_dependabot %} cria um pull request para manter as dependências que você configura atualizadas. Para cada dependência do gerenciador de pacotes que você deseja atualizar, você deve especificar a localização dos arquivos de manifesto do pacote e a frequência de busca por atualizações nas dependências listadas nesses arquivos. Para obter informações sobre como habilitar as atualizações de segurança, confira "[Como configurar as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

{% data reusables.dependabot.initial-updates %} Para obter mais informações, confira "[Como personalizar as atualizações de dependência](/github/administering-a-repository/customizing-dependency-updates)".

Por padrão, somente as dependências diretas definidas explicitamente em um manifesto são mantidas atualizadas por {% data variables.product.prodname_dependabot_version_updates %}. Você pode optar por receber atualizações de dependências indiretas definidas em arquivos de bloqueio. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)".

{% data reusables.dependabot.private-dependencies-note %} Adicionalmente, {% data variables.product.prodname_dependabot %} não é compatível com dependências privadas {% data variables.product.prodname_dotcom %} para todos os gerenciadores de pacote. Para obter mais informações, confira "[Sobre as atualizações de versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)" e "[Suporte à linguagem do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/github-language-support)".

## Habilitar {% data variables.product.prodname_dependabot_version_updates %}

Habilite as {% data variables.product.prodname_dependabot_version_updates %} fazendo commit de um arquivo de configuração *dependabot.yml* no repositório. {% ifversion dependabot-settings-update-37 %}Se você habilitar o recurso na página de configurações, o GitHub criará um arquivo básico que você poderá editar, caso contrário, crie o arquivo usando qualquer editor de arquivos.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Segurança e análise de código", à direita de "{% data variables.product.prodname_dependabot_version_updates %}", clique em **Habilitar** para abrir um arquivo de configuração *dependabot.yml* básico no diretório `.github` do repositório.
{% else %}
1. Crie um arquivo de configuração *dependabot.yml* no diretório `.github` do repositório. {% endif %}
1. Adicione uma `version`. 
1. Opcionalmente, se você tiver dependências em um registro privado, adicione uma seção `registries` contendo detalhes de autenticação. 
1. Adicione uma seção `updates`, com uma entrada para cada gerenciador de pacotes que você deseja que o {% data variables.product.prodname_dependabot %} monitore.
1. Para cada gerenciador de pacotes, use:
    - `package-ecosystem` para especificar o gerenciador de pacotes.
    - `directory` para especificar o local do manifesto ou de outros arquivos de definição.
    - `schedule.interval`: especifica a frequência com a qual novas versões são verificadas.
{% data reusables.dependabot.check-in-dependabot-yml %}

Para obter informações sobre todas as opções de configuração, confira "[Opções de configuração do arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates)".

### Exemplo de arquivo *dependabot.yml*

O exemplo de arquivo *dependabot.yml* abaixo configura atualizações de versão para dois gerenciadores de pacotes: npm e Docker. Quando este arquivo é marcado, o {% data variables.product.prodname_dependabot %} verifica os arquivos de manifesto no branch padrão buscando dependências desatualizadas. Se encontrar dependências desatualizadas, irá gerar pull requests em relação ao branch padrão para atualizar as dependências.

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

No exemplo acima, se as dependências do Docker estavam muito desatualizadas, o ideal é começar com um agendamento `daily` até que as dependências estejam atualizadas e retornar a um agendamento semanal.

### Habilitando atualizações da versão em bifurcações

Se você quiser habilitar atualizações de versão nas bifurcações, há um passo extra. As atualizações de versão não são habilitadas automaticamente em forks quando um arquivo de configuração *dependabot.yml* está presente. Isso garante que os proprietários do fork não habilitem acidentalmente as atualizações de versão quando efetuarem pull de alterações, incluindo um arquivo de configuração *dependabot.yml* do repositório original. 

Em uma bifurcação, você também precisa habilitar explicitamente {% data variables.product.prodname_dependabot %}.

{% ifversion dependabot-version-updates-for-forks %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Segurança e análise de código", à direita de "{% data variables.product.prodname_dependabot_version_updates %}", clique em **Habilitar** para permitir que {% data variables.product.prodname_dependabot %} inicie atualizações de versão.
![Captura de tela da configuração de um repositório bifurcado de {% data variables.product.prodname_dependabot_version_updates %}](/assets/images/help/dependabot/dependabot-version-update-forks.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. Em "Habilitar o Dependabot", clique em **Habilitar o Dependabot**.

{% endif %}

## Verificando o status das atualizações da versão

Depois de habilitar as atualizações de versão, a guia **Dependabot** no grafo de dependência do repositório será preenchida. Esta aba mostra quais gerentes de pacote de {% data variables.product.prodname_dependabot %} estão configurados para monitorar e quando {% data variables.product.prodname_dependabot %} fez a última verificação com relação a novas versões.

![Aba de Insights do Repositório, gráfico de dependências, aba Dependabot](/assets/images/help/dependabot/dependabot-tab-view.png)

Para obter informações, confira "[Como listar as dependências configuradas para atualizações de versão](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)".

## Desabilitar {% data variables.product.prodname_dependabot_version_updates %}

Você pode desabilitar por completo as atualizações de versão excluindo o arquivo *dependabot.yml* do repositório. Mais usualmente, você deseja desabilitar as atualizações temporariamente para uma ou mais dependências, ou gerenciadores de pacotes.

- Gerenciadores de pacotes: desabilite-os definindo `open-pull-requests-limit: 0` ou removendo a linha de comentário de `package-ecosystem` relevante no arquivo de configuração.
- Dependências específicas: desabilite-as adicionando atributos `ignore` a pacotes ou a aplicativos que você deseja excluir das atualizações.

Quando você desabilita dependências, você pode usar cartões curingas para corresponder a um conjunto de bibliotecas relacionadas. Você também pode especificar quais versões excluir. Isso é particularmente útil se você precisa bloquear atualizações de uma biblioteca, deixando pendente trabalho para suportar uma alteração quebrada na sua API, mas quer obter qualquer correção de segurança para a versão que você usa.

### Exemplo de desabilitação de atualizações de versão para algumas dependências

O exemplo de arquivo *dependabot.yml* abaixo inclui exemplos das diferentes maneiras de desabilitar as atualizações em algumas dependências, permitindo que outras atualizações continuem.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

Para obter mais informações sobre como verificar as preferências de ignorar existentes, confira "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
