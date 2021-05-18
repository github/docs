---
title: Pre-Receive-Hooks-Umgebung erstellen
intro: 'Verwenden Sie zum Ausführen von Pre-Receive-Hooks die standardmäßige Pre-Receive-Umgebung, oder erstellen Sie eine benutzerdefinierte Umgebung.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---

Eine Pre-Receive-Umgebung für {% data variables.product.prodname_ghe_server %} ist eine Linux-chroot</code>-Umgebung. Da Pre-Receive-Hooks bei jedem Push-Ereignis ausgeführt werden, sollten sie schnell und kompakt sein. Die für solche Überprüfungen benötigte Umgebung ist in der Regel minimal.</p> 

{% data variables.product.prodname_ghe_server %} bietet eine Standardumgebung. Diese enthält die folgenden Pakete: `awk`,  `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

Wenn eine bestimmte Anforderung vorliegt, die von dieser Umgebung nicht erfüllt wird, beispielsweise die Unterstützung einer bestimmten Sprache, können Sie Ihre eigene 64-Bit-Linux-`chroot`-Umgebung erstellen und hochladen.



### Pre-Receive-Hook-Umgebung mit Docker erstellen

Sie können ein Linux-Containerverwaltungstool zum Erstellen einer Pre-Receive-Hook-Umgebung verwenden. In diesem Beispiel werden [Alpine Linux](http://www.alpinelinux.org/) und [Docker](https://www.docker.com/) verwendet.

{% data reusables.linux.ensure-docker %}

2. Erstellen Sie die Datei `Dockerfile.alpine-3.3`, welche die folgenden Informationen enthält: 
   
   

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```


3. Erstellen Sie im Verzeichnis, in dem die `Dockerfile.alpine-3.3` enthalten ist, ein Image: 
   
   

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```


4. Erstellen Sie einen Container: 
   
   

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```


5. Exportieren Sie den Docker-Container in eine `gzip`-komprimierte `TAR`-Datei: 
   
   

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```


Diese Datei `alpine-3.3.tar.gz` kann auf die Appliance {% data variables.product.prodname_ghe_server %} hochgeladen werden.



### Pre-Receive-Hook-Umgebung mit chroot erstellen

1. Erstellen Sie eine Linux-`chroot`-Umgebung.
2. Erstellen Sie eine `gzip`-komprimierte `TAR`-Datei des Verzeichnisses `chroot`. 
   
   
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```


{% note %}

**Hinweise:**

   - Schließe keine führenden Verzeichnispfade von Dateien innerhalb des tar-Archivs ein, wie beispielsweise `/path/to/chroot`.
   - `/bin/sh` muss existieren und als Einstiegspunkt in die chroot-Umgebung ausführbar sein.
   - Im Gegensatz zu herkömmlichen Chroots ist das Verzeichnis `dev` für Vorempfang-Hooks nicht erforderlich.
     
     {% endnote %}

Weitere Informationen zum Erstellen einer chroot-Umgebung finden Sie unter „[Chroot](https://wiki.debian.org/chroot)“ aus dem *Debian-Wiki*, „[BasicChroot](https://help.ubuntu.com/community/BasicChroot)“ aus dem *Hilfe-Wiki der Ubuntu-Community* oder „[Installing Alpine Linux in a chroot (Alpine Linux in einem chroot installieren](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)“ aus dem *Alpine Linux-Wiki*.



### Pre-Receive-Hook-Umgebung auf {% data variables.product.prodname_ghe_server %} hochladen

{% data reusables.enterprise-accounts.access-enterprise %}



{% data reusables.enterprise-accounts.settings-tab %}



{% data reusables.enterprise-accounts.hooks-tab %}

5. Klicken Sie auf **Manage environments** (Umgebungen verwalten). ![Umgebungen verwalten](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)

6. Klicken Sie auf **Add environment** (Umgebung hinzufügen). ![Add Environment (Umgebung hinzufügen)](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)

7. Geben Sie den gewünschten Namen in das Feld **Environment name** (Name der Umgebung) ein. ![Environment name (Name der Umgebung)](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)

8. Geben Sie die URL der `*.tar.gz`-Datei ein, in der Ihre Umgebung enthalten ist. ![Upload environment from a URL (Umgebung über eine URL hochladen)](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)

9. Klicken Sie auf **Add environment** (Umgebung hinzufügen). ![Schaltfläche „Add environment“ (Umgebung hinzufügen)](/assets/images/enterprise/site-admin-settings/add-environment-button.png)



### Pre-Receive-Hook-Umgebung über die Verwaltungsshell hochladen

1. Laden Sie eine lesbare `*.tar.gz`-Datei, die Ihre Umgebung enthält, auf einen Webhost hoch, und kopieren Sie die URL, oder übertragen Sie die Datei über `scp` an die {% data variables.product.prodname_ghe_server %}-Appliance. Wenn Sie `scp` verwenden, müssen Sie die `*.tar.gz`-Dateiberechtigungen ggf. anpassen, damit die Datei allgemein lesbar ist.
1.  Stellen Sie eine Verbindung zur Verwaltungsshell her.
2.  Führen Sie den Befehl `ghe-hook-env-create` aus, und geben Sie den gewünschten Namen für die Umgebung als das erste Argument und den vollständigen lokalen Pfad oder die URL einer `*.tar.gz`-Datei, die Ihre Umgebung enthält, als das zweite Argument ein. 
   

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
