* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} パブリック{% ifversion ghes or ghec or ghae %}もしくはインターナル{% endif %}リポジトリ内の再利用可能なワークフローの場合。.
* `./.github/workflows/{filename}` 同じリポジトリ内の再利用可能なワークフローの場合。{% endif %}

`{ref}`にはSHA、リリースタグ、ブランチ名が使えます。 コミットSHAを使うのが、安定性とセキュリティの上で最も安全です。 詳しい情報については「[GitHub Actionsのためのセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)」を参照してください。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}2番目の構文（`{owner}/{repo}` and `@{ref}`なし）を使うなら、呼び出されるワークフローは呼び出し元のワークフローと同じコミットからのものになります。{% endif %}
