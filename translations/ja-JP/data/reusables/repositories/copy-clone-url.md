{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. リポジトリ名の下で**Clone or download（クローンもしくはダウンロード）**をクリックしてください。 ![Clone or downloadボタン](/assets/images/help/repository/clone-repo-clone-url-button.png)
2. HTTPSを使ってリポジトリをクローンするには、"Clone with HTTPS（HTTPSでクローン）"の下で、
{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。
Organization の SSH 認証局から発行された証明書を含む SSH キーを使用してリポジトリのクローンを作成するには、**Use SSH（SSHを使用）**をクリックし、続いて
{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。
![クローンURLボタン](/assets/images/help/repository/https-url-clone.png)
{% else %}
1. ファイルのリストの上にある{% octicon "download" aria-label="The download icon" %} **Code（コード）**をクリックしてください。 !["Code"ボタン](/assets/images/help/repository/code-button.png)
1. HTTPSを使ってリポジトリをクローンするには、"Clone with HTTPS（HTTPSでクローン）"の下で、
{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。 OrganizationのSSH認証局が発行した証明書を含むSSHキーを使ってリポジトリをクローンするには、**Use SSH（SSHを利用）**をクリックし、続いて{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}{% data variables.product.prodname_cli %}を使ってリポジトリをクローンするには、**Use {% data variables.product.prodname_cli %}（{% data variables.product.prodname_cli %}を利用）**をクリックし、続いて{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。{% endif %}
  ![リポジトリをクローンするURLをコピーするクリップボードアイコン](/assets/images/help/repository/https-url-clone.png)
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
  ![GitHub CLIでリポジトリをクローンするためのURLをコピーするためのクリップボードアイコン](/assets/images/help/repository/https-url-clone-cli.png){% endif %}
{% endif %}
