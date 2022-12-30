---
title: Configurar notificações no GitHub Desktop
shortTitle: Configuring notifications
intro: 'O {% data variables.product.prodname_desktop %} manterá você atualizado com notificações sobre os eventos que ocorrem no branch de solicitação de pull.'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060430'
---
## Sobre notificações no {% data variables.product.prodname_desktop %}

O {% data variables.product.prodname_desktop %} mostrará uma notificação do sistema para eventos que ocorrerem no repositório selecionado. As notificações serão mostradas quando:

- Houver falha nas verificações de solicitação de pull.
- Uma revisão de solicitação de pull for deixada com um comentário, uma aprovação ou alterações solicitadas.

Ao clicar na notificação, o aplicativo mudará o para o {% data variables.product.prodname_desktop %} e fornecerá informações mais detalhadas.

## Notificações sobre falhas de verificação de solicitação de pull

Quando forem feitas alterações em um branch de solicitação de pull, você receberá uma notificação se as verificações falharem.

![Notificação de falha nas verificações de solicitação de pull](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Ao clicar na notificação, uma caixa de diálogo com detalhes sobre as verificações será exibida. Depois de examinar por que as verificações falharam, você pode executar novamente as verificações ou alternar rapidamente para o branch de solicitação de pull para começar a corrigir os erros. Para saber mais, confira "[Exibir e executar novamente verificações no GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)".

![Caixa de diálogo de verificações com falha](/assets/images/help/desktop/checks-failed-dialog.png)
## Notificações para revisões de solicitação de pull

O {% data variables.product.prodname_desktop %} exibirá uma notificação do sistema quando um colega de equipe aprovar, comentar ou solicitar alterações em sua solicitação de pull. Confira "[Sobre revisões de solicitação de pull](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)" para obter mais informações sobre revisões de solicitação de pull.

![Notificação de revisão de solicitação de pull](/assets/images/help/desktop/pull-request-review-notification.png)

Ao clicar na notificação, o aplicativo mudará o para o {% data variables.product.prodname_desktop %} e fornecerá mais contexto para o comentário de revisão de solicitação de pull.

![Caixa de diálogo de revisão de solicitação pull](/assets/images/help/desktop/pull-request-review-dialog.png)
## Habilitar notificações

Se as notificações do sistema estiverem desabilitadas no {% data variables.product.prodname_desktop %} você poderá seguir as etapas abaixo para habilitá-las.

{% mac %}

1. Clique no menu da **Apple** e selecione **Preferências do Sistema**.
2. Selecione **Notificações e Foco**.
3. Selecione **{% data variables.product.prodname_desktop %}** na lista de aplicativos.
4. Clique em **Permitir Notificações**.

![Foco e Notificações do macOS](/assets/images/help/desktop/mac-enable-notifications.png)

Para obter mais informações sobre notificações do sistema do macOS, confira "[Use notificações em seu Mac](https://support.apple.com/en-us/HT204079)".

{% endmac %}

{% windows %}

1. Abra o menu **Iniciar** e selecione **Configurações**.
2. Selecione **Sistema** e clique em **Notificações**.
3. Localize **{% data variables.product.prodname_desktop %}** na lista de aplicativos e clique em **Ativar**.

![Habilitar notificações no Windows](/assets/images/help/desktop/windows-enable-notifications.png)

Para obter mais informações sobre notificações do sistema no Windows, confira "[Alterar as configurações de notificação no Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)".

{% endwindows %}
