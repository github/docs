---
title: Editar permissões do aplicativo GitHub
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083996'
---
{% note %}

**Observação:** as permissões atualizadas não entrarão em vigor em uma instalação até que o proprietário da conta ou a organização aprove as alterações. Use o [webhook InstallationEvent](/webhooks/event-payloads/#installation) para descobrir quando as pessoas aceitam novas permissões para seu aplicativo. Uma exceção disso são as [permissões no nível do usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), que não exigem que o proprietário da conta aprove as alterações de permissão.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Selecione o aplicativo GitHub cujas permissões você deseja alterar.
![Seleção do aplicativo](/assets/images/github-apps/github_apps_select-app.png)
5. Na barra lateral esquerda, clique em **Permissões e webhooks**.
![Permissões e webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Modifique as permissões que você deseja alterar. Para cada tipo de permissão, selecione "Somente leitura", "Leitura e gravação" ou "Sem acesso" no menu suspenso.
![Seleção de permissões para o Aplicativo do GitHub](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. Em "Assinar eventos", selecione quaisquer eventos que você deseja que seu aplicativo assine.
![Seleção de permissões para inscrição em eventos do Aplicativo do GitHub](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Opcionalmente, em "Adicionar uma observação para os usuários", adicione uma observação informando aos usuários o por que você esta mudando as permissões que o seu aplicativo GitHub solicita.
![Caixa de entrada usada para adicionar uma observação aos usuários explicando por que as permissões do Aplicativo do GitHub foram alteradas](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Clique em **Salvar alterações**.
![Botão usado para salvar as alterações de permissões](/assets/images/github-apps/github_apps_save_changes.png)
