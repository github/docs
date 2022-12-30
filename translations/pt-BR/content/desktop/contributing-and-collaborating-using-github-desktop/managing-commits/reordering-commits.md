---
title: Reordenando commits
intro: 'Você pode usar {% data variables.product.prodname_desktop %} para reordenar commits no histórico do seu branch.'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145095172'
---
## Sobre reordenar um commit

A reordenação permite que você altere o seu histórico de commit para fornecer um progresso mais significativo de commits. {% data variables.product.prodname_desktop %} permite que você arraste e solte commits no histórico do seu branch para reordená-los.

## Reordenando um commit

{% data reusables.desktop.current-branch-menu %}
2. Na lista de branches, clique no branch com os commits que você deseja reordenar.
{% data reusables.desktop.history-tab %}
4. Arraste o commit que você deseja reordenar e solte-o entre dois commits adjacentes.
  ![reordenar arrastar e soltar](/assets/images/help/desktop/reorder-drag-and-drop.png) Enquanto o aplicativo reordena os commits, uma caixa de diálogo **Reordenação em processo** indica o andamento da alteração.

## Mensagens de erro ao reordenar commits

Ao reordenar os commits, você pode ver uma das seguintes notificações ou mensagens de erro.

* Uma notificação afirma que a alteração solicitada no branch exigirá um push forçado para atualizar o branch remoto. Isto é mostrado quando os commits que você reordenou anteriormente foram enviados por push para o branch remoto. O push forçado altera o histórico de commit do branch e afetará outros colaboradores que estão trabalhando nesse branch.  Selecione **Iniciar reordenação** para iniciar a reordenação e clique em **Forçar a origem do push** para efetuar push das alterações.

  ![reordenar o diálogo do push forçado](/assets/images/help/desktop/reorder-force-push-dialog.png)

* Um erro afirma que ocorreu uma falha ao reordenar porque há um commit de merge entre os commits reordenados.

  ![reordenar diálogo de confirmação de merge](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* Uma notificação é exibida indicando que há alterações não confirmadas presentes no seu branch atual. Selecione **Fazer Stash das Alterações e Continuar** para armazenar as alterações e continuar ou **Fechar** para ignorar a mensagem e fazer commit das alterações. Quando não houver mais alterações sem commit, você poderá reordenar seus commits.

  ![reordenar diálogo de stash](/assets/images/help/desktop/reorder-stash-dialog.png)

* Uma mensagem afirma que existem conflitos de merge que você deve resolver antes que o aplicativo possa continuar reordenando os commits no seu branch.
    1. Clique em **Exibir conflitos** para ver os conflitos.
      ![mensagem resolver conflitos de reordenação](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. Quando todos os conflitos forem resolvidos, você poderá reordenar os seus commits.
  
