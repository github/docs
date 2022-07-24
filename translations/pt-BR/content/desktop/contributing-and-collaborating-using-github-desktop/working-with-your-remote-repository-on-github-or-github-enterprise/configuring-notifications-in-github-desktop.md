---
title: Configurando notificações no GitHub Desktop
shortTitle: Configurar notificações
intro: '{% data variables.product.prodname_desktop %} manterá você atualizado com notificações sobre eventos que ocorram no branch do seu pull request.'
versions:
  fpt: '*'
---

## Sobre notificações em {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} mostrará uma notificação de sistema para eventos que ocorrem no repositório selecionado atualmente. As notificações serão exibidas quando:

- Ocorreu uma falha nas verificações de pull request.
- Deixou-se um comentário, aprovação ou alterações solicitadas em uma uma revisão do pull request.

Clicar na notificação mudará o foco do aplicativo para {% data variables.product.prodname_desktop %} e fornecerá informações mais detalhadas.

## Notificações sobre falhas de verificação de pull request

Quando forem feitas alterações em um branch de pull request, você receberá uma notificação se a verificação falhar.

![o pull request verifica a notificação falha](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Clicar na notificação irá exibir uma caixa de diálogo com detalhes sobre as verificações. Depois de analisar por que as verificações falharam, você pode voltar a executar a verificação, ou mudar rapidamente para o branch de pull request para começar a corrigir os erros. Para obter mais informações, consulte "[Visualização e reexecução de verificações no GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)".

![diálogo de verificações falhou](/assets/images/help/desktop/checks-failed-dialog.png)
## Notificações para revisões de pull request

O {% data variables.product.prodname_desktop %} irá mostrar uma notificação do sistema quando um colega de equipe tiver aprovado, comentado ou solicitado alteralçoes no seu pull request. Consulte "[Sobre revisões de pull request](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)" para obter mais informações sobre análises de pull request.

![Notificação de revisão de pull request](/assets/images/help/desktop/pull-request-review-notification.png)

Clicar na notificação mudará o foco do aplicativo para {% data variables.product.prodname_desktop %} e fornecerá mais contexto para o comentário de revisão de pull request.

![diálogo da revisão de pull request](/assets/images/help/desktop/pull-request-review-dialog.png)
## Habilitando notificações

Se as notificações do sistema estiverem desabilitadas para {% data variables.product.prodname_desktop %} você pode seguir as etapas abaixo para habilitá-las.

{% mac %}

1. Clique no menu de **Apple** e, em seguida, selecione **Sistema de Preferências**.
2. Selecione **Notificações & Foco**.
3. Selecione **{% data variables.product.prodname_desktop %}** na lista de aplicativos.
4. Clique em **permitir notificações**.

![Notificações do macOS & Foco](/assets/images/help/desktop/mac-enable-notifications.png)

Para obter mais informações sobre as notificações do sistema macOS, consulte "[Usar as notificações no seu Mac](https://support.apple.com/en-us/HT204079)".

{% endmac %}

{% windows %}

1. Abra o menu **Iniciar** e, em seguida, selecione **Configurações**.
2. Selecione **Sistema** e, em seguida, clique em **Notificações**.
3. Encontre **{% data variables.product.prodname_desktop %}** na lista de aplicativos e clique **On**.

![Habilitar notificações do Windows](/assets/images/help/desktop/windows-enable-notifications.png)

Para obter mais informações sobre as notificações do sistema do Windows, consulte "[Alterar configurações de notificação no Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)".

{% endwindows %}
