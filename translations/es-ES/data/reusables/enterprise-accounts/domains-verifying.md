Para verificar el dominio de tu cuenta empresarial, debes tener acceso para modificar los registros del dominio con tu servicio de hospedaje de dominios.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Espera a que cambie la configuración de tu DNS, lo cual puede llevar hasta 72 horas. Puedes confirmar que tu configuración de DNS cambió si ejecutas el comando `dig` en la línea de comandos, reemplazando `ENTERPRISE-ACCOUNT` con el nombre de tu cuenta empresarial, y `example.com` con el dominio que te gustaría verificar. Deberías ver tu nuevo registro TXT enumerado en el resultado del comando.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through four above to navigate to your enterprise account's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
1. Opcionalmente, después de que la insignia de "Verificado" se pueda ver en el perfil de tus organizaciones, borra la entrada de TxT del registro de DNS en tu servicio de hospedaje de dominio. ![Insignia Verificado](/assets/images/help/organizations/verified-badge.png)
