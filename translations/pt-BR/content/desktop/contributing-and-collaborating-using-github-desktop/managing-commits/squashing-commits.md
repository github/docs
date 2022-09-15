---
title: Combinação por squash de commits
intro: 'Você pode usar {% data variables.product.prodname_desktop %} para fazer comunicação por squash de commits no histórico do seu branch.'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095171'
---
## Sobre a combinação por squash de um commit

A combinação por squash permite que você combine vários commits no histórico do seu branch em um único commit. Isso pode ajudar a manter a história do seu repositório mais legível e compreensível.

## Combinação por squash de um commit

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. Na lista de branches, selecione o branch que possui os commits para o qual você deseja realizar a combinação por squash.
{% data reusables.desktop.history-tab %}
4. Selecionar os commits para fazer a combinação por squash e solte-os no commit com o qual deseja combiná-los. Você pode selecionar um ou vários commits usando a tecla <kbd>Command</kbd> ou <kbd>SHIFT</kbd>.
  ![mesclagem squash e arrastar e soltar](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifique a mensagem de commit de seu novo commit. As mensagens de commit dos commits selecionados que você deseja mesclar por squash são preenchidas previamente nos campos **Resumo** e **Descrição**.
6. Clique em **Mesclar Commits por Squash**.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. Na lista de branches, selecione o branch que possui os commits para o qual você deseja realizar a combinação por squash.
{% data reusables.desktop.history-tab %}
4. Selecionar os commits para fazer a combinação por squash e solte-os no commit com o qual deseja combiná-los. Você pode selecionar um ou vários commits usando a tecla <kbd>CTRL</kbd> ou <kbd>SHIFT</kbd>.
  ![mesclagem squash e arrastar e soltar](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifique a mensagem de commit de seu novo commit. As mensagens de commit dos commits selecionados que você deseja mesclar por squash são preenchidas previamente nos campos **Resumo** e **Descrição**.
6. Clique em **Mesclar Commits por Squash**.

{% endwindows %}

## Mensagens de erro ao fazer combinação por squash dos commits

Ao fazer combinação por squash dos commits, você pode ver uma das seguintes notificações ou mensagens de erro.

* Uma notificação afirma que a alteração solicitada no branch exigirá um push forçado para atualizar o branch remoto. O push forçado altera o histórico de commit do branch e afetará outros colaboradores que estão trabalhando nesse branch.  Selecione **Iniciar Mesclagem Squash** para iniciar a mesclagem squash e clique em **Forçar origem do push** para efetuar push das alterações.

  ![diálogo de push forçado de combinação por squash](/assets/images/help/desktop/squash-force-push.png)

* Um erro afirma que ocorreu uma falha na combinação por squash porque existe um commit de merge entre os commits que foram combinados por squash.

  ![reordenar diálogo de confirmação de merge](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* Uma notificação é exibida indicando que há alterações não confirmadas presentes no seu branch atual. Selecione **Fazer Stash das Alterações e Continuar** para armazenar as alterações e continuar ou **Fechar** para ignorar a mensagem e fazer commit das alterações. Quando não houver mais alterações não realizadas, você poderá fazer a combinação por squash dos seus commits.

  ![diálogo de stash de combinação por squash](/assets/images/help/desktop/squash-stash-dialog.png)
