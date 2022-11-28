---
title: Den Basis-Branch eines Pull Requests ändern
intro: 'Wenn ein Pull Request geöffnet wurde, kannst du den Basisbranch ändern, um die Änderungen im Pull Request mit einem anderen Branch zu vergleichen.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
  - /articles/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-base-branch-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the base branch
ms.openlocfilehash: 6e8e78ac4f3e0d3f81b5efc07bb48151040baa9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132981'
---
{% warning %}

**Warnung**: Wenn du den Basisbranch eines Pull Requests änderst, werden einige Commits möglicherweise von der Zeitachse entfernt. Review-Kommentare können allenfalls zu veralteten Kommentaren werden, wenn die Codezeile, auf die im Kommentar verwiesen wird, in den Änderungen des Pull-Request nicht mehr vorkommt.

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du ändern möchtest.
3. Klicke neben dem Titel des Pull Requests auf **Bearbeiten**. ![Schaltfläche zum Bearbeiten eines Pull Requests](/assets/images/help/pull_requests/pull-request-edit.png)
4. Wähle im Dropdownmenü „Basisbranch“ den Basisbranch aus, mit dem du [Änderungen vergleichen](/github/committing-changes-to-your-project/comparing-commits#comparing-branches) möchtest. ![Dropdownmenü „Basisbranch“](/assets/images/help/pull_requests/pull-request-edit-base-branch.png)
5. Lies die Informationen zum Ändern des Basisbranchs, und klicke auf **Basis ändern**. ![Schaltfläche zum Bestätigen der Änderung des Basisbranchs](/assets/images/help/pull_requests/pull-request-base-branch-confirm.png)

{% tip %}

**Tipp**: Wenn du einen Pull Request öffnest, legt {% data variables.product.product_name %} die Basis auf den Commit fest, auf den dieser Branch verweist. Wenn der Branch in Zukunft aktualisiert wird, aktualisiert {% data variables.product.product_name %} den Commit des Basisbranchs nicht.

{% endtip %}

## Weitere Informationsquellen

- [Erstellen eines Pull Requests](/articles/creating-a-pull-request)
- [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Überprüfen von vorgeschlagenen Änderungen in einem Pull Request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
