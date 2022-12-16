---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165457"
---
## Como publicar um codespace criado com base em um modelo

Quando você cria um codespace com base em um repositório de modelos ou um modelo na página "Seus codespaces", o trabalho feito não é armazenado em um repositório no {% data variables.product.prodname_dotcom %} até que você publique o codespace. Para saber mais, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github)".

{% data reusables.codespaces.publishing-template-codespaces %}

## Criar ou trocar de branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Dica**: se alguém alterar um arquivo no repositório remoto, essas alterações não aparecerão no branch para o qual você mudou, até que seja efetuado pull das alterações para o codespace. 

{% endtip %}

## Fazendo commit das suas alterações 

{% data reusables.codespaces.source-control-commit-changes %} 

## Fazer pull das alterações do repositório remoto

Você pode fazer pull das alterações do repositório remoto para seu codespace a qualquer momento. 

{% data reusables.codespaces.source-control-display-dark %}
1. Na parte superior da barra lateral, clique nas reticências ( **…** ). ![Botão de reticências para Exibir e Mais Ações](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. No menu suspenso, clique em **Efetuar pull**.

Se a configuração do contêiner dev foi alterada desde que você criou o codespace, você pode aplicar as alterações reconstruindo o contêiner para o codespace. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

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

## Abrindo um pull request

{% data reusables.codespaces.source-control-pull-request %} 

## Fazer push das alterações para o seu repositório remoto

Você pode enviar por push as alterações salvas e confirmadas. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.

1. Na parte superior da barra lateral, clique nas reticências ( **…** ). ![Botão de reticências para Exibir e Mais Ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. No menu suspenso, clique em **Efetuar push**.
