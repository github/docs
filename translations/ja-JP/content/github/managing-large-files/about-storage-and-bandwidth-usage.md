---
title: ストレージと帯域の利用について
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage/
  - /articles/billing-plans-for-git-large-file-storage/
  - /articles/about-storage-and-bandwidth-usage
versions:
  free-pro-team: '*'
---

{% data variables.product.product_name %} 上のすべてのリポジトリで、あなたのアカウントもしくは Organization が有料プランを持っているかどうかにかかわらず、{% data variables.large_files.product_name_short %} が利用できます。

### ストレージと帯域の利用の追跡

{% data variables.large_files.product_name_short %}で追跡されているファイルに変更をコミットしてプッシュした場合、ファイルは全体として新しいバージョンがプッシュされ、総ファイルサイズがリポジトリのオーナーのストレージ制限に対してカウントされます。 {% data variables.large_files.product_name_short %}で追跡されているファイルをダウンロードすると、総ファイルサイズはリポジトリのオーナーの帯域制限に対してカウントされます。 {% data variables.large_files.product_name_short %}のアップロードは帯域制限に対してカウントされません。

例:
- 500 MB のファイルを {% data variables.large_files.product_name_short %} にプッシュすると、あなたに割り当てられた 500 MB のストレージを使うことになりますが、あなたの帯域は消費されません。 1 バイト分の変更を加えてそのファイルを再度プッシュすると、さらに 500 MB のストレージが使われ、帯域は消費されません。これらの 2 つのプッシュによる合計で、1 GB のストレージが使われ、帯域の消費はありません。
- LFS で追跡されている 500 MB のファイルをダウンロードした場合、リポジトリのオーナーに割り当てられている帯域を 500 MB 消費します。 コラボレータがそのファイルに変更をプッシュし、あなたが新しいバージョンをローカルのリポジトリにプルしたなら、あなたは 500 MB の帯域を新たに消費するため、この 2 つのダウンロードでの合計の使用帯域は 1 GB になります。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
If
{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in source code archives for your repository, downloads of those archives will count towards bandwidth usage for the repository. 詳しい情報については、「[リポジトリのアーカイブ内の {% data variables.large_files.product_name_short %} オブジェクトを管理する](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)」を参照してください。
{% endif %}

{% tip %}

**Tips**:
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

### ストレージの容量

データパックを購入せずに {% data variables.large_files.initial_storage_quota %}以上にストレージを使用した場合でも、引き続き大きなアセットを持つリポジトリをクローンすることができますが、取り出せるのはポインタファイルのみであり、新しいファイルをプッシュして戻すことはできません。 ポインタファイルに関する詳しい情報については、「[{% data variables.large_files.product_name_long %}について](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)」を参照してください。

### 帯域の容量

データパックを購入せずに {% data variables.large_files.initial_bandwidth_quota %}以上の帯域を月あたりに利用した場合、翌月までアカウントの {% data variables.large_files.product_name_short %}サポートは無効化されます。

### 参考リンク

- 「[ {% data variables.large_files.product_name_long %}の利用状況を表示する](/articles/viewing-your-git-large-file-storage-usage)」
- 「[{% data variables.large_files.product_name_long %} の支払いを管理する](/articles/managing-billing-for-git-large-file-storage)」
