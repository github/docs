---
title: Pre-Receive-Hook-Skript erstellen
intro: Verwenden Sie Pre-Receive-Hook-Skripts, um Anforderungen zum Akzeptieren oder Ablehnen eines Push-Vorgangs anhand der Inhalte zu erstellen.
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
---

Im [`github/platform-samples`-Repository](https://github.com/github/platform-samples/tree/master/pre-receive-hooks) finden Sie Beispiele von Pre-Receive-Hooks für {% data variables.product.prodname_ghe_server %}.

### Pre-Receive-Hook-Skript schreiben
Ein Pre-Receive-Hook-Skript wird auf der {% data variables.product.prodname_ghe_server %}-Appliance in einer Pre-Receive-Hook-Umgebung ausgeführt. Beachten Sie beim Erstellen eines Pre-Receive-Hook-Skripts die verfügbaren Variablen „input“, „output“, „exit-status“ und Umgebungsvariablen.

#### Input (stdin)
Nach einem Push und vor der Aktualisierung der Refs auf dem Remote-Repository ruft der Prozess `git-receive-pack` das Pre-Receive-Hook-Skript mit der Standardeingabe von einer Zeile pro Ref ab, die aktualisiert werden soll.

`<old-value> SP <new-value> SP <ref-name> LF`

Dieser String steht für die folgenden Argumente:

| Argument            | Beschreibung                                                                                                                      |
|:------------------- |:--------------------------------------------------------------------------------------------------------------------------------- |
| `<old-value>` | Der alte Objektname, der in `ref` gespeichert ist.<br> Wenn Sie einen neuen `ref` *erstellen*, entspricht dieser 40 Nullen. |
| `<new-value>` | Der neue Objektname, der in `ref` gespeichert werden soll.<br> Wenn Sie einen `ref` *löschen*, entspricht dieser 40 Nullen. |
| `<ref-name>`  | Der vollständige `ref`-Name.                                                                                                      |

Weitere Informationen zu `git-receive-pack` finden Sie unter „[git-receive-pack](https://git-scm.com/docs/git-receive-pack)“ in der Git-Dokumentation. Weitere Informationen zu `refs` finden Sie unter „[Git-Referenzen](https://git-scm.com/book/en/v2/Git-Internals-Git-References)“ in *Pro Git*.

#### Output (stdout)

Die Skriptausgabe (`stdout`) wird an den Client zurückgegeben. Daher sind die `echo`-Anweisungen für Benutzer an der Befehlszeile oder auf der Benutzeroberfläche sichtbar.

#### Exit-status

Der `exit-status` eines Pre-Receive-Skripts bestimmt, ob der Push akzeptiert wird.

| Exit-status-Wert |          Aktion           |
|:----------------:|:-------------------------:|
|        0         | Der Push wird akzeptiert. |
|    ungleich 0    | Der Push wird abgelehnt.  |

#### Umgebungsvariablen
Außerhalb der `stdin` bereitgestellten Werte sind zusätzliche Variablen vorhanden, die für ein Pre-Receive-Hook-Skript verfügbar sind, das auf {% data variables.product.prodname_ghe_server %} ausgeführt wird.

| Variable                              | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|:------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $GITHUB_USER_LOGIN                  | Die Benutzer-ID, die den `ref` erstellt hat.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| $GIT_DIR                              | Der Pfad des Remote-Repositorys auf der Appliance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| $GITHUB_USER_IP                     | Die IP-Adresse des Benutzers, der den Push-Vorgang ausführt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| $GITHUB_REPO_NAME                   | Der Name im Format `owner`/`repo` des Repositorys, das aktualisiert wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| $GITHUB_PULL_REQUEST_AUTHOR_LOGIN | Die Benutzer-ID des Autors eines auf Ihrer Instanz geöffneten Pull Requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| $GITHUB_REPO_PUBLIC                 | Ein boolescher Wert, der angezeigt wird, wenn `true` für ein öffentliches Repository steht und wenn `false` für ein privates Repository steht.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| $GITHUB_PUBLIC_KEY_FINGERPRINT      | Der öffentliche Schlüssel-Fingerprint des Benutzers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| $GITHUB_PULL_REQUEST_HEAD           | Ein String im Format `user:branch` für den HEAD des privaten Repositorys.<br> Beispiel: `octocat:fix-bug`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| $GITHUB_PULL_REQUEST_BASE           | A string in the format: `user:branch` for the BASE of the PR.<br> Example: `octocat:main`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| $GITHUB_VIA                           | Die zum Erstellen des ref-Werts verwendete Methode.<br> **Mögliche Werte:**<br> - `auto-merge deployment api` <br> - `blob edit` <br> - `branch merge api` <br> - `branches page delete button` <br> - `git refs create api` <br> - `git refs delete api` <br> - `git refs update api` <br> - `merge api` <br> - `pull request branch delete button` <br> - `pull request branch undo button` <br> - `pull request merge api` <br> - `pull request merge button` <br> - `pull request revert button` <br> - `releases delete button` <br> - `stafftools branch restore` <br> - `slumlord (#{sha})` |
| $GIT_PUSH_OPTION_COUNT              | Die Anzahl der Push-Optionen, die vom Client gesendet wurden. Weitere Informationen zu den Push-Optionen finden Sie unter „[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)“ in der Git-Dokumentation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| $GIT_PUSH_OPTION_N                  | <em>N</em> entspricht hierbei einer ab 0 beginnenden Ganzzahl. Diese Variable enthält den String der vom Client gesendeten Push-Option. Die erste gesendete Option wird in GIT_PUSH_OPTION_0 gespeichert. Die zweite gesendete Option wird in GIT_PUSH_OPTION_1 gespeichert usw. Weitere Informationen zu den Push-Optionen finden Sie unter „[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)“ in der Git-Dokumentation. |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| $GIT_USER_AGENT                     | The user-agent string sent by the client that pushed the changes. |{% endif %}

### Berechtigungen festlegen und einen Pre-Receive-Hook per Push-Vorgang an {% data variables.product.prodname_ghe_server %} übertragen

Ein Pre-Receive-Hook-Skript ist in einem Repository auf der {% data variables.product.prodname_ghe_server %}-Appliance enthalten. Ein Websiteadministrator muss die Repository-Berechtigungen beachten und sicherstellen, dass nur die richtigen Benutzer über Zugriff verfügen.

Es wird empfohlen, Hooks in einem einzelnen Repository zu konsolidieren. Wenn das konsolidierte Hook-Repository öffentlich ist, kann die Datei `README.md` verwendet werden, um die Richtliniendurchsetzungen zu erläutern. Darüber hinaus können Beiträge über Pull Requests akzeptiert werden. Pre-Receive-Hooks können jedoch nur auf dem Standardbranch hinzugefügt werden. Für einen Test-Workflow sollten Forks des Repositorys mit entsprechender Konfiguration verwendet werden.

1. Stellen Sie für Mac-Benutzer sicher, dass die Skripts über Ausführungsberechtigungen verfügen:

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
  ```
  Stellen Sie für Windows-Benutzer sicher, dass die Skripts über Ausführungsberechtigungen verfügen:

  ```shell
  git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
  ```

2. Committen und übertragen Sie Ihr vorgesehenes Pre-Receive-Hook-Repository auf der {% data variables.product.prodname_ghe_server %}-Instanz per Push-Vorgang.

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
  ```

3. [Erstellen Sie den Pre-Receive-Hook](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) auf der {% data variables.product.prodname_ghe_server %}-Instanz.

### Pre-Receive-Skripts lokal testen
Sie können ein Pre-Receive-Hook-Skript lokal testen, bevor Sie es auf Ihrer {% data variables.product.prodname_ghe_server %}-Appliance erstellen oder aktualisieren. Eine Methode besteht darin, eine lokale Docker-Umgebung zu erstellen, die als ein Remote-Repository fungiert und als den Pre-Receive-Hook ausführen kann.

{% data reusables.linux.ensure-docker %}

2. Erstellen Sie eine Datei namens `Dockerfile.dev`, die Folgendes enthält:

    ```
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

3. Erstellen Sie ein Pre-Receive-Testskript namens `always_reject.sh`. Dieses Beispielskript lehnt alle Push-Vorgänge ab, was zum Sperren eines Repositorys nützlich ist:

    ```
    #!/usr/bin/env bash

    echo "error: rejecting all pushes"
    exit 1
    ```

4. Stellen Sie sicher, dass das Skript `always_reject.sh` über Ausführungsberechtigungen verfügt:

   ```shell
   $ chmod +x always_reject.sh
  ```

5. Erstellen Sie im Verzeichnis, in dem die `Dockerfile.dev` enthalten ist, ein Image:

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

6. Führen Sie einen Datencontainer aus, der einen generierten SSH-Schlüssel enthält:

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
  ```

7. Kopieren Sie den Pre-Receive-Hook `always_reject.sh` in den Datencontainer:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
  ```

8. Führen Sie einen Anwendungscontainer aus, der `sshd` und den Hook ausführt. Beachten Sie die zurückgegebene Container-ID.

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
  ```

9. Kopieren Sie den generierten SSH-Schlüssel aus dem Datencontainer auf den lokalen Computer:

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
  ```

10. Ändern Sie die Remote-Instanz eines Test-Repositorys, und übertragen Sie das Repository `test.git` per Push-Vorgang innerhalb des Docker-Containers. In diesem Beispiel wird `git@github.com:octocat/Hello-World.git` verwendet. Sie können jedoch auch andere Repositorys verwenden. In diesem Beispiel wird davon ausgegangen, dass Ihr lokaler Computer (127.0.0.1) den Port 52311 bindet. Sie können jedoch eine andere IP-Adresse verwenden, wenn Docker auf einem Remote-Computer ausgeführt wird.

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

  Beachten Sie, dass der Push abgelehnt wurde, nachdem Sie den Pre-Receive-Hook ausgeführt und die Ausgabe des Skripts wiedergegeben haben.

### Weiterführende Informationen
 - „[Git anpassen – eine Git-erzwungene Beispielrichtlinie](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)“ von der *Pro Git-Website*
