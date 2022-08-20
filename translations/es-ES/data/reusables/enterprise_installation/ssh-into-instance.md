1. SSH en {% data variables.product.product_location %}. Si tu instancia comprende nodos múltiples, por ejemplo, si se configuraron la disponibilidad alta o la geo-replicación, ingresa por SSH al nodo primario. Si utilizas un clúster, puedes ingresar por SSH a cualquier nodo. Para obtener más información sobre el acceso por SSH, consulta la sección "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
