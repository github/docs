1. セルフホストランナーが登録されているところへアクセスしてください:
   * **Organizationもしくはリポジトリ内**: メインページにアクセスして{% octicon "gear" aria-label="The Settings gear" %}** Settings（設定）**をクリックしてください。
   * {% if currentVersion == "free-pro-team@latest" %}**Enterpriseアカウントを使っている場合**: `https://github.com/enterprises/ENTERPRISE-NAME`にアクセスして、Enterpriseアカウントに移動してください。`ENTERPRISE-NAME`は自分のEnterpriseアカウント名に置き換えてください。{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**Enterpriseレベルランナーを使っている場合**:

     1. 任意のページの右上で {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
     1. 左のサイドバーで**Enterprise overview（Enterpriseの概要）**をクリックしてください。
     1. {% endif %}Enterpriseサイドバー内で{% octicon "law" aria-label="The law icon" %}**Policies（ポリシー）**をクリックしてください。
1. {% data variables.product.prodname_actions %}設定にアクセスしてください:
   * **Organizationもしくはリポジトリ内**: 左のサイドバーで**Actions**をクリック{% if currentVersion == "free-pro-team@latest" %}し、続いて**Runners（ランナー）**をクリック{% endif %}してください。
   * {% if currentVersion == "free-pro-team@latest" %}**Enterpriseアカウントを使っている場合**:{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**Enterpriseレベルのランナーを使っている場合**:{% endif %} "{% octicon "law" aria-label="The law icon" %} Policies（ポリシー）”の下の**Actions**をクリック{% if currentVersion == "free-pro-team@latest" %}し、続いて**Runners（ランナー）**タブをクリック{% endif %}してください。
