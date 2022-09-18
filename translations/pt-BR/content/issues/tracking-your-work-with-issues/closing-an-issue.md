---
title: Encerrando um problema
intro: 'Você pode fechar um problema quando os bugs são corrigidos, os comentários são resolvidos ou para mostrar que o trabalho não está planejado.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060423'
---
{% note %}

**Observação:** você também pode fechar problemas automaticamente com palavras-chave em solicitações de pull e mensagens de commit. Para obter mais informações, confira "[Como vincular uma solicitação de pull a um problema](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. Na lista de problemas, clique no problema que deseja fechar.
{%- ifversion issue-close-reasons %}
1. Opcionalmente, para alterar o motivo de fechamento do problema, selecione {% octicon "triangle-down" aria-label="The down triangle octicon" %} ao lado de "Fechar problema" e clique em um motivo.
   ![Captura de tela mostrando o menu suspenso que contém os motivos de fechamento do problema](/assets/images/help/issues/close-issue-select-reason.png)
2. Clique em **Fechar problema**.
   ![Captura de tela mostrando o botão "fechar problema"](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. Na parte inferior da página, clique em **Fechar problema**.
   ![Captura de tela mostrando o botão "fechar problema"](/assets/images/help/issues/close-issue.png) {% endif %}
