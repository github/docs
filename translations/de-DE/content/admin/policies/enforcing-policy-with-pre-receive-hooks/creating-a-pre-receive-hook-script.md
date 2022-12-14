---
title: Pre-Receive-Hook-Skript erstellen
intro: Mit pre-receive-Hook genannten Skripts kannst du Anforderungen zum Akzeptieren oder Ablehnen eines Push-Vorgangs anhand der Inhalte erstellen.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook scripts
ms.openlocfilehash: 3d01ba3d5d189e65cbd2b4589af9072571837944
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332352'
---
Beispiele für Pre-Receive-Hooks für {% data variables.product.prodname_ghe_server %} sind im [Repository `github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks) enthalten.

## Pre-Receive-Hook-Skript schreiben
Ein Pre-Receive-Hook-Skript wird in einer Pre-Receive-Hook-Umgebung in {% data variables.product.product_location %} ausgeführt. Beachte beim Erstellen eines Pre-Receive-Hook-Skripts die verfügbaren Eingaben, Ausgaben, Beendigungsstatus und Umgebungsvariablen.

### Eingabe (`stdin`)
Nach einem Push und vor der Aktualisierung von Verweisen (refs) für das Remoterepository ruft der Prozess `git-receive-pack` in {% data variables.product.product_location %} das Pre-Receive-Hook-Skript auf. Die Standardeingabe für das Skript (`stdin`) ist eine Zeichenfolge mit einer Zeile für jeden zu aktualisierenden Verweis. Dabei enthält jede Zeile den alten Objektnamen, den neuen Objektnamen und den vollständigen Namen des Verweises.

```
<old-value> SP <new-value> SP <ref-name> LF
```

Diese Zeichenfolge stellt die folgenden Argumente dar.

| Argument | BESCHREIBUNG     |
| :------------- | :------------- |
| `<old-value>` | Der alte Objektname, der im Verweis gespeichert ist.<br> Wenn du einen neuen Verweis erstellst, umfasst der Wert 40 Nullen. |
| `<new-value>` | Der neue Objektname, der im Verweis gespeichert werden soll.<br> Wenn du einen Verweis löschst, umfasst der Wert 40 Nullen. |
| `<ref-name>`  | Der vollständige Name des Verweises. |

Weitere Informationen zu `git-receive-pack` findest du unter [git-receive-pack](https://git-scm.com/docs/git-receive-pack) in der Git-Dokumentation. Weitere Informationen zu Verweisen findest du unter [Git-Verweise](https://git-scm.com/book/en/v2/Git-Internals-Git-References) in *Pro Git*.

### Ausgabe (`stdout`)

Die Standardausgabe für das Skript (`stdout`) wird an den Client zurückgegeben. Alle `echo`-Anweisungen sind für Benutzer*innen in der Befehlszeile oder auf der Benutzeroberfläche sichtbar.

### Beendigungsstatus

Der Beendigungsstatus eines Pre-Receive-Skripts gibt an, ob der Push akzeptiert wird.

| Wert des Beendigungsstatus | Aktion |
| :- | :- |
| 0 | Der Push wird akzeptiert. |
| ungleich null | Der Push wird abgelehnt. |

### Umgebungsvariablen

Zusätzlich zur Standardeingabe für dein Pre-Receive-Hook-Skript (`stdin`) stellt {% data variables.product.prodname_ghe_server %} in der Bash-Umgebung die folgenden Variablen für die Ausführung deines Skripts zur Verfügung. Weitere Informationen zu `stdin` für dein Pre-Receive-Hook-Skript findest du unter [Eingabe (`stdin`)](#input-stdin).

Abhängig davon, wodurch die Skriptausführung ausgelöst wird, sind unterschiedliche Umgebungsvariablen für dein Pre-Receive-Hook-Skript verfügbar.

- [Immer verfügbar](#always-available)
- [Verfügbar für Pushvorgänge über die Weboberfläche oder die API](#available-for-pushes-from-the-web-interface-or-api)
- [Verfügbar für Pull Request-Merges](#available-for-pull-request-merges)
- [Verfügbar für Pushvorgänge unter Verwendung der SSH-Authentifizierung](#available-for-pushes-using-ssh-authentication)

#### Immer verfügbar

Die folgenden Variablen sind immer in der Pre-Receive-Hook-Umgebung verfügbar.

| Variable | BESCHREIBUNG | Beispielwert |
| :- | :- | :- |
|  <pre>$GIT_DIR</pre> | Pfad zum Remoterepository der Instanz | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
|  <pre>$GIT_PUSH_OPTION_COUNT</pre> | Die Anzahl von Pushoptionen, die vom Client mit `--push-option` gesendet wurden. Weitere Informationen findest du unter [git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt) in der Git-Dokumentation. | 1 |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | _N_ entspricht hierbei einer ab 0 beginnenden Ganzzahl. Diese Variable enthält die Zeichenfolge der vom Client gesendeten Pushoption. Die erste gesendete Option wird in `GIT_PUSH_OPTION_0`, die zweite in `GIT_PUSH_OPTION_1` gespeichert usw. Weitere Informationen zu Pushoptionen findest du unter [git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt) in der Git-Dokumentation. | abcd |{% ifversion ghes %}
|  <pre>$GIT_USER_AGENT</pre> | Benutzer-Agent-Zeichenfolge, die vom Git-Client gesendet wurde, der die Änderungen gepusht hat | git/2.0.0{% endif %}
|  <pre>$GITHUB_REPO_NAME</pre> | Name des Repositorys, das aktualisiert wird, im Format _NAME_/_BESITZER_ | octo-org/hello-enterprise |
|  <pre>$GITHUB_REPO_PUBLIC</pre> | Boolescher Wert, der angibt, ob das aktualisierte Repository öffentlich ist | <ul><li>true: Das Repository ist öffentlich</li><li>false: Das Repository ist privat oder intern</li></ul>
|  <pre>$GITHUB_USER_IP</pre> | Die IP-Adresse des Clients, der den Push initiiert hat | 192.0.2.1 |
|  <pre>$GITHUB_USER_LOGIN</pre> | Der Benutzername für das Konto, das den Push initiiert hat | octocat |

#### Verfügbar für Pushvorgänge über die Weboberfläche oder die API

Die Variable `$GITHUB_VIA` ist in der Pre-Receive-Hook-Umgebung verfügbar, wenn die Verweisaktualisierung, die den Hook auslöst, über die Weboberfläche oder die API für {% data variables.product.prodname_ghe_server %} erfolgt. Der Wert beschreibt die Aktion, durch die der Verweis aktualisiert wurde.

| Wert | Aktion | Weitere Informationen |
| :- | :- | :- |
| <pre>auto-merge deployment api</pre> | Automatischer Merge des Basisbranches über eine Bereitstellung, die mit der API erstellt wurde | [Erstellen einer Bereitstellung](/rest/reference/deployments#create-a-deployment) in der REST-API-Dokumentation |
| <pre>blob#save</pre> | Ändern des Inhalts einer Datei über die Weboberfläche | [Bearbeiten von Dateien](/repositories/working-with-files/managing-files/editing-files) |
| <pre>branch merge api</pre> | Zusammenführen eines Branches über die API | [Zusammenführen eines Branches](/rest/reference/branches#merge-a-branch) in der REST-API-Dokumentation |
| <pre>branches page delete button</pre> | Löschen eines Branches über die Weboberfläche | [Erstellen und Löschen von Branches innerhalb deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch) |
| <pre>git refs create api</pre> | Erstellen eines Verweises über die API | [Git-Datenbank](/rest/reference/git#create-a-reference) in der REST-API-Dokumentation |
| <pre>git refs delete api</pre> | Löschen eines Verweises über die API | [Git-Datenbank](/rest/reference/git#delete-a-reference) in der REST-API-Dokumentation |
| <pre>git refs update api</pre> | Aktualisieren eines Verweises über die API | [Git-Datenbank](/rest/reference/git#update-a-reference) in der REST-API-Dokumentation |
| <pre>git repo contents api</pre> | Ändern des Inhalts einer Datei über die API | [Erstellen oder Aktualisieren von Dateiinhalten](/rest/reference/repos#create-or-update-file-contents) in der REST-API-Dokumentation |
{%- ifversion ghes %} | `merge ` | Zusammenführen eines Pull Requests über die Funktion für ein automatisches Zusammenführen | [Automatisches Zusammenführen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) | {%- endif %} | <pre>merge base into head</pre> | Aktualisieren des Topic-Branches anhand des Basisbranches, wenn der Basisbranch strikte Statusüberprüfungen erfordert (z. B. über **Branch aktualisieren** in einem Pull Request) | [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging) | | <pre>pull request branch delete button</pre> | Löschen eines Topic-Branches aus einem Pull Request auf der Weboberfläche | [Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request) | | <pre>pull request branch undo button</pre> | Wiederherstellen eines Topic-Branches aus einem Pull Request auf der Weboberfläche | [Löschen und Wiederherstellen von Branches in einem Pull Request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch) | | <pre>pull request merge api</pre> | Zusammenführen eines Pull Requests über die API | [Pulls](/rest/reference/pulls#merge-a-pull-request) in der REST-API-Dokumentation | | <pre>pull request merge button</pre> | Zusammenführen eines Pull Requests auf der Weboberfläche | [Zusammenführen eines Pull Requests](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github) | | <pre>pull request revert button</pre> | Wiederherstellen eines Pull Requests | [Wiederherstellen eines Pull Requests](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request) | | <pre>releases delete button</pre> | Löschen eines Releases | [Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release) | | <pre>stafftools branch restore</pre> | Wiederherstellung eines Branches im Websiteadministratoren-Dashboard | [Websiteadministratoren-Dashboard](/admin/configuration/site-admin-dashboard#repositories) | | <pre>tag create api</pre> | Erstellen eines Tags über die API | [Git-Datenbank](/rest/reference/git#create-a-tag-object) in der REST-API-Dokumentation | | <pre>slumlord (#<em>SHA</em>)</pre> | Commit über Subversion | [Unterstützung für Subversion-Clients](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion) | | <pre>web branch create</pre> | Erstellen eines Branches über die Weboberfläche | [Erstellen und Löschen von Branches innerhalb deines Repositorys](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch) |

#### Verfügbar für Pull Request-Merges

Die folgenden Variablen sind in der Pre-Receive-Hook-Umgebung verfügbar, wenn der Push, der den Hook auslöst, aufgrund der Zusammenführung eines Pull Requests ein Push ist.

| Variable | BESCHREIBUNG | Beispielwert |
| :- | :- | :- |
|  <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | Benutzername des Kontos, das den Pull Request erstellt hat | octocat |
|  <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | Der Name des PR-Topic-Branches im Format `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
|  <pre>$GITHUB_PULL_REQUEST_BASE</pre> | Der Name des PR-Basisbranches im Format `USERNAME:BRANCH` | octocat:main |

#### Verfügbar für Pushvorgänge unter Verwendung der SSH-Authentifizierung

| Variable | BESCHREIBUNG | Beispielwert |
| :- | :- | :- |
|  <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | Der Fingerabdruck des öffentlichen Schlüssels für die oder den Benutzer*in, die bzw. der die Änderungen gepusht hat | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

## Berechtigungen festlegen und einen Pre-Receive-Hook per Push-Vorgang an {% data variables.product.prodname_ghe_server %} übertragen

Ein Pre-Receive-Hook-Skript ist in einem Repository in {% data variables.product.product_location %} enthalten. Ein Websiteadministrator muss die Repository-Berechtigungen beachten und sicherstellen, dass nur die richtigen Benutzer über Zugriff verfügen.

Es wird empfohlen, Hooks in einem einzelnen Repository zu konsolidieren. Wenn das konsolidierte Hook-Repository öffentlich ist, kann `README.md` verwendet werden, um Richtlinienerzwingungen zu erläutern. Darüber hinaus können Beiträge über Pull Requests akzeptiert werden. Pre-Receive-Hooks können jedoch nur auf dem Standardbranch hinzugefügt werden. Für einen Test-Workflow sollten Forks des Repositorys mit entsprechender Konfiguration verwendet werden.

1. Stelle für Mac-Benutzer sicher, dass die Skripts über Ausführungsberechtigungen verfügen:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   Stelle für Windows-Benutzer sicher, dass die Skripts über Ausführungsberechtigungen verfügen:

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. Führe einen Commit und einen Push in das gewünschte Repository für Pre-Receive-Hooks in {% data variables.product.product_location %} aus.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. [Erstelle den Pre-Receive-Hook](/enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) in der {% data variables.product.prodname_ghe_server %}-Instanz.

## Pre-Receive-Skripts lokal testen
Du kannst ein Pre-Receive-Hook-Skript lokal testen, bevor du es in {% data variables.product.product_location %} erstellst oder aktualisierst. Eine Methode besteht darin, eine lokale Docker-Umgebung zu erstellen, die als ein Remote-Repository fungiert und als den Pre-Receive-Hook ausführen kann.

{% data reusables.linux.ensure-docker %}

2. Erstelle eine Datei mit dem Namen `Dockerfile.dev`, die Folgendes enthält:

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. Erstelle ein Pre-Receive-Testskript mit dem Namen `always_reject.sh`. Dieses Beispielskript lehnt alle Push-Vorgänge ab, was zum Sperren eines Repositorys nützlich ist:

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. Stelle sicher, dass das Skript `always_reject.sh` über Ausführungsberechtigungen verfügt:

   ```shell
   $ chmod +x always_reject.sh
   ```

5. Erstelle in dem Verzeichnis, das `Dockerfile.dev` enthält, ein Image:

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. Führe einen Datencontainer aus, der einen generierten SSH-Schlüssel enthält:

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. Kopiere den Pre-Receive-Testhook `always_reject.sh` in den Datencontainer:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. Führe einen Anwendungscontainer aus, der `sshd` und den Hook ausführt. Beachte die zurückgegebene Container-ID.

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. Kopiere den generierten SSH-Schlüssel aus dem Datencontainer auf den lokalen Computer:

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. Ändere den Remotezugriff eines Testrepositorys, und führe einen Push in das Repository `test.git` innerhalb des Docker-Containers aus. In diesem Beispiel wird `git@github.com:octocat/Hello-World.git` verwendet, du kannst jedoch ein beliebiges Repository auswählen. In diesem Beispiel wird davon ausgegangen, dass dein lokaler Computer (127.0.0.1) Port 52311 bindet. Du kannst jedoch eine andere IP-Adresse verwenden, wenn Docker auf einem Remotecomputer ausgeführt wird.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   Beachte, dass der Push abgelehnt wurde, nachdem du den Pre-Receive-Hook ausgeführt und die Ausgabe des Skripts wiedergegeben hast.

## Weitere Informationsquellen
 - [Anpassen von Git – eine mit Git erzwungene Beispielrichtlinie](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy) auf der *Pro Git-Website*
