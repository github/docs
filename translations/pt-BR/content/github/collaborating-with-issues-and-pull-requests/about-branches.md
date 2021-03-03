---
title: Sobre branches
intro: 'Use um branch para isolar o trabalho de desenvolvimento sem afetar outros branches no repositório. Cada repositório tem um branch padrão e pode ter vários outros branches. Você pode fazer merge de um branch em outro branch usando uma pull request.'
redirect_from:
  - /articles/working-with-protected-branches/
  - /articles/about-branches
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### Sobre branches

Os branches permitem que você desenvolva recursos, corrija erros ou experimente com segurança novas ideias em uma área contida do seu repositório.

Você sempre cria um branch a partir de um branch existente. Normalmente, você pode criar um novo branch a partir do branch-padrão do seu repositório. Você então poderá trabalhar nesse novo branch isolado das mudanças que outras pessoas estão fazendo no repositório. Um branch que você cria para produzir um recurso é comumente referido como um branch de recurso ou branch de tópico. Para obter mais informações, consulte "[Criar e excluir branches em seu repositório](/articles/creating-and-deleting-branches-within-your-repository/)".

Também é possível usar um branch para publicar um site do {% data variables.product.prodname_pages %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/articles/what-is-github-pages)".

Você deve ter acesso de gravação em um repositório para criar um branch, abrir uma pull request ou excluir e restaurar branches em uma pull request. Para obter mais informações, consulte "[Permissões de acesso em {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github)."

### Sobre o branch-padrão

{% data reusables.branches.new-repo-default-branch %} O branch-padrão é o branch que {% data variables.product.prodname_dotcom %} exibe quando alguém visita o seu repositório. O branch padrão é também o branch inicial que o Git verifica localmente quando alguém clona o repositório. {% data reusables.branches.default-branch-automatically-base-branch %}

Por padrão, {% data variables.product.product_name %} nomeia o branch padrão {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 2" or currentVersion == "github-ae@latest" %}`principal`{% else %}`master`{% endif %} em qualquer novo repositório.

{% data reusables.branches.change-default-branch %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% data reusables.branches.set-default-branch %}

{% endif %}

### Trabalhando com branches

Quando estiver satisfeito com seu trabalho, você poderá abrir uma pull request para fazer merge das alterações do branch atual (o branch *head*) com outro branch (o branch *base*). Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests)".

Depois que uma pull request tiver sido mesclada ou fechada, você poderá excluir o branch head, já que isso não é mais necessário. Você deve ter permissão de gravação no repositório para excluir branches. Não é possível excluir branches associados diretamente a pull requests abertas. Para obter mais informações, consulte "[Excluindo e recuperando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)".

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
Os seguintes diagramas ilustram isso.

 Aqui alguém criou um branch chamado `feature1` a partir do branch `mestre`, e você então criou um branch chamado `feature2` a partir do `feature1`. Existem pull requests abertas para ambos os branches. As setas indicam o branch base atual para cada pull request. Neste ponto, `feature1` é o branch base para `feature2`. Se a pull request para `feature2` for mesclada agora, o branch `feature2` será mesclado no `feature1`.

 ![botão-merge-pull-request](/assets/images/help/branches/pr-retargeting-diagram1.png)

No próximo diagrama, alguém fez merge da pull request para `feature1` no branch `mestre` , e eles excluíram o branch `feature1`. Como resultado, o {% data variables.product.prodname_dotcom %} redirecionou automaticamente a pull request para `feature2` para que seu branch base seja agora `mestre`.

 ![botão-merge-pull-request](/assets/images/help/branches/pr-retargeting-diagram2.png)

Agora, quando você mescla a pull request `feature2`, ela será mesclada ao branch `mestre`.
{% endif %}

### Trabalhar com branches protegidos

Os administradores de repositório podem habilitar proteções em um branch. Se estiver trabalhando em um branch que é protegido, não será possível excluir nem forçar o push no branch. Os administradores do repositório podem habilitar, de modo adicional, várias outras configurações de branch protegido para aplicar vários fluxos de trabalho antes que um branch passe por um merge.

{% note %}

**Observação:** se você for administrador de um repositório, será possível fazer merge de pull requests em branches com proteções de branch habilitadas, mesmo se a pull request não atender aos requisitos; a não ser que as proteções de branch tenham sido definidas para "Include administrators" (Incluir administradores).

{% endnote %}

Para verificar se é possível fazer merge de uma pull request, observe a caixa de merge na parte inferior da guia **Conversation (Conversa)** da pull request. Para obter mais informações, consulte "[Sobre branches protegidos](/articles/about-protected-branches)".

Quando um branch estiver protegido:

- Você não poderá excluir nem fazer um push forçado no branch.
- Se as verificações de status obrigatórias forem habilitadas no branch, não será possível fazer merge das alterações no branch até que todos os testes de CI obrigatórios sejam aprovados. Para obter mais informações, consulte "[Sobre verificações de status](/articles/about-status-checks)".
- Se as revisões obrigatórias de pull request forem habilitadas no branch, não será possível fazer merge de alterações no branch até que todos os requisitos na política da revisão de pull request tenham sido atendidos. Para obter mais informações, consulte "[Fazer merge de uma pull request](/articles/merging-a-pull-request)".
- Se a revisão obrigatória de um proprietário do código for habilitada em um branch, e uma pull request modificar o código que tem um proprietário, um proprietário do código deverá aprovar a pull request para que ela possa passar por merge. Para obter mais informações, consulte "[Sobre proprietários do código](/articles/about-code-owners)".
- Se a assinatura de commit obrigatória for habilitada em um branch, não será possível fazer push de qualquer commit no branch que não esteja assinado e verificado. Para obter mais informações, consulte "[Sobre verificação de assinatura de commit](/articles/about-commit-signature-verification)" e "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-signed-commits). {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
- Se você usar o editor de conflitos do {% data variables.product.prodname_dotcom %}para corrigir conflitos para uma solicitação de pull request que você criou a partir de um branch protegido, {% data variables.product.prodname_dotcom %} ajudará você a criar um branch alternativo para a solicitação de pull request, para que a resolução dos conflitos possa ser mesclada. Para obter mais informações, consulte "[Resolvendo um conflito de merge no {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)".{% endif %}

### Leia mais

- "[Sobre pull requests](/articles/about-pull-requests)"
- "[Branch](/articles/github-glossary/#branch)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Branches em um Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" na documentação do Git
