---
title: Informationen zu Git
intro: 'Hier erfährst du mehr über das Versionskontrollsystem, Git und die Funktionsweise mit {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Git
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 595fc79c5a656a3d6da8b5589ed384b545a418ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104587'
---
## Informationen zur Versionskontrolle und Git

Ein Versionskontrollsystem (Version Control System, VCS) verfolgt den Änderungsverlauf nach, während Personen und Teams zusammen an Projekten arbeiten. Wenn Entwickler*innen Änderungen am Projekt vornehmen, kann jede frühere Version des Projekts jederzeit wiederhergestellt werden.

Entwickler*innen können den Projektverlauf überprüfen, um Folgendes herauszufinden:

- Welche Änderungen wurden vorgenommen?
- Wer hat die Änderungen vorgenommen?
- Wann wurden die Änderungen vorgenommen?
- Warum waren Änderungen erforderlich?

Mit VCS verfügen alle Mitwirkenden über eine einheitliche und konsistente Ansicht für ein Projekt, in der die Aufgaben angezeigt werden, die bereits in Bearbeitung sind. Wenn die Teammitglieder einen transparenten Verlauf mit den Änderungen, den Personen, die diese vorgenommen haben, sowie Angaben dazu, wie die Änderungen zur Entwicklung eines Projekts beitragen, sehen, hilft ihnen dies dabei, sich bei ihrer Arbeit aufeinander abzustimmen, auch wenn sie unabhängig voneinander arbeiten.

Bei einem verteilten Versionskontrollsystem (Distributed Version Control System, DVCS) verfügt jede*r Entwickler*in über eine vollständige Kopie des Projekts und des Projektverlaufs. Im Gegensatz zu den früher beliebten zentralisierten Versionskontrollsystemen benötigen DVCS keine konstante Verbindung mit einem zentralen Repository. Git ist das beliebteste verteilte Versionskontrollsystem. Git wird häufig sowohl für die Entwicklung von Open-Source-Software als auch für die kommerzieller Software verwendet und bietet erhebliche Vorteile für Einzelpersonen, Teams und Unternehmen.

- Git ermöglicht es Entwickler*innen, all ihre Änderungen, Entscheidungen und Fortschritte für ein Projekt im Lauf der Zeit an einem Ort anzuzeigen. Ab dem Moment, in dem sie auf den Verlauf für ein Projekt zugreifen, verfügen die Entwickler*innen über den gesamten Kontext, den sie benötigen, um das Projekt zu verstehen und zu beginnen, daran mitzuwirken.

- Entwickler*innen arbeiten in allen Zeitzonen. Mit einem DVCS wie Git ist eine Zusammenarbeit mit Sicherstellung der Integrität des Quellcodes jederzeit möglich. Mithilfe von Branches können Entwickler*innen auf sichere Weise Änderungen an Produktionscode vorschlagen.

- Unternehmen, die Git verwenden, können Kommunikationsbarrieren zwischen Teams beseitigen und so dafür sorgen, dass diese sich darauf konzentrieren können, ihr Bestes zu geben. Darüber hinaus ermöglicht Git die Abstimmung von Expert*innen in verschiedenen Teilen eines Unternehmens, die zusammen an großen Projekten arbeiten.

## Informationen zu Repositorys

Ein Repository oder Git-Projekt enthält die gesamte Sammlung von Dateien und Ordnern, die einem Projekt zugeordnet sind, sowie den Überarbeitungsverlauf jeder Datei. Der Dateiverlauf wird als Momentaufnahmen im Zeitverlauf angezeigt. Diese werden „Commits“ genannt. Diese Commits können mehreren Entwicklungslinien zugeordnet werden, die als „Branches“ bezeichnet werden. Da Git ein DVCS ist, sind Repositorys eigenständige Einheiten, und jede Person, die über eine Kopie des Repositorys verfügt, kann auf die gesamte Codebasis und deren Verlauf zugreifen. Über die Befehlszeilenschnittstelle oder andere benutzerfreundliche Schnittstellen ermöglicht ein Git-Repository auch Folgendes: eine Interaktion mit dem Verlauf, das Klonen des Repositorys, das Erstellen von Branches, Commits, Merges, das Vergleichen von Änderungen zwischen verschiedenen Codeversionen und vieles mehr.

Über Plattformen wie {% data variables.product.product_name %} bietet Git auch mehr Möglichkeiten in Bezug auf Projekttransparenz und Zusammenarbeit. Öffentliche Repositorys helfen Teams dabei, zusammenzuarbeiten, um das bestmögliche Endprodukt zu erstellen.

## Funktionsweise von {% data variables.product.product_name %}

{% data variables.product.product_name %} hostet Git-Repositorys und bietet Entwickler*innen Tools zum besseren Bereitstellen von Code durch Befehlszeilenfeatures, Issues (Diskussionsthreads), Pull Requests, Code Review sowie die Verwendung einer Sammlung kostenloser und kostenpflichtiger Apps im {% data variables.product.prodname_marketplace %}. Mit Zusammenarbeitsebenen wie dem {% data variables.product.product_name %}-Flow, einer Community mit 15 Millionen Entwickler*innen und einem Ökosystem mit Hunderten von Integrationen verändert {% data variables.product.product_name %} die Programmierung von Software.

Bei {% data variables.product.product_name %} ist die Zusammenarbeit direkt in den Entwicklungsprozess integriert. Die Arbeit wird in Repositorys organisiert, in denen Entwickler*innen Anforderungen oder Richtungen skizzieren und Erwartungen für Teammitglieder festlegen können. Anschließend verwenden die Entwickler*innen den {% data variables.product.product_name %}-Flow, um einfach einen Branch für die Arbeit an Updates zu erstellen, Änderungen zu committen, um sie zu speichern, einen Pull Request für das Vorschlagen und Diskutieren von Änderungen zu öffnen und Pull Requests zu mergen, sobald alle sich einig sind. Weitere Informationen findest du unter [GitHub-Flow](/get-started/quickstart/github-flow).

## {% data variables.product.product_name %} und die Befehlszeile

### Grundlegende Git-Befehle

Entwickler*innen nutzen bestimmte Befehle zum Kopieren, Erstellen, Ändern und Kombinieren von Code, um Git zu verwenden. Diese Befehle können direkt über die Befehlszeile oder mithilfe einer Anwendung wie {% data variables.product.prodname_desktop %} ausgeführt werden. Hier sind einige gängige Befehle für die Verwendung von Git:

- Mit `git init` wird ein brandneues Git-Repository initialisiert und mit der Nachverfolgung für ein bestehendes Verzeichnis begonnen. Es wird ein ausgeblendeter Unterordner im bestehenden Verzeichnis hinzugefügt, der die für die Versionskontrolle erforderliche interne Datenstruktur enthält.

- Mit `git clone` wird eine lokale Kopie eines remote bereits vorhandenen Projekts erstellt. Der Klon enthält alle Dateien, den Verlauf und alle Branches des Projekts.

- Mit `git add` wird eine Änderung gestaget. Git verfolgt Änderungen an der Codebasis eines Entwicklers bzw. einer Entwicklerin nach. Damit die Änderungen in den Verlauf des Projekts aufgenommen werden, sind jedoch das Stagen und die Erstellung einer Momentaufnahme der Änderungen erforderlich. Mit diesem Befehl wird das Stagen ausgeführt, der erste Teil dieses zweistufigen Prozesses. Alle gestageten Änderungen werden Teil der nächsten Momentaufnahme sowie des Verlaufs des Projekts. Das getrennte Stagen und Committen gibt Entwickler*innen die vollständige Kontrolle über den Verlauf ihres Projekts, ohne dass sie ihre Art zu Programmieren oder ihre Arbeitsweise ändern müssen.

- Mit `git commit` wird die Momentaufnahme im Projektverlauf gespeichert, und der Änderungsnachverfolgungsprozess wird abgeschlossen. Kurz gesagt funktioniert ein Commit wie das Aufnehmen eines Fotos. Alles, was mit `git add` gestaget wurde, wird Teil der Momentaufnahme mit `git commit`.

- Mit `git status` wird der Status von Änderungen angezeigt („Nicht nachverfolgt“, „Geändert“ oder „Gestaget“).

- Mit `git branch` werden die Branches angezeigt, an denen lokal gearbeitet wird.

- Mit `git merge` werden Entwicklungslinien gemergt. Dieser Befehl wird in der Regel verwendet, um Änderungen zu kombinieren, die in zwei verschiedenen Branches vorgenommen wurden. Beispielsweise würde ein*e Entwickler*in einen Merge durchführen, wenn er bzw. sie Änderungen aus einem Featurebranch in den Mainbranch für die Bereitstellung integrieren möchte.

- Mit `git pull` wird die lokale Entwicklungslinie mit Updates aus ihrem Remotegegenstück aktualisiert. Entwickler*innen verwenden diesen Befehl, wenn ein anderes Teammitglied Commits für einen Branch in einem Remoterepository vorgenommen hat und sie diese Änderungen in ihrer lokalen Umgebung übernehmen möchten.

- Mit `git push` wird das Remoterepository mit allen lokal für einen Branch vorgenommenen Commits aktualisiert.

Weitere Informationen findest du im [vollständigen Referenzleitfaden zu Git-Befehlen](https://git-scm.com/docs).

### Beispiel: Mitwirken an einem bestehenden Repository

```bash
# download a repository on {% data variables.product.product_name %} to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### Beispiel: Erstellen eines neuen Repositorys und Veröffentlichen auf {% data variables.product.product_name %}

Zunächst musst du ein neues Repository auf {% data variables.product.product_name %} erstellen. Weitere Informationen findest du unter [Hallo Welt](/get-started/quickstart/hello-world). Initialisiere das Repository **nicht** mit einer Infodatei, GITIGNORE-Datei oder Lizenzdatei. Dieses leere Repository wartet auf deinen Code.

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```

### Beispiel: Mitwirken an einem bestehenden Branch auf {% data variables.product.product_name %}

In diesem Beispiel wird davon ausgegangen, dass du bereits über ein Projekt namens `repo` auf dem Computer verfügst und nach den letzten lokal vorgenommenen Änderungen eine neuer Branch an {% data variables.product.product_name %} gepusht wurde.

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## Modelle für gemeinsames Entwickeln

Es gibt zwei Hauptmöglichkeiten für die Zusammenarbeit von Personen auf {% data variables.product.product_name %}:

1. Freigegebenes Repository
2. Fork und Pull

Bei einem freigegebenen Repository werden Einzelpersonen und Teams explizit als Mitwirkende mit Lese-, Schreib- oder Administratorzugriff angegeben. Diese einfache Berechtigungsstruktur, kombiniert mit Features wie geschützten Branches, hilft Teams dabei, schnell voranzukommen, wenn sie beginnen, {% data variables.product.product_name %} zu verwenden.

Bei einem Open-Source-Projekt oder Projekten, an denen jede*r mitwirken kann, kann das Verwalten individueller Berechtigungen eine Herausforderung sein, mit einem Fork-und-Pull-Modell kann jedoch jede Person, die das Projekt anzeigen kann, auch daran mitwirken. Ein Fork ist eine Kopie eines Projekts im persönlichen Konto eines Entwicklers oder einer Entwicklerin. Jede*r Entwickler*in hat die vollständige Kontrolle über seinen bzw. ihren Fork und kann einen Fix oder ein neues Feature implementieren. In Forks abgeschlossene Arbeiten bleiben entweder getrennt oder werden über einen Pull Request in das ursprüngliche Projekt übernommen. Dort können Maintainer*innen die vorgeschlagenen Änderungen vor dem Mergen reviewen. Weitere Informationen findest du unter [Mitwirken an Projekten](/get-started/quickstart/contributing-to-projects).

## Weiterführende Themen

Das {% data variables.product.product_name %}-Team hat eine Bibliothek mit Lehrvideos und Leitfäden erstellt, um den Benutzer*innen dabei zu helfen, ihre Fähigkeiten weiter auszubauen und bessere Software zu entwickeln.

- [Anfängerprojekte zum Erkunden](https://github.com/showcases/great-for-new-contributors)
- [Videoanleitungen zu {% data variables.product.product_name %}](https://youtube.com/githubguides)

Ausführliche Informationen zu Git-Praktiken findest du in den folgenden Videos, die zeigen, wie du einige Git-Befehle optimal nutzt.

- [Lokales Arbeiten](https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git status`](https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3)
- [Zweistufige Commits](https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git pull` und `git push`](https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
