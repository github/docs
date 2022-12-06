---
title: Erste Schritte mit GitHub Codespaces für maschinelles Lernen
shortTitle: Machine learning
intro: 'Erfahre mehr über die Arbeit an ML-Projekten mit {% data variables.product.prodname_github_codespaces %} und den zugehörigen Tools.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158917'
---
## Einführung

Dieser Leitfaden enthält eine Einführung in maschinelles Lernen mit {% data variables.product.prodname_github_codespaces %}. Du erstellst eine einfache Bildklassifizierung, lernst einige der Tools kennen, die in {% data variables.product.prodname_github_codespaces %} vorinstalliert sind, konfigurierst deine Entwicklungsumgebung für NVIDIA CUDA und öffnest deinen Codespace in JupyterLab.

## Erstellen einer einfachen Bildklassifizierung

Wir verwenden ein Jupyter-Notebook, um eine einfache Bildklassifizierung zu erstellen. 

Jupyter-Notebooks sind Gruppen von Zellen, die nacheinander ausgeführt werden können. Das Notebook, das wir verwenden, enthält eine Reihe von Zellen, die eine Bildklassifizierung mithilfe von [PyTorch](https://pytorch.org/) erstellen. Jede Zelle ist eine andere Phase dieses Prozesses: Herunterladen eines Datasets, Einrichten eines neuronales Netzes, Trainieren eines Modells und anschließendes Testen dieses Modells.

Wir führen alle Zellen nacheinander aus, um alle Phasen zum Erstellen der Bildklassifizierung auszuführen. Dabei speichert Jupyter die Ausgabe zurück in das Notebook, damit du die Ergebnisse untersuchen kannst.

### Einen Codespace erstellen

1. Navigiere zum Vorlagenrepository [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter).
{% data reusables.codespaces.open-template-in-codespace-step %}

Ein Codespace für diese Vorlage wird in einer webbasierten Version von {% data variables.product.prodname_vscode %} geöffnet.

### Öffnen des Notebooks zur Bildklassifizierung 

Das von {% data variables.product.prodname_github_codespaces %} verwendete Standardcontainerimage umfasst eine Reihe von ML-Bibliotheken, die in deinem Codespace vorinstalliert sind. Dazu gehören beispielsweise Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests und Plotly. Weitere Informationen zum Standardimage findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration) und [im `devcontainers/images`-Repository](https://github.com/devcontainers/images/tree/main/src/universal).

1. Schließe im {% data variables.product.prodname_vscode_shortname %}-Editor alle angezeigten Registerkarten „Erste Schritte“.
1. Öffne die Notebook-Datei `notebooks/image-classifier.ipynb`.

### Erstellen der Bildklassifizierung

Das Notebook zur Bildklassifizierung enthält den gesamten Code, den du benötigst, um ein Dataset herunterzuladen, ein neuronales Netz zu trainieren und die Leistung zu bewerten.

1. Klicke auf **Alle ausführen**, um alle Zellen des Notebooks auszuführen.

   ![Screenshot der Schaltfläche „Alle ausführen“](/assets/images/help/codespaces/jupyter-run-all.png)

1. Scrolle nach unten, um die Ausgabe der einzelnen Zellen anzuzeigen.

   ![Screenshot von Schritt 3 im Editor](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Konfigurieren von NVIDIA CUDA für deinen Codespace

Einige Software erfordert die Installation von NVIDIA CUDA, damit die GPU deines Codespace verwendet werden kann. Wenn dies der Fall ist, kannst du deine eigene benutzerdefinierte Konfiguration erstellen, indem du eine `devcontainer.json`-Datei verwendest und angibst, dass CUDA installiert werden soll. Weitere Informationen zum Erstellen einer benutzerdefinierten Konfiguration findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration).

{% note %}

**Hinweis**: Ausführliche Informationen zu dem Skript, das ausgeführt wird, wenn du das `nvidia-cuda`-Feature hinzufügst, findest du im [Repository „devcontainers/features“](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. Öffne in einem Codespace die Datei `.devcontainer/devcontainer.json` im Editor.
1. Füge ein `features`-Objekt auf oberster Ebene mit den folgenden Inhalten hinzu:

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   Weitere Informationen zum `features`-Objekt findest du in der [Spezifikation für Entwicklungscontainer](https://containers.dev/implementors/features/#devcontainer-json-properties).

   Wenn du die Datei `devcontainer.json` aus dem Bildklassifizierungsrepository verwendest, das du für dieses Tutorial erstellt hast, sieht die Datei `devcontainer.json` nun wie folgt aus:

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Speichere die Änderungen.
{% data reusables.codespaces.rebuild-command %} Der Codespacecontainer wird neu erstellt. Dies dauert einige Minuten. Wenn die Neuerstellung abgeschlossen ist, wird der Codespace automatisch erneut geöffnet.
1. Veröffentliche die Änderung in einem Repository, damit CUDA in allen neuen Codespaces installiert wird, die du in Zukunft von diesem Repository aus erstellst. Weitere Informationen findest du unter [Erstellen eines Codespace mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code).

## Öffnen deines Codespace in JupyterLab

Du kannst deinen Codespace in JupyterLab über die Seite „Deine Codespaces“ unter [github.com/codespaces](https://github.com/codespaces) oder mithilfe der {% data variables.product.prodname_cli %} öffnen. Weitere Informationen findest du unter [Öffnen eines vorhandenen Codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace).

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
