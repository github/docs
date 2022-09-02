1. {% data variables.product.product_location %}にSSHでアクセスしてください。 たとえばHigh availabilityやGeo-replicationが設定されている場合のように、インスタンスが複数のノードで構成されているなら、プライマリノードにSSHで接続してください。 クラスタを使用しているなら、任意のノードにSSH接続できます。 SSHアクセスに関する詳しい情報については「[管理シェル（SSH）へのアクセス](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
