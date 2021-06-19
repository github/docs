---
title: Den Basis-Branch eines Pull Requests ändern
intro: 'Wenn ein Pull Request geöffnet wurde, kannst Du den Basis-Branch ändern, um die Änderungen im Pull Request gegen einen anderen Branch zu vergleichen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% warning %}

**Warnung:** Wenn Du den Basis-Branch eines Pull Requests änderst, werden einige Commits möglicherweise von der Zeitleiste entfernt. Review-Kommentare können allenfalls zu veralteten Kommentaren werden, wenn die Codezeile, auf die im Kommentar verwiesen wird, in den Änderungen des Pull-Request nicht mehr vorkommt.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den Du ändern möchtest.
3. Klicke neben dem Titel des Pull Requests auf **Edit** (Bearbeiten). ![Schaltfläche „Pull Request edit" (Bearbeiten eines Pull Request)](/assets/images/help/pull_requests/pull-request-edit.png)
4. Wähle im Basis-Branch-Dropdownmenü den Basis-Branch aus, mit dem Du [die Änderungen vergleichen](/github/committing-changes-to-your-project/comparing-commits#comparing-branches) möchtest. ![Basis-Branch-Dropdownmenü ](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Lies die Informationen zum Ändern des Basis-Branch, und klicke auf **Change base** (Basis ändern). ![Schaltfläche „Base branch change confirmation" (Bestätigen der Basis-Branch-Änderung) ](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Tip:** When you open a pull request, {% data variables.product.product_name %} will set the base to the commit that branch references. If the branch is updated in the future, {% data variables.product.product_name %} will not update the base branch's commit.

{% endtip %}

### Weiterführende Informationen

- „[Einen Pull Request erstellen](/articles/creating-a-pull-request)“
- „[Informationen zu Pull Requests](/articles/about-pull-requests)“
- „[Vorgeschlagene Änderungen in einem Pull Request prüfen](/articles/reviewing-proposed-changes-in-a-pull-request)“
