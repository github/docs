---
title: Fazer merge automático de um pull request
intro: Você pode aumentar a velocidade de desenvolvimento permitindo o merge automático de um pull request para que o pull request seja mesclado automaticamente quando todos os requisitos de merge forem atendidos.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
topics:
  - Pull requests
---

### Sobre o merge automático

Se você habilitar o merge automático para um pull request, este será mesclado automaticamente quando todas as revisões necessárias forem atendidas e as verificações de status forem aprovadas. O merge automático impede que você espere que os sejam atendidos para que você possa passar para outras tarefas.

Antes de usar o merge automático com um pull request, o merge automático deve ser habilitado para o repositório. Para obter mais informações, consulte "[Gerenciar merge automático para pull requests no seu repositório](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)."{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}

Depois que você ativar o merge automático para uma pull request, se alguém que não tiver permissões de gravação no repositório fizer push de novas alterações no branch principal ou alterar o branch de base do pull request, o merge automático será desabilitado. Por exemplo, se um mantenedor permitir o merge automático para um pull request a partir de uma bifurcação, o merge automático será desabilitado depois que um colaborador fizer push de novas alterações no pull request.{% endif %}

Você pode fornecer feedback sobre o merge automático [entrando em contato conosco](https://support.github.com/contact/feedback?category=prs-and-code-review&subject=Pull%20request%20auto-merge%20feedback).

### Habilitar merge automático

Pessoas com permissões de gravação em um repositório podem habilitar o merge automático em um pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique no pull request para o qual você deseja fazer o merge automático.
1. Opcionalmente, para escolher um método de merge, selecione o menu suspenso **Habilitar merge automático** e, em seguida, clique em um método de merge. Para obter mais informações, consulte "[Sobre merges da pull request](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)". ![Menu suspenso "Habilitar merge automático"](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Clique **Habilitar merge automático**. ![Botão para habilitar merge automático](/assets/images/help/pull_requests/enable-auto-merge-button.png)
1. Se você escolheu os métodos de merge ou combinação por squash, digite uma mensagem de commit e a descrição e escolha o endereço de e-mail que você deseja criar o commimt de merge.![Campos para inserir mensagem de commit e descrição e escolher o e-mail do autor do commit](/assets/images/help/pull_requests/pull-request-information-fields.png)
1. Clique em **Confirmar merge automático**. ![Botão para confirmar o merge automático](/assets/images/help/pull_requests/confirm-auto-merge-button.png)

### Desabilitar o merge automático

As pessoas com permissões de gravação em um repositório e autores de pull request podem desabilitar o merge automático em um pull request.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Na lista "Pull Requests", clique no pull request para o qual você deseja desabilitar o merge automático.
1. Na caixa de merge, clique em **Desabilitar o merge automático**. ![Botão para desabilitar o merge automático](/assets/images/help/pull_requests/disable-auto-merge-button.png)
