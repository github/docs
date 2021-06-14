---
title: Gerenciar contribuidores e equipes
intro: É possível gerenciar as pessoas e equipes incluídas em métricas e relatórios.
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-contributors-and-teams
  - /insights/installing-and-configuring-github-insights/managing-contributors-and-teams
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage contributors and teams.'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### Sobre os contribuidores e equipes no {% data variables.product.prodname_insights %}

Um colaborador em {% data variables.product.prodname_insights %} é uma entidade associada aos dados do {% data variables.product.prodname_enterprise %}. Você pode editar e ocultar contribuidores.

Às vezes, a mesma pessoa pode aparecer como mais de um contribuidor. Por exemplo, se uma pessoa tiver usado vários endereços de e-mail do commit no Git, haverá um colaborador único para cada endereço de email em {% data variables.product.prodname_insights %}. Você pode fazer merge de vários colaboradores para combinar todos os dados de uma só pessoa.

Você também pode agrupar colaboradores em equipes. Você pode usar as equipes como filtro em relatórios. Para obter mais informações, consulte "[Visualizar métricas e relatórios principais](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)".

### Editar um contribuidor

Você pode editar o nome de exibição de um contribuidor em {% data variables.product.prodname_insights %}.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
4. Em "First Name" (nome), digite o primeiro nome do contribuidor. ![Campo de nome](/assets/images/help/insights/first-name.png)
5. Em "Las Name" (sobrenome), digite o último nome do contribuidor. ![Campo de sobrenome](/assets/images/help/insights/last-name.png)
6. Clique em **Rename** (Renomear).

### Gerenciar a visibilidade do contribuidor

Ocultar um contribuidor exclui de todas as métricas todos os dados associados a esse contribuidor.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
{% data reusables.github-insights.edit-contributor %}
3. Selecione ou desmarque **Mostrar contribuidor**. ![Caixa de seleção para mostrar ou ocultar contribuidor](/assets/images/help/insights/show-contributor.png)
4. Clique em **Cpncluído**.

### Mesclar dados do contribuidor

Ao fazer merge de dois ou mais contribuidores, os dados do {% data variables.product.prodname_insights %} para esses contribuidores tornam-se associados a um contribuidor principal. Todos os dados do contribuidor mesclados pertencem ao contribuidor principal nas métricas.

Você pode mesclar os contribuidores manualmente ou automaticamente, com base nos contribuidores que o {% data variables.product.prodname_insights %} detectou com nomes correspondentes.

#### Contribuidores de merge automático

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. Em "Todos os contribuidores, clique em **Merge automático** ![Botão de merge automático](/assets/images/help/insights/auto-merge.png)
4. Opcionalmente, para excluir um colaborador do merge, clique em **Ignorar** à direita do contribuidor. ![Botão ignorar](/assets/images/help/insights/skip-contributor.png)
5. Para cada grupo, selecione um contribuidor principal. ![Botões de opção para selecionar o contribuidor principal](/assets/images/help/insights/select-primary.png)
6. Clique em **Mesclar todos**.

#### Mesclar os contribuidores manualmente

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
3. Selecione os colaboradores que você deseja mesclar. ![Selecionar contribuidores](/assets/images/help/insights/select-contributors.png)
4. Em "Todos os contribuidores", clique em **Mesclar**. ![Botão mesclar](/assets/images/help/insights/merge-button.png)
5. Selecione um contribuidor primário. ![Botões de opção para selecionar o contribuidor principal](/assets/images/help/insights/select-primary.png)
6. Clique em **Mesclar contas**.

#### Desfazer o merge de um contribuidor

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.contributors-tab %}
4. À direita do contribuidor, clique em **Desfazer merge**. ![Botão de desfazer o merge](/assets/images/help/insights/unmerge-contributor.png)

### Gerenciar equipes no {% data variables.product.prodname_insights %}

Existem dois tipos de equipes em {% data variables.product.prodname_insights %}: equipes importadas de {% data variables.product.product_name %} e equipes personalizadas.

Quando uma organização é adicionada ao {% data variables.product.prodname_insights %}, todas as equipes da organização são importadas a partir de {% data variables.product.product_name %}. Você pode pesquisar e filtrar estas equipes em {% data variables.product.prodname_insights %}. Você pode gerenciar as equipes em {% data variables.product.product_name %}.

Você pode criar e gerenciar equipes personalizadas no {% data variables.product.prodname_insights %}. As equipes personalizadas podem incluir integrantes de várias organizações no {% data variables.product.product_name %}.

#### Criar uma equipe personalizada

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
2. À direita da "Equipe", clique em **Criar equipe**. ![Botão criar equipe](/assets/images/help/insights/create-team.png)
3. Em "Nome da Equipe", digite um nome único para sua equipe. ![Campo nome da equipe](/assets/images/help/insights/team-name.png)
4. Clique em **Criar**.

#### Adicionar contribuidores a uma equipe personalizada

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Em "Contribuidores", use o menu suspenso e selecione um contribuidor. ![Menu suspenso de contribuidores](/assets/images/help/insights/contributors-drop-down.png)
4. Clique em **Cpncluído**.

#### Remover um contribuidor de uma equipe personalizada

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. À direita do contribuidor que você deseja remover, clique em {% octicon "trash" aria-label="The trash icon" %}. ![botão da lixeira](/assets/images/help/insights/contributor-trashcan.png)

#### Renomear uma equipe personalizada

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Em "Nome da Equipe", digite um nome único para sua equipe. ![Campo nome da equipe](/assets/images/help/insights/rename-team.png)
4. Clique em **Rename** (Renomear). ![Botão renomear](/assets/images/help/insights/rename-button-team.png)
5. Clique em **Cpncluído**.

#### Excluir uma equipe personalizada

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.teams-tab %}
{% data reusables.github-insights.edit-team %}
3. Clique em **Excluir equipe**. ![Botão excluir equipe](/assets/images/help/insights/delete-team.png)
4. Clique em **Confirmar**.
