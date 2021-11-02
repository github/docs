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
---

## About your contribution graph

Your profile contributions graph is a record of contributions you've made to repositories {% ifversion ghae %}owned by{% else %}on{% endif %} {% data variables.product.product_location %}. Beiträge werden nicht entsprechend Deiner lokalen Zeitzone, sondern entsprechend der UTC-Zone (Coordinated Universal Time, koordinierte Weltzeit) mit Zeitstempeln versehen. Beiträge werden nur gezählt, falls sie bestimmte Kriterien erfüllen. In manchen Fällen muss Dein Diagramm allenfalls neu erstellt werden, damit die Beiträge angezeigt werden.

## Gezählte Beiträge

### Issues, pull requests and discussions

Issues, pull requests and discussions will appear on your contribution graph if they were opened in a standalone repository, not a fork.

### Commits
Commits werden in Deinem Beteiligungsdiagramm angezeigt, falls sie **alle** folgenden Bedingungen erfüllen:
- The email address used for the commits is associated with your account on {% data variables.product.product_location %}.
- Die Commits wurden in einem eigenständigen Repository vorgenommen und nicht in einem Fork.
- Die Commits wurden
  - In the repository's default branch
  - im `gh-pages`-Branch vorgenommen (für Repositorys mit Projekt-Websites)

For more information on project sites, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

Außerdem muss **mindestens eine** der folgenden Voraussetzung erfüllt sein:
- Du bist ein Repository-Mitarbeiter oder ein Mitglied der Organisation, welcher das Repository gehört.
- Du hast das Repository geforkt.
- Du hast einen Pull Request oder Issue im Repository geöffnet.
- Sie haben das Repository mit Sternen versehen.

## Allgemeine Ursachen für nicht gezählte Beiträge

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Die Commit-Erstellung liegt weniger als 24 Stunden zurück

Nachdem Du einen Commit erstellt hast, der die Anforderung erfüllt, um als Beitrag gezählt zu werden, kann es bis zu 24 Stunden dauern, bis der Beitrag in Deinem Beteiligungsdiagramm angezeigt wird.

### Your local Git commit email isn't connected to your account

Commits must be made with an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the {% data variables.product.prodname_dotcom %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% ifversion fpt or ghec %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

Du kannst die für einen Commit verwendete E-Mail-Adresse überprüfen. Füge dazu `.patch` am Ende einer Commit-URL hinzu, also beispielsweise <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

Bei der im Feld `From:` (Von) angegebenen E-Mail-Adresse handelt es sich um die Adresse, die in den [Einstellungen für die lokale Git-Konfiguration](/articles/set-up-git) festgelegt wurde. In diesem Beispiel lautet die für den Commit verwendete E-Mail-Adresse `octocat@nowhere.com`.

If the email address used for the commit is not connected to your account on {% data variables.product.product_location %}, {% ifversion ghae %}change the email address used to author commits in Git. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %}you must [add the email address](/articles/adding-an-email-address-to-your-github-account) to your account on {% data variables.product.product_location %}. Your contributions graph will be rebuilt automatically when you add the new address.{% endif %}

{% warning %}

**Warning**: Generic email addresses, such as `jane@computer.local`, cannot be added to {% data variables.product.prodname_dotcom %} accounts. If you use such an email for your commits, the commits will not be linked to your {% data variables.product.prodname_dotcom %} profile and will not show up in your contribution graph.

{% endwarning %}

### Commit wurde weder auf dem Standard- noch auf dem `gh-pages`-Branch durchgeführt

Commits are only counted if they are made in the default branch or the `gh-pages` branch (for repositories with project sites). For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

Falls sich Deine Commits auf einem Nicht-Standard- oder Nicht-`gh-pages`-Branch befinden und sie auf Deine Beiträge angerechnet werden sollen, musst Du eine der folgenden Aktionen durchführen:
- [Öffne einen Pull Request](/articles/creating-a-pull-request), damit Deine Änderungen in den Standardbranch oder in den `gh-pages`-Branch zusammengeführt werden.
- [Ändere den Standardbranch](/github/administering-a-repository/changing-the-default-branch) des Repositorys.

{% warning %}

**Warning**: Changing the default branch of the repository will change it for all repository collaborators. Führe diese Aktion nur dann aus, wenn Du willst, dass der neue Branch zur neuen Basis wird, auf der alle künftigen Pull Requests und Commits durchgeführt werden.

{% endwarning %}

### Commit wurde in einem Fork durchgeführt

Die in einem Fork durchgeführten Commits werden nicht auf Deine Beiträge angerechnet. Führe eine der folgenden Aktionen durch, damit sie angerechnet werden:
- [Öffne einen Pull Request](/articles/creating-a-pull-request), damit Deine Änderungen in das übergeordnete Repository zusammengeführt werden.
- To detach the fork and turn it into a standalone repository on {% data variables.product.product_location %}, contact {% data variables.contact.contact_support %}. If the fork has forks of its own, let {% data variables.contact.contact_support %} know if the forks should move with your repository into a new network or remain in the current network. Weitere Informationen findest Du unter „[Informationen zu Forks](/articles/about-forks/).“

## Weiterführende Informationen

- „[Private Beiträge in Deinem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)“
- „[Beiträge auf Ihrer Profilseite anzeigen](/articles/viewing-contributions-on-your-profile-page)“
