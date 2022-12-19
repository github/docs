---
title: Informationen zur Speicher- und Bandbreitennutzung
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage
  - /articles/billing-plans-for-git-large-file-storage
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
  - /github/managing-large-files/versioning-large-files/about-storage-and-bandwidth-usage
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Storage & bandwidth
ms.openlocfilehash: 8a6dd01c62b5b1c69afe29536e3d4ba206e988e7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883027'
---
{% data variables.large_files.product_name_short %} ist für jedes Repository auf {% data variables.product.product_name %} verfügbar, unabhängig davon, ob dein Konto oder deine Organisation ein kostenpflichtiges Abonnement hat oder nicht.

## Speicher- und Bandbreitennutzung verfolgen

Wenn du eine Änderung an einer Datei, die mit {% data variables.large_files.product_name_short %} verfolgt wird, committest und pushst, wird eine neue Version der gesamten Datei gepusht, und die gesamte Dateigröße wird auf die Speicherbegrenzung des Repository-Inhabers angerechnet. Wenn du eine Datei herunterlädst, die mit {% data variables.large_files.product_name_short %} verfolgt wird, wird die gesamte Dateigröße auf die Bandbreitenbegrenzung des Repository-Besitzers angerechnet. {% data variables.large_files.product_name_short %}-Uploads werden nicht auf die Bandbreitenbegrenzung angerechnet.

Beispiel:
- Wenn du eine 500-MB-Datei an {% data variables.large_files.product_name_short %} pushst, nutzt du 500 MB deines verfügbaren Speichers und keine Bandbreite. Wenn du eine Änderung von 1 Byte vornimmst und die Datei erneut überträgst, nutzt du weitere 500 MB Speicherplatz und keine Bandbreite, wodurch deine Gesamtnutzung für diese beiden Pushes bei 1 GB Speicherplatz und Null Bandbreite liegt.
- Wenn du eine 500-MB-Datei herunterlädst, die mit LFS verfolgt wird, verwendest du 500 MB der vom Repository-Inhaber zur Verfügung gestellten Bandbreite. Wenn ein Mitarbeiter eine Änderung an eine Datei überträgt und du die neue Version in dein lokales Repository lädst, verwendest du weitere 500 MB Bandbreite, wodurch die Gesamtnutzung für diese beiden Downloads bei 1 GB Bandbreite liegt.
- Wenn {% data variables.product.prodname_actions %} eine 500 MB Datei herunterlädt, die mit LFS nachverfolgt wird, werden damit 500 MB der zugewiesenen Bandbreite des Repositorybesitzers verbraucht.

{% ifversion fpt or ghec %} Wenn in den Quellcodearchiven deines Repositorys {% data variables.large_files.product_name_long %}-Objekte ({% data variables.large_files.product_name_short %}) enthalten sind, werden Downloads dieser Archive auf die Bandbreitennutzung dieses Repositorys angerechnet. Weitere Informationen findest du unter [Verwalten von {% data variables.large_files.product_name_short %}-Objekten in Archiven in deinem Repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository).
{% endif %}

{% tip %}

**Tipps**:
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

## Speicherkontingent

Wenn du mehr als {% data variables.large_files.initial_storage_quota %} des Speichers nutzt, ohne ein Datenpaket zu kaufen, kannst du immer noch Repositorys mit großen Objekten klonen. Allerdings kannst du nur die Pointer-Dateien abrufen, aber keine neuen Dateien zurück übertragen. Weitere Informationen zu Pointer-Dateien findest du unter [Informationen zu {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format).

## Bandbreiten-Kontingent

Wenn du mehr als {% data variables.large_files.initial_bandwidth_quota %} der monatlichen Bandbreite nutzt, ohne ein Datenpaket zu kaufen, wird die {% data variables.large_files.product_name_short %}-Unterstützung für dein Konto bis zum nächsten Monat deaktiviert.

## Weiterführende Themen

- [Informationen zur Nutzung für {% data variables.large_files.product_name_long %}](/articles/viewing-your-git-large-file-storage-usage)
- [Verwalten der Abrechnung für {% data variables.large_files.product_name_long %}](/articles/managing-billing-for-git-large-file-storage)
