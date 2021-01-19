---
title: Configurar as configurações-padrão para repositórios de atribuição
shortTitle: Configurar padrões para repositórios de atribuição
intro: Você pode usar o aplicativo de Configurações do Probot para definir as configurações-padrão para repositórios que {% data variables.product.prodname_classroom %} cria para uma atribuição.
permissions: Os proprietários da organização podem definir as configurações-padrão para repositórios de atribuições instalando um {% data variables.product.prodname_github_app %} para a organização.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/probot-settings
---

### Sobre a configuração de padrões para repositórios de atribuições

{% data variables.product.prodname_classroom %} cria um repositório que pertence a cada aluno ou equipe que aceita uma atribuição. O repositório pertence à organização que você utiliza para {% data variables.product.prodname_classroom %}. Repositórios de atribuições podem estar vazios ou você pode usar um repositório-modelo. Para obter mais informações, consulte "[Criar uma atribuição a partir de um repositório modelo](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)".

{% data reusables.classroom.you-may-want-to-predefine-repository-settings %}

Com o aplicativo de configurações do Probot, você pode criar um arquivo denominado _.github/settings.yml_ em um repositório que contém uma lista de configurações para o repositório e, em seguida, instalar um {% data variables.product.prodname_github_app %} para a sua organização que aplica automaticamente as configurações do repositório.

Você pode incluir _.github/settings.yml_ em um repositório de modelo que você usa para uma atribuição em {% data variables.product.prodname_classroom %}. Quando um indivíduo ou equipe aceita a atribuição, {% data variables.product.prodname_classroom %} cria o repositório de atribuições, e o aplicativo de configurações aplica automaticamente as configurações do _.github/settings.yml_.

O Probot é um projeto, estrutura e coleção de aplicativos grátis para automatizar o {% data variables.product.product_name %}. Um aplicativo Probot pode ouvir eventos do repositório, como a criação de novos commits, comentários e problemas, e automaticamente responder ao evento.

Para obter mais informações, consulte o site do Probot [](https://probot.github.io) e o [site de aplicativos configurações](https://probot.github.io/apps/settings/). Para obter mais informações sobre {% data variables.product.prodname_github_apps %}, consulte "[Sobre aplicativos](/developers/apps/about-apps)".

### Adicionar o aplicativo de configurações à sua organização

Após instalar o aplicativo de configurações do Probot para sua organização, o aplicativo irá aplicar as configurações que você definir em _.github/settings.yml_ para qualquer repositório na sua organização, incluindo novos repositórios de atribuições que {% data variables.product.prodname_classroom %} cria.

1. Navegue até a [página do aplicativo de configurações](https://github.com/apps/settings).
1. Clique em **Instalar** e, em seguida, clique na organização que você usa para {% data variables.product.prodname_classroom %}. Forneça acesso total ao aplicativo para todos os repositórios pertencentes à organização. ![Instalar o aplicativo de configurações Probot](/assets/images/help/classroom/probot-settings.gif)

### Definir as configurações-padrão para um repositório de atribuição

1. Crie um repositório de modelo que contenha um arquivo _.github/settings.yml_. Para obter uma lista completa de configurações, consulte o [LEIAME](https://github.com/probot/settings#github-settings) para o repositório `probot/settings`. Para obter mais informações sobre o uso de um repositório de modelo para o código inicial em {% data variables.product.prodname_classroom %}, consulte "[Criar uma atribuição a partir de um repositório de modelo](/education/manage-coursework-with-github-classroom/create-an-assignment-from-a-template-repository)".

    {% warning %}

    **Aviso:** Não defina os `colaboradores` no arquivo _.github/settings.yml_ para o repositório de modelo. {% data variables.product.prodname_classroom %} concede automaticamente a professores e assistentes de professores acesso aos repositórios de atribuições.

    {% endwarning %}

1. Crie uma atribuição usando o repositório de modelo que contém _.github/settings.yml_ como código inicial. {% data reusables.classroom.for-more-information-about-assignment-creation %}

Agora, o aplicativo de configurações do Probot para sua organização aplicará as configurações que você definir em _.github/settings.yml_ dentro do repositório de modelo para cada repositório de atividade que {% data reusables.classroom.you-may-want-to-predefine-repository-settings %} criar para um aluno ou equipe.

### Leia mais

- [Aplicativos do Probot](https://probot.github.io/apps/)
- [Documentação do Probot](https://probot.github.io/docs/)
