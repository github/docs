---
title: パブリックフォークで実行されるワークフローの実行を承認する
intro: 初めてのコントリビューターがプルリクエストをパブリックリポジトリに送信するとき、書き込みアクセスを持つメンテナはワークフローの実行を承認する必要があります。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

パブリックリポジトリのフォークは、リポジトリの {% data variables.product.prodname_actions %} ワークフローへの変更を提案するプルリクエストを送信できます。 フォークからのワークフローはシークレットなどの機密データにアクセスできませんが、悪用目的で変更された場合、メンテナが迷惑を被る可能性があります。 これを防ぐために、プルリクエストのワークフローは、初めてのコントリビューターから受け取った場合は自動的に実行されないため、最初に承認する必要があります。

リポジトリへの書き込みアクセスを持つメンテナは、次の手順で、初めてのコントリビューターからのプルリクエストのワークフローをレビューおよび実行できます。 コントリビューターが少なくとも 1 つのプルリクエストをプロジェクトのリポジトリにマージした後、そのコントリビューターのフォークからの以降のプルリクエストは自動的にワークフローを実行します。

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. プルリクエストで提案された変更を調べて、プルリクエストブランチでワークフローを快適に実行できることを確認します。 ワークフローファイルに影響を与える `.github/workflows/` ディレクトリで提案された変更には特に注意する必要があります。
1. プルリクエストブランチでワークフローを実行することに慣れている場合は、{% octicon "comment-discussion" aria-label="The discussion icon" %} [**Conversation**] タブに戻り、[Workflow(s) awaiting approval] で [**Approve and run**] をクリックします。

   ![ワークフローを承認して実行する](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
