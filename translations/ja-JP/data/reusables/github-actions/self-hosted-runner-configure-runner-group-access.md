1. 設定ページの{% ifversion fpt or ghes > 3.1 or ghae or ghec %}"Runners（ランナー）"{% else %}"Self-hosted runners（セルフホストランナー）"{% endif %}のセクションで、設定したいランナーグループの隣の{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックし、続いて**Edit name and [organization|repository] access（名前と[Organization|リポジトリ]アクセスの編集）<**クリックしてください。 ![リポジトリの権限の管理](/assets/images/help/settings/actions-runner-manage-permissions.png)
1. ポリシーオプションを修正するか、ランナーグループ名を変更してください。

   {% ifversion not ghae %}
   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
   {% endif %}
