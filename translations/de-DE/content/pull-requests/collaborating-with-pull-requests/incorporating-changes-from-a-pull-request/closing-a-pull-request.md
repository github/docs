---
title: Einen Pull Request schließen
intro: 'Du kannst einen Pull Request *schließen*, ohne [ihn mit dem vorgelagerten Branch zusammenzuführen](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request). Das ist nützlich, wenn die im Branch vorgeschlagenen Änderungen nicht mehr benötigt werden oder in einem anderen Branch eine andere Lösung vorgeschlagen wurde.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 51048cfd4ae917149d81a011a8ec5418ca4beb51
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133942'
---
{% tip %}

**Tipp**: Wenn du einen Pull Request mit dem falschen Basisbranch geöffnet hast, musst du ihn nicht schließen und einen neuen öffnen, sondern kannst den Basisbranch ändern. Weitere Informationen findest du unter [Ändern des Basisbranchs eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request).

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste „Pull Requests“ auf den Pull Request, den du schließen möchtest.
3. Klicke unten im Pull Request unter dem Kommentarfeld auf **Pull Request schließen**.
  ![Schaltfläche „Pull Request schließen“](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. [Lösche optional den Branch](/articles/deleting-unused-branches). So bleibt die Liste der Branches in deinem Repository ordentlich.
