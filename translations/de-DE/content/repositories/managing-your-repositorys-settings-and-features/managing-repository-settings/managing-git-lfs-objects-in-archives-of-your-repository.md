---
title: Verwalten von Git LFS-Objekten in Archiven deines Repositorys
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: 'Du kannst auswählen, ob {% data variables.large_files.product_name_short %}-Objekte ({% data variables.large_files.product_name_long %}) in den Quellcodearchiven, d. h. ZIP-Dateien und Tarballs, enthalten sein sollen, die {% data variables.product.product_name %} für dein Repository erstellt.'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository
ms.openlocfilehash: 64bad4c056a29ceffc465065c84a7424c870049f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881772'
---
## Informationen zu {% data variables.large_files.product_name_short %}-Objekten in Archiven

{% data variables.product.product_name %} erstellt Quellcodearchive deines Repositorys in Form von ZIP-Dateien und Tarballs. Personen können diese Archive auf der Hauptseite deines Repositorys oder als Releaseressourcen herunterladen. Standardmäßig sind in diesen Archiven nicht die {% data variables.large_files.product_name_short %}-Objekte selbst enthalten, sondern nur die Zeigerdateien auf diese Objekte. Um die Benutzerfreundlichkeit von Archiven für dein Repository zu verbessern, kannst du stattdessen die {% data variables.large_files.product_name_short %}-Objekte einschließen. Zum Einschließen müssen die {% data variables.large_files.product_name_short %}-Objekte Nachverfolgungsregeln in einer *GITATTRIBUTES*-Datei entsprechen, die im Repository committet wurde.

Wenn du {% data variables.large_files.product_name_short %}-Objekte in die Archive deines Repositorys einschließt, wird jeder Download dieser Archive auf die Bandbreitennutzung für dein Konto angerechnet. Für jedes Konto stehen pro Monat kostenlos {% data variables.large_files.initial_bandwidth_quota %} an Bandbreite zur Verfügung, du kannst aber für zusätzliche Nutzung bezahlen. Weitere Informationen findest du unter [Informationen zur Speicher- und Bandbreitennutzung](/github/managing-large-files/about-storage-and-bandwidth-usage) und [Verwalten der Abrechnung für {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage).

Wenn du einen externen LFS-Server verwendest (konfiguriert in deiner *LFSCONFIG*-Datei), werden diese LFS-Dateien nicht in die Archive des Repositorys eingeschlossen. Das Archiv enthält nur Dateien, die in {% data variables.product.product_name %} committet wurden.

## Verwalten von {% data variables.large_files.product_name_short %}-Objekten in Archiven

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Aktiviere oder deaktiviere unter „Archive“ die Option **{% data variables.large_files.product_name_short %}-Objekte in Archive einschließen**.
  ![Kontrollkästchen zum Einschließen von {% data variables.large_files.product_name_short %}-Objekten in Archive](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
