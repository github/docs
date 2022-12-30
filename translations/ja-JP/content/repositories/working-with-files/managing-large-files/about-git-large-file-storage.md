---
title: Git Large File Storageについて
intro: '{% data variables.product.product_name %} には、リポジトリで許可されるファイルのサイズに制限があります。 この制限を超えるファイルを追跡するには、{% data variables.large_files.product_name_long %} を使います。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118751'
---
## {% data variables.large_files.product_name_long %}について

{% data variables.large_files.product_name_short %}は、リポジトリに実際のファイルではなく、ファイルへの参照を保存することで大きなファイルを扱います。 Git のアーキテクチャを回避するため、{% data variables.large_files.product_name_short %} では実際のファイル (どこか別の場所に格納されています) への参照として働くポインター ファイルが作成されます。 {% data variables.product.product_name %}はこのポインタファイルをリポジトリ中で管理します。 リポジトリをクローンすると、{% data variables.product.product_name %}はこのポインタファイルを大きなファイルを見つけるための地図として使います。

{% ifversion fpt or ghec %}{% data variables.large_files.product_name_short %} を使うと、最大で次のファイルまで格納できます。

| 製品 | ファイルの最大サイズ |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 GB |
| {% data variables.product.prodname_pro %} | 2 GB |
| {% data variables.product.prodname_team %} | 4 GB |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
{% data variables.large_files.product_name_short %} を使うと、最大 5 GB までのファイルをリポジトリに格納できます。
{% endif %} 

{% data reusables.repositories.git-lfs %}

{% data variables.large_files.product_name_short %}を{% data variables.product.prodname_desktop %}と共に使うこともできます。 {% data variables.product.prodname_desktop %} での Git FLS リポジトリのクローンについて詳しくは、「[GitHub からの GitHub Desktop へのリポジトリのクローン方法](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)」をご覧ください。

{% data reusables.large_files.can-include-lfs-objects-archives %}

## ポインタファイルのフォーマット

{% data variables.large_files.product_name_short %}のポインタファイルは以下のようになっています。

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

使われている {% data variables.large_files.product_name_short %} の `version` の後にファイルの一意識別子 (`oid`) が付いたものが追跡されます。 また、最終的なファイルの `size` も格納されます。

{% note %}

**注**:
- {% data variables.large_files.product_name_short %} は {% data variables.product.prodname_pages %} サイトでは使用できません。
- {% data variables.large_files.product_name_short %} はテンプレートリポジトリでは使用できません。
  
{% endnote %}

## 参考資料

- [{% data variables.large_files.product_name_long %} でのコラボレーション](/articles/collaboration-with-git-large-file-storage)
