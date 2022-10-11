---
title: Informationen zu Git Large File Storage (Git Große Dateien Speicher)
intro: '{% data variables.product.product_name %} limits the size of files allowed in repositories. To track files beyond this limit, you can use {% data variables.large_files.product_name_long %}.'
redirect_from:
  - /articles/about-large-file-storage/
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Git Large File Storage
---

## Informationen zu {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} verarbeitet große Dateien, indem Referenzen auf die Datei im Repository gespeichert werden, nicht aber die Datei an sich. Um die Architektur von Git zu umgehen, erstellt {% data variables.large_files.product_name_short %} eine Pointer-Datei, die als Referenz auf die aktuelle Datei (die an einem anderen Ort gespeichert ist) dient. {% data variables.product.product_name %} verwaltet diese Pointer-Datei in Ihrem Repository. Wenn Sie das Repository klonen, verwendet {% data variables.product.product_name %} die Pointer-Datei als Karte, um die große Datei für Sie zu finden.

{% ifversion fpt %}
Mit {% data variables.large_files.product_name_short %} kannst Du Dateien speichern bis zu einer Größe von:

| Produkt                                           | Maximale Dateigröße |
| ------------------------------------------------- | ------------------- |
| {% data variables.product.prodname_free_user %} | 2 GB                |
| {% data variables.product.prodname_pro %}         | 2 GB                |
| {% data variables.product.prodname_team %}        | 4 GB                |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
 Using {% data variables.large_files.product_name_short %}, you can store files up to 5 GB in your repository.
{% endif %}

Du kannst {% data variables.large_files.product_name_short %} auch mit {% data variables.product.prodname_desktop %} verwenden. Weitere Informationen zum Klonen von Git-LFS-Repositorys in {% data variables.product.prodname_desktop %} finden Sie unter „[Ein Repository von GitHub in GitHub Desktop klonen](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)“.

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Format der Pointer-Datei

Die Pointer-Datei von {% data variables.large_files.product_name_short %} sieht folgendermaßen aus:

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Sie erfasst die `version` von {% data variables.large_files.product_name_short %}, die Sie verwenden, gefolgt von einem eindeutigen Kennzeichner für die Datei (`oid`). Außerdem speichert sie die Größe (`size`) der endgültigen Datei.

{% note %}

**Hinweise**:
- {% data variables.large_files.product_name_short %} cannot be used with {% data variables.product.prodname_pages %} sites.
- {% data variables.large_files.product_name_short %} cannot be used with template repositories.

{% endnote %}

## Weiterführende Informationen

- „[Zusammenarbeit mit {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)“
