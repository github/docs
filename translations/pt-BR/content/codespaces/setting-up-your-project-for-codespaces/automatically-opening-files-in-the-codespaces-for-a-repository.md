---
title: Abrir arquivos automaticamente nos codespaces de um repositório
shortTitle: Automatically opening files
intro: 'Você pode definir arquivos específicos a serem abertos automaticamente sempre que alguém criar um codespace para seu repositório e abrir o codespace no cliente Web {% data variables.product.prodname_vscode %}.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113954'
---
## Visão geral

Se houver um arquivo específico que seja útil para as pessoas verem quando criarem um codespace para seu repositório, você poderá definir esse arquivo para ser aberto automaticamente no cliente Web do {% data variables.product.prodname_vscode_shortname %}. Configure isso no arquivo de configuração do contêiner de desenvolvimento para o repositório. 

O arquivo ou os arquivos especificados só são abertos na primeira vez em que um codespace é aberto no cliente Web. Se a pessoa fechar os arquivos especificados, esses arquivos não serão reabertos automaticamente na próxima vez que essa pessoa abrir ou reiniciar o codespace.

{% note %}

**Observação**: essa automação só se aplica ao cliente Web do {% data variables.product.prodname_vscode_shortname %}, não ao aplicativo de área de trabalho {% data variables.product.prodname_vscode_shortname %} ou a outros editores com suporte.

{% endnote %}

## Configurar arquivos para serem abertos automaticamente

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edite o arquivo `devcontainer.json`, adicionando uma propriedade `customizations.codespaces.openFiles`. A propriedade `customizations` reside no nível superior do arquivo, dentro do objeto JSON delimitador. Por exemplo:

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   O valor da propriedade `openFiles` é uma matriz de um ou mais arquivos do seu repositório. Os caminhos são relativos à raiz do repositório (não há suporte para caminhos absolutos). Os arquivos são abertos no cliente Web na ordem especificada, com o primeiro arquivo da matriz exibido no editor.
   
1. Salve o arquivo e faça commit as alterações no branch necessário do repositório.

## Leitura adicional

- "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
