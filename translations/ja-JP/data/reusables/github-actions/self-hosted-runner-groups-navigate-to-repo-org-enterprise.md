1. Navigate to where your self-hosted runner groups are located:
   * **Organizationもしくはリポジトリ内**: メインページにアクセスして{% octicon "gear" aria-label="The Settings gear" %}** Settings（設定）**をクリックしてください。
   * {% ifversion fpt %}**Enterpriseアカウントを使っている場合**: `https://github.com/enterprises/ENTERPRISE-NAME`にアクセスして、Enterpriseアカウントに移動してください。`ENTERPRISE-NAME`は自分のEnterpriseアカウント名に置き換えてください。{% elsif ghes or ghae %}**Enterpriseレベルランナーを使っている場合**:

     1. 任意のページの右上で {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
     1. 左のサイドバーで**Enterprise overview（Enterpriseの概要）**をクリックしてください。
     1. {% endif %}Enterpriseサイドバー内で{% octicon "law" aria-label="The law icon" %}**Policies（ポリシー）**をクリックしてください。
1. Navigate to the "Runner groups" settings:
   * **In an organization or repository**: Click **Actions** in the left sidebar{% ifversion fpt %}, then click **Runner groups** below it{% endif %}.
   * {% ifversion fpt %}**If using an enterprise account**:{% elsif ghes or ghae %}**If using an enterprise-level runner**:{% endif %} Click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies"{% ifversion fpt %}, then click the **Runners groups** tab{% endif %}.
