---
title: Branches in Deinem Repository erstellen und löschen
intro: 'Sie können Branches direkt auf {% data variables.product.product_name %} erstellen oder löschen.'
redirect_from:
  - /articles/deleting-branches-in-a-pull-request/
  - /articles/creating-and-deleting-branches-within-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Branch erstellen

{% data reusables.repositories.navigate-to-repo %}

1. Wenn du allenfalls einen Branch aus einem anderen als dem Standard-Branch Deines Repositorys erstellen willst, klicke {% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> branches** und wähle dann einen anderen Branch: ![Branches-Link auf der Übersichtsseite](/assets/images/help/branches/branches-link.png)
1. Klicke auf das Branch-Auswahlmenü. ![Branch-Auswahlmenü](/assets/images/help/branch/branch-selection-dropdown.png)
1. Gib einen eindeutigen Namen für den neuen Branch ein, und wähle dann **Create branch** (Branch erstellen) aus. ![Textfeld zur Branch-Erstellung](/assets/images/help/branch/branch-creation-text-box.png)

### Branch löschen

{% data reusables.pull_requests.automatically-delete-branches %}

If the branch you want to delete is the repository's default branch, you must choose a new default branch before deleting the branch. For more information, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

If the branch you want to delete is associated with an open pull request, you must merge or close the pull request before deleting the branch. For more information, see "[Merging a pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)" or "[Closing a pull request](/github/collaborating-with-issues-and-pull-requests/closing-a-pull-request)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Scrolle zum Branch, den Du löschen möchtest, und klicke auf {% octicon "trashcan" aria-label="The trashcan icon to delete the branch" %}. ![Branch löschen](/assets/images/help/branches/branches-delete.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
{% endif %}
Weitere Informationen finden Sie unter „[Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)“.

### Weiterführende Informationen

- „[Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches)“
- „[Branches in Deinem Repository anzeigen](/github/administering-a-repository/viewing-branches-in-your-repository)“
- „[Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)."
