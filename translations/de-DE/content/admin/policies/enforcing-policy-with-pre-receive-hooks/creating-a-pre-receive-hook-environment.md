---
title: Pre-Receive-Hooks-Umgebung erstellen
intro: 'Verwende zum Ausführen von Pre-Receive-Hooks die standardmäßige Pre-Receive-Umgebung, oder erstelle eine benutzerdefinierte Umgebung.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
ms.openlocfilehash: 2c2a31a4092b475170449ba138d6f0798424206b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104779'
---
Eine Pre-Receive-Umgebung für {% data variables.product.prodname_ghe_server %} ist eine Linux-[`chroot`](https://en.wikipedia.org/wiki/Chroot)-Umgebung. Da Pre-Receive-Hooks bei jedem Push-Ereignis ausgeführt werden, sollten sie schnell und kompakt sein. Die für solche Überprüfungen benötigte Umgebung ist in der Regel minimal.

{% data variables.product.prodname_ghe_server %} stellt eine Standardumgebung bereit, die folgende Pakete enthält: `awk`, `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

Wenn eine bestimmte Anforderung vorliegt, die von dieser Umgebung nicht erfüllt wird, beispielsweise die Unterstützung einer bestimmten Sprache, kannst du deine eigene 64-Bit-Linux-`chroot`-Umgebung erstellen und hochladen.

## Pre-Receive-Hook-Umgebung mit Docker erstellen

Du kannst ein Linux-Containerverwaltungstool zum Erstellen einer Pre-Receive-Hook-Umgebung verwenden. In diesem Beispiel werden [Alpine Linux](http://www.alpinelinux.org/) und [Docker](https://www.docker.com/) verwendet.

{% data reusables.linux.ensure-docker %}
2. Erstelle die Datei `Dockerfile.alpine-3.3`, die diese Informationen enthält:

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. Erstelle aus dem Arbeitsverzeichnis, das `Dockerfile.alpine-3.3` enthält, ein Image:

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
4. Erstelle einen Container:

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Exportiere den Docker-Container in eine `gzip`-komprimierte `tar`-Datei:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   Diese Datei `alpine-3.3.tar.gz` kann auf die {% data variables.product.prodname_ghe_server %}-Appliance hochgeladen werden.

## Pre-Receive-Hook-Umgebung mit chroot erstellen

1. Erstelle eine Linux-`chroot`-Umgebung.
2. Erstelle eine `gzip`-komprimierte `tar`-Datei des `chroot`-Verzeichnisses.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **Hinweise:**
   - Schließe keine führenden Verzeichnispfade von Dateien wie beispielsweise `/path/to/chroot` innerhalb des tar-Archivs ein.
   - `/bin/sh` muss existieren und als Einstiegspunkt in die chroot-Umgebung ausführbar sein.
   - Im Gegensatz zu herkömmlichen Chroots ist das `dev`-Verzeichnis in der chroot-Umgebung für Pre-Receive-Hooks nicht erforderlich.

   {% endnote %}

Weitere Informationen zum Erstellen einer chroot-Umgebung findest du unter [chroot](https://wiki.debian.org/chroot) im *Debian-Wiki*, [BasicChroot](https://help.ubuntu.com/community/BasicChroot) im *Community Help Wiki* oder [Installing Alpine Linux in a chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot) (Installieren von Alpine Linux in einer chroot-Umgebung) im *Alpine Linux Wiki*.

## Pre-Receive-Hook-Umgebung auf {% data variables.product.prodname_ghe_server %} hochladen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke auf **Umgebungen verwalten**.
![Verwalten von Umgebungen](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Klicke auf **Umgebung hinzufügen**.
![Hinzufügen einer Umgebung](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Gib den gewünschten Namen im Feld **Umgebungsname** ein.
![Umgebungsname](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Gib die URL der `*.tar.gz`-Datei ein, in der deine Umgebung enthalten ist.
![Hochladen einer Umgebung über eine URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Klicke auf **Umgebung hinzufügen**.
![Schaltfläche „Umgebung hinzufügen“](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## Pre-Receive-Hook-Umgebung über die Verwaltungsshell hochladen
1. Lade eine lesbare `*.tar.gz`-Datei, die deine Umgebung enthält, auf einen Webhost hoch, und kopiere die URL, oder übertrage die Datei über `scp` an die {% data variables.product.prodname_ghe_server %}-Appliance. Wenn du `scp` verwendest, musst du die `*.tar.gz`-Dateiberechtigungen möglicherweise anpassen, damit die Datei allgemein lesbar ist.
1.  Stelle eine Verbindung zur Verwaltungsshell her.
2.  Führe den Befehl `ghe-hook-env-create` aus, und gib den gewünschten Namen für die Umgebung als erstes Argument und den vollständigen lokalen Pfad oder die URL einer `*.tar.gz`-Datei, die deine Umgebung enthält, als zweites Argument ein.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
