---
title: 　プッシュ保護によってブロックされたブランチのプッシュ
intro: '{% data variables.product.prodname_secret_scanning %}のプッシュ保護の機能は、リポジトリで漏洩したシークレットに対して積極的に保護を行います。 ブロックされたプッシュを解決し、検出されたシークレットが取り除かれれば、コマンドラインもしくはWeb UIから作業ブランチへ変更をプッシュできます。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: ブロックされたブランチのプッシュ
---

## {% data variables.product.prodname_secret_scanning %}のプッシュ保護について

{% data variables.product.prodname_secret_scanning %}のプッシュ保護の機能は、リポジトリに変更をプッシュする前にシークレットをスキャンすることによって、セキュリティ漏洩を防ぐのに役立ちます。 {% data reusables.secret-scanning.push-protection-overview %} プッシュ保護でサポートされているシークレットとサービスプロバイダに関する情報については「[{% data variables.product.prodname_secret_scanning_caps %}パターン](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)」を参照してください。

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**ヒント** プッシュしても安全だと信じているシークレットを{% data variables.product.prodname_dotcom %}がブロックした場合、そのシークレットを許可してその理由を指定できます。 シークレットに対するプッシュ保護のバイパスに関する情報については、コマンドラインとWeb UIについてそれぞれ「[ブロックされたシークレットのプッシュの許可](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)」及び「[シークレットのプッシュ保護のバイパス](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)を参照してください。

{% endtip %}

{% ifversion push-protection-custom-link-orgs %}

Organizationの管理者は、プッシュがブロックされた際の{% data variables.product.product_name %}からのメッセージに含められるカスタムリンクを提供できます。 このカスタムリンクには、Organization固有のリソースやアドバイスと、Organizationのポリシーを含めることができます。

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

## ブロックされたプッシュのコマンドラインでの解決

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

ブロックされたシークレットが最新のコミットでブランチに導入されたなら、以下のガイダンスに従うことができます。

1. シークレットをコードから削除します。
1. `git commit --amend`を使って変更をコミットします。
1. `git push`で変更をプッシュします。

シークレットがGit履歴の以前のコミットに現れている場合でも、シークレットを削除できます。

1. `git log`を使ってプッシュのエラーに現れたどのコミットが履歴中の最初に来ているかを判断します。
1. `git rebase -i <commit-id>~1`でインタラクティブなリベースを開始します。 <commit-id> commit-idはステップ1のコミットのidです。
1. エディタに表示されたテキストの先頭行の`pick`を`edit`に変更して、編集するコミットを特定します。
1. シークレットをコードから削除します。
1. `git commit --amend`で変更をコミットします。
1. `git rebase --continue`を実行してリベースを完了します。

## Web UIでのブロックされたコミットの解決

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

ブロックされたコミットをWeb UIで解決するには、シークレットをファイルから削除するか、**Bypass protection（保護のバイパス）**ドロップダウンを使ってシークレットを許可しなければなりません。 Web UIからのプッシュ保護のバイパスに関する詳しい情報については「[Secret scanningでのプッシュの保護](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)」を参照してください。

シークレットが本物であることを確認した場合、そのシークレットをファイルから削除しなければなりません。 シークレットを削除すると、ページ上部のバナーは変化し、変更をコミットできるようになったことを知らせてくれます。
