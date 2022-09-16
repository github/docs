---
title: Fazer o download de artefatos do fluxo de trabalho
intro: Você pode fazer o download de artefatos arquivados antes que expirem automaticamente.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Download workflow artifacts
ms.openlocfilehash: 71e00a13769b696b47864d53d702770fb4f2b47a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095095'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Por padrão, {% data variables.product.product_name %} armazena registros e artefatos de compilação por 90 dias, e você pode personalizar este período de retenção dependendo do tipo de repositório. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Em **Artefatos**, clique no artefato que deseja baixar.
    
    ![Menu suspenso do para fazer download do artefato](/assets/images/help/repository/artifact-drop-down-updated.png)
    

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} irá fazer o download de cada artefato em diretórios separados baseados no nome do artefato. Se apenas um único artefato for especificado, ele será extraído para o diretório atual.

Para baixar todos os artefatos gerados por uma execução de fluxo de trabalho, use o subcomando `run download`. Substitua `run-id` pela ID da execução da qual deseja baixar artefatos. Se você não especificar uma `run-id`, a {% data variables.product.prodname_cli %} retornará um menu interativo para você escolher uma execução recente.

```shell
gh run download <em>run-id</em>
```

Para baixar um artefato específico de uma execução, use o subcomando `run download`. Substitua `run-id` pela ID da execução da qual deseja baixar artefatos. Substitua `artifact-name` pelo nome do artefato que deseja baixar.

```shell
gh run download <em>run-id</em> -n <em>artifact-name</em>
```

Você pode especificar mais de um artefato.

```shell
gh run download <em>run-id</em> -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

Para baixar artefatos específicos em todas as execuções em um repositório, use o subcomando `run download`.

```shell
gh run download -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

{% endcli %}
