---
title: Fluxo do GitHub
intro: 'Siga o fluxo de {% data variables.product.prodname_dotcom %} para colaborar em projetos.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875557'
---
## Introdução

O fluxo de {% data variables.product.prodname_dotcom %} é um fluxo de trabalho leve e baseado no branch. O fluxo do {% data variables.product.prodname_dotcom %} é útil para todos, não apenas para os desenvolvedores. Por exemplo, aqui no {% data variables.product.prodname_dotcom %}, usamos o fluxo do {% data variables.product.prodname_dotcom %} para nossa [política de site](https://github.com/github/site-policy), para a [documentação](https://github.com/github/docs) e para o [roteiro](https://github.com/github/roadmap).

## Pré-requisitos

Para seguir o fluxo de {% data variables.product.prodname_dotcom %}, você precisa de uma conta de {% data variables.product.prodname_dotcom %} e um repositório. Para obter informações sobre como criar uma conta, confira "[Como se inscrever no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)". Para obter informações sobre como criar um repositório, confira "[Criar um repositório](/github/getting-started-with-github/create-a-repo)".{% ifversion fpt or ghec %} Para obter informações sobre como encontrar um repositório existente para contribuir com ele, confira "[Como descobrir maneiras de contribuir com o código aberto no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

## Seguindo o fluxo de {% data variables.product.prodname_dotcom %}

{% tip %}

{% ifversion fpt or ghec %} **Dica:** conclua todas as etapas do fluxo do {% data variables.product.prodname_dotcom %} por meio da interface da Web do {% data variables.product.prodname_dotcom %}, da linha de comando e da [{% data variables.product.prodname_cli %}](https://cli.github.com) ou do [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop).
{% else %} **Dica:** conclua todas as etapas do fluxo do {% data variables.product.prodname_dotcom %} por meio da interface da Web do {% data variables.product.prodname_dotcom %} ou da linha de comando e da [{% data variables.product.prodname_cli %}](https://cli.github.com).
{% endif %}

{% endtip %}

### Criar um branch

  Crie um branch no seu repositório. Um nome de branch curto e descritivo permite que seus colaboradores vejam o trabalho em andamento rapidamente. Por exemplo, `increase-test-timeout` ou `add-code-of-conduct`. Para obter mais informações, confira "[Como criar e excluir branches no seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)".

  Ao criar um branch, você cria um espaço para trabalhar sem afetar o branch padrão. Além disso, você fornece aos colaboradores a oportunidade de revisar seu trabalho.

### Fazer alterações

No seu branch, faça quaisquer alterações desejadas no repositório. Para obter mais informações, confira "[Como criar arquivos](/articles/creating-new-files)", "[Como editar arquivos](/articles/editing-files)", "[Como renomear um arquivo](/articles/renaming-a-file)", "[Como mover um arquivo para um novo local](/articles/moving-a-file-to-a-new-location)" ou "[Como excluir arquivos em um repositório](/github/managing-files-in-a-repository/deleting-files-in-a-repository)".

Seu branch é um lugar seguro para fazer alterações. Se você cometer um erro, você poderá reverter suas alterações ou fazer push das alterações adicionais para corrigir o erro. As suas alterações não serão feitas no branch padrão até que você faça merge de seu branch.

Faça o commit e faça push das alterações no seu branch. Dê a cada commit uma mensagem descritiva para ajudar você e futuros contribuidores a entender quais alterações o commit contém. Por exemplo, `fix typo` ou `increase rate limit`.

Idealmente, cada commit contém uma alteração isolada e completa. Isso facilita reverter as suas alterações se decidirmos adotar uma abordagem diferente. Por exemplo, se você deseja renomear uma variável e adicionar alguns testes, coloque a variável renomeada em um commit e os testes em outro commit. Posteriormente, se você quiser manter os testes, mas reverter o novo nome da variável, você poderá reverter o commit específico que continha a variável renomeada. Se você colocar o novo nome da variável e testar no mesmo commit ou espalhar o novo nome da variável por múltiplos commits, você gastaria mais esforço revertendo suas alterações.

Ao fazer commit e push das suas alterações, você fará backup do seu trabalho no armazenamento remoto. Isso significa que você pode acessar seu trabalho a partir de qualquer dispositivo. Isso também significa que os seus colaboradores poderão ver o seu trabalho, responder a perguntas e fazer sugestões ou contribuições.

Continue a criar, fazer commit e fazer push das alterações no seu branch até que você esteja pronto para pedir feedback.

{% tip %}

**Dica:** crie um branch separado para cada conjunto de alterações não relacionadas. Isso facilita para os revisores darem feedback. Isso também facilita para você e para futuros colaboradores entenderem as alterações e reverter ou criar com elas. Além disso, se houver um atraso em um conjunto de alterações, as suas outras alterações também não serão atrasadas.

{% endtip %}

### Criar uma solicitação de pull

Crie um pull request para pedir aos colaboradores feedback sobre suas alterações. A revisão de pull request é tão valiosa que alguns repositórios exigem uma revisão de aprovação antes que os pull requests possam ser mesclados. Se você quiser feedback ou conselhos antes de concluir suas alterações, você poderá marcar seu pull request como um rascunho. Para obter mais informações, confira "[Como criar uma solicitação de pull](/articles/creating-a-pull-request)".

Ao criar uma pull request, inclua um resumo das alterações e qual o problema que elas resolvem. Você pode incluir imagens, links e tabelas para ajudar a transmitir estas informações. Se o seu pull request resolve um problema, vincule o problema para que os interessados no problema estejam cientes do pull request e vice-versa. Se você vincular com uma palavra-chave, o problema será fechado automaticamente quando o pull request for mesclado. Para obter mais informações, confira "[Sintaxe básica de escrita e formatação](/github/writing-on-github/basic-writing-and-formatting-syntax)" e "[Como vincular uma solicitação de pull a um problema](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)".

![texto do pull request](/assets/images/help/pull_requests/pull-request-body.png)

Além de preencher o texto do pull request, você pode adicionar comentários em linhas específicas do pull request para apontar algo explicitamente para os revisores.

![comentário do pull request](/assets/images/help/pull_requests/pull-request-comment.png)

Seu repositório pode ser configurado para solicitar uma revisão automaticamente de equipes específicas ou usuários quando um pull request for criado. Você também pode @mention manualmente ou solicitar uma revisão de pessoas ou de equipes específicas.

Se seu repositório tiver verificações configuradas para serem executadas em pull requests, você verá todas as verificações que falharam no seu pull request. Isso ajuda você a capturar erros antes de fazer merge do seu branch. Para obter mais informações, confira "[Sobre as verificações de status](/github/collaborating-with-issues-and-pull-requests/about-status-checks)".

### Comentários de revisão do endereço

Os revisores devem deixar perguntas, comentários e sugestões. Os revisores podem comentar em todo o pull request ou adicionar comentários em linhas específicas. Você e os revisores podem inserir imagens ou sugestões de código para esclarecer comentários. Para obter mais informações, confira "[Como revisar as alterações em solicitações de pull](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)".

Você pode continuar a fazer commit e push das alterações em resposta às revisões. Sua pull request atualizará automaticamente.

### Fazer merge do seu pull request

Depois que seu pull request for aprovado, faça merge do seu pull request. Isso fará o merge automático do seu branch para que suas alterações apareçam no branch padrão. {% data variables.product.prodname_dotcom %} mantém o histórico de comentários e commits no pull request para ajudar futuros contribuidores a entender suas alterações. Para obter mais informações, confira "[Como mesclar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)".

{% data variables.product.prodname_dotcom %} dirá se o seu pull request possui conflitos que precisam ser resolvidos antes do merge. Para obter mais informações, confira "[Como resolver conflitos de mesclagem](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)".

Configurações de proteção de branch podem bloquear o merge se seu pull request não cumprir certos requisitos. Por exemplo, você precisa de um certo número de revisões ou uma revisão de aprovação de uma equipe específica. Para obter mais informações, confira "[Sobre os branches protegidos](/github/administering-a-repository/about-protected-branches)".

### Excluir seu branch

Depois de realizar o merge do seu pull request, exclua o branch. Isso indica que o trabalho no branch foi concluído e impede que você ou outras pessoas de usar os branches antigos acidentalmente. Para obter mais informações, confira "[Como excluir e restaurar branches em uma solicitação de pull](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)".

Não se preocupe em perder informações. O histórico do seu pull request e commit não será excluído. Você sempre tem a opção de restaurar o branch excluído ou reverter seu pull request, se necessário.
