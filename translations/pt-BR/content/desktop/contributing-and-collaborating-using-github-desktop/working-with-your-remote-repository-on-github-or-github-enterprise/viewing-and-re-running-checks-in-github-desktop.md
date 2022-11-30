---
title: Exibir e executar novamente verificações no GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'Você pode ver o status das verificações e executá-las novamente no {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068015'
---
## Sobre verificações no {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} exibe o status das verificações que foram executadas em seus branches de solicitação de pull. O selo de verificação ao lado do nome do branch exibirá o estado *pendente, aprovado* ou *com falha* das verificações. Você também pode executar novamente todas, com falha ou verificações individuais ao exibir o status das verificações no {% data variables.product.prodname_desktop %}. Para obter mais informações sobre como configurar verificações em seu repositório, confira "[Sobre verificações de status](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".

O {% data variables.product.prodname_desktop %} também mostrará uma notificação do sistema quando as verificações falharem. Para obter mais informações sobre como habilitar notificações, veja "[Configurar notificações na área de trabalho do GitHub](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)".

## Exibir e executar novamente verificações

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![Guia Solicitações de Pull no menu suspenso Branch Atual](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![Lista de solicitações de pull em aberto no repositório](/assets/images/help/desktop/click-pull-request.png)
4. Clique no número da solicitação de pull à direita do nome do branch de solicitação de pull.
  ![Verifica a exibição ao lado do nome do branch](/assets/images/help/desktop/checks-dialog.png)
5. Para executar novamente verificações com falha, clique em **{% octicon "sync" aria-label="The sync icon" %} Executar novamente**  e selecione **Executar Novamente Verificações com Falha**.
  ![Executar novamente verificações com falha](/assets/images/help/desktop/re-run-failed-checks.png)
6. Para executar novamente verificações individuais, passe o mouse sobre a verificação individual que você deseja executar novamente e selecione o ícone {% octicon "sync" aria-label="The sync icon" %} para executar novamente a verificação.
  ![Executar novamente verificações individuais](/assets/images/help/desktop/re-run-individual-checks.png)
7. Você verá uma caixa de diálogo de confirmação com o resumo das verificações que serão executadas novamente. Clique em **Executar Novamente Verificações** para confirmar se deseja executar novamente.
  ![Executar novamente a caixa de diálogo de confirmação](/assets/images/help/desktop/re-run-confirmation-dialog.png)
