---
title: 上流リポジトリをフォークにマージする
intro: 上流リポジトリに対するプッシュ (書き込み) アクセスがない場合でも、そのリポジトリから自分のフォークにコミットをプルできます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/merging-an-upstream-repository-into-your-fork
  - /articles/merging-an-upstream-repository-into-your-fork
  - /github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.command_line.open_the_multi_os_terminal %}
2. ワーキングディレクトリをローカルプロジェクトに変更します。
3. マージ先のブランチをチェックアウトします。 通常、デフォルトブランチにマージします。
  ```shell
  $ git checkout <em>master</em>
  ```
4. 上流リポジトリから目的のブランチをプルします。 この方法では、コミット履歴が修正されずに維持されます。
  ```shell
  $ git pull https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git <em>BRANCH_NAME</em>
  ```
5. コンフリクトがある場合は解決します。 詳細は「[マージコンフリクトに対処する](/articles/addressing-merge-conflicts)」を参照してください。
6. マージをコミットします。
7. 変更を確認し、問題がないことを確かめます。
8. マージを GitHub リポジトリにプッシュします。
  ```shell
  $ git push origin <em>master</em>
  ```
