---
title: Fazer o chery-pick de um commit
intro: Você pode escolher um commit específico em um branch e copiar o commit para outro branch.
versions:
  free-pro-team: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
---

### Sobre a seleção do Git

Você pode fazer a seleção de um commit em um commit em um branch para criar uma cópia do commit com as mesmas alterações em outro branch. Se você fizer commit de alterações no branch errado ou quiser fazer as mesmas alterações em outro branch, você poderá escolher o commit para aplicar as alterações a outro branch. Você também pode usar cherry-picking para aplicar alterações específicas antes de estar pronto para criar ou fazer merge de um pull request. Por exemplo, se você corrigir um erro em um branch de recurso, você poderá escolher o commit com a correção de erro em outros ramos do seu projeto.

Você também pode usar a o cherry-picking ao colaborar com uma equipe. Alguns projetos incorporam contribuições por commits de cherry-picking. Para obter mais informações, consulte [Git distribuído - Mantendo um Projeto](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick) na documentação do Git.

### Fazer o chery-pick de um commit

{% data reusables.desktop.current-branch-menu %}
2. Na lista de branches, clique no branch que tem o commit que você deseja selecionar.
{% data reusables.desktop.history-tab %}
4. Arraste o commit que você deseja selecionar para o menu {% octicon "git-branch" aria-label="The branch icon" %} **Branch atual** e solte o commit no branch para o qual você deseja copiar o commit. ![Arrastando um commit para outro branch no menu Branch atual](/assets/images/help/desktop/cherry-picking.png)

### Leia mais
- [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick) na documentação Git
