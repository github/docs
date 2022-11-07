---
title: Alterando o tipo de máquina para seu codespace
shortTitle: Change the machine type
intro: Você pode alterar o tipo de computador que está executando o codespace para usar os recursos apropriados ao trabalho que está fazendo.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 618b031ce0c23c2b4eba52157fca2a6625fe3dfd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107781'
---
## Sobre os tipos de máquina

{% note %}

**Observação:** só será possível selecionar ou alterar o tipo de computador se você for membro de uma organização que use o {% data variables.product.prodname_github_codespaces %} e esteja criando um codespace em um repositório pertencente a essa organização.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} Você pode escolher um tipo de computador alternativo ao criar um codespace ou a qualquer momento, depois de criar um codespace. 

Para obter informações sobre como escolher um tipo de computador ao criar um codespace, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

## Como alterar o tipo de computador

{% note %}

**Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   O tipo de máquina atual para cada um dos seus codespaces é exibido.

   ![Lista "Seus codespaces"](/assets/images/help/codespaces/your-codespaces-list.png)

1. Clique nas reticências ( **…** ) à direita do codespace que deseja modificar.
1. Clique em **Alterar tipo de computador**.

   ![Opção de menu '"Alterar tipo de máquina"](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. Se vários tipos de máquina estiverem disponíveis para seu codespace, escolha o tipo de máquina que você deseja usar.

   ![Caixa de diálogo que mostra tipos de máquinas disponíveis para escolher](/assets/images/help/codespaces/change-machine-type-choice.png)
1. Clique em **Atualizar codespace**. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

Você pode usar o comando `gh codespace edit --machine MACHINE-TYPE-NAME` da {% data variables.product.prodname_cli %} para alterar o tipo de computador de um codespace. Para usar esse comando, primeiro você precisará descobrir os tipos de computador disponíveis para o codespace.

1. Para ver a lista de codespaces, em um terminal, insira o comando a seguir.
   
   ```
   gh codespace list
   ```
1. Opcionalmente, para localizar o tipo de computador atual de um codespace, insira o comando a seguir.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Substitua `CODESPACE-NAME` pelo nome permanente do codespace, por exemplo `octocat-myrepo-gmc7`. Os nomes permanentes são listados na coluna **NAME** na lista retornada por `gh codespace list`.

   Se for pedido que você solicite o escopo de `codespace`, siga as instruções no terminal.

   Os detalhes do computador atual são listados no campo `machine`.
1. Para localizar os tipos de computador disponíveis para um codespace, insira o comando a seguir.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Substitua `CODESPACE-NAME` pelo nome permanente do codespace, por exemplo `octocat-myrepo-gmc7`.
1. Para alterar os tipos de computador de um codespace, insira o comando a seguir.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Substitua `MACHINE-TYPE-NAME` pelo nome de um tipo de computador disponível para o codespace, por exemplo `standardLinux32gb`. 
1. Usando as teclas de direção, navegue até o codespace que deseja alterar e pressione <kbd>Enter</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Leitura adicional

- "[Computadores de codespaces](/rest/codespaces/machines)" na documentação da API REST
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) no manual da {% data variables.product.prodname_cli %}

{% endcli %}
