---
title: Rastreamento código de alerta em problemas que usam listas de tarefas
shortTitle: Rastrear alertas em problemas
intro: Você pode adicionar alertas de digitalização de código a problemas usando a lista de tarefas. Isto facilita a criação de um plano de trabalho de desenvolvimento que inclui a fixação de alertas.
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  fpt: '*'
  ghes: '> 3.3'
  ghae: issue-5036
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
---

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## Sobre o rastreamento de alertas de {% data variables.product.prodname_code_scanning %} em problemas

{% data reusables.code-scanning.github-issues-integration %}

Você também pode criar um novo problema para rastrear um alerta:
- De um alerta de {% data variables.product.prodname_code_scanning %}, que adiciona automaticamente o alerta de digitalização de código a uma lista de tarefas no novo problema. Para obter mais informações, consulte "[Criando um problema de rastreamento a partir de um alerta de {% data variables.product.prodname_code_scanning %}](#creating-a-tracking-issue-from-a-code-scanning-alert)" abaixo.

- Através da API como você normalmente faria e, em seguida, fornecer o link de digitalização de código dentro do texto do problema. Você deve usar a sintaxe da lista de tarefas para criar o relacionamento rastreado:
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - For example, if you add `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` to an issue, the issue will track the code scanning alert that has an ID number of 17 in the "Security" tab of the `octocat-repo` repository in the `octocat-org` organization.

Você pode usar mais de um problema para rastrear o mesmo alerta de {% data variables.product.prodname_code_scanning %} e os problemas podem pertencer a diferentes repositórios onde o alerta {% data variables.product.prodname_code_scanning %} foi encontrado.


{% data variables.product.product_name %} provides visual cues in different locations of the user interface to indicate when you are tracking {% data variables.product.prodname_code_scanning %} alerts in issues.

- The code scanning alerts list page will show which alerts are tracked in issues so that you can view at a glance which alerts still require processing.

  ![Tracked in pill on code scanning alert page](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- A "tracked in" section will also show in the corresponding alert page.

  ![Tracked in section on code scanning alert page](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png)

- On the tracking issue, {% data variables.product.prodname_dotcom %} displays a security badge icon in the task list and on the hovercard.

  {% note %}

  Only users with write permissions to the repository will see the unfurled URL to the alert in the issue, as well as the hovercard. For users with read permissions to the repository, or no permissions at all, the alert will appear as a plain URL.

  {% endnote %}

  The color of the icon is grey because an alert has a status of "open" or "closed" on every branch. The issue tracks an alert, so the alert cannot have a single open/closed state in the issue. If the alert is closed on one branch, the icon color will not change.

  ![Hovercard in tracking issue](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

The status of the tracked alert won't change if you change the checkbox state of the corresponding task list item (checked/unchecked) in the issue.

## Creating a tracking issue from a code scanning alert

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes or ghae-next %}
{% data reusables.code-scanning.explore-alert %}
1. Optionally, to find the alert to track, you can use the free-text search or the drop-down menus to filter and locate the alert. Para obter mais informações, consulte "[Gerenciar alertas de varredura de código para seu repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts). "
{% endif %}
1. Towards the top of the page, on the right side, click **Create issue**. ![Create a tracking issue for the code scanning alert](/assets/images/help/repository/code-scanning-create-issue-for-alert.png)
   {% data variables.product.prodname_dotcom %} automatically creates an issue to track the alert and adds the alert as a task list item.
   {% data variables.product.prodname_dotcom %} prepopulates the issue:
   - The title contains the name of the {% data variables.product.prodname_code_scanning %} alert.
   - The body contains the task list item with the full URL to the {% data variables.product.prodname_code_scanning %} alert.
2. Optionally, edit the title and the body of the issue.
   {% warning %}

    **Warning:** You may want to edit the title of the issue as it may expose security information. You can also edit the body of the issue, but do not edit the task list item or the issue will no longer track the alert.
   {% endwarning %}

   ![New tracking issue for the code scanning alert](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Click **Submit new issue**.
