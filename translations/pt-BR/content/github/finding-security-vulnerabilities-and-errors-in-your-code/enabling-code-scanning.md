---
title: Habilitar a varredura de código
intro: 'Você pode habilitar o {% data variables.product.prodname_code_scanning %} para o repositório do seu projeto.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'As pessoas com permissões de gravação em um repositório podem habilitar o {% data variables.product.prodname_code_scanning %} para o repositório.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
versions:
  free-pro-team: '*'
---

{% data reusables.code-scanning.beta %}

### Habilitar o {% data variables.product.prodname_code_scanning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. À direita de "Varredura de código", clique em **Configurar a varredura de código**. ![Botão de "Configurar a varredura de código" à direita de "Varredura de código" na Visão Geral de Segurança](/assets/images/help/security/overview-set-up-code-scanning.png)
4. Em "Comece com a varredura de código", clique em **Configurar este fluxo de trabalho**. ![Botão "Configurar este fluxo de trabalho" no cabeçalho "Comece com a varredura do código" cabeçalho](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. Opcionalmente, para personalizar a forma como {% data variables.product.prodname_code_scanning %} faz a varredura do seu código, edite o fluxo de trabalho. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."
6. Use o menu suspenso **Iniciar commit** e digite uma mensagem de commit. ![Iniciar commit](/assets/images/help/repository/start-commit-commit-new-file.png)
7. Escolha se você gostaria de fazer commit diretamente no branch-padrão ou criar um novo branch e iniciar um pull request. ![Escolher onde fazer commit](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. Clique em **Fazer commit do novo arquivo** ou **Propor novo arquivo**.

Depois que você confirmar o arquivo de fluxo de trabalho ou criar um pull request, {% data variables.product.prodname_code_scanning %} analisará seu código de acordo com a frequência especificada no arquivo de fluxo de trabalho. Se você criou um pull request, o {% data variables.product.prodname_code_scanning %} somente analisará o código no branch de tópico do pull request até você mesclar o pull request no branch-padrão do repositório.

### Próximas etapas

Após ativar o {% data variables.product.prodname_code_scanning %}, você poderá monitorar a análise, visualizar os resultados e personalizar ainda mais a forma como faz a varredura do seu código.

- Você pode visualizar o status de execução de {% data variables.product.prodname_code_scanning %} e obter notificações referentes às execuções concluídas. Para obter mais informações, consulte "[Gerenciar a execução de um fluxo de trabalho](/actions/configuring-and-managing-workflows/managing-a-workflow-run)" e "[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)".
- Após a conclusão de uma varredura, você pode visualizar alertas de uma varredura concluída. Para obter mais informações, consulte "[Gerenciando alertas do {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)."
- É possível personalizar a forma como o {% data variables.product.prodname_code_scanning %} faz a varredura do código no repositório. Para obter mais informações, consulte "[Configurar a verificação de código](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)".
