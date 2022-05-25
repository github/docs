---
title: Visualizando e executando novamente as verificações no GitHub Desktop
shortTitle: Visualizando e executando novamente as verificações
intro: 'Você pode visualizar o status de verificações e executá-las novamente em {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
---

## Sobre as verificações em {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} exibe o status das verificações que executaram em seus branches de pull request. O selo de verificação ao lado do nome do branch exibirá o status de *pendente, passando,* ou *falhando* das verificações. Você também pode executar novamente todas falhas, ou verificações individuais ao visualizar o status das verificações em {% data variables.product.prodname_desktop %}. Para obter mais informações sobre como configurar verificações no seu repositório, consulte "[Sobre verificações de status](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)".

O {% data variables.product.prodname_desktop %} também mostrará uma notificação do sistema quando a verificação falhar. Para obter mais informações sobre notificações de habilitação, consulte "[Configurando notificações no GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)".

## Visualizando e executando novamente as verificações

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
  ![Guia Pull requests no menu suspenso Branch atual](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
{% data reusables.desktop.choose-pr-from-list %}
  ![Lista de pull requests em aberto no repositório](/assets/images/help/desktop/click-pull-request.png)
4. Clique no número do pull request, à direita do nome do branch do pull request. ![Exibição das verificações ao lado do nome do branch](/assets/images/help/desktop/checks-dialog.png)
5. Para executar novamente as verificações que falharam, clique em **{% octicon "sync" aria-label="The sync icon" %} Re-executar** e selecione **Executar novamente as verificações que falharam**. ![Executar novamente verificações falhadas](/assets/images/help/desktop/re-run-failed-checks.png)
6. Para executar novamente as verificações individuais, passe o mouse sobre a verificação individual que você deseja executar novamente e selecione o ícone {% octicon "sync" aria-label="The sync icon" %} para executar a verificação novamente. ![Executar novamente as verificações individuais](/assets/images/help/desktop/re-run-individual-checks.png)
7. Você verá uma caixa de diálogo com o resumo das verificações que serão executadas novamente. Clique em **Verificações da nova execução** para confirmar que você deseja executar a nova execução. ![Executar o diálogo de confirmação novamente](/assets/images/help/desktop/re-run-confirmation-dialog.png)
