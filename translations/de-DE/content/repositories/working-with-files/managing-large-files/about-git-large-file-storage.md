---
title: Informationen zu Git Large File Storage
intro: '{% data variables.product.product_name %} schränkt die Größe der in Repositorys erlaubten Dateien ein. Um Dateien außerhalb dieses Grenzwerts nachzuverfolgen, kannst du {% data variables.large_files.product_name_long %} verwenden.'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
ms.openlocfilehash: f0ab54791645dc5c36cce2880ba3ae5c9b705f35
ms.sourcegitcommit: 06726d24e73f1175f10749d6fdcf143d6094c9a5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118752'
---
## Informationen zu {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} verarbeitet große Dateien, indem Referenzen auf die Datei im Repository gespeichert werden, nicht aber die Datei an sich. Um die Architektur von Git zu umgehen, erstellt {% data variables.large_files.product_name_short %} eine Pointer-Datei, die als Verweis auf die eigentliche Datei (die an einem anderen Ort gespeichert ist) dient. {% data variables.product.product_name %} verwaltet diese Pointer-Datei in deinem Repository. Wenn du das Repository klonst, verwendet {% data variables.product.product_name %} die Pointer-Datei als Karte, um die große Datei für dich zu finden.

{% ifversion fpt or ghec %} Mit {% data variables.large_files.product_name_short %} kannst du Dateien jeweils bis zu einer bestimmten Größe speichern:

| Produkt | Maximale Dateigröße |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 GB |
| {% data variables.product.prodname_pro %} | 2 GB |
| {% data variables.product.prodname_team %} | 4 GB |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
Mit {% data variables.large_files.product_name_short %} kannst du Dateien bis zu einer Größe von 5 GB in deinem Repository speichern.
{% endif %} 

{% data reusables.repositories.git-lfs %}

Du kannst {% data variables.large_files.product_name_short %} auch mit {% data variables.product.prodname_desktop %} verwenden. Weitere Informationen zum Klonen von Git LFS-Repositorys in {% data variables.product.prodname_desktop %} findest du unter [Klonen eines Repositorys von GitHub in GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop).

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Format der Pointer-Datei

Die Pointer-Datei von {% data variables.large_files.product_name_short %} sieht folgendermaßen aus:

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Verfolgt wird die verwendete {% data variables.large_files.product_name_short %}-`version`, gefolgt von einem eindeutigen Bezeichner für die Datei (`oid`). Außerdem wird die `size` der endgültigen Datei gespeichert.

{% note %}

**Hinweise**:
- {% data variables.large_files.product_name_short %} kann nicht für {% data variables.product.prodname_pages %}-Websites verwendet werden.
- {% data variables.large_files.product_name_short %} kann nicht für Vorlagenrepositorys verwendet werden.
  
{% endnote %}

## Weitere Informationsquellen

- [Zusammenarbeit mit {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)
