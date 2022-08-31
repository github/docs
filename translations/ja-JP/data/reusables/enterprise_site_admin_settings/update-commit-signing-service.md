1. {% data variables.product.product_name %}のコミット署名サービスの設定を更新してください。

   ```bash{:copy}
   sudo consul-template -once -template /etc/consul-templates/etc/nomad-jobs/gpgverify/gpgverify.hcl.ctmpl:/etc/nomad-jobs/gpgverify/gpgverify.hcl

   nomad job run /etc/nomad-jobs/gpgverify/gpgverify.hcl
   ```
