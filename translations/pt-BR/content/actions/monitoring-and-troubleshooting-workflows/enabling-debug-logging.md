---
title: Habilitando o log de depuração
intro: 'Se os logs do fluxo de trabalho não fornecerem detalhes suficientes para diagnosticar o motivo pelo qual um fluxo de trabalho, um trabalho ou uma etapa não está funcionando como esperado, habilite o log de depuração adicional.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a2a7f6ff009782c636fd7b9e453bba869d6c799d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179380'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Esses registros adicionais são habilitados pela definição dos segredos no repositório que contém o fluxo de trabalho. Portanto, aplicam-se os mesmos requisitos de permissão:

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

Para obter mais informações sobre como definir segredos, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% ifversion debug-reruns %}

Além disso, qualquer pessoa que tenha acesso para executar um fluxo de trabalho pode habilitar o log de diagnóstico do executor e o log de depuração de etapas para uma nova execução do fluxo de trabalho. Para mais informações, confira "[Como reexecutar fluxos de trabalho e trabalhos](/actions/managing-workflow-runs/re-running-workflows-and-jobs)".

 {% endif %}

## Habilitar log de diagnóstico do runner

O log de diagnóstico do executor fornece arquivos de log adicionais que contêm informações sobre como um executor está executando um trabalho. Dois arquivos de log extras foram adicionados ao arquivo de log:

* O log de processo do runner, que inclui informações sobre a coordenação e a configuração de runners para executar trabalhos.
* O log de processo do worker, que registra em log a execução de um trabalho.

1. Para habilitar o log de diagnósticos do executor, defina o seguinte segredo no repositório que contém o fluxo de trabalho: `ACTIONS_RUNNER_DEBUG` como `true`.

1. Para baixar os logs de diagnóstico do runner, baixe o arquivo de log da execução de fluxo de trabalho. Os logs de diagnóstico do executor estão contidos na pasta `runner-diagnostic-logs`. Para obter mais informações sobre como baixar os logs, confira "[Como baixar os logs](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)".

## Habilitar log de depuração da etapa

O log de depuração da etapa aumenta o detalhamento dos logs de um trabalho durante e depois da execução dele.

1. Para habilitar o log de depuração de etapas, defina o seguinte segredo no repositório que contém o fluxo de trabalho: `ACTIONS_STEP_DEBUG` como `true`.

1. Após a configuração da chave secreta, mais eventos de depuração são exibidos nos logs da etapa. Para obter mais informações, confira ["Como ver os logs para diagnosticar falhas"](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
