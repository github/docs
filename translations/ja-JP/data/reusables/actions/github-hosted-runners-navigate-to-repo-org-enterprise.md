{% ifversion fpt %}
1. Organizationもしくはリポジトリのメインページにアクセスしてください。
1. {% octicon "gear" aria-label="The Settings gear" %} **Settings（設定）**をクリックしてください。
1. 左のサイドバーで、**Actionsをクリック**し、続いて**Runners（ランナー）**をクリックしてください。
{% elsif ghec %}
1. ランナーの設定にアクセスしてください。
   * **Organizationもしくはリポジトリ内**: メインページにアクセスし、続いて{% octicon "gear" aria-label="The Settings gear" %} **Settings（設定）**をクリックしてください。
   * **Enterpriseアカウントを使っている場合**: {% data variables.product.prodname_dotcom_the_website %}の右上にあるプロフィール写真をクリックしてEnterpriseアカウントにアクセスし、続いて**Your enterprises（あなたのEnterprise）**をクリックし、Enterpriseをクリックしてください。
1. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organizationもしくはリポジトリ内**: 左のサイドバーの**Actions**をクリックし、続いて**Runners（ランナー）**をクリックしてください。
   * **Enterpriseアカウントを使っている場合**: 左のサイドバーで**「{% octicon "law" aria-label="The law icon" %} Policies（ポリシー）」**をクリックし、続いて**Actions**をクリックし、**Runners（ランナー）**タブをクリックしてください。
{% endif %}
