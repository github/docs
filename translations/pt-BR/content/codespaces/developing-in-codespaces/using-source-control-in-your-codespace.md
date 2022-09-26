---
title: Usando controle de origem no seu codespace
intro: 'Depois de fazer alterações em um arquivo no seu código, você pode fazer um commit rápido das alterações e fazer push da sua atualização para o repositório remoto.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 39913ef49f6c404a95debc3f4ee7b30e9187ddf6
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147110591'
---
## Sobre o controle do código-fonte no {% data variables.product.prodname_github_codespaces %}

Você pode executar todas as ações do Git necessárias diretamente no seu codespace. Por exemplo, é possível obter alterações do repositório remoto, alternar os branches, criar um novo branch, fazer commit, fazer push e criar um pull request. Você pode usar o terminal integrado dentro do seu codespace para inserir nos comandos do Git, ou você pode clicar em ícones e opções de menu para realizar todas as tarefas mais comuns do Git. Este guia explica como usar a interface gráfica de usuário para controle de origem.

O controle de origem em {% data variables.product.prodname_github_codespaces %} usa o mesmo fluxo de trabalho que {% data variables.product.prodname_vscode %}. Para obter mais informações, confira a documentação do {% data variables.product.prodname_vscode_shortname %} "[Usando controle de versão no {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)".

Um fluxo de trabalho típico para atualizar um arquivo que usa {% data variables.product.prodname_github_codespaces %} seria:

* A partir do branch padrão do seu repositório em {% data variables.product.prodname_dotcom %}, crie um codespace. Confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".
* No seu código, crie uma nova agência para trabalhar.
* Faça suas alterações e salve-as.
* Confirme a alteração.
* Abra um pull request.

## Criar ou trocar de branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Dica**: se alguém tiver alterado um arquivo no repositório remoto, no branch para o qual você alternou, você não verá essas alterações até que efetue pull das alterações no codespace. 

{% endtip %}

## Fazer pull das alterações do repositório remoto

Você pode fazer pull das alterações do repositório remoto para seu codespace a qualquer momento. 

{% data reusables.codespaces.source-control-display-dark %}
1. Na parte superior da barra lateral, clique nas reticências ( **…** ). ![Botão Reticências para Exibir e Mais Ações](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. No menu suspenso, clique em **Efetuar Pull**.

Se a configuração do contêiner dev foi alterada desde que você criou o codespace, você pode aplicar as alterações reconstruindo o contêiner para o codespace. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)".

## Configurar o seu codespace para buscar novas alterações automaticamente 

É possível definir seu codespace para obter automaticamente os detalhes de quaisquer novos commits que tenham sido criados no repositório remoto. Isso permite que você veja se sua cópia local do repositório está desatualizada. Nesse caso, você pode optar por fazer pull das novas alterações. 

Se a operação de busca detectarem novas alterações no repositório remoto, você verá o número de novos commits na barra de status. Você pode fazer pull das alterações para a sua cópia local.

1. Clique no botão **Gerenciar** na parte inferior da barra de atividades.
![Botão Gerenciar](/assets/images/help/codespaces/manage-button.png)
1. No menu, clique em **Configurações**.
1. Na página Configurações, procure `autofetch`.
![Pesquisa por busca automática](/assets/images/help/codespaces/autofetch-search.png)
1. Para buscar detalhes das atualizações de todos os repositórios remotos registrados no repositório atual, defina **Git: Busca Automática** como `all`.
![Habilitar a busca automática do Git](/assets/images/help/codespaces/autofetch-all.png)
1. Caso deseje alterar o número de segundos entre cada busca automática, edite o valor de **Git: Período de Busca Automática**.

## Fazendo commit das suas alterações 

{% data reusables.codespaces.source-control-commit-changes %} 

## Abrindo um pull request

{% data reusables.codespaces.source-control-pull-request %} 

## Fazer push das alterações para o seu repositório remoto

Você pode fazer push das alterações que fez. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.

1. Na parte superior da barra lateral, clique nas reticências ( **…** ). ![Botão Reticências para Exibir e Mais Ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. No menu suspenso, clique em **Efetuar Push**.
