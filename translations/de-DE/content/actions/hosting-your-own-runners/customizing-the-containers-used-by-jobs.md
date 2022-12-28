---
title: Anpassen der von Aufträgen verwendeten Container
intro: 'Du kannst anpassen, wie dein selbstgehosteter Runner einen Container für einen Auftrag aufruft.'
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881163'
---
{% note %}

**Hinweis**: Dieses Feature befindet sich derzeit in der Betaversion und wird ggf. noch geändert.

{% endnote %}

## Informationen zur Containeranpassung

{% data variables.product.prodname_actions %} ermöglicht die Ausführung eines Auftrags in einem Container, wenn die Anweisung `container:` in der Workflowdatei verwendet wird. Weitere Informationen findest du unter [Ausführen von Aufträgen in einem Container](/actions/using-jobs/running-jobs-in-a-container). Um containerbasierte Aufträge zu verarbeiten, erstellt der selbstgehostete Runner einen Container für jeden Auftrag.

{% data variables.product.prodname_actions %} unterstützt Befehle, mit denen angepasst werden kann, wie Container vom selbstgehosteten Runner erstellt werden. Du kannst diese Befehle beispielsweise verwenden, um die Container über Kubernetes oder Podman zu verwalten. Außerdem kannst du die Befehle `docker run` und `docker create` anpassen, die zum Aufrufen des Containers verwendet werden. Die Anpassungsbefehle werden von einem Skript ausgeführt, das automatisch ausgelöst wird, wenn eine bestimmte Umgebungsvariable auf dem Runner festgelegt wird. Weitere Informationen findest du weiter unten unter [Auslösen des Anpassungsskripts](#triggering-the-customization-script).

Diese Anpassung ist nur für Linux-basierte selbstgehostete Runner verfügbar. Es ist kein Root-Benutzer-Zugriff erforderlich.

## Befehle für die Containeranpassung

{% data variables.product.prodname_actions %} enthält die folgenden Befehle für die Containeranpassung:

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): Wird aufgerufen, wenn ein Auftrag gestartet wird
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): Wird am Ende eines Auftrags aufgerufen
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): Wird einmal für jede Containeraktion im Auftrag aufgerufen
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): Führt jeden Schritt aus, der keine Containeraktion ist

Jede dieser Anpassungsbefehle muss in einer eigenen JSON-Datei definiert werden. Der Dateiname muss mit dem Befehlsname übereinstimmen und die Erweiterung `.json` aufweisen. Der Befehl `prepare_job` wird beispielsweise in `prepare_job.json` definiert. Diese JSON-Dateien werden dann im selbstgehosteten Runner als Teil des `index.js`-Hauptskripts zusammen ausgeführt. Dieser Prozess wird unter [Generieren des Anpassungsskripts](#generating-the-customization-script) ausführlicher beschrieben.

Diese Befehle enthalten auch Konfigurationsargumente, die unten ausführlicher erläutert werden.

### `prepare_job`

Der Befehl `prepare_job` wird aufgerufen, wenn ein Auftrag gestartet wird. {% data variables.product.prodname_actions %} übergibt alle Auftrags- oder Dienstcontainer, die im Auftrag enthalten sind. Dieser Befehl wird aufgerufen, wenn Dienst- oder Auftragscontainer im Auftrag vorhanden sind. 

{% data variables.product.prodname_actions %} geht davon aus, dass die folgenden Aufgaben mit dem Befehl `prepare_job` erledigt werden:

- Bei Bedarf alle Inhalte aus vorherigen Aufträgen löschen
- Bei Bedarf ein Netzwerk erstellen
- Den Auftrag und die Dienstcontainer pullen
- Den Auftragscontainer starten
- Die Dienstcontainer starten
- Alle von {% data variables.product.prodname_actions %} benötigten Informationen in die Antwortdatei schreiben:
  - Erforderlich: Angabe, ob der Container ein `alpine`-Linux-Container ist (mit der booleschen Variablen `isAlpine`) 
  - Optional: Kontextfelder, die für den Auftragskontext festgelegt werden sollen – nur dann sind diese für Benutzer*innen verfügbar. Weitere Informationen findest du unter [Kontext zu `job`](/actions/learn-github-actions/contexts#job-context).
- `0` zurückgeben, wenn die Integritätsprüfungen bestanden und die Auftrags- und Dienstcontainer gestartet wurden

#### Argumente

- `jobContainer`: **(optional)** Ein Objekt mit Informationen zum angegebenen Auftragscontainer
  - `image`: **(erforderlich)** Eine Zeichenfolge, die das Docker-Image enthält
  - `workingDirectory`: **(erforderlich)** Eine Zeichenfolge, die den absoluten Pfad des Arbeitsverzeichnisses enthält
  - `createOptions`: **(optional)** Die optionalen _Erstellungsoptionen_, die in der YAML-Datei angegeben sind. Weitere Informationen findest du unter [Beispiel: Ausführen eines Auftrags in einem Container](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `environmentVariables`: **(optional)** Legt eine Zuordnung der Schlüsselumgebungsvariablen fest
  - `userMountVolumes`: **(optional)** Ein Array der benutzerseitig eingebundenen Volumes, das in der YAML-Datei festgelegt wird. Weitere Informationen findest du unter [Beispiel: Ausführen eines Auftrags in einem Container](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
    - `sourceVolumePath`: **(erforderlich)** Der Quellpfad zum Volume, das im Docker-Container bereitgestellt wird
    - `targetVolumePath`: **(erforderlich)** Der Zielpfad zum Volume, das im Docker-Container bereitgestellt wird
    - `readOnly`: **(erforderlich)** Legt, ob das eingebundene Volume schreibgeschützt sein soll
  - `systemMountVolumes`: **(erforderlich)** Ein Array der eingebundenen Volumes, die in den Container eingebunden werden sollen (mit den gleichen Feldern wie oben)
    - `sourceVolumePath`: **(erforderlich)** Der Quellpfad zum Volume, das im Docker-Container bereitgestellt wird
    - `targetVolumePath`: **(erforderlich)** Der Zielpfad zum Volume, das im Docker-Container bereitgestellt wird
    - `readOnly`: **(erforderlich)** Legt, ob das eingebundene Volume schreibgeschützt sein soll
  - `registry`: **(optional)** Die Docker-Registrierungsanmeldeinformationen für eine private Containerregistrierung
    - `username`: **(optional)** Der Benutzername des Registrierungskontos
    - `password`: **(optional)** Das Kennwort für das Registrierungskonto
    - `serverUrl`: **(optional)** Die Registrierungs-URL
  - `portMappings`: **(optional)** Ein Schlüssel-Wert-Hash der _source:target_-Ports, die dem Container zugeordnet werden sollen
- `services`: **(optional)** Ein Array der Dienstcontainer, die gestartet werden sollen
  - `contextName`: **(erforderlich)** Der Name des Diensts im Auftragskontext
  - `image`: **(erforderlich)** Eine Zeichenfolge, die das Docker-Image enthält
  - `createOptions`: **(optional)** Die optionalen _Erstellungsoptionen_, die in der YAML-Datei angegeben sind. Weitere Informationen findest du unter [Beispiel: Ausführen eines Auftrags in einem Container](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `environmentVariables`: **(optional)** Legt eine Zuordnung der Schlüsselumgebungsvariablen fest
  - `userMountVolumes`: **(optional)** Ein Array der eingebundenen Volumes, die in den Container eingebunden werden sollen (mit den gleichen Feldern wie oben)
    - `sourceVolumePath`: **(erforderlich)** Der Quellpfad zum Volume, das im Docker-Container bereitgestellt wird
    - `targetVolumePath`: **(erforderlich)** Der Zielpfad zum Volume, das im Docker-Container bereitgestellt wird
    - `readOnly`: **(erforderlich)** Legt, ob das eingebundene Volume schreibgeschützt sein soll
  - `registry`: **(optional)** Die Docker-Registrierungsanmeldeinformationen für die private Containerregistrierung
    - `username`: **(optional)** Der Benutzername des Registrierungskontos
    - `password`: **(optional)** Das Kennwort für das Registrierungskonto
    - `serverUrl`: **(optional)** Die Registrierungs-URL
  - `portMappings`: **(optional)** Ein Schlüssel-Wert-Hash der _source:target_-Ports, die dem Container zugeordnet werden sollen

#### Beispieleingabe

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### Beispielausgabe

Diese Beispielausgabe entspricht dem Inhalt der in der obigen Eingabe definierten `responseFile`-Datei.

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

Der Befehl `cleanup_job` wird am Ende eines Auftrags aufgerufen. {% data variables.product.prodname_actions %} geht davon aus, dass die folgenden Aufgaben mit dem Befehl `cleanup_job` erledigt werden:

- Alle ausgeführten Dienst- oder Auftragscontainer (oder den entsprechenden Pod) beenden
- Netzwerk beenden (falls vorhanden)
- Alle Auftrags- oder Dienstcontainer (oder den entsprechenden Pod) löschen
- Netzwerk löschen (falls vorhanden)
- Alle Inhalte bereinigen, die für den Auftrag erstellt wurden

#### Argumente

Es werden keine Argumente für `cleanup_job` angegeben.

#### Beispieleingabe

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### Beispielausgabe

Es wird keine Ausgabe für `cleanup_job` erwartet.

### `run_container_step`

Der Befehl `run_container_step` wird einmal für jede Containeraktion im Auftrag aufgerufen. {% data variables.product.prodname_actions %} geht davon aus, dass die folgenden Aufgaben mit dem Befehl `run_container_step` erledigt werden:

- Den erforderlichen Container pullen oder erstellen (oder einen Fehler ausgeben, falls das nicht möglich ist)
- Die Containeraktion ausführen und den Exitcode für den Container zurückgeben
- Alle Schrittprotokollausgaben für stdout und stderr streamen
- Den Container nach der Ausführung bereinigen

#### Argumente

- `image`: **(optional)** Eine Zeichenfolge, die das Docker-Image enthält. Andernfalls muss ein Dockerfile bereitgestellt werden.
- `dockerfile`: **(optional)** Eine Zeichenfolge, die den Pfad zum Dockerfile enthält, andernfalls muss ein Image bereitgestellt werden.
- `entryPointArgs`: **(optional)** Eine Liste, die die Einstiegspunktargumente enthält
- `entryPoint`: **(optional)** Der zu verwendende Containereinstiegspunkt, wenn der Standardeinstiegspunkt des Images überschrieben werden soll
- `workingDirectory`: **(erforderlich)** Eine Zeichenfolge, die den absoluten Pfad des Arbeitsverzeichnisses enthält
- `createOptions`: **(optional)** Die optionalen _Erstellungsoptionen_, die in der YAML-Datei angegeben sind. Weitere Informationen findest du unter [Beispiel: Ausführen eines Auftrags in einem Container](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
- `environmentVariables`: **(optional)** Legt eine Zuordnung der Schlüsselumgebungsvariablen fest
- `prependPath`: **(optional)** Ein Array zusätzlicher Pfade, die der Variablen `$PATH` vorangestellt werden sollen
- `userMountVolumes`: **(optional)** Ein Array der benutzerseitig eingebundenen Volumes, das in der YAML-Datei festgelegt wird. Weitere Informationen findest du unter [Beispiel: Ausführen eines Auftrags in einem Container](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `sourceVolumePath`: **(erforderlich)** Der Quellpfad zum Volume, das im Docker-Container bereitgestellt wird
  - `targetVolumePath`: **(erforderlich)** Der Zielpfad zum Volume, das im Docker-Container bereitgestellt wird
  - `readOnly`: **(erforderlich)** Legt, ob das eingebundene Volume schreibgeschützt sein soll
- `systemMountVolumes`: **(erforderlich)** Ein Array der eingebundenen Volumes, die in den Container eingebunden werden sollen (mithilfe der gleichen Felder wie oben)
  - `sourceVolumePath`: **(erforderlich)** Der Quellpfad zum Volume, das im Docker-Container bereitgestellt wird
  - `targetVolumePath`: **(erforderlich)** Der Zielpfad zum Volume, das im Docker-Container bereitgestellt wird
  - `readOnly`: **(erforderlich)** Legt, ob das eingebundene Volume schreibgeschützt sein soll
- `registry`: **(optional)** Die Docker-Registrierungsanmeldeinformationen für eine private Containerregistrierung
  - `username`: **(optional)** Der Benutzername des Registrierungskontos
  - `password`: **(optional)** Das Kennwort für das Registrierungskonto
  - `serverUrl`: **(optional)** Die Registrierungs-URL
- `portMappings`: **(optional)** Ein Schlüssel-Wert-Hash der _source:target_-Ports, die dem Container zugeordnet werden sollen

#### Beispieleingabe für das Image

Wenn du ein Docker-Image verwendest, kannst du den Imagenamen im Parameter `"image":` angeben.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Beispieleingabe für ein Dockerfile

Wenn dein Container über ein Dockerfile definiert wird, veranschaulicht dieses Beispiel, wie der Pfad zu einem `Dockerfile` in der Eingabe mithilfe des Parameters `"dockerfile":` angegeben wird.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Beispielausgabe

Es wird keine Ausgabe für `run_container_step` erwartet.

### `run_script_step`

{% data variables.product.prodname_actions %} geht davon aus, dass die folgenden Aufgaben erledigt werden:

- Das angegebene Skript im Auftragscontainer aufrufen und den Exitcode zurückgeben
- Alle Schrittprotokollausgaben für stdout und stderr streamen

#### Argumente

- `entryPointArgs`: **(optional)** Eine Liste, die die Einstiegspunktargumente enthält
- `entryPoint`: **(optional)** Der zu verwendende Containereinstiegspunkt, wenn der Standardeinstiegspunkt des Images überschrieben werden soll
- `prependPath`: **(optional)** Ein Array zusätzlicher Pfade, die der Variablen `$PATH` vorangestellt werden sollen
- `workingDirectory`: **(erforderlich)** Eine Zeichenfolge, die den absoluten Pfad des Arbeitsverzeichnisses enthält
- `environmentVariables`: **(optional)** Legt eine Zuordnung der Schlüsselumgebungsvariablen fest

#### Beispieleingabe

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### Beispielausgabe

Es wird keine Ausgabe für `run_script_step` erwartet.

## Generieren des Anpassungsskripts

{% data variables.product.prodname_dotcom %} hat ein Beispielrepository erstellt, das veranschaulicht, wie Anpassungsskripts für Docker und Kubernetes generiert werden. 

{% note %}

**Hinweis:** Die resultierenden Skripts sind für Testzwecke vorgesehen. Du musst selbst entscheiden, ob sie für deine Anforderungen geeignet sind.

{% endnote %}

1. Klone das Repository [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) in deinen selbstgehosteten Runner.

1. Das Verzeichnis `examples/` enthält einige vorhandene Anpassungsbefehle, für die jeweils eine eigene JSON-Datei verfügbar ist. Du kannst dir diese Beispiele ansehen und sie als Ausgangsbasis für deine eigenen Anpassungsbefehle verwenden.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Erstelle die npm-Pakete. Diese Befehle generieren die `index.js`-Dateien in `packages/docker/dist` und `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Wenn die resultierende `index.js`-Datei von {% data variables.product.prodname_actions %} ausgelöst wird, werden die in den JSON-Dateien definierten Anpassungsbefehle ausgeführt. Um `index.js` auszulösen, muss die Datei zur Umgebungsvariablen `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` hinzugefügt werden. Dies wird im nächsten Abschnitt beschrieben.

## Auslösen des Anpassungsskripts

Die benutzerdefinierten Skripts müssen sich auf dem Runner befinden, sollten aber nicht im Anwendungsverzeichnis des selbstgehosteten Runners gespeichert werden. Die Skripts werden im Sicherheitskontext des Dienstkontos ausgeführt, das den Runnerdienst ausführt.

{% note %}

**Hinweis:** Das ausgelöste Skript wird synchron verarbeitet. Während es ausgeführt wird, wird die Auftragsausführung also blockiert.

{% endnote %}

Das Skript wird automatisch ausgeführt, wenn der Runner über die folgenden Umgebungsvariablen verfügt, die einen absoluten Pfad zum Skript enthalten:

- `ACTIONS_RUNNER_CONTAINER_HOOK`: Das in dieser Umgebungsvariablen definierte Skript wird ausgelöst, wenn einem Runner ein Auftrag zugewiesen wurde, aber bevor die Ausführung des Auftrags gestartet wird.

Um diese Umgebungsvariable festzulegen, kannst du sie entweder dem Betriebssystem oder einer Datei mit der Endung `.env` hinzufügen, die sich im Anwendungsverzeichnis des selbstgehosteten Runners befindet. Der folgende Eintrag in der `.env`-Datei führt beispielsweise dazu, dass der Runner automatisch das Skript unter `/Users/octocat/runner/index.js` ausführt, bevor die containerbasierten Aufträge ausgeführt werden:

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Wenn du sicherstellen möchtest, dass dein Auftrag immer in einem Container ausgeführt wird und anschließend deine Containeranpassungen anwendet, kannst du die Variable `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` für den selbstgehosteten Runner auf `true` festlegen. Dadurch werden Aufträge nicht ausgeführt, die keinen Auftragscontainer angeben.

## Problembehandlung

### Keine Timeouteinstellung

Es ist derzeit keine Timeouteinstellung für das Skript verfügbar, das von `ACTIONS_RUNNER_CONTAINER_HOOK` ausgeführt wird. Du könntest daher in Erwägung ziehen, deinem Skript Timeoutverarbeitung hinzuzufügen.

### Überprüfen des Workflowausführungsprotokolls

Um zu bestätigen, dass deine Skripts ausgeführt werden, kannst du die Protokolle für diesen Auftrag überprüfen. Weitere Informationen zum Überprüfen der Protokolle findest du unter [Anzeigen von Protokollen zum Diagnostizieren von Fehlern](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures).
