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
   - Por exemplo, se você adiciionar `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` a um problema, este irá rastrear o alerta de digitalização de código que tem um número de identificação 17 na aba "Segurança" do repositório `octocat-repo` na organização `octocat-org`.

Você pode usar mais de um problema para rastrear o mesmo alerta de {% data variables.product.prodname_code_scanning %} e os problemas podem pertencer a diferentes repositórios onde o alerta {% data variables.product.prodname_code_scanning %} foi encontrado.


{% data variables.product.product_name %} fornece instruções visuais em diferentes locais da interface de usuário para indicar quando você está monitorando alertas de {% data variables.product.prodname_code_scanning %} em problemas.

- A página da lista de alertas de digitalização de código mostrará quais alertas são rastreados nos problemas para que você possa ver com rapidamente quais alertas ainda precisam de processamento.

  ![Tracked in pill on code scanning alert page](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- Uma seção "rastreado em" também será exibida na página de alerta correspondente.

  ![A anotação rastreada na página de alerta de digitalização do código](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png)

- No problema de rastreado, {% data variables.product.prodname_dotcom %} exibe um ícone do selo de segurança na lista de tarefas e no hovercard.

  {% note %}

  Somente os usuários com permissões de gravação no repositório verão a URL não desenvolvida para o alerta na issue, bem como o hovercard. Para usuários com permissões de leitura no repositório, ou sem qualquer permissão, o alerta aparecerá como uma URL simples.

  {% endnote %}

  A cor do ícone é cinza porque um alerta tem um status de "aberto" ou "fechado" em cada branch. O problema rastreia um alerta para que o alerta não possa ter um único estado aberto/fechado no problema. Se o alerta for fechado em um branch, a cor do ícone não será alterada.

  ![Hovercard no problema rastreado](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

O status do alerta rastreado não mudará se você alterar o status da caixa de seleção do item da lista de tarefas correspondente (marcado/desmarcado) no problema.

## Criando um problema de rastreamento a partir de um alerta de digitalização de código

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes or ghae %}
{% data reusables.code-scanning.explore-alert %}
1. Opcionalmente, para encontrar o alerta a rastrear, você pode usar a pesquisa de texto livre ou os menus suspensos para filtrar e localizar o alerta. Para obter mais informações, consulte "[Gerenciar alertas de varredura de código para seu repositório](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts). "
{% endif %}
1. Na parte superior da página, no lado direito, clique em **Criar problema**. ![Crie um problema de rastreamento para o alerta de digitalização de código](/assets/images/help/repository/code-scanning-create-issue-for-alert.png)
   {% data variables.product.prodname_dotcom %} cria automaticamente um problema para acompanhar o alerta e adiciona o alerta como um item da lista de tarefas.
   {% data variables.product.prodname_dotcom %} preenche o problema:
   - O título contém o nome do alerta de {% data variables.product.prodname_code_scanning %}.
   - O texto contém o item da lista de tarefas com a URL completa para o alerta de {% data variables.product.prodname_code_scanning %}.
2. Opcionalmente, edite o título e o texto do problema.
   {% warning %}

    **Aviso:** Você deverá editar o título do problema, pois pode expor informações de segurança. Você também pode editar o texto do problema, mas não edite o item da lista de tarefas ou o problema não irá mais rastrear o alerta.
   {% endwarning %}

   ![Novo problema de rastreamento para o alerta de digitalização de código](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Clique em **Enviar novo problema**.
