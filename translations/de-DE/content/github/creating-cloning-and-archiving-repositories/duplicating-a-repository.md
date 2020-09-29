---
title: Ein Repository duplizieren
intro: 'Um ein Repository zu duplizieren, ohne es zu forken, kannst Du einen speziellen Klon-Befehl ausführen und dann einen Spiegel-Push in das neue Repository durchführen.'
redirect_from:
  - /articles/duplicating-a-repo/
  - /articles/duplicating-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bevor Du ein Repository duplizierst und zu Deiner neuen Kopie (dem _Spiegel_) des Repositorys übertragen kannst, musst Du auf {% data variables.product.product_location %} [das neue Repository erstellen](/articles/creating-a-new-repository). In diesen Beispielen sind `exampleuser/new-repository` oder `exampleuser/mirrored` die Spiegel.

### Ein Repository spiegeln

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstellen Sie einen leeren Klon des Repositorys.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Führe den Spiegel-Push in das neue Repository durch.
  ```shell
  $ cd <em>old-repository</em>.git
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. Entferne das temporäre lokale Repository, dass Du früher erstellt hast.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>.git
  ```

### Ein Repository spiegeln, das {% data variables.large_files.product_name_long %}-Objekte enthält

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstellen Sie einen leeren Klon des Repositorys. Ersetze den Beispiel-Benutzernamen durch den Namen der Person oder Organisation, der das Repository gehört, und ersetze den Beispiel-Repository-Namen durch den Namen des Repositorys, das Du duplizieren möchtest.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Navigiere zu dem Repository, das Du gerade geklont hast.
  ```shell
  $ cd <em>old-repository</em>.git
  ```
4. Rufe die {% data variables.large_files.product_name_long %}-Objekte des Repositorys ab.
  ```shell
  $ git lfs fetch --all
  ```
5. Führe den Spiegel-Push in das neue Repository durch.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. Übertrage die {% data variables.large_files.product_name_long %}-Objekte des Repositorys zu Deinem Spiegel.
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. Entferne das temporäre lokale Repository, dass Du früher erstellt hast.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>.git
  ```

### Ein Repository an einem anderen Ort spiegeln

Wenn Du ein Repository an einem anderen Ort spiegeln und Aktualisierungen vom Original-Repository abrufen möchtest, kannst Du einen Spiegel klonen und die Änderungen regelmäßig per Push übertragen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle einen leeren gespiegelten Klon des Repositorys.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. Lege den Push-Ort auf Deinen Spiegel fest.
  ```shell
  $ cd <em>repository-to-mirror</em>.git
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```

Wie ein leerer Klon enthält ein gespiegelter Klon alle Remote-Branches und Tags. Alle lokalen Verweise werden jedoch bei jedem Abrufen überschrieben, sodass er immer mit dem Original-Repository übereinstimmt. Das Festlegen einer Push-URL vereinfacht Pushes zu Deinem Spiegel. Um Deinen Spiegel zu aktualisieren, rufe Änderungen ab und übertrage sie per Push.

```shell
$ git fetch -p origin
$ git push --mirror
```
