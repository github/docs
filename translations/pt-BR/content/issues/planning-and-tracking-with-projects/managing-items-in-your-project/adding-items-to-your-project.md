---
title: 'Adicionando itens ao seu {% data variables.projects.project_v2 %}'
shortTitle: Adicionando itens
intro: 'Aprenda a adicionar pull requests, problemas e problemas de rascunho aos seus projetos individualmente ou em massa.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

{% note %}

**Observação:** Um projeto pode conter no máximo 1.200 itens e 10.000 itens arquivados.

{% endnote %}

### Adicionar problemas e pull requests a um projeto

#### Colando a URL de um problema ou pull request

{% data reusables.projects.add-item-via-paste %}

#### Pesquisando um problema ou pull request

{% data reusables.projects.add-item-bottom-row %}
2. Digite <kbd>#</kbd>.
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções. ![Captura de tela que mostra como colar a URL do problema para adicioná-lo ao projeto](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções. ![Captura de tela que mostra como colar a URL do problema para adicioná-lo ao projeto](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Adicionando problemas e pull requests em massa

1. Na linha inferior do projeto, clique em {% octicon "plus" aria-label="plus icon" %}. ![Captura de tela que mostra o botão + na parte inferior do projeto](/assets/images/help/projects-v2/omnibar-add.png)
1. Clique **Adicionar item do repositório**. ![Captura de tela que mostra o item do menu "adicionar item do repositório"](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### Adicionando vários problemas ou pull requests de um repositório

1. No {% data variables.product.product_location %}, acesse o repositório que contém os problemas ou pull requests que você deseja adicionar ao projeto.
{% data reusables.repositories.sidebar-issue-pr %}
1. À esquerda de cada título do problema, selecione os problemas que você deseja adicionar ao seu projeto. ![Captura de tela que mostra caixa de seleção para selecionar problema ou pull request](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para selecionar cada problema ou pull request na página, na parte superior da lista de problemas ou pull requests, selecione tudo. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/issues/select-all-checkbox.png)
1. Acima da lista de problemas ou pull requests, clique em **Projetos**. ![Captura de tela que mostra a opção dos projetos](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Clique nos projetos aos quais você deseja adicionar os problemas selecionados ou pull requests. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**. ![Captura de tela que mostra "Projetos" na barra lateral dos problemas](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request. ![Captura de tela que mostra seleção de projeto da barra lateral do problema](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Opcionalmente, preencha os campos personalizados.![Barra lateral do projeto](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Usando a paleta de comandos para adicionar um problema ou pull request

1. {% data reusables.projects.open-command-palette %}
1. Comece a digitar "Adicionar itens" e pressione <kbd>Returnar</kbd>.
{% data reusables.projects.bulk-add %}

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente. Ao contrário dos problemas e pull requests que são referenciados de seus repositórios, os problemas de rascunho só existem no seu projeto.

{% data reusables.projects.add-draft-issue %}

Os problemas do rascunho podem ter um título, texto, responsável e quaisquer campos personalizados do seu projeto. Para preencher o repositório, etiquetas ou marcos para o rascunho de um problema, você deverá primeiro converter o rascunho do problema em um problema. Para obter mais informações, consulte "[Convertendo rascunhos de problema em problemas](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues). "

{% note %}

**Observação**: Os usuários não receberão notificações quando forem atribuídos ou mencionados em um rascunho de problema, a menos que o rascunho do probelam seja convertido em um problema.

{% endnote %}
