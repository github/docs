---
title: リポジトリのアーカイブで Git LFS オブジェクトを管理する
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: '{% data variables.large_files.product_name_long %}（{% data variables.large_files.product_name_short %}）オブジェクトを、{% data variables.product.product_name %} がリポジトリ用に作成する ZIP ファイルや tarball などのソースコードアーカイブに含めるかどうかを選択できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881773'
---
## アーカイブにある {% data variables.large_files.product_name_short %} オブジェクトについて

{% data variables.product.product_name %} は、ZIP ファイルと tarball 形式でリポジトリのソースコードアーカイブを作成します。 これらのアーカイブは、リポジトリのメインページ、またはリリースアセットとしてダウンロードできます。 デフォルトでは、{% data variables.large_files.product_name_short %} オブジェクトはこれらのアーカイブに含まれず、これらのオブジェクトへのポインタファイルのみが含まれます。 代わりに {% data variables.large_files.product_name_short %} オブジェクトを含めて、リポジトリのアーカイブを使いやすくすることもできます。 含まれるためには、{% data variables.large_files.product_name_short %} オブジェクトが、リポジトリにコミットされた *.gitattributes* ファイルの追跡ルールでカバーされている必要があります。

リポジトリのアーカイブに {% data variables.large_files.product_name_short %} オブジェクトを含めた場合、それらのアーカイブをダウンロードするたびに、アカウントの帯域幅の使用量にカウントされます。 各アカウントには、毎月無料で {% data variables.large_files.initial_bandwidth_quota %} の帯域幅が付与され、追加使用分に対して支払うことができます。 詳しくは、「[ストレージと帯域の利用について](/github/managing-large-files/about-storage-and-bandwidth-usage)」および「[{% data variables.large_files.product_name_long %} の支払いを管理する](/billing/managing-billing-for-git-large-file-storage)」をご覧ください。

外部 LFS サーバー ( *.lfsconfig* で構成されているもの) を使っている場合、それらの LFS ファイルはリポジトリのアーカイブに含まれません。 アーカイブには、{% data variables.product.product_name %} にコミットされたファイルのみが含まれます。

## アーカイブにある {% data variables.large_files.product_name_short %} オブジェクトを管理する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [アーカイブ] で、 **[{% data variables.large_files.product_name_short %} オブジェクトをアーカイブに含める]** をオンまたはオフにします。
  ![アーカイブに {% data variables.large_files.product_name_short %} オブジェクトを含めるチェックボックス](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
