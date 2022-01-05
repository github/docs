{% ifversion fpt %}
1. Navigate to the main page of the organization or repository where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. サイドバーで**Actions（アクション）**をクリックしてください。
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. セルフホストランナーが登録されているところへアクセスしてください:
   * **Organizationもしくはリポジトリ内**: メインページにアクセスして{% octicon "gear" aria-label="The Settings gear" %}** Settings（設定）**をクリックしてください。 {% ifversion ghec %}
   * **If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}
   * **Enterpriseレベルのランナーを使っている場合**:
     1. 任意のページの右上で {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
     2. 左のサイドバーで**Enterprise overview（Enterpriseの概要）**をクリックしてください。
     3. In the enterprise sidebar, click {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
2. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt or ghes > 3.1 or ghae or ghec %}, then click **Runners**{% endif %}.{% ifversion ghec or ghae or ghes %}
   * {% ifversion ghec %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion ghes > 3.1 or ghae or ghec %}, then click the **Runners** tab{% endif %}.{% endif %}
{% endif %}
