1. ファイルのリストの上にある{% octicon "download" aria-label="The download icon" %} **Code（コード）**をクリックしてください。 !["Code"ボタン](/assets/images/help/repository/code-button.png)
1. HTTPSを使ってリポジトリをクローンするには、"Clone with HTTPS（HTTPSでクローン）"の下で、
{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。 OrganizationのSSH認証局が発行した証明書を含むSSHキーを使ってリポジトリをクローンするには、**Use SSH（SSHを利用）**をクリックし、続いて{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。{% ifversion fpt or ghes > 2.22 or ghae %}{% data variables.product.prodname_cli %}を使ってリポジトリをクローンするには、**Use {% data variables.product.prodname_cli %}**をクリックし、続いて{% octicon "clippy" aria-label="The clipboard icon" %}をクリックしてください。{% endif %}
  ![リポジトリをクローンするURLをコピーするクリップボードアイコン](/assets/images/help/repository/https-url-clone.png)
  {% ifversion fpt or ghes or ghae %}
  ![GitHub CLIでリポジトリをクローンするためのURLをコピーするためのクリップボードアイコン](/assets/images/help/repository/https-url-clone-cli.png){% endif %}
