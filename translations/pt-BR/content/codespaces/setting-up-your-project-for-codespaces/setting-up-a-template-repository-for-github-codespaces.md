---
title: Como configurar um repositório de modelos para os GitHub Codespaces
shortTitle: Set up a template repo
intro: 'Você pode ajudar as pessoas a começar a usar um projeto configurando um repositório de modelos a ser usado com os {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159312'
---
## Introdução

Ao configurar um repositório de modelos, você pode ajudar as pessoas a começar a usar a estrutura, a biblioteca ou outro projeto nos {% data variables.product.prodname_github_codespaces %}. Os usuários poderão começar a trabalhar com os arquivos de modelo imediatamente em um ambiente de desenvolvimento baseado em nuvem, sem precisar se preocupar em clonar o repositório ou instalar ferramentas ou outras dependências. Com alguma configuração, você poderá configurar usuários em um codespace com arquivos importantes já abertos para edição e com um aplicativo já em execução em uma guia de navegador de visualização dentro do editor da Web do {% data variables.product.prodname_vscode_shortname %}.

Qualquer pessoa com acesso de leitura ao repositório de modelos pode criar um codespace na página do repositório no {% data variables.product.product_name %}. Você pode transformar qualquer repositório existente em um modelo e não precisa alterar nenhuma configuração para permitir que os usuários criem um codespace usando o repositório de modelos. Para obter mais informações de como transformar um repositório em um modelo, confira "[Como criar um repositório de modelos](/repositories/creating-and-managing-repositories/creating-a-template-repository)".

Você pode fornecer um link no formato `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` para levar os usuários diretamente a uma página "Criar um codespace" do modelo.

![Captura de tela da página "Criar um codespace"](/assets/images/help/codespaces/create-a-new-codespace-page.png)

Por exemplo, você pode fornecer esse link em um tutorial para começar a usar a estrutura. No link, substitua `OWNER/TEMPLATE-REPO` pelo nome do repositório de modelos, por exemplo `monalisa/octo-template`.

Quando alguém cria um codespace usando o modelo, o conteúdo do repositório de modelos é clonado no codespace da pessoa. Quando o usuário estiver pronto, ele poderá publicar o trabalho em um novo repositório em {% data variables.product.product_name %} pertencente à respectiva conta pessoal. Todos os encargos de uso do codespace serão cobrados do usuário que o criou. Para saber mais, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

## Descrever o modelo

Se você não tiver um LEIAME do repositório de modelos, crie-o para descrever a finalidade do modelo e como começar a usá-lo. Para obter mais informações, confira "[Sobre os arquivos LEIAME](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".

Uma breve descrição do modelo é exibida na página "Criar um codespace" na qual os usuários entram ao clicar no link `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO`. Essa descrição é obtida do campo **Descrição** que você pode definir ao criar um repositório. Você pode editar essa descrição a qualquer momento navegando até a página do repositório e clicando em **{% octicon "gear" aria-label="The Settings gear" %}** ao lado da seção **Sobre** à direita da página.

![Captura de tela da seção "Sobre" em uma página do repositório](/assets/images/help/repository/repository-settings-icon.png)

## Adicionar arquivos iniciais

Os repositórios de modelo normalmente contêm arquivos iniciais com código clichê para que os usuários possam começar rapidamente a usar uma biblioteca, estrutura ou outra tecnologia.

Para obter diretrizes sobre os tipos de arquivos a serem incluídos, examine os arquivos iniciais incluídos nos modelos oficiais do {% data variables.product.company_short %} para {% data variables.product.prodname_github_codespaces %}, da maneira a seguir.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Para exibir o repositório de modelos que contém os arquivos do modelo, clique no nome do modelo.

   ![Captura de tela da seção "Explorar modelos de início rápido", com "React" realçado](/assets/images/help/codespaces/react-template-name.png)

## Configurar a imagem de contêiner

Você pode adicionar arquivos de configuração de contêiner de desenvolvimento ao repositório de modelos para personalizar o ambiente de desenvolvimento para pessoas que usam o modelo com {% data variables.product.prodname_github_codespaces %}. Você pode escolher uma opção em uma lista de configurações predefinidas no {% data variables.product.prodname_vscode %} ou criar uma configuração personalizada escrevendo o próprio arquivo `devcontainer.json`. Se você não adicionar arquivos de configuração, a imagem de contêiner padrão será usada. Para obter mais informações, confira "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)" e "[Adicionar uma configuração de contêiner de desenvolvimento ao repositório](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

{% note %}

**Observação:** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

Você deve configurar o contêiner de desenvolvimento com as ferramentas e a personalização necessária para oferecer aos usuários a melhor experiência possível com o modelo. Por exemplo, no arquivo `devcontainer.json`: 
- Você pode usar a propriedade `openFiles` para definir uma lista de arquivos a serem abertos automaticamente no cliente Web {% data variables.product.prodname_vscode_shortname %} quando um codespace é criado com base em um modelo.
- Se o modelo contiver arquivos para um aplicativo Web, você poderá fazer com que o aplicativo seja executado automaticamente no codespace do usuário. Você pode fazer isso usando a propriedade `postAttachCommand` para executar um script que inicia o aplicativo em um servidor local assim que o cliente Web {% data variables.product.prodname_vscode_shortname %} se conecta ao codespace e definindo a propriedade `onAutoForward` de uma porta como `openPreview` para exibir o aplicativo em execução nessa porta em um navegador simples inserido no cliente Web {% data variables.product.prodname_vscode_shortname %}.

As definições de configurações a seguir para um modelo React abrirão o arquivo `app.js` no editor do usuário, executarão `npm start` (definido em um arquivo `package.json`) para iniciar um servidor local e encaminharão a porta `3000` a uma guia de navegador de visualização no codespace.

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
Para obter mais informações, confira "[Abrir arquivos automaticamente nos codespaces de um repositório](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository)" e a [Especificação de contêineres de desenvolvimento](https://containers.dev/implementors/json_reference/#general-properties) no containers.dev.
