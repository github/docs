{%- ifversion custom-pattern-dry-run-ga %}
1. dry runを実行したいリポジトリを選択してください。
   * Organization全体でdry runを実行したい場合は、**All repositories in the organization（Organizationのすべてのリポジトリ）**を選択してください。 ![dry runのために選択したリポジトリを表示しているスクリーンショット](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * dry runを実行したいリポジトリを指定するには、**Selected repositories（選択したリポジトリ）**を選択し、続いて最大で10個のリポジトリを検索して選択してください。 ![dry runのために選択したリポジトリを表示しているスクリーンショット](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. 新しいカスタムパターンをテストする準備ができたら**Run（実行）**をクリックしてください。
{%- else %}
1. dry runを実行したいリポジトリを最大10個まで検索して選択してください。 ![dry runのために選択したリポジトリを表示しているスクリーンショット](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. カスタムパターンをテストする準備ができたら、**Dry run**をクリックしてください。
{%- endif %}
