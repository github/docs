---
title: Durchführen einer vollständigen Neuerstellung eines Containers
intro: 'Wenn du wenig Speicherplatz auf dem Datenträger hast oder sicherstellen möchtest, dass deine Entwicklungscontainerkonfiguration in neuen Codespaces funktioniert, kannst du eine vollständige Neuerstellung eines Containers durchführen.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180840'
---
## Informationen zum Neuerstellen eines Containers

Wenn du in einem Codespace arbeitest, ist deine Entwicklungsumgebung ein Docker-Container, der auf einem virtuellen Computer ausgeführt wird. Wenn du Änderungen an der Konfiguration deines Entwicklungscontainers von einem Codespace aus vornimmst, und diese Änderungen auf den aktuellen Codespace anwenden möchtest, musst du den Container neu erstellen.

Wenn du einen Container neu erstellst, beschleunigt {% data variables.product.prodname_github_codespaces %} standardmäßig den Buildprozess, indem zwischengespeicherte Images aus früheren Builds des Containers wiederverwendet werden. Dies ist in der Regel die schnellste Möglichkeit, Änderungen an deiner Entwicklungscontainerkonfiguration zu implementieren, und zwar aus folgenden Gründen.
- {% data variables.product.prodname_github_codespaces %} kann Images in deinem Cache wiederverwenden, anstatt sie erneut aus Containerregistrierungen zu pullen.
- Die Teile deiner Entwicklungscontainerkonfiguration, die definieren, wie der Container erstellt wird, z. B. Entwicklercontainerfeatures und Dockerfile-Anweisungen, wurden möglicherweise bereits in Imageebenen in deinem Cache implementiert, sodass du nicht warten musst, bis diese Prozesse erneut ausgeführt werden. (Befehle in deiner Konfiguration, die nach dem Erstellen des Containers ausgeführt werden, z. B. `onCreateCommand`, werden jedoch erneut ausgeführt.)

Gelegentlich kannst du eine vollständige Neuerstellung deines Containers durchführen. Bei einer vollständigen Neuerstellung bereinigt {% data variables.product.prodname_github_codespaces %} alle Docker-Container, Images und Volumes aus dem Cache und erstellt deinen Container dann mit neu gepullten Images neu. Das gesamte in deiner Konfiguration definierte Setup wird erneut ausgeführt, wodurch neue Imageebenen generiert werden. In Situationen wie der folgenden kannst du nach vielen Iterationen der Neuerstellung deines Containers mit zwischengespeicherten Images eine vollständige Neuerstellung durchführen.

- Du solltest sicherstellen, dass das in deiner Konfiguration definierte Setup nicht von zwischengespeicherten Images abhängig ist, und wie erforderlich ausgeführt wird, wenn basierend auf der Konfiguration ein neuer Codespace erstellt wird. Beispielsweise kann eine Abhängigkeit aus dem Basisimage entfernt worden sein, seit es zuletzt in deinen Codespace gepullt wurde.
- Du solltest den von deinem Cache verwendeten Speicherplatz auf dem Datenträger freigeben, wenn bspw. der Speicherplatz auf dem Datenträger knapp ist, oder du die Speichergebühren minimieren möchtest. Dein Imagecache benötigt möglicherweise erheblichen Speicherplatz auf dem Datenträger, wenn du dein Basisimage mehrmals geändert hast, eine große Anzahl iterativer Änderungen an deiner Konfiguration vorgenommen hast oder du mehrere Container mit Docker Compose ausführst.

## Ausführen einer vollständigen Neuerstellung

Du kannst eine vollständige Neuerstellung in {% data variables.product.prodname_vscode %} durchführen.

{% data reusables.codespaces.command-pallette %}
1. Beginne mit der Eingabe von „Neu erstellen“, und wähle **Codespaces: Container vollständig neu erstellen** aus.

   ![Screenshot des Befehls „Container vollständig neu erstellen“ in der Befehlspalette](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## Eine vollständige Neuerstellung übergreifendes Beibehalten von Daten

Alle Dateien und Ordner im Verzeichnis `/workspaces` deines Codespaces werden bei einer Neuerstellung immer beibehalten. Du musst weder Einstellungen ändern noch eine Konfiguration hinzufügen, um den Inhalt dieses Verzeichnisses eine vollständige Neuerstellung übergreifend beizubehalten.

Wenn Daten außerhalb des Verzeichnisses `/workspaces` eine vollständige Neuerstellung übergreifend beibehalten werden sollen, kannst du eine symbolische Verknüpfung (Symlink) mit dem persistenten Verzeichnis am gewünschten Speicherort innerhalb des Containers erstellen. Du kannst z. B. in deinem `/workspaces/.devcontainer`-Verzeichnis ein `config`-Verzeichnis erstellen, das bei einer Neuerstellung beibehalten wird. Anschließend erstellst du eine symbolische Verknüpfung für das `config`-Verzeichnis und seinen Inhalt als `postCreateCommand` in deiner `devcontainer.json`-Datei.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

In der nachstehenden Beispieldatei `postCreate.sh` werden die Inhalte des `config`-Verzeichnisses symbolisch mit dem Basisverzeichnis verknüpft.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Weiterführende Themen
- [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
