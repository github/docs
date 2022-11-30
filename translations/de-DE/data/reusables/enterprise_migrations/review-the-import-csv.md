---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145102251"
---
1. Überprüfe die CSV-Datei in `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Sie sollte die folgenden Spalten enthalten:
    - `ID`: der im ursprünglichen Repository gespeicherte Autor, gefolgt von einem eindeutigen Kennzeichner
    - `NAME`: der im ursprünglichen Repository gespeicherte Autor

  Um Autoren aus dem ursprünglichen Repository einer E-Mail-Adresse und einem Namen zuzuordnen, erstelle eine neue CSV-Datei mit den Spalten `ID,(ignored),GIT_EMAIL,GIT_NAME`, wodurch die Autorinformationen für alles durch „ID“ mit „GIT_EMAIL“ und „GIT_NAME“ ersetzt werden.

  #### Beispiel:

   - Ursprüngliche Autor-ID: `octocat@111111-2222-3333-4444-55555555555`
   - Neue E-Mail-Adresse: `octocat@github.com`
   - Neuer Name: `The Octocat`

   Um den ursprünglichen Autor dem neuen Git-Benutzer zuzuordnen, sollte in der CSV-Datei die folgende Zeile enthalten sein:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
