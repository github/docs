---
title: Git Large File Storageについて
intro: '{% data variables.large_files.product_name_short %}を使用すると、Gitプッシュ制限より大きいファイルを{% data variables.product.product_name %}にプッシュできます。'
redirect_from:
  - /articles/about-large-file-storage/
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
{% data variables.large_files.product_name_short %}は、リポジトリに実際のファイルではなく、ファイルへの参照を保存することで大きなファイルを扱います。 Gitのアーキテクチャを回避するために、{% data variables.large_files.product_name_short %}は実際のファイル（これはどこか別の場所に保存されます）への参照として働くポインタファイルを作成します。 {% data variables.product.product_name %}はこのポインタファイルをリポジトリ中で管理します。 リポジトリをクローンすると、{% data variables.product.product_name %}はこのポインタファイルを大きなファイルを見つけるための地図として使います。

{% if currentVersion == "free-pro-team@latest" %}
Using
{% data variables.large_files.product_name_short %} を使用すると、最大で次のファイルサイズまで保存できます。

| 製品                                                | 最大ファイルサイズ        |
| ------------------------------------------------- | ---------------- |
| {% data variables.product.prodname_free_user %} | 2 GB             |
| {% data variables.product.prodname_pro %}         | 2 GB             |
| {% data variables.product.prodname_team %}        | 4 GB             |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
 Using
{% data variables.large_files.product_name_short %} を使用すると、最大 {% if currentVersion ver_lt "enterprise-server@2.21" %}{% data variables.large_files.max_lfs_size %}{% else %}5 GB{% endif %} のファイルをリポジトリに保存できます。
{% endif %}

{% data variables.large_files.product_name_short %}を{% data variables.product.prodname_desktop %}と共に使うこともできます。 {% data variables.product.prodname_desktop %}でのGit FLSリポジトリのクローンに関する詳しい情報については、[GitHubからGitHub Desktopへのリポジトリのクローン](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)を参照してください。

{% data reusables.large_files.can-include-lfs-objects-archives %}

#### ポインタファイルのフォーマット

{% data variables.large_files.product_name_short %}のポインタファイルは以下のようになっています。

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

これは、使用している{% data variables.large_files.product_name_short %}の`version`を追跡し、その後にファイルのユニークな識別子（`oid`）が続きます。 また、最終のファイルの`size` も保存します。

{% note %}

設定ファイルでクエリスイートを指定すると、{% data variables.product.prodname_codeql %} 分析エンジンは、デフォルトのクエリセットに加えて、スイートに含まれるクエリを実行します。
- {% data variables.large_files.product_name_short %} は {% data variables.product.prodname_pages %} サイトでは使用できません。
- {% data variables.large_files.product_name_short %} はテンプレートリポジトリでは使用できません。

{% endnote %}

### 参考リンク

- [{% data variables.large_files.product_name_long %}とのコラボレーション](/articles/collaboration-with-git-large-file-storage)
