---
title: Warum werden meine Beiträge nicht in meinem Profil angezeigt?
intro: Learn common reasons that contributions may be missing from your contributions graph.
redirect_from:
- /articles/why-are-my-contributions-not-showing-up-on-my-profile
- /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Missing contributions
ms.openlocfilehash: c3921897284e16c979542c5f7629690ded2b841e
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145106296"
---
## <a name="about-your-contribution-graph"></a>Informationen zu deinem Beitragsdiagramm

Beim Beteiligungsdiagramm für dein Profil handelt es sich um eine Aufzeichnung deiner Beiträge für Repositorys {% ifversion ghae %}im Besitz von{% else %}auf{% endif %} {% data variables.product.product_location %}. Beiträge werden nicht entsprechend Deiner lokalen Zeitzone, sondern entsprechend der UTC-Zone (Coordinated Universal Time, koordinierte Weltzeit) mit Zeitstempeln versehen. Beiträge werden nur gezählt, falls sie bestimmte Kriterien erfüllen. In manchen Fällen muss Dein Diagramm allenfalls neu erstellt werden, damit die Beiträge angezeigt werden.

Wenn du einer Organisation angehörst, die einmaliges Anmelden (Single Sign-On, SSO) mit SAML verwendet, werden dir in deinem Profil keine Beitragsaktivitäten aus der Organisation angezeigt, wenn du über keine aktive SSO-Sitzung verfügst. Personen, die sich dein Profil außerhalb deiner Organisation ansehen, werden anonymisierte Beitragsaktivitäten für deine Organisation angezeigt.

## <a name="contributions-that-are-counted"></a>Gezählte Beiträge

### <a name="issues-pull-requests-and-discussions"></a>Issues, Pull Requests und Diskussionen

Issues, Pull Requests und Diskussionen werden in deinem Beteiligungsdiagramm angezeigt, sofern sie in einem eigenständigen Repository und nicht in einem Fork geöffnet wurden.

### <a name="commits"></a>Commits
Commits werden in deinem Beteiligungsdiagramm angezeigt, sofern sie **alle** folgenden Bedingungen erfüllen:
- Die für die Commits verwendete E-Mail-Adresse ist deinem Konto auf {% data variables.product.product_location %} zugeordnet.
- Die Commits wurden in einem eigenständigen Repository vorgenommen und nicht in einem Fork.
- Die Commits wurden
  - im Standardbranch des Repositorys vorgenommen.
  - im Branch `gh-pages` vorgenommen (für Repositorys mit Projektwebsites).

Weitere Informationen zu Projektwebsites findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Darüber hinaus muss **mindestens eine** der folgenden Bedingungen erfüllt sein:
- Du bist ein Repository-Mitarbeiter oder ein Mitglied der Organisation, welcher das Repository gehört.
- Du hast das Repository geforkt.
- Du hast einen Pull Request oder Issue im Repository geöffnet.
- Du hast das Repository mit Sternen versehen.

## <a name="common-reasons-that-contributions-are-not-counted"></a>Allgemeine Ursachen für nicht gezählte Beiträge

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### <a name="commit-was-made-less-than-24-hours-ago"></a>Die Commit-Erstellung liegt weniger als 24 Stunden zurück

Nachdem Du einen Commit erstellt hast, der die Anforderung erfüllt, um als Beitrag gezählt zu werden, kann es bis zu 24 Stunden dauern, bis der Beitrag in Deinem Beteiligungsdiagramm angezeigt wird.

### <a name="your-local-git-commit-email-isnt-connected-to-your-account"></a>Deine lokale Git-Commit-E-Mail-Adresse ist nicht mit deinem Konto verknüpft.

Damit Commits in deinem Beitragsdiagramm angezeigt werden, müssen sie mit einer E-Mail-Adresse vorgenommen werden, die mit deinem Konto auf {% data variables.product.product_location %} verknüpft ist{% ifversion fpt or ghec %}, oder unter Verwendung der von {% data variables.product.prodname_dotcom %} angegebenen `noreply`-E-Mail-Adresse aus deinen E-Mail-Einstellungen{% endif %}.{% ifversion fpt or ghec %} Weitere Informationen zu `noreply`-E-Mail-Adressen findest du unter [E-Mail-Adresse für Commits festlegen](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses).{% endif %}

Du kannst die für einen Commit verwendete E-Mail-Adresse überprüfen, indem du `.patch` ans Ende einer Commit-URL anhängst, z. B. <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

Die E-Mail-Adresse im Feld `From:` ist die Adresse, die in den [Einstellungen für die lokale Git-Konfiguration](/articles/set-up-git) festgelegt wurde. In diesem Beispiel wurde für den Commit die E-Mail-Adresse `octocat@nowhere.com` verwendet.

Wenn die für den Commit verwendete E-Mail-Adresse nicht mit deinem Konto auf {% data variables.product.product_location %} verknüpft ist, {% ifversion ghae %}ändere die E-Mail-Adresse, die beim Erstellen von Commits in Git verwendet wird. Weitere Informationen findest du unter [E-Mail-Adresse für Commits festlegen](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git).{% else %}musst du deinem Konto auf {% data variables.product.product_location %} [die E-Mail-Adresse hinzufügen](/articles/adding-an-email-address-to-your-github-account). Beim Hinzufügen der neuen Adresse wird dein Beteiligungsdiagramm automatisch neu erstellt.{% endif %}

{% warning %}

**Warnung:** Generische E-Mail-Adressen (beispielsweise `jane@computer.local`) können nicht zu {% data variables.product.prodname_dotcom %}-Konten hinzugefügt werden. Falls du eine solche E-Mail-Adresse für deine Commits verwendest, werden die Commits weder mit deinem {% data variables.product.prodname_dotcom %}-Profil verknüpft noch in deinem Beteiligungsdiagramm angezeigt.

{% endwarning %}

### <a name="commit-was-not-made-in-the-default-or-gh-pages-branch"></a>Der Commit wurde weder im Standardbranch noch im Branch `gh-pages` vorgenommen.

Commits werden nur berücksichtigt, wenn sie im Standardbranch oder im Branch `gh-pages` (für Repositorys mit Projektwebsites) vorgenommen wurden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites).

Falls deine Commits in einem Branch vorgenommen wurden, bei dem es sich nicht um den Standardbranch und nicht um den Branch `gh-pages` handelt, und die Commits in deinen Beiträgen berücksichtigt werden sollen, ist eine der folgenden Aktionen erforderlich:
- [Erstelle einen Pull Request](/articles/creating-a-pull-request), damit deine Änderungen mit dem Standardbranch oder mit dem Branch `gh-pages` zusammengeführt werden.
- [Ändere den Standardbranch](/github/administering-a-repository/changing-the-default-branch) des Repositorys.

{% warning %}

**Warnung:** Wenn du den Standardbranch des Repositorys änderst, wird er für alle Repository-Mitarbeiter geändert. Führe diese Aktion nur dann aus, wenn Du willst, dass der neue Branch zur neuen Basis wird, auf der alle künftigen Pull Requests und Commits durchgeführt werden.

{% endwarning %}

### <a name="commit-was-made-in-a-fork"></a>Commit wurde in einem Fork durchgeführt

Die in einem Fork durchgeführten Commits werden nicht auf Deine Beiträge angerechnet. Führe eine der folgenden Aktionen durch, damit sie angerechnet werden:
- [Erstelle einen Pull Request](/articles/creating-a-pull-request), damit deine Änderungen mit dem übergeordneten Repository zusammengeführt werden.
- Falls du den Fork abtrennen und in ein eigenständiges Repository auf {% data variables.product.product_location %} umwandeln möchtest, wende dich an {% data variables.contact.contact_support %}. Wenn der Fork über eigene Forks verfügt, musst du {% data variables.contact.contact_support %} mitteilen, ob die Forks zusammen mit deinem Repository in ein neues Netzwerk verschoben werden oder im aktuellen Netzwerk verbleiben sollen. Weitere Informationen findest du unter [Informationen zu Forks](/articles/about-forks/).

## <a name="further-reading"></a>Weiterführende Themen

- [Private Beiträge in deinem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [Beiträge auf deiner Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)
