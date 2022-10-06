---
title: Recursos essenciais do GitHub Actions
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %} foram projetados para ajudar você a construir automações robustas e dinâmicas. Este guia irá mostrar como criar fluxos de trabalho de {% data variables.product.prodname_actions %} que incluem variáveis de ambiente, scripts personalizados e muito mais.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066068'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

{% data variables.product.prodname_actions %} permite que você personalize seus fluxos de trabalho para atender às necessidades únicas de seu aplicativo e equipe. Neste guia, discutiremos algumas das técnicas de personalização essenciais, como o uso de variáveis, a execução de scripts e o compartilhamento de dados e artefatos entre trabalhos.

##  Usar variáveis em seus fluxos de trabalho

{% data variables.product.prodname_actions %} incluem variáveis de ambiente-padrão para cada execução de fluxo de trabalho. Se precisar usar variáveis de ambiente personalizadas, você pode defini-las no seu arquivo de fluxo de trabalho YAML. Este exemplo demonstra como criar variáveis personalizadas chamadas `POSTGRES_HOST` e `POSTGRES_PORT`. Em seguida, essas variáveis estão disponíveis para o script `node client.js`.

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

Para obter mais informações, confira "[Como usar variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)".

## Adicionar scripts ao seu fluxo de trabalho

Você pode usar ações para executar scripts e comandos de shell, que são executados no executor atribuído. Este exemplo demonstra como uma ação pode usar a palavra-chave `run` para executar `npm install -g bats` no executor.

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

Por exemplo, para executar um script como uma ação, você pode armazenar o script no repositório e fornecer o tipo do caminho e do shell.

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

## Compartilhar dados entre trabalhos

Se o seu trabalho gerar arquivos que você deseja compartilhar com outro trabalho no mesmo fluxo de trabalho ou se você quiser salvar os arquivos para referência posterior, armazene-os no {% data variables.product.prodname_dotcom %} como _artefatos_. Artefatos são os arquivos que surgem quando você compila e testa seu código. Por exemplo, os artefatos podem incluir arquivos binários ou de pacotes, resultados de testes, capturas de tela ou arquivos de log. Os artefatos estão associados à execução do fluxo de trabalho em que foram criados e podem ser usados por outro trabalho. {% data reusables.actions.reusable-workflow-artifacts %}

Por exemplo, você pode criar um arquivo e, em seguida, carregá-lo como um artefato.

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

Para baixar um artefato de uma execução de fluxo de trabalho separada, use a ação `actions/download-artifact`. Por exemplo, você pode baixar o artefato chamado `output-log-file`.

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

Para baixar um artefato da mesma execução de fluxo de trabalho, o trabalho de download deve especificar `needs: upload-job-name` para que ele não seja iniciado até que o trabalho de upload seja concluído.

Para obter mais informações sobre artefatos, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)".

## Próximas etapas

Para continuar aprendendo sobre o {% data variables.product.prodname_actions %}, confira "[Eventos que disparam fluxos de trabalho](/actions/learn-github-actions/managing-complex-workflows)".
