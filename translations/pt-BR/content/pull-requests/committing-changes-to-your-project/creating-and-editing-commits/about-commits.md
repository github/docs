---
title: Sobre commits
intro: Você pode salvar pequenos grupos de mudanças significativas como commits.
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Sobre commits

{% data reusables.commits.about-commits %}

Você pode adicionar um coautor em qualquer commit em que colaborar. Para obter mais informações, consulte "[Criar um commit com vários autores](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)".

{% ifversion fpt or ghec %}
Também é possível criar um commit em nome de uma organização. Para obter mais informações, consulte "[Criar um commit em nome de uma organização](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)".{% endif %}

O rebase permite que você altere uma série de commits e pode modificar a ordem dos commits na sua linha do tempo. Para obter mais informações, consulte "[Sobre o rebase do git](/github/getting-started-with-github/about-git-rebase)".

## About commit branches and tag labels

You can see which branch a commit is on by looking at the labels beneath the commit on the commit page.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. Navegue até o commit clicando no link da mensagem do commit. ![Screenshot of commit with commit message link emphasized](/assets/images/help/commits/commit-message-link.png)
2. To see what branch the commit is on, check the label below the commit message. ![Screenshot of commit with commit branch indicator emphasized](/assets/images/help/commits/commit-branch-indicator.png)

If your commit is not on the default branch (`main`), the label will show the branches which contain the commit. If the commit is part of an unmerged pull request, you can click the link to go to the pull request.

Assim que o commit estiver no branch padrão, todas as tags que contêm o commit serão mostradas e o branch padrão será o único branch listado. For more information on tags, see "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation.

![Screenshot of commit with commit tag emphasized](/assets/images/help/commits/commit-tag-label.png)

## Leia mais
- "[Fazer commit e revisar alterações no seu projeto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)" em {% data variables.product.prodname_desktop %}
