---
title: Quickstart for Codespaces
intro: 'Try out {% data variables.product.prodname_codespaces %} in 5 minutes.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

## Introdução

In this guide, you'll create a codespace from a [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and explore some of the essential features available to you within the codespace.

From this quickstart, you will learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

For more information on exactly how {% data variables.product.prodname_codespaces %} works, see the companion guide "[Deep dive into {% data variables.product.prodname_codespaces %}](/codespaces/getting-started/deep-dive)."

## Criando seu codespace

1. Navigate to the [template repository](https://github.com/2percentsilk/haikus-for-codespaces) and select **Use this template**.

2. Name your repository, select your preferred privacy setting, and click **Create repository from this template**.

3. Navigate to the main page of the newly created repository. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

## Running the application

Once your codespace is created, your repository will be automatically cloned into it. Now you can run the application and launch it in a browser.

1. Since this example uses a Node.js project, start the application by entering `npm run dev` in the terminal. Este comando executa o script `dev` no arquivo package.json e inicia o aplicativo web definido no repositório de exemplo.

   ![npm run dev no terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

    If you're following along with a different application type, enter the corresponding start command for that project.

2. When your application starts, the codespace recognizes the port the application is running on and displays a prompt to forward that port so you can connect to it.

  ![Notificação de encaminhamento de porta](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Clique em **Abrir no navegador** para visualizar seu aplicativo em execução em uma nova aba.

## Edit the application and view changes

1. Switch back to your codespace and open the `haikus.json` file by double-clicking it in the File Explorer.

2. Edit the `text` field of the first haiku to personalize the application with your own haiku.

3. Go back to the running application tab in your browser and refresh to see your changes.

  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  If you've closed the tab, open the Ports panel and click the **Open in browser** icon for the running port.
  ![Port Forwarding Panel](/assets/images/help/codespaces/quickstart-forward-port.png)

## Committing and pushing your changes

Now that you've made a few changes, you can use the integrated terminal or the source view to commit and push the changes back to the remote.

{% data reusables.codespaces.source-control-display-dark %}
1. Para testar suas alterações, clique  **+** ao lado do arquivo que você alterou, ou ao lado de **Alterações** se você mudou vários arquivos e quiser testar todos. ![Barra lateral de controle de origem com botão de staging destacado](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. Digite uma mensagem do commit que descreve a alteração que você fez. ![Barra lateral do controle de origem com uma mensagem de commit](/assets/images/help/codespaces/codespaces-commit-commit-message.png)
1. Para fazer commit das alterações em fase de preparação, clique na marca de seleção na parte superior da barra lateral de controle de origem. ![Click the check mark icon](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)  
   You can push the changes you've made. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.
1. Na parte superior da barra lateral, clique na elipse (**...**). ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. No menu suspenso, clique em **Push**.

## Personalizing with an extension

Dentro de um codespace, você tem acesso ao Marketplace do Visual Studio Code. For this example, you'll install an extension that alters the theme, but you can install any extension that is useful for your workflow.

1. Na barra lateral esquerda, clique no ícone Extensões.

2.  Na barra de pesquisa, digite `fairyfloss` e instale a extensão fairyfloss.

  ![Adicionar extensão](/assets/images/help/codespaces/add-extension.png)

3. Selecione o tema `fairyfloss` selecionando-o na lista.

  ![Selecionar tema fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

4. Changes you make to your editor setup in the current codespace, such as theme and keyboard bindings, are synced automatically via [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to any other codespaces you open and any instances of Visual Studio Code that are signed into your GitHub account.

## Próximos passos

Você criou com sucesso, personalizou e executou seu primeiro aplicativo em um codespace, mas há muito mais para explorar! Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_codespaces %}.
  - [Deep dive](/codespaces/getting-started/deep-dive): This quickstart presented some of the features of {% data variables.product.prodname_codespaces %}. The deep dive looks at these areas from a technical standpoint.
  - [Setting up your project for {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): These guides provide information on setting up your project to use {% data variables.product.prodname_codespaces %} with specific languages
  - [Configuring {% data variables.product.prodname_codespaces %} for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): This guide provides details on creating a custom configuration for {% data variables.product.prodname_codespaces %} for your project.

## Leia mais

- [Enabling {% data variables.product.prodname_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Managing billing for {% data variables.product.prodname_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
