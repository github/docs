---
title: リポジトリのアーカイブで Git LFS オブジェクトを管理する
shortTitle: 'アーカイブにある {% data variables.large_files.product_name_short %} オブジェクトを管理する'
intro: '{% data variables.large_files.product_name_long %}（{% data variables.large_files.product_name_short %}）オブジェクトを、{% data variables.product.product_name %} がリポジトリ用に作成する ZIP ファイルや tarball などのソースコードアーカイブに含めるかどうかを選択できます。'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  free-pro-team: '*'
  enterprise-server: '>3.0'
  github-ae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
---

### アーカイブにある {% data variables.large_files.product_name_short %} オブジェクトについて

{% data variables.product.product_name %} は、ZIP ファイルと tarball 形式でリポジトリのソースコードアーカイブを作成します。 これらのアーカイブは、リポジトリのメインページ、またはリリースアセットとしてダウンロードできます。 デフォルトでは、{% data variables.large_files.product_name_short %} オブジェクトはこれらのアーカイブに含まれず、これらのオブジェクトへのポインタファイルのみが含まれます。 代わりに {% data variables.large_files.product_name_short %} オブジェクトを含めて、リポジトリのアーカイブを使いやすくすることもできます。

{% if currentVersion == "free-pro-team@latest" %}
リポジトリのアーカイブに {% data variables.large_files.product_name_short %} オブジェクトを含めた場合、それらのアーカイブをダウンロードするたびに、アカウントの帯域幅の使用量にカウントされます。 各アカウントには、毎月無料で {% data variables.large_files.initial_bandwidth_quota %} の帯域幅が付与され、追加使用分に対して支払うことができます。 詳しい情報については、「[ストレージと帯域の利用について](/github/managing-large-files/about-storage-and-bandwidth-usage)」および「[{% data variables.large_files.product_name_long %} の支払いを管理する](/billing/managing-billing-for-git-large-file-storage)」を参照してください。
{% endif %}

### アーカイブにある {% data variables.large_files.product_name_short %} オブジェクトを管理する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Archives] で、[**Include {% data variables.large_files.product_name_short %} objects in archives**] を選択または選択解除します。 ![アーカイブにある {% data variables.large_files.product_name_short %} オブジェクトを含めるチェックボックス](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
