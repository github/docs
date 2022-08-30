1. "{% data variables.product.prodname_secret_scanning_caps %}"の下の"Push protection（プッシュ保護）"の下で、**Enable all（すべて有効化）**をクリックしてください。 ![任意のOrganizationで{% data variables.product.prodname_secret_scanning %}のプッシュ保護を有効化する方法を示しているスクリーンショット](/assets/images/help/organizations/secret-scanning-enable-push-protection.png)
1. あるいは、"Automatically enable for private repositories added to {% data variables.product.prodname_secret_scanning %}"をクリックしてください。{% ifversion push-protection-custom-link-orgs %}
1. あるいは、シークレットをプッシュしようとしたときにメンバーに表示されるメッセージにカスタムリンクを含めるには、**Add a resource link in the CLI and web UI when a commit is blocked（コミットがブロックされた場合CLIやWeb UIにリソースリンクを追加）**を選択し、続いてURLを入力し、**Save link（リンクを保存）**をクリックしてください。
   {% ifversion push-protection-custom-link-orgs-beta %}{% indented_data_reference reusables.advanced-security.custom-link-beta spaces=3 %}{% endif %}

   ![カスタムリンクを有効化するチェックボックスとテキストフィールドのスクリーンショット](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}