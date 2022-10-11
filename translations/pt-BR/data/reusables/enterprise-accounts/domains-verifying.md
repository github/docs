Para verificar o domínio da sua conta corporativa, você deve ter acesso para modificar registros de domínio com o seu serviço de hospedagem de domínio.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Aguarde a alteração da configuração de DNS, que pode demorar até 72 horas. Você pode confirmar que a configuração do DNS foi alterada executando o comando `dig` na linha de comando, substituindo `ENTERPRISE-CONTA` pelo nome da conta corporativa e `example.com` pelo o domínio que você gostaria de verificar. Você deverá ver o novo registro TXT listado na saída do comando.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Depois de confirmar o seu registro TXT é adicionado ao seu DNS, siga as etapas uma a quatro acima para acessar os domínios aprovados e verificados da conta corporativa.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. Opcionalmente, depois que o selo "Verificado" estiver visível nos perfis da sua organização, exclua a entrada TXT do registro do DNS no seu serviço de hospedagem de domínio. ![Selo Verified (Verificado)](/assets/images/help/organizations/verified-badge.png)
