{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**ノート:** {% data variables.product.prodname_dependabot %}のPull Requestによってトリガーされたワークフローの実行は、フォークされたリポジトリからのように実行されるので、読み取りのみの`GITHUB_TOKEN`を使用します。 それらのワークフローの実行は、シークレットにはアクセスできません。 これらのワークフローをセキュアに保つための方針については、「[GitHub Actionsとワークフローをセキュアに保つ: pwnリクエストの回避](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)」を参照してください。

{% endnote %}
{% endif %}
