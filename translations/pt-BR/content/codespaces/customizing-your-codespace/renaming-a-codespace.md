---
title: Como renomear um codespace
intro: 'Você pode usar o {% data variables.product.prodname_cli %} para alterar o nome de exibição do codespace para um da sua escolha.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 58e5e9584df07e8e6abba3f1cfac5d0b3234c01a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107082'
---
## Como renomear um codespace

Cada codespace recebe um nome de exibição gerado automaticamente. Se você tiver vários codespaces, o nome de exibição ajudará você a diferenciar entre eles. Por exemplo: `literate space parakeet`. Você pode alterar o nome de exibição do seu codespace.

Para encontrar o nome de exibição de um codespace:

- No {% data variables.product.product_name %}, exiba a sua lista de codespaces em https://github.com/codespaces.

  ![Captura de tela da lista de codespaces no GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- No aplicativo da área de trabalho {% data variables.product.prodname_vscode %}, ou no cliente Web {% data variables.product.prodname_vscode_shortname %}, clique no Gerenciador Remoto. O nome de exibição é mostrado embaixo do nome do repositório. Por exemplo: `symmetrical space telegram` na captura de tela abaixo.

  ![Captura de tela do Gerenciador Remoto no VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- Em uma janela de terminal em seu computador local, use este comando {% data variables.product.prodname_cli %}: `gh codespace list`. 

### Nomes de codespace permanentes

Além do nome de exibição, quando você cria um codespace, um nome permanente também é atribuído a ele. O nome é uma combinação da manipulação de {% data variables.product.company_short %}, do nome do repositório e alguns caracteres aleatórios. Por exemplo: `octocat-myrepo-gmc7`. Você não pode alterar esse nome.

Para encontrar o nome permanente de um codespace:

* No {% data variables.product.product_name %}, o nome permanente é mostrado em uma pop-up quando você passa o mouse sobre a opção **Abrir no navegador** no https://github.com/codespaces. 

   ![Captura de tela do nome do codespace mostrado ao passar o mouse](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* Em um codespace, use este comando no terminal: `echo $CODESPACE_NAME`.
* Em uma janela de terminal em seu computador local, use este comando {% data variables.product.prodname_cli %}: `gh codespace list`.

## Como renomear um codespace

Alterar o nome de exibição de um codespace poderá ser útil se você tiver vários codespaces que usará por um período estendido. Um nome apropriado ajuda você a identificar um codespace que você usa para uma finalidade específica. Você pode alterar o nome de exibição do seu codespace usando o {% data variables.product.prodname_cli %}.

Para criar um codespace, use o subcomando `gh codespace edit`:

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

Neste exemplo, substitua `PERMANENT-CODESPACE-NAME` pelo nome permanente do codespace cujo nome de exibição você deseja alterar. Substitua `NEW-DISPLAY-NAME` pelo nome de exibição que você deseja usar para este codespace.

Para obter mais informações, confira "[Como usar os {% data variables.product.prodname_github_codespaces %} com a {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace)".
