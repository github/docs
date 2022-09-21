1. Update the settings for {% data variables.product.product_name %}'s commit signing service.

   ```bash{:copy}
   sudo consul-template -once -template /etc/consul-templates/etc/nomad-jobs/gpgverify/gpgverify.hcl.ctmpl:/etc/nomad-jobs/gpgverify/gpgverify.hcl
    
   nomad job run /etc/nomad-jobs/gpgverify/gpgverify.hcl
   ```
