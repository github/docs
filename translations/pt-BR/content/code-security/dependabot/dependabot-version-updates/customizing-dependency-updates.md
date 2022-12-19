---
title: Personalizando atualizações de dependências
intro: 'Você pode personalizar como {% data variables.product.prodname_dependabot %} mantém suas dependências.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107738'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre a personalização de atualizações de dependências

Depois de habilitar as atualizações de versão, você poderá personalizar como o {% data variables.product.prodname_dependabot %} mantém suas dependências adicionando mais opções ao arquivo *dependabot.yml*. Por exemplo, você pode:

- Especifique o dia da semana que as solicitações de pull serão abertas para as atualizações de versão: `schedule.day`
- Defina revisores, destinatários e rótulos para cada gerenciador de pacotes: `reviewers`, `assignees` e `labels`
- Defina uma estratégia de controle de versão para as alterações em cada arquivo de manifesto: `versioning-strategy`
- Altere o número máximo de solicitações de pull em aberto para as atualizações de versão do padrão de cinco: `open-pull-requests-limit`
- Abra as solicitações de pull para as atualizações de versão a fim de direcioná-las para um branch específico, em vez do branch padrão: `target-branch`

Para obter mais informações sobre as opções de configuração, confira "[Opções de configuração para o arquivo dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)".

Quando você atualiza o arquivo *dependabot.yml* no seu repositório, o {% data variables.product.prodname_dependabot %} executa uma verificação imediata com a nova configuração. Em minutos, você verá uma lista atualizada das dependências na guia **{% data variables.product.prodname_dependabot %}** . Isso poderá demorar mais se o repositório tiver muitas dependências. Você também pode ver novas pull requests para atualizações de versão. Para obter mais informações, confira "[Como listar as dependências configuradas para atualizações de versão](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates)".

## Impacto das alterações de configuração nas atualizações de segurança

Se você personalizar o arquivo *dependabot.yml*, poderá observar algumas alterações nas solicitações de pull geradas para as atualizações de segurança. Essas pull requests são sempre acionadas por uma consultoria de segurança para uma dependência, ao invés da agenda {% data variables.product.prodname_dependabot %}. No entanto, elas herdam as configurações relevantes do arquivo *dependabot.yml*, a menos que você especifique um branch de destino diferente para as atualizações de versão.

Para ver um exemplo, confira "[Como definir rótulos personalizados](#setting-custom-labels)" abaixo.

## Modificando o agendamento

Quando você define um agendamento de atualização `daily`, por padrão, o {% data variables.product.prodname_dependabot %} verifica se há novas versões às 5h UTC. Use `schedule.time` para especificar uma hora alternativa do dia para verificar se há atualizações (formato: `hh:mm`).

O exemplo de arquivo *dependabot.yml* abaixo expande a configuração do npm para especificar o período em que o {% data variables.product.prodname_dependabot %} deve verificar se há atualizações de versão para as dependências.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## Configurando revisores e responsáveis

Por padrão, {% data variables.product.prodname_dependabot %} levanta todas as pull requests sem revisores ou responsáveis.

Use `reviewers` e `assignees` para especificar revisores e destinatários para todas as solicitações de pull geradas para um gerenciador de pacotes. Ao especificar uma equipe, você precisa usar o nome completo dela, como se você estivesse @mentioning a equipe (incluindo a organização).

O exemplo de arquivo *dependabot.yml* abaixo altera a configuração do npm para que todas as solicitações de pull em aberto com as atualizações de versão e segurança para o npm tenham dois revisores e um destinatário.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## Definindo etiquetas personalizadas

{% data reusables.dependabot.default-labels %}

Use `labels` para substituir os rótulos padrão e especificar rótulos alternativos para todas as solicitações de pull geradas para um gerenciador de pacotes. Não é possível criar rótulos no arquivo *dependabot.yml*, ou seja, os rótulos alternativos já precisam existir no repositório.

O exemplo de arquivo *dependabot.yml* abaixo altera a configuração do npm para que todas as solicitações de pull em aberto com as atualizações de versão e segurança para o npm tenham rótulos personalizados. Ele também altera a configuração do Docker para verificar as atualizações de versão em relação a um branch personalizado e levantar as pull request com etiquetas personalizadas em relação ao branch personalizado. As alterações no Docker não afetarão as pull request de atualização de segurança porque as atualizações de segurança sempre são feitas em relação ao branch padrão.

{% note %}

**Observação:** o novo `target-branch` precisa conter um Dockerfile para atualização, caso contrário, essa alteração terá o efeito de desabilitar as atualizações de versão para o Docker.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## Mais exemplos

Para ver mais exemplos, confira "[Opções de configuração para o arquivo dependabot.yml](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)".
