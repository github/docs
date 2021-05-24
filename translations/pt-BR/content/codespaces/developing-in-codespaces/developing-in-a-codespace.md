---
title: Desenvolver em um codespace
intro: 'Você pode abrir um codespace em {% data variables.product.product_name %} e, em seguida, desenvolver usando os recursos do {% data variables.product.prodname_vscode %}.'
permissions: Anyone can develop in a codespace owned by their user account.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Sobre o desenvolvimento com {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} fornece a você a experiência completa de desenvolvimento de {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Visão geral do codespace com anotações](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Barra lateral - Por padrão, esta área mostra os arquivos do seu projeto no Explorador.
2. Barra de Atividades - Exibe a visualização e fornece uma maneira de alternar entre elas. Você pode reordenar as Visualizações arrastando e soltando-as.
3. Editor - É aqui que você edita seus arquivos. Você pode usar a aba para cada editor para posicioná-lo exatamente onde você precisa.
4. Painéis - É aqui que você pode visualizar as informações de saída e depuração, bem como o local padrão para o Terminal integrado.
5. Barra de Status - Esta área fornece informações úteis sobre seu codespace e projeto. Por exemplo, o nome da agência, portas configuradas e muito mais.

Para obter mais informações sobre como usar {% data variables.product.prodname_vscode %}, consulte o [Guia da Interface do Usuário](https://code.visualstudio.com/docs/getstarted/userinterface) na documentação de {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} Para obter mais informações, consulte "[Solucionar problemas do seu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

#### Personalizando seu codespace

{% data reusables.codespaces.about-personalization %} Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)".

{% data reusables.codespaces.apply-devcontainer-changes %} Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para o seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".

#### Executando seu aplicativo a partir de um codespace
{% data reusables.codespaces.about-port-forwarding %} Para obter mais informações, consulte "[Encaminhar portas no seu codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

#### Committing your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Acessar um codespace existente

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. Clique no nome do codespace em que você deseja desenvolver. ![Nome do codespace](/assets/images/help/codespaces/click-name-codespace.png)

Como alternativa, você pode ver quaisquer codespaces ativos para um repositório, acessando o repositório no qual ele foi criado e selecionando **{% octicon "codespaces" aria-label="The codespaces icon" %} Codespaces**.
