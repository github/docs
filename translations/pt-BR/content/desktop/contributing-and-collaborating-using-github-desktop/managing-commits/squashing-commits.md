---
title: Combinação por squash de commits
intro: 'Você pode usar {% data variables.product.prodname_desktop %} para fazer comunicação por squash de commits no histórico do seu branch.'
versions:
  fpt: '*'
---

## Sobre a combinação por squash de um commit

A combinação por squash permite que você combine vários commits no histórico do seu branch em um único commit. Isso pode ajudar a manter a história do seu repositório mais legível e compreensível.

## Combinação por squash de um commit

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. Na lista de branches, selecione o branch que possui os commits para o qual você deseja realizar a combinação por squash.
{% data reusables.desktop.history-tab %}
4. Selecionar os commits para fazer a combinação por squash e solte-os no commit com o qual deseja combiná-los. Você pode selecionar um commit ou selecionar múltiplos commits usando <kbd>➲</kbd> ou <kbd>Shift</kbd>. ![combinação por squash, arrastar e soltar](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifique a mensagem de commit de seu novo commit. As mensagens de commit dos commits selecionados que você deseja fazer combinação por squash são pré-preenchidas nos campos **Resumo** e **Descrição**.
6. Clique em **Commits de combinação por squash**.

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. Na lista de branches, selecione o branch que possui os commits para o qual você deseja realizar a combinação por squash.
{% data reusables.desktop.history-tab %}
4. Selecionar os commits para fazer a combinação por squash e solte-os no commit com o qual deseja combiná-los. Você pode selecionar um commit ou selecionar múltiplos commits usando <kbd>Ctrl</kbd> ou <kbd>Shift</kbd>. ![combinação por squash, arrastar e soltar](/assets/images/help/desktop/squash-drag-and-drop.png)
5. Modifique a mensagem de commit de seu novo commit. As mensagens de commit dos commits selecionados que você deseja fazer combinação por squash são pré-preenchidas nos campos **Resumo** e **Descrição**.
6. Clique em **Commits de combinação por squash**.

{% endwindows %}

## Mensagens de erro ao fazer combinação por squash dos commits

Ao fazer combinação por squash dos commits, você pode ver uma das seguintes notificações ou mensagens de erro.

* Uma notificação afirma que a alteração solicitada no branch exigirá um push forçado para atualizar o branch remoto. O push forçado altera o histórico de commit do branch e afetará outros colaboradores que estão trabalhando nesse branch.  Selecione **Iniciar combinação por squash** para começar a combinação por squash e, em seguida, clique em **Origem de push forçado** para fazer push das suas alterações.

  ![diálogo de push forçado de combinação por squash](/assets/images/help/desktop/squash-force-push.png)

* Um erro afirma que ocorreu uma falha na combinação por squash porque existe um commit de merge entre os commits que foram combinados por squash.

  ![reordenar diálogo de confirmação de merge](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* Uma notificação é exibida indicando que há alterações não confirmadas presentes no seu branch atual. Selecione **Ocultar alterações e conitnuar** para armazenar as alterações e continuar, ou selecione **Fechar** para ignorar a mensagem e confirmar as alterações. Quando não houver mais alterações não realizadas, você poderá fazer a combinação por squash dos seus commits.

  ![diálogo de stash de combinação por squash](/assets/images/help/desktop/squash-stash-dialog.png)
