---
title: Criar e excluir branches no repositório
intro: 'Você pode criar ou excluir branches diretamente no {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Criar & excluir branches
---

## Criar um branch
Você pode criar um branch de diferentes maneiras em {% data variables.product.product_name %}.

{% note %}

**Observação:** Você só pode criar um branch em um repositório ao qual você tenha acesso push.

{% endnote %}

### Criando um branch por meio da visão geral dos branches
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Clique em **Novo branch**. ![Captura de tela da página de visão geral dos ramos com o botão novo branch destacado](/assets/images/help/branches/new-branch-button.png)
2. Na caixa de diálogo, digite o nome do branch e, opcionalmente, altere a fonte do branch.  
   Se o repositório for uma bifurcação, você também terá a opção de selecionar o repositório upstream como fonte do branch. ![Captura de tela do modo de criação de branch para uma bifurcação com fonte de branch destacada](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Clique **Criar branch**. ![Captura de tela do modo de criação do branch com botão de criar branch enfatizado](/assets/images/help/branches/branch-creation-popup-button.png)

### Criando um branch usando o branch menu suspenso
{% data reusables.repositories.navigate-to-repo %}
1. Opcionalmente, se quiser criar um novo branch a partir de um branch diferente do branch padrão do repositório, clique em {% octicon "git-branch" aria-label="The branch icon" %} **Branches** e, em seguida, escolha outro branch. ![Link de branches numa página de visão geral](/assets/images/help/branches/branches-overview-link.png)
1. Clique no menu seletor de branch. ![menu seletor de branch](/assets/images/help/branch/branch-selection-dropdown.png)
1. Digite um nome exclusivo para o novo branch e selecione **Create branch** (Criar branch). ![caixa de texto de criação de branch](/assets/images/help/branch/branch-creation-text-box.png)
{% ifversion fpt or ghec or ghes > 3.4 %}
### Criando um branch para um problema
Você pode criar um branch para trabalhar em um problema diretamente da página de problemas e começar imediatamente. Para obter mais informações, consulte[Criando um branch para trabalhar em um problema](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)".
{% endif %}
## Excluir um branch

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Observação:** Se o branch que você deseja excluir for o branch padrão do repositório, você deverá escolher um novo branch padrão antes de excluir o branch. For more information, see "[Setting the default branch](/github/administering-a-repository/setting-the-default-branch)."

{% endnote %}

Se o branch que você deseja excluir estiver associado a um pull request aberto, você deverá fazer o merge ou fechar o pull request antes de excluir o branch. Para obter mais informações, consulte "[Fazer merge de um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" ou "[Fechar um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Role até o branch que deseja excluir e clique em {% octicon "trash" aria-label="The trash icon to delete the branch" %}. ![delete the branch](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. Se você tentar excluir um branch associado a pelo menos um pull request aberto, você deverá confirmar que pretende fechar o(s) pull request(s).

   ![Confirme a exclusão de um branch](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

## Leia mais

- "[Sobre branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Exibir branches no repositório](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Excluindo e restaurando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
