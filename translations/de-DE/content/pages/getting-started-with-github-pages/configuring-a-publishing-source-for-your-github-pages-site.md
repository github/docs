---
title: Eine Veröffentlichungsquelle für deine GitHub Pages-Website konfigurieren
intro: '{% ifversion pages-custom-workflow %}Du kannst deine {% data variables.product.prodname_pages %}-Website so konfigurieren, dass sie veröffentlicht wird, wenn Änderungen an einen bestimmten Branch gepusht werden, oder du kannst einen {% data variables.product.prodname_actions %}-Workflow schreiben, um deine Website zu veröffentlichen.{% else%}Wenn du die Standardveröffentlichungsquelle für deine {% data variables.product.prodname_pages %}-Website verwendest, wird sie automatisch veröffentlicht. Du kannst deine Website auch aus einem anderen Branch oder Ordner veröffentlichen.{% endif %}'
redirect_from:
  - /articles/configuring-a-publishing-source-for-github-pages
  - /articles/configuring-a-publishing-source-for-your-github-pages-site
  - /github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can configure a publishing source for a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Configure publishing source
ms.openlocfilehash: d08b5c150da5be18700312237c374059228c563d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529639'
---
## Informationen zu Veröffentlichungsquellen

{% data reusables.pages.pages-about-publishing-source %}

{% data reusables.pages.private_pages_are_public_warning %}

## Veröffentlichen aus einem Branch

1. Stelle sicher, dass der Branch, den du als Veröffentlichungsquelle nutzen möchtest, bereits in deinem Repository vorhanden ist.
{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% ifversion pages-custom-workflow %}
1. Wähle unter „Erstellen und Bereitstellen“ unter „Quelle“ die Option **Aus einem Branch bereitstellen** aus.
1. Wähle unter „Erstellen und Bereitstellen“ unter „Branch“ im Dropdownmenü **Keine** oder **Branch** eine Veröffentlichungsquelle aus.

   ![Dropdownmenü zum Auswählen einer Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-drop-down.png) {% else %}
3. Wähle unter "{% data variables.product.prodname_pages %}" im Dropdownmenü **None** (Keine) oder **Branch** eine Veröffentlichungsquelle aus.
  ![Dropdownmenü zum Auswählen einer Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-drop-down.png) {% endif %}
4. Verwende wahlweise das Dropdownmenü, um einen Ordner für deine Veröffentlichungsquelle auszuwählen.
  ![Dropdownmenü zum Auswählen eines Ordners für die Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-folder-drop-down.png)
5. Klicken Sie auf **Speichern**.
  ![Schaltfläche zum Speichern von Änderungen an den Einstellungen der Veröffentlichungsquelle](/assets/images/help/pages/publishing-source-save.png)

### Problembehandlung beim Veröffentlichen aus einem Branch

{% data reusables.pages.admin-must-push %}

Wenn du den `docs`-Ordner in jedem Branch als Veröffentlichungsquelle auswählst und später den `/docs`-Ordner aus diesem Branch in deinem Repository entfernst, wird deine Website nicht erstellt, und du erhältst eine Seiten-Buildfehlermeldung aufgrund eines fehlenden `/docs`-Ordners. Weitere Informationen findest du unter [Behandeln von Jekyll-Buildfehlern für {% data variables.product.prodname_pages %}-Websites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder).

{% ifversion build-pages-with-actions %}

Deine {% data variables.product.prodname_pages %}-Website wird immer mit einer {% data variables.product.prodname_actions %}-Workflowausführung bereitgestellt, selbst wenn du deine {% data variables.product.prodname_pages %}-Website so konfigurierst, dass sie mit einem anderen CI-Tool erstellt wird. Die meisten externen CI-Workflows werden in GitHub Pages "bereitgestellt", indem die Build.Ausgabe an den `gh-pages`-Branch des Repositorys committed wird und in der Regel eine `.nojekyll`-Datei einschließt. Wenn dies geschieht, erkennt der {% data variables.product.prodname_actions %}-Workflow, dass der Branch keinen Build-Schritt benötigt, und führt nur die Schritte aus, die erforderlich sind, um die Website auf {% data variables.product.prodname_pages %}-Servern bereitzustellen.

Um potenzielle Fehler bei der Erstellung oder der Bereitstellung zu finden, kannst du die Ausführung des Workflows für deine {% data variables.product.prodname_pages %}-Website kontrollieren, indem du die Workflowausführungen deines Repositorys überprüfst. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history). Weitere Informationen zum erneuten Ausführen des Workflows im Falle eines Fehlers findest du unter [Erneutes Ausführen von Workflows und Aufträgen](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

{% endif %}

{% ifversion pages-custom-workflow %}

## Veröffentlichen mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow

{% data reusables.pages.pages-custom-workflow-beta %}

So konfigurierst du deine Website für das Veröffentlichen mit {% data variables.product.prodname_actions %}:

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Wähle unter „Erstellen und Bereitstellen“ unter „Quelle“ die Option **GitHub Actions** aus.
1. {% data variables.product.product_name %} schlägt mehrere Startworkflows vor. Wenn du bereits über einen Workflow zum Veröffentlichen deiner Website verfügst, kannst du diesen Schritt überspringen. Anderenfalls wähle eine der Optionen aus, um einen {% data variables.product.prodname_actions %}-Workflow zu erstellen. Weitere Informationen zum Erstellen deines benutzerdefinierten Workflows findest du unter [Erstellen eines benutzerdefinierten {% data variables.product.prodname_actions %}-Workflows zum Veröffentlichen deiner Website](#creating-a-custom-github-actions-workflow-to-publish-your-site).

   Den {% data variables.product.prodname_pages %}-Einstellungen wird von den {% data variables.product.prodname_pages %} kein bestimmter Workflow zugeordnet. Die {% data variables.product.prodname_pages %}-Einstellungen werden jedoch mit der Workflowausführung verknüpft, von der deine Website zuletzt bereitgestellt wurde.

### Erstellen eines benutzerdefinierten {% data variables.product.prodname_actions %}-Workflows zum Veröffentlichen deiner Website

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Aktionen](/actions).

Wenn du deine Website so konfigurierst, dass sie mit {% data variables.product.prodname_actions %} veröffentlicht wird, schlägt {% data variables.product.product_name %} Startworkflows für allgemeine Veröffentlichungsszenarien vor. Der allgemeine Ablauf eines Workflows umfasst Folgendes:

1. Auslösen, wenn ein Push an den Standardbranch des Repositorys erfolgt oder wenn ein auf den Standardbranch ausgerichteter Pull Request geöffnet, erneut geöffnet oder aktualisiert wird.
1. Auschecken des Repositoryinhalts mit der Aktion [`actions/checkout`](https://github.com/actions/checkout).
1. Erstellen statischer Websitedateien (sofern von der Website verlangt).
1. Hochladen der statischen Datei als Artefakt mit der Aktion [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact).
1. Bereitstellen des Artefakts mit der Aktion [`actions/deploy-pages`](https://github.com/actions/deploy-pages), wenn der Workflow durch einen Push an den Standardbranch ausgelöst wurde. Dieser Schritt wird übersprungen, wenn der Workflow durch einen Pull Request ausgelöst wurde.

Die Startworkflows verwenden eine Bereitstellungsumgebung namens `github-pages`. Wenn dein Repository noch keine Umgebung namens `github-pages` enthält, wird sie automatisch erstellt. Es wird empfohlen, eine Umgebungsschutzregel hinzuzufügen, damit nur der Standardbranch für diese Umgebung bereitgestellt werden kann. Weitere Informationen findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/targeting-different-environments/using-environments-for-deployment).

{% note %}

**Hinweis**: Eine `CNAME`-Datei in deiner Repositorydatei führt nicht zum automatischen Hinzufügen oder Entfernen einer benutzerdefinierten Domäne. Stattdessen musst du die benutzerdefinierte Domäne über deine Repositoryeinstellungen oder über die API konfigurieren. Weitere Informationen findest du unter [Verwalten einer benutzerdefinierten Domäne für deine GitHub Pages-Website](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain) und in der [Dokumentation zur Seiten-API](/rest/pages#update-information-about-a-github-pages-site).

{% endnote %}

### Problembehandlung beim Veröffentlichen mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow

Informationen zur Problembehandlung deiner {% data variables.product.prodname_actions %}-Workflows findest du unter [Informationen zu Überwachung und Problembehandlung](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting).

{% endif %}
