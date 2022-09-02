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
shortTitle: controle de origem
---

 

## Sobre o controle de origem em {% data variables.product.prodname_github_codespaces %}

Você pode executar todas as ações do Git necessárias diretamente no seu codespace. Por exemplo, é possível obter alterações do repositório remoto, alternar os branches, criar um novo branch, fazer commit, fazer push e criar um pull request. Você pode usar o terminal integrado dentro do seu codespace para inserir nos comandos do Git, ou você pode clicar em ícones e opções de menu para realizar todas as tarefas mais comuns do Git. Este guia explica como usar a interface gráfica de usuário para controle de origem.

O controle de origem em {% data variables.product.prodname_github_codespaces %} usa o mesmo fluxo de trabalho que {% data variables.product.prodname_vscode %}. Para obter mais informações, consulte a documentação de {% data variables.product.prodname_vscode_shortname %} "[Usando Controle de Versão em {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)".

Um fluxo de trabalho típico para atualizar um arquivo que usa {% data variables.product.prodname_github_codespaces %} seria:

* A partir do branch padrão do seu repositório em {% data variables.product.prodname_dotcom %}, crie um codespace. Consulte "[Criando um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".
* No seu código, crie uma nova agência para trabalhar.
* Faça suas alterações e salve-as.
* Faça commit da alteração.
* Abra um pull request.

## Criar ou trocar de branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Dica**: Se alguém alterou um arquivo no repositório remoto, no branch para o qual você mudou, você não verá essas alterações até você fazer pull das alterações no seu codespace.

{% endtip %}

## Fazer pull das alterações do repositório remoto

Você pode fazer pull das alterações do repositório remoto para seu codespace a qualquer momento.

{% data reusables.codespaces.source-control-display-dark %}
1. Na parte superior da barra lateral, clique na elipse (**...**). ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. No menu suspenso, clique em **Pull**.

Se a configuração do contêiner dev foi alterada desde que você criou o codespace, você pode aplicar as alterações reconstruindo o contêiner para o codespace. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)".

## Configurar o seu codespace para buscar novas alterações automaticamente

É possível definir seu codespace para obter automaticamente os detalhes de quaisquer novos commits que tenham sido criados no repositório remoto. Isso permite que você veja se sua cópia local do repositório está desatualizada. Nesse caso, você pode optar por fazer pull das novas alterações.

Se a operação de busca detectarem novas alterações no repositório remoto, você verá o número de novos commits na barra de status. Você pode fazer pull das alterações para a sua cópia local.

1. Clique no botão **Gerenciar** na parte inferior da barra de atividades. ![Botão Gerenciar](/assets/images/help/codespaces/manage-button.png)
1. No menu, clique em **Configurações**.
1. Na página de configurações, pesquise por: `Autofetch`. ![Pesquisar por busca automática](/assets/images/help/codespaces/autofetch-search.png)
1. Para buscar os detalhes das atualizações para todos os controles remotos registrados no repositório atual, defina **Git: Autofetch** como `todos`. ![Habilite a busca automática do Git](/assets/images/help/codespaces/autofetch-all.png)
1. Se você deseja alterar o número de segundos entre cada busca automática, edite o valor de **Git: Período de Autofetch**.

## Fazendo commit das suas alterações

{% data reusables.codespaces.source-control-commit-changes %}

## Abrindo um pull request

{% data reusables.codespaces.source-control-pull-request %}

## Fazer push das alterações para o seu repositório remoto

Você pode fazer push das alterações que fez. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.

1. Na parte superior da barra lateral, clique na elipse (**...**). ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. No menu suspenso, clique em **Push**.
