---
title: Como renomear um codespace
intro: 'Você pode alterar o nome de exibição do codespace para uma escolha sua por meio do {% data variables.product.prodname_dotcom_the_website %} ou da {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: dcb4558cce7ca0768524917a46cde2a49bacd1ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158714'
---
## Como renomear um codespace

Cada codespace recebe um nome de exibição gerado automaticamente. Se você tiver vários codespaces, o nome de exibição ajudará você a diferenciar entre eles. Por exemplo: `literate space parakeet`. Você pode alterar o nome de exibição do seu codespace.

Para encontrar o nome de exibição de um codespace:

- No {% data variables.product.product_name %}, exiba a sua lista de codespaces em https://github.com/codespaces.

  ![Captura de tela da lista de codespaces no GitHub](/assets/images/help/codespaces/codespaces-list-display-name.png)

- No aplicativo da área de trabalho {% data variables.product.prodname_vscode %}, ou no cliente Web {% data variables.product.prodname_vscode_shortname %}, clique no Gerenciador Remoto. O nome de exibição é o segundo item na lista. Por exemplo: `symmetrical space telegram` na captura de tela abaixo.

  ![Captura de tela do Gerenciador Remoto no VS Code](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- Em uma janela de terminal em seu computador local, use este comando {% data variables.product.prodname_cli %}: `gh codespace list`. 

### Nomes de codespace permanentes

Além do nome de exibição, quando você cria um codespace, um nome permanente também é atribuído a ele. O nome é uma combinação do identificador do {% data variables.product.company_short %} e do nome de exibição gerado automaticamente. Por exemplo: `octocat-literate-space-parakeet-mld5`. Você não pode alterar o nome permanente.

Para encontrar o nome permanente de um codespace:

* No {% data variables.product.product_name %}, o nome permanente é mostrado em um pop-up quando você focaliza o nome de exibição de um codespace em https://github.com/codespaces. 

   ![Captura de tela do nome do codespace mostrado ao passar o mouse](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* Em um codespace, use este comando no terminal: `echo $CODESPACE_NAME`.
* Em uma janela de terminal em seu computador local, use este comando {% data variables.product.prodname_cli %}: `gh codespace list`.

## Como renomear um codespace

Alterar o nome de exibição de um codespace poderá ser útil se você tiver vários codespaces que usará por um período estendido. Um nome apropriado ajuda você a identificar um codespace que você usa para uma finalidade específica. 

{% cli %}

Você pode alterar o nome de exibição do seu codespace usando o {% data variables.product.prodname_cli %}.

Para criar um codespace, use o subcomando `gh codespace edit`:

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

Neste exemplo, substitua `PERMANENT-CODESPACE-NAME` pelo nome permanente do codespace cujo nome de exibição você deseja alterar. Substitua `NEW-DISPLAY-NAME` pelo nome de exibição que você deseja usar para este codespace.

Para obter mais informações, confira "[Como usar os {% data variables.product.prodname_github_codespaces %} com a {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace)".

{% endcli %}

{% webui %}

Você pode alterar o nome de exibição do codespace usando a {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. Clique em **Renomear**.

1. No prompt, em "Alterar nome de exibição para..." digite o nome de exibição desejado e clique em **OK**.

{% endwebui %}
