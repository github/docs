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

Clicar na notificação irá exibir uma caixa de diálogo com detalhes sobre as verificações. Depois de analisar por que as verificações falharam, você pode voltar a executar a verificação, ou mudar rapidamente para o branch de pull request para começar a corrigir os erros. For more information, see "[Viewing and re-running checks in GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)."

![checks failed dialog](/assets/images/help/desktop/checks-failed-dialog.png)
## Notifications for pull request reviews

{% data variables.product.prodname_desktop %} will surface a system notification when a teammate has approved, commented, or requested changes in your pull request. See "[About pull request reviews](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)" for more information on pull request reviews.

![Pull request review notification](/assets/images/help/desktop/pull-request-review-notification.png)

Clicking the notification will switch application focus to {% data variables.product.prodname_desktop %} and provide more context for the pull request review comment.

![pull request review dialog](/assets/images/help/desktop/pull-request-review-dialog.png)
## Enabling notifications

If system notifications are disabled for {% data variables.product.prodname_desktop %} you can follow the steps below to enable them.

{% mac %}

1. Click the **Apple** menu, then select **System Preferences**.
2. Select **Notifications & Focus**.
3. Select **{% data variables.product.prodname_desktop %}** from the list of applications.
4. Click **Allow Notifications**.

![macOS Notifications & Focus](/assets/images/help/desktop/mac-enable-notifications.png)

For more information about macOS system notifications, see "[Use notifications on your Mac](https://support.apple.com/en-us/HT204079)."

{% endmac %}

{% windows %}

1. Open the **Start** menu, then select **Settings**.
2. Select **System**, then click **Notifications**.
3. Find **{% data variables.product.prodname_desktop %}** in the application list and click **On**.

![Enable Windows Notifications](/assets/images/help/desktop/windows-enable-notifications.png)

For more information about Windows system notifications, see "[Change notification settings in Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)."

{% endwindows %}
