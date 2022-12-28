---
title: Como criar um codespace com base em um modelo
intro: 'Se você estiver iniciando um novo projeto, poderá criar um codespace com base em um modelo em branco ou escolher um modelo projetado especificamente para o tipo de trabalho que deseja realizar.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188309'
---
## Sobre os modelos do {% data variables.product.prodname_github_codespaces %}

Se você estiver iniciando um novo projeto, poderá começar o trabalho de desenvolvimento rapidamente criando um codespace com base em um modelo. Você poderá trabalhar no projeto em um ambiente de desenvolvimento baseado em nuvem, salvar os arquivos na nuvem e publicar o trabalho em um novo repositório remoto que poderá ser compartilhado com outras pessoas ou clonado no computador local.

{% note %}

**Observação**: os codespaces criados com base em um modelo, não em um repositório, são sempre cobrados na conta pessoal. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% endnote %}

Você pode começar com um modelo em branco, escolher entre os modelos mantidos pelo {% data variables.product.company_short %} para tecnologias populares, como React ou Jupyter Notebook, ou iniciar um codespace usando qualquer repositório de modelos no {% data variables.product.prodname_dotcom %}. Com um modelo em branco, você começará com um diretório vazio, com acesso a recursos de computação baseados em nuvem e as ferramentas, as linguagens e os ambientes de runtime que vêm pré-instalados com a imagem padrão do codespace. Com outros modelos, você obterá arquivos iniciais para a tecnologia com a qual está trabalhando, além de, normalmente, alguns arquivos extras, como um arquivo README, um arquivo `.gitignore` e arquivos de configuração de contêiner de desenvolvimento que contenham alguma configuração de ambiente personalizada. Para obter mais informações sobre os contêineres de desenvolvimento e a imagem padrão, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Por exemplo, se você criar um codespace com base em um modelo React do {% data variables.product.company_short %}, acessará um workspace contendo arquivos de modelo para um aplicativo simples, como `index.js`, `app.js` e `package.json`. Logo após a abertura do codespace, um servidor de desenvolvimento será iniciado automaticamente e você poderá ver o aplicativo em execução em uma guia de navegador simples no cliente Web do {% data variables.product.prodname_vscode_shortname %}.

![Captura de tela do modelo React em execução em um codespace](/assets/images/help/codespaces/react-template.png)

Os arquivos e a configuração incluídos nos modelos são definidos em repositórios de modelo. O repositório de modelos é clonado no codespace quando você cria o codespace. Depois disso, o link será cortado e o codespace não será vinculado a um repositório remoto até que você o publique em um. 

{% tip %}

**Dica:** para ajudar as pessoas a começar a usar a estrutura, a biblioteca ou outro projeto, você pode definir um repositório de modelos a ser usado com os {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira "[Como configurar o repositório de modelos dos {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)".

{% endtip %}

## Como criar um codespace com base em um modelo do {% data variables.product.company_short %}

Os modelos mantidos pelo {% data variables.product.company_short %}, incluindo o modelo em branco, estão disponíveis na página "Seus codespaces".

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Para ver o repositório de modelos que contém os arquivos de um modelo, você pode clicar no nome do modelo.

   ![Captura de tela da seção "Explorar modelos de início rápido", com "React" realçado](/assets/images/help/codespaces/react-template-name.png)

1. No modelo que você deseja iniciar, clique em **Usar este modelo**.
   
   ![Captura de tela dos modelos de início rápido, com o botão "Usar este modelo" realçado no modelo React](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## Como criar um codespace com base em um repositório de modelos

Você pode criar um codespace com base em qualquer repositório de modelos e publicar o trabalho em um novo repositório quando estiver pronto. Para obter mais informações sobre os repositórios de modelos, confira "[Como criar um repositório de modelos](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **Observação:** se você é um mantenedor do repositório de modelos e quer fazer commit de alterações no próprio repositório de modelos, crie um codespace usando o menu suspenso **{% octicon "code" aria-label="The code icon" %} Código**. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## Como publicar em um repositório no {% data variables.product.product_name %}

{% data reusables.codespaces.about-publishing-templates %}

### Como publicar do {% data variables.product.prodname_vscode_shortname %} 

{% data reusables.codespaces.publishing-template-codespaces %}

Quando um codespace é publicado, você tem acesso a uma gama maior de opções para personalizar a experiência dos {% data variables.product.prodname_github_codespaces %}. Por exemplo, você pode:

- Altere o tipo de computador do codespace para garantir que você esteja usando recursos apropriados para o trabalho que está fazendo (confira "[Como alterar o tipo de computador do codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)").
- Permita que o {% data variables.product.prodname_dotcom %} use o GPG automaticamente para assinar os commits que você faz no codespace (confira "[Como gerenciar a verificação de GPG dos {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)").
- Compartilhe segredos criptografados com o codespace (confira "[Como gerenciar segredos criptografados para os codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)").

### Como publicar do {% data variables.product.prodname_dotcom_the_website %} 

Você pode publicar um codespace não publicado usando a página "Seus codespaces" no {% data variables.product.prodname_dotcom_the_website %}. Isso é útil para publicar um codespace que não está aberto no navegador no momento. Se você fizer isso, o trabalho será preservado em um repositório, mas não haverá um link entre o codespace existente e o novo repositório. No entanto, você pode navegar até o novo repositório e criar um codespace a partir daí, e esse codespace será conectado ao repositório.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Ao lado do codespace não publicado, clique nas reticências ( **...** ) e selecione **Publicar em um novo repositório**.

   ![Captura de tela do botão "Publicar em um novo repositório"](/assets/images/help/codespaces/publish-to-new-repository.png)
1. Escolha um nome para o novo repositório, defina-o como **Público** ou **Privado** e clique em **Criar repositório**.

   ![Captura de tela do menu suspenso "Publicar em um novo repositório"](/assets/images/help/codespaces/template-new-repository-settings.png)
1. Opcionalmente, para ver o novo repositório, clique em **Ver repositório**.

## Leitura adicional

- "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)"
- "[O ciclo de vida do codespace](/codespaces/getting-started/the-codespace-lifecycle)"
- "[Como usar o controle do código-fonte no codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"
