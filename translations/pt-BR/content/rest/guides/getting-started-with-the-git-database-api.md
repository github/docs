---
title: Começar a usar a API do banco de dados do Git
intro: 'A API do banco de dados do Git dá acesso para ler e gravar objetos do Git sem processamento no seu banco de dados do Git no {% data variables.product.product_name %} e para listar e atualizar suas referências (cabeçalhos de branch e etiquetas).'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126763'
---
## Visão geral 

Isso basicamente permite que você reimplemente uma série de funcionalidades do Git sobre nossa API, criando objetos sem processamento diretamente no banco de dados e atualizando referências de ramificações que você pode fazer tecnicamente sobre qualquer coisa que o Git possa fazer sem tê-lo instalado.

As funções de API do Banco de Dados do Git retornarão `409 Conflict` se o repositório Git estiver vazio ou indisponível.  Um repositório indisponível normalmente significa que o {% data variables.product.product_name %} está no processo de criação do repositório. Para um repositório vazio, use o ponto de extremidade "[Criar ou atualizar o conteúdo do arquivo](/rest/reference/repos#create-or-update-file-contents)" para criar um conteúdo e inicializar o repositório a fim de usar a API do Banco de Dados do Git. Entre em contato com {% data variables.contact.contact_support %} se esse status de resposta persistir.

![Visão geral do banco de dados Git](/assets/images/git-database-overview.png)

Para obter mais informações sobre o banco de dados de objetos do Git, leia o capítulo [Componentes internos do Git](http://git-scm.com/book/en/v1/Git-Internals) do livro Pro Git.

Por exemplo, se desejar fazer commit de uma alteração em um arquivo no seu repositório, você vai:

* Obter o objeto do commit atual
* Recuperar a árvore para a qual ele aponta
* Recuperar o conteúdo do objeto do blob que a árvore tem para esse caminho específico do arquivo
* Alterar o conteúdo de alguma forma e postar um novo objeto do blob com esse novo conteúdo, obtendo, em troca, o SHA do blob
* Publicar um novo objeto da árvore com esse ponteiro do caminho de arquivo substituído pelo SHA do seu blob novo e obtendo, em troca, o SHA da árvore
* Criar um novo objeto de confirmação com o SHA do commit atual como o principal e o SHA da novo da árvore, obtendo, em troca, o SHA do commit
* Atualizar a referência do seu branch para apontar para o novo SHA do commit

Pode parecer complexo, mas, na verdade, é bem simples quando você entende o modelo e ele revela várias coisas que podem ser feitas com a API.

## Verificar a mesclabilidade de pull requests

{% warning %}

**Aviso** Não dependa do uso direto do Git ou de [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) para atualizações de referências de `merge` do Git, pois esse conteúdo fica desatualizado sem aviso.

{% endwarning %}

Uma API de consumo precisa solicitar explicitamente uma solicitação de pull para criar um commit de mesclagem de _teste_. Um commit de mesclagem de _teste_ é criado quando você visualiza a solicitação de pull na interface do usuário e o botão "Mesclar" é exibido ou quando você [obtém](/rest/reference/pulls#get-a-pull-request), [cria](/rest/reference/pulls#create-a-pull-request) ou [edita](/rest/reference/pulls#update-a-pull-request) uma solicitação de pull usando a API REST. Sem essa solicitação, as referências de `merge` do Git ficarão desatualizadas até a próxima vez que alguém visualizar a solicitação de pull.

Se você está usando métodos de sondagem que produzem referências de `merge` obsoletas do Git, o GitHub recomenda usar as seguintes etapas para obter as últimas alterações do branch padrão:

1. Receber o webhook do pull request.
2. Chame [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) para iniciar um trabalho em segundo plano para criar o candidato de commit de mesclagem.
3. Sonde seu repositório usando [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) para ver se o atributo `mergeable` é `true` ou `false`. Use o Git diretamente ou [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) para atualizações das referências de `merge` do Git somente depois de executar as etapas anteriores.
