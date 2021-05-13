---
title: インターナルリポジトリへの移行
intro: 'インターナルリポジトリへ移行して、{% data variables.product.prodname_ghe_server %}と{% data variables.product.prodname_ghe_cloud %}の両方を使う開発者の内部ソースに関する体験を統合できます。'
redirect_from:
  - /enterprise/admin/installation/migrating-to-internal-repositories
  - /enterprise/admin/user-management/migrating-to-internal-repositories
permissions: Site administrators can migrate to internal repositories.
versions:
  enterprise-server: '>=2.20'
topics:
  - Enterprise
---

### インターナルリポジトリについて

インターナルリポジトリは、{% data variables.product.prodname_ghe_server %} 2.20+で利用できます。 {% data reusables.repositories.about-internal-repos %} 詳しい情報については「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)」を参照してください。

{% data variables.product.prodname_ghe_server %}の将来のリリースでは、リポジトリの可視性の動作を調整し、パブリック、インターナル、プライベートという用語が{% data variables.product.prodname_ghe_server %}と{% data variables.product.prodname_ghe_cloud %}の開発者に対して統一的な意味合いを持つようにします。

これらの変更に備えるために、もしプライベートモードを有効化しているなら、インスタンスで移行を行ってパブリックリポジトリをインターナルに変換できます。 この移行は現時点ではオプションであり、非プロダクションのインスタンスで変更をテストできるようにするためのものです。 この移行は、将来は必須になります。

移行を行うと、インスタンス上でOrganizationが所有するすべてのパブリックリポジトリは、インターナルリポジトリになります。 それらのリポジトリのいずれかがフォークを持っていれば、そのフォークはプライベートになります。 プライベートリポジトリは、プライベートのままになります。

インスタンス上でユーザアカウントが所有するすべてのパブリックリポジトリは、プライベートリポジトリになります。 それらのリポジトリのいずれかがフォークを持っていれば、そのフォークもプライベートになります。 各フォークの所有者は、フォークの親に対して読み取り権限が与えられます。

インターナルもしくはプライベートになるパブリックリポジトリに対する匿名Git読み取りアクセスは、無効化されます。

リポジトリに対する現在のデフォルトの可視性がパブリックであれば、デフォルトはインターナルになります。 現在のデフォルトがプライベートであれば、デフォルトは変更されません。 デフォルトはいつでも変更できます。 詳しい情報については、「[Enterprise でリポジトリ管理ポリシーを適用する](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-the-default-visibility-of-new-repositories-in-your-enterprise)」を参照してください。

インスタンスに対するリポジトリの作成ポリシーは、パブリックリポジトリの無効化とプライベート及びインターナルリポジトリの許可に変更されます。 このポリシーはいつでも更新できます。 詳しい情報については「[インスタンスでのリポジトリ作成の制限](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)」を参照してください。

プライベートモードを有効化していないなら、移行スクリプトは何もしません。

### 移行の実施

1. 管理シェルに接続します。 詳しい情報については「[管理シェル（SSH）にアクセスする](/enterprise/admin/installation/accessing-the-administrative-shell-ssh)」を参照してください。
2. `/data/github/current`ディレクトリにアクセスしてください。
   ```shell
   cd /data/github/current
   ```
3. 移行コマンドを実行してください。
   ```shell
   sudo bin/safe-ruby lib/github/transitions/20191210220630_convert_public_ghes_repos_to_internal.rb --verbose -w | tee -a /tmp/convert_public_ghes_repos_to_internal.log
   ```

ログの出力は、ターミナルと`/tmp/convert_public_ghes_repos_to_internal.log`に対して行われます。

### 参考リンク

- [プライベートモードの有効化](/enterprise/admin/installation/enabling-private-mode)
