{% ifversion fpt %}
1. Navigate to the main page of the organization where your self-hosted runner group is registered.
2. Click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
3. サイドバーで**Actions（アクション）**をクリックしてください。
4. Click **Runners**.
{% elsif ghec or ghes or ghae %}
1. セルフホストランナーが登録されているところへアクセスしてください:
   * **In an organization**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% ifversion ghec %}**If using an enterprise account**: navigate to your enterprise account by clicking your profile photo in the top-right corner of {% data variables.product.prodname_dotcom_the_website %}, then clicking **Your enterprises**, then clicking the enterprise.{% elsif ghes or ghae %}**If using an enterprise-level runner**:

     1. 任意のページの右上で {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
     1. 左のサイドバーで**Enterprise overview（Enterpriseの概要）**をクリックしてください。
     1. In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.{% endif %}
1. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **In an organization**: Click **Actions** in the left sidebar{% ifversion fpt or ghec or ghes > 3.1 or ghae %}, then click **Runners**{% endif %}.
   * {% ifversion ghec %}**Enterpriseアカウントを使っている場合**:{% elsif ghes or ghae %}**Enterpriseレベルのランナーを使っている場合**:{% endif %} "{% octicon "law" aria-label="The law icon" %} Policies（ポリシー）”の下の**Actions**をクリック{% ifversion fpt or ghec or ghes > 3.1 or ghae %}し、続いて**Runners（ランナー）**タブをクリック{% endif %}してください。
{% endif %}
