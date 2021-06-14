---
title: Gerenciar repositórios
intro: 'É possível gerenciar os repositórios conectados ao {% data variables.product.prodname_insights %} e os dados incluídos nas métricas de cada repositório.'
redirect_from:
  - /github/installing-and-configuring-github-insights/managing-repositories
  - /insights/installing-and-configuring-github-insights/managing-repositories
permissions: 'People with admin permissions in {% data variables.product.prodname_insights %} can manage repositories. '
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

### Sobre o gerenciamento de repositório

Para o {% data variables.product.prodname_insights %} incluir dados de um repositório no {% data variables.product.prodname_enterprise %}, é necessário adicionar a organização proprietária do repositório ao {% data variables.product.prodname_insights %}. Para obter mais informações, consulte "[Gerenciar organizações](/github/installing-and-configuring-github-insights/managing-organizations)".

Depois de adicionar uma organização ao {% data variables.product.prodname_insights %}, cada repositório pertencente à organização será importado automaticamente se o repositório:
- Tiver pelo menos um commit
- Não for privado
- Não estiver arquivado
- Tiver sido carregado nos últimos 6 meses

Os dados do repositório são atualizados por meio de webhooks e sincronizações periódicas. É possível atualizar manualmente os dados do repositório a qualquer momento ou cancelar a importação de dados em andamento.

{% data reusables.github-insights.repository-groups %}

Você pode excluir arquivos específicos do {% data variables.product.prodname_insights %} para um repositório específico ou para todos os repositórios.

### Sobre o tempo de importação

O {% data variables.product.prodname_insights %} importa os últimos três anos de dados para cada repositório. Dependendo do tamanho e complexidade dos seus repositórios, a importação inicial pode levar um tempo, durante o qual os dados do {% data variables.product.prodname_insights %} ficarão incompletos. Normalmente, a importação inicial de algumas equipes leva um ou dois dias. As importações iniciais grandes e complexas podem demorar até duas semanas.

| Tamanho do repositório   | Tempo da importação inicial |
| ------------------------ | --------------------------- |
| < 10.000 commits         | < 1 hora                    |
| 10.000 a 300.000 commits | 1 a 10 dias                 |
| 300.000 commits ou mais  | Mais de 10 dias             |

Uma vez concluída a importação inicial, as importações subsequentes de alterações incrementais devem demorar dois minutos ou menos.

Para reduzir os tempos de importação, você pode excluir quaisquer bibliotecas de terceiros em pastas não padrão do {% data variables.product.prodname_insights %} antes da importação. Para obter mais informações, consulte "[Gerenciar filtros de exclusão](#managing-exclusion-filters)".

Se você tiver muitos repositórios grandes, você poderá melhorar o tempo de importação inicial, fornecendo mais núcleos ao servidor do aplicativo. Servidores do aplicação com mais núcleos podem realizar mais trabalhos de importação paralelos.

| Núcleos do servidor do aplicativo | Trabalhos paralelos de importação inicial |
| --------------------------------- | ----------------------------------------- |
| 16 núcleos                        | 1 trabalho                                |
| 32 núcleos                        | 4 trabalhos                               |

A importação de um grande número de pull requests pode acionar a taxa limitadora de {% data variables.product.prodname_enterprise %}. Neste caso, a importação fará uma pausa por uma hora antes de ser restabelecida. Você pode aumentar temporariamente o limite de câmbio de {% data variables.product.prodname_enterprise %} para melhorar o tempo de importação. Para obter mais informações, consulte "[Configurar limites de taxa](/enterprise/{{ currentVersion }}/admin/installation/configuring-rate-limits)".

### Visualizar e gerenciar repositórios

Você pode visualizar os repositórios importados e os repositórios que estão disponíveis para importação. Se uma importação estiver em andamento, você poderá ver o status da importação e uma estimativa de tempo para a conclusão da importação.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repositories-tab %}
3. Opcionalmente, para adicionar um repositório que não foi importado, clique em **Adicionar** à direita do nome do repositório. ![Botão Add (Adicionar)](/assets/images/help/insights/add-button.png)
4. Opcionalmente, para atualizar manualmente os dados do repositório, clique em **{% octicon "sync" aria-label="The refresh icon" %}** no ícone de atualização à direita do nome do repositório. ![Botão de atualizar](/assets/images/help/insights/refresh-button.png)
5. Opcionalmente, para cancelar a importação em andamento, clique **Cancelar** à direita do nome do repositório. ![Botão cancelar](/assets/images/help/insights/cancel-button.png)
6. Opcionalmente, para remover um repositório importado, à direita do nome do repositório, clique em **Remover**. ![Botão Excluir](/assets/images/help/insights/remove-button.png)

### Gerenciar grupos de repositórios para relatórios

Você pode criar um grupo de repositórios, adicionar ou remover repositórios de um grupo e excluir um grupo de repositórios.

#### Criar um grupo de repositório

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
2. No canto superior direito da página, clique em **Criar grupo**. ![Botão Criar Grupo](/assets/images/help/insights/create-group.png)
3. Em "Nome do Grupo, digite um nome para o seu grupo. ![Campo Nome do Grupo](/assets/images/help/insights/group-name.png)
4. Clique em **Criar**.

#### Adicionar um repositório a um grupo de repositórios

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. Em "Repositórios", use o menu suspenso e selecione um repositório a ser adicionado ao grupo. ![Menu suspenso de repositórios](/assets/images/help/insights/repositories-drop-down.png)
5. Clique em **Cpncluído**.

#### Excluir um grupo de repositórios

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.repo-groups-tab %}
{% data reusables.github-insights.edit-group %}
4. Clique em **Excluir Grupo**. ![Botão Excluir Grupo](/assets/images/help/insights/delete-group.png)
5. Clique em **Confirmar**.

### Gerenciar filtros de exclusão

Você pode criar uma lista de regras de exclusão de arquivo para omitir arquivos especificados de todos os dados {% data variables.product.prodname_insights %}. As regras de exclusão de arquivos seguem as mesmas regras usadas nos arquivos *.gitignore*. Para obter mais informações, consulte "[gitignore](https://git-scm.com/docs/gitignore)" na documentação do Git.

#### Adicionar uma regra de exclusão de arquivo para todos os repositórios

Alterações nas exclusões globais de arquivos só se aplicam aos dados recém-importados e não afetarão os dados existentes retroativamente. Para aplicar novas regras de exclusão aos dados existentes, você pode remover e adicionar repositórios novamente ao {% data variables.product.prodname_insights %}.

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. Opcionalmente, em "Excluir arquivos", selecione **Incluir todos os binários**. ![Caixa de seleção para incluir todos os binários](/assets/images/help/insights/include-all-binaries-global.png)
4. No editor de código, adicione uma nova regra de exclusão à lista. ![Editor de código para adicionar a regra de exclusão global](/assets/images/help/insights/global-exclusion-list.png)
5. Clique em **Salvar as alterações**.

#### Adicionar uma regra de exclusão de arquivo para um repositório

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.exclude-files-tab %}
3. À direita do "Repositórios com filtros de arquivo", clique em **Adicionar filtro**. ![Botão Adicionar Filtro](/assets/images/help/insights/add-filter.png)
4. Use o menu suspenso "Repositório" e selecione um repositório. ![Menu suspenso Repositório](/assets/images/help/insights/repository-drop-down-exclude.png)
5. Opcionalmente, para aplicar as regras de exclusão aos dados existentes, selecione **Reimportar**. ![Caixa de seleção de reimportação](/assets/images/help/insights/re-import-checkbox.png)
6. Opcionalmente, selecione **Incluir todos os binários**. ![Caixa de seleção para incluir todos os binários](/assets/images/help/insights/include-all-binaries-repo.png)
7. No editor de código, adicione as regras de exclusão que você deseja aplicar ao repositório. ![Editor de código para adicionar regra de exclusão de repositório](/assets/images/help/insights/repo-exclusion-list.png)
8. Clique em **Criar Filtro**.
