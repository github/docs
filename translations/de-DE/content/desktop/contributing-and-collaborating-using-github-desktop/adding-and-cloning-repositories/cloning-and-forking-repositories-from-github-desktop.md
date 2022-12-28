---
title: Repositories von GitHub Desktop klonen und per „Fork“ kopieren
intro: 'Mit {% data variables.product.prodname_desktop %} kannst du Repositorys klonen und forken, die sich auf {% data variables.product.prodname_dotcom %} befinden.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  fpt: '*'
shortTitle: Clone & fork from Desktop
ms.openlocfilehash: e4182e56d0418e3aea07c94e0a3657ef8e104ea0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090156'
---
## Informationen zu lokalen Repositorys
Repositorys für {% data variables.product.prodname_dotcom %} sind Remoterepositorys. Du kannst ein Repository mit {% data variables.product.prodname_desktop %} klonen oder forken, um ein lokales Repository auf deinem Computer zu erstellen.

Du kannst eine lokale Kopie eines beliebigen Repositorys für {% data variables.product.product_name %} erstellen, auf das du zugreifen kannst, indem du das Repository klonst. Wenn du über ein Repository oder über Schreibberechtigungen verfügst, kannst du zwischen den lokalen und Remotespeicherorten synchronisieren. Weitere Informationen findest du unter [Synchronisieren deines Branchs](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch).

Wenn du ein Repository klonst, haben alle Änderungen, die du an {% data variables.product.product_name %} pushst, Auswirkungen auf das ursprüngliche Repository. Um Änderungen vorzunehmen, ohne das ursprüngliche Projekt zu beeinträchtigen, kannst du eine separate Kopie erstellen, indem du das Repository forkst. Du kannst einen Pull Request erstellen, um anzuweisen, dass Maintainer die Änderungen in deinem Fork in das ursprüngliche Upstreamrepository einbinden. Weitere Informationen findest du unter [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks).

Wenn du versuchst, {% data variables.product.prodname_desktop %} zu verwenden, um ein Repository zu klonen, auf das du keinen Schreibzugriff hast, wirst du automatisch von {% data variables.product.prodname_desktop %} aufgefordert, einen Fork zu erstellen. Du kannst deinen Fork verwenden, um zum ursprünglichen Upstreamrepository beizutragen oder unabhängig an deinem eigenen Projekt zu arbeiten. Alle vorhandenen Forks tragen standardmäßig an den Änderungen an den Upstreamrepositorys bei. Du kannst diese Auswahl jederzeit ändern. Weitere Informationen findest du unter [Verwalten des Forkverhaltens](#managing-fork-behavior).

Darüber hinaus kannst du ein Repository direkt über {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} klonen. Weitere Informationen findest du unter [Klonen eines Repositorys aus {% data variables.product.prodname_dotcom %} zu {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/).

## Ein Repository klonen

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

## Repository forken
Wenn du ein Repository klonst, auf das du keinen Schreibzugriff hast, erstellt {% data variables.product.prodname_desktop %} einen Fork. Nach dem Erstellen oder Klonen eines Forks wirst du von {% data variables.product.prodname_desktop %} gefragt, wie du den Fork verwenden möchtest.

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %} {% data reusables.desktop.fork-type-prompt %}

## Verwalten des Forkverhaltens
Du kannst ändern, wie sich ein Fork mit dem Upstreamrepository in {% data variables.product.prodname_desktop %} verhält.

{% data reusables.desktop.open-repository-settings %} {% data reusables.desktop.select-fork-behavior %}

## Erstellen eines Alias für ein lokales Repository
Du kannst einen Alias für ein lokales Repository erstellen, um zwischen Repositorys desselben Namens in {% data variables.product.prodname_desktop %} zu unterscheiden. Das Erstellen eines Alias wirkt sich nicht auf den Namen des Repositorys auf {% data variables.product.prodname_dotcom %} aus. In der Repositoryliste werden Aliase kursiv angezeigt.

1. Klicke in der oberen linken Ecke von {% data variables.product.prodname_desktop %} rechts neben dem aktuellen Repositorynamen auf {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
2. Klicke mit der rechten Maustaste auf das Repository, für das du einen Alias erstellen möchtest, und klicke dann auf **Alias erstellen**.
3. Gib einen Alias für das Repository ein.
4. Klicke auf **Alias erstellen**.

## Weitere Informationsquellen
- [Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories)
