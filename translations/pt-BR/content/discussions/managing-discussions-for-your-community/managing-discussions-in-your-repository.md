---
title: Gerenciar discussões no seu repositório
intro: 'Você pode categorizar, destacar e transferir ou excluir as discussões de um repositório.'
permissions: Repository administrators and people with write or greater access to a repository can manage discussions in the repository.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### Sobre o gerenciamento de discussões

{% data reusables.discussions.about-discussions %} Para obter mais informações sobre discussões, consulte[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Os proprietários da organização podem escolher as permissões necessárias para criar uma discussão para repositórios pertencentes à organização. Para obter mais informações, consulte "[Gerenciar a criação de discussões para repositórios na sua organização](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)".

Como mantenedor de discussões, você pode criar recursos da comunidade para incentivar discussões alinhadas com o objetivo geral do projeto e manter um fórum aberto amigável para os colaboradores. Criar um código de conduta ou diretrizes de contribuição para os colaboradores a seguir ajudará a facilitar um fórum colaborativo e produtivo. Para obter mais informações sobre como criar recursos da comunidade, consulte "[Adicionar um código de conduta ao seu projeto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" e "[Diretrizes de configuração para contribuidores do repositório](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

Para obter mais informações sobre como facilitar uma discussão saudável, consulte "[Moderar comentários e conversas](/communities/moderating-comments-and-conversations)".

### Pré-requisitos

Para gerenciar as discussões em um repositório, as discussões devem ser habilitadas para o repositório. Para obter mais informações, consulte "[Habilitar ou desabilitar discussões para um repositório](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository). ".

### Alterar a categoria para uma discussão

Você pode categorizar discussões para ajudar os integrantes da comunidade a encontrar discussões relacionadas. Para obter mais informações, consulte "[Gerenciar categorias para discussões no seu repositório](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)".

Você também pode mover a discussão para uma categoria diferente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "pencil" aria-label="The pencil icon" %} **Editar discussão fixada**. !["Fixar discussão" na barra lateral direita para discussão](/assets/images/help/discussions/click-edit-pinned-discussion.png)

### Fixar uma discussão

Você pode fixar até quatro discussões importantes acima da lista de discussões para o repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "pin" aria-label="The pin icon" %} **Fixar discussão**. !["Fixar discussão" na barra lateral direita para discussão](/assets/images/help/discussions/click-pin-discussion.png)
1. Opcionalmente, personalize a aparência da discussão fixada. ![Opções de personalização para uma discussão fixada](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Clique em **Fixar discussão**. ![Botão "Fixar discussão" nas opções de personalização para discussão fixada](/assets/images/help/discussions/click-pin-discussion-button.png)

### Editar uma discussão fixada

Editar uma discussão fixada não irá alterar a categoria da discussão. Para obter mais informações, consulte "[Gerenciar categorias para discussões no seu repositório](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "pencil" aria-label="The pencil icon" %} **Editar discussão fixada**. !["Fixar discussão" na barra lateral direita para discussão](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. Personalize a aparência da discussão fixada. ![Opções de personalização para uma discussão fixada](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Clique em **Fixar discussão**. ![Botão "Fixar discussão" nas opções de personalização para discussão fixada](/assets/images/help/discussions/click-pin-discussion-button.png)

### Desafixar uma discussão

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "pin" aria-label="The pin icon" %} **Desafixar discussão**. !["Desafixar discussão" na barra lateral direita para discussão](/assets/images/help/discussions/click-unpin-discussion.png)
1. Leia o aviso e clique em **desafixar discussão**. ![Botão "Desafixar discussão" abaixo do aviso em modal](/assets/images/help/discussions/click-unpin-discussion-button.png)

### Transferir uma discussão

Para transferir uma discussão, você precisa ter permissão de criar discussões no repositório, em que você deseja transferir a discussão.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transferir discussão**. !["Transferir discussão" na barra lateral direita para discussão](/assets/images/help/discussions/click-transfer-discussion.png)
1. Selecione a lista suspensa **Escolher um repositório** e clique no repositório para o qual deseja transferir a discussão. ![Menu suspenso "Selecionar um repositório" Campo de pesquisar "Encontrar um repositório" e repositório na lista](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. Clique em **Transferir discussão**. ![Botão "Transferir discussão"](/assets/images/help/discussions/click-transfer-discussion-button.png)

### Excluir uma discussão

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. Na barra lateral direita, clique em {% octicon "trash" aria-label="The trash arrow icon" %} **Excluir discussão**. !["Excluir discussão" na barra lateral direita para discussão](/assets/images/help/discussions/click-delete-discussion.png)
1. Leia o aviso e clique **Excluir esta discussão**. ![Botão "Excluir esta discussão" abaixo do aviso em modal](/assets/images/help/discussions/click-delete-this-discussion-button.png)

### Converter problemas com base em etiquetas

Você pode converter todos as etiquetas com a mesma etiqueta para discussões em massa. Os problemas futuros com essa etiqueta também serão automaticamente convertidos em discussão e categoria que você configurar.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. Ao lado da etiqueta que você deseja converter em problemas, clique em **Converter problemas**.
1. Selecione o menu suspenso **Escolher uma categoria** e clique em uma categoria para a sua discussão.
1. Clique em **Eu entendo. Converta esse problema em uma discussão**.
