---
title: O editor github.dev baseado na web
intro: 'Use o github.dev {% data variables.product.prodname_serverless %} do seu repositório ou pull request para criar e fazer commit das alterações.'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Editor baseado na web
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
---

{% note %}

**Observação:** O github.dev {% data variables.product.prodname_serverless %} está atualmente em visualização beta. Você pode fornecer feedback [nas nossas discussões](https://github.co/browser-editor-feedback).

{% endnote %}

## Sobre o {% data variables.product.prodname_serverless %}

O {% data variables.product.prodname_serverless %} introduz uma experiência leve de edição, que é executada inteiramente no seu navegador. Com o {% data variables.product.prodname_serverless %}, você pode navegar por arquivos e repositórios de código-fonte do {% data variables.product.prodname_dotcom %}, bem como efetuar e fazer comite das alterações de código. É possível abrir qualquer repositório, bifurcação ou pull request no editor.

O {% data variables.product.prodname_serverless %} está disponível para todos gratuitamente em {% data variables.product.prodname_dotcom_the_website %}.

O {% data variables.product.prodname_serverless %} fornece muitos dos benefícios de {% data variables.product.prodname_vscode %}, como pesquisa, destaque de sintaxe e uma visão de controle de origem. Você também pode usar a sincronização de configuração para compartilhar suas próprias configurações {% data variables.product.prodname_vscode_shortname %} com o editor. Para obter mais informações, consulte "[Sincronização de configurações](https://code.visualstudio.com/docs/editor/settings-sync)" na documentação de {% data variables.product.prodname_vscode_shortname %}.

O {% data variables.product.prodname_serverless %} é executado inteiramente no sandbox do seu navegador. O editor não clona o repositório, mas usa a [Extensão de repositórios do GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) para realizar a maior parte das funcionalidades que você usará. Seu trabalho é salvo no armazenamento local do navegador até que você faça commit dele. Você deve fazer commit das alterações regularmente para garantir que estejam sempre acessíveis.

## Abrindo o {% data variables.product.prodname_serverless %}

Você pode abrir qualquer repositório de {% data variables.product.prodname_dotcom %} em {% data variables.product.prodname_serverless %} em qualquer uma das seguintes maneiras:

- Para abrir o repositório na mesma guia do navegador, pressione `.` enquanto navega em qualquer repositório ou pull request no {% data variables.product.prodname_dotcom %}.

   Para abrir o repositório em uma nova aba do navegador, mantenha pressionada a tecla shift e pressione `.`.

- Alterando a URL de "github.com" para "github.dev".
- Ao visualizar um arquivo, use o menu suspenso ao lado de {% octicon "pencil" aria-label="The edit icon" %} e selecione **Abrir no github.dev**.

  ![Menu suspenso do botão editar arquivo](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} e {% data variables.product.prodname_serverless %}

Tanto o {% data variables.product.prodname_serverless %} quanto o {% data variables.product.prodname_github_codespaces %} permitem que você edite seu código diretamente do seu repositório. No entanto, ambos têm benefícios ligeiramente diferentes, dependendo da sua utilização.

|                        | {% data variables.product.prodname_serverless %}                                                                                                                                                                     | {% data variables.product.prodname_codespaces %}
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Custo**              | Grátis.                                                                                                                                                                                                              | Custos de computação e armazenamento. Para obter informações sobre os preços, consulte "[Preços de codespaces](/en/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)"                                                                                                                               |
| **Disponibilidade**    | Disponível para todos no GitHub.com.                                                                                                                                                                                 | Disponível para organizações que usam o GitHub Team ou GitHub Enterprise Cloud.                                                                                                                                                                                                                                                                   |
| **Inicialização**      | O {% data variables.product.prodname_serverless %} abre instantaneamente com um toque de tecla e você pode começar a usá-lo imediatamente, sem ter que esperar por uma configuração ou instalação adicional.         | Ao criar ou retomar um codespace, o código é atribuído a uma VM e o contêiner é configurado com base no conteúdo de um arquivo `devcontainer.json`. Essa configuração pode levar alguns minutos para criar o ambiente. Para obter mais informações, consulte "[Criando um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)". |
| **Calcular**           | Não há nenhum computador associado. Portanto você não conseguirá criar e executar o seu código ou usar o terminal integrado.                                                                                         | Com {%  data   variables.product.prodname_codespaces %}, você obtém o poder da VM dedicada na qual você pode executar e depurar seu aplicativo.                                                                                                                                                                                                   |
| **Acesso ao terminal** | Nenhum.                                                                                                                                                                                                              | {% data variables.product.prodname_codespaces %} fornece um conjunto comum de ferramentas por padrão, o que significa que você pode usar o Terminal exatamente como você faria no seu ambiente local.                                                                                                                                             |
| **Extensões**          | Apenas um subconjunto de extensões que podem ser executadas na web aparecerão na visualização de extensões e podem ser instaladas. Para obter mais informações, consulte "[Usando as extensões](#using-extensions)." | Com os codespaces, você pode usar a maioria das extensões do {% data variables.product.prodname_vscode_marketplace %}.                                                                                                                                                                                                                          |

### Continue trabalhando em {%  data   variables.product.prodname_codespaces %}

Você pode iniciar seu fluxo de trabalho em {% data variables.product.prodname_serverless %} e continuar trabalhando em um codespace, desde que você tenha [acesso a {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces). Se você tentar acessar a janela ou terminal Executar e Depurarl, você receberá uma mensagem de que eles não estão disponíveis em {% data variables.product.prodname_serverless %}.

Para continuar seu trabalho em um codespace, clique em **Continuar trabalho em…** e selecione **Criar novo codespace** para criar um codespace no seu branch atual. Antes de selecionar esta opção, você precisa fazer commit de quaisquer alterações.

![Uma captura de tela que mostra o botão "Continuar trabalhando em" na interface do usuário](/assets/images/help/codespaces/codespaces-continue-working.png)

## Usando controle de origem

Ao usar o {% data variables.product.prodname_serverless %}, todas as ações são gerenciadas por meio da Visualização de Controle de Origem, localizado na Barra de Atividades do lado esquerdo. Para obter mais informações sobre a Visualização de Controle de Origem, consulte "[Controle de Versão](https://code.visualstudio.com/docs/editor/versioncontrol)" na documentação de {% data variables.product.prodname_vscode_shortname %}.

Como o editor da web usa a extensão dos repositórios do GitHub para melhorar suas funcionalidades, você pode alternar entre branches sem precisar ocultar alterações. Para obter mais informações, consulte "[Repositórios no GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)" na documentação do {% data variables.product.prodname_vscode_shortname %}.

### Criar um branch

{% data reusables.codespaces.create-or-switch-branch %}
  Quaisquer alterações não feitas no seu branch antigo estarão disponíveis no seu novo branch.

### Faça commit das suas alterações

{% data reusables.codespaces.source-control-commit-changes %}
5. Depois de ter feito as commit das suas alterações, elas serão automaticamente enviadas para o seu branch em {% data variables.product.prodname_dotcom %}.
### Criar um pull request

{% data reusables.codespaces.source-control-pull-request %}

### Trabalhando com um pull request existente

Você pode usar o {% data variables.product.prodname_serverless %} para trabalhar com um pull request existente.

1. Acesse o pull request que você gostaria de abrir em {% data variables.product.prodname_serverless %}.
2. Pressione `.` para abrir o pull request no {% data variables.product.prodname_serverless %}.
3. Depois de fazer as alterações, faça o commit delas seguindo as etapas em de [Fazer commit das suas alterações](#commit-your-changes). As suas alterações serão registradas diretamente no branch. Não é necessário fazer push das alterações.

## Usando extensões

O {% data variables.product.prodname_serverless %} é compatível com extensões de {% data variables.product.prodname_vscode_shortname %} que foram especificamente criadas ou atualizadas para serem executadas na web. Essas extensões são conhecidas como "extensões da web". Para saber como criar uma extensão da web ou atualizar sua extensão existente para funcionar na web, consulte "[Extensões da web](https://code.visualstudio.com/api/extension-guides/web-extensions)" na documentação de {% data variables.product.prodname_vscode_shortname %}.

As extensões que podem ser executadas no {% data variables.product.prodname_serverless %} aparecerão na vista de Extensões e poderão ser instaladas. Se você usar a Sincronização de Configurações, todas as extensões compatíveis também são instaladas automaticamente. Para obter informações, consulte "[Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync)" na documentação de {% data variables.product.prodname_vscode_shortname %}.


## Solução de Problemas

Se você tiver problemas ao abrir {% data variables.product.prodname_serverless %}, tente o seguinte:

- Verifique se você está conectado a {% data variables.product.prodname_dotcom %}.
- Desabilita qualquer bloqueador de anúncios.
- Use uma janela não anônima no seu navegador para abrir o {% data variables.product.prodname_serverless %}.

### Limitações conhecidas

- O {% data variables.product.prodname_serverless %} atualmente é compatível com o Chrome (e vários outros navegadores baseados no Chromium), Edge, Firefox e Safari. Recomendamos que você use as versões mais recentes desses navegadores.
- Algumas teclas de atalho podem não funcionar, dependendo do navegador que você estiver usando. Essas limitações de atalhos de tecla estão documentadas na seção "[Limitações e adaptações conhecidas](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" da documentação de {% data variables.product.prodname_vscode_shortname %}.
- `.` pode não funcionar para abrir o {% data variables.product.prodname_serverless %} de acordo com o layout local do teclado. Nesse caso, você pode abrir qualquer repositório {% data variables.product.prodname_dotcom %} em {% data variables.product.prodname_serverless %} alterando o URL de `github.com` para `github.dev`.
