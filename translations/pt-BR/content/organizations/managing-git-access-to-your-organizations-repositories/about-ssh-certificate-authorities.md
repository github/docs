---
title: Sobre autoridades certificadas de SSH
intro: 'Com uma autoridade certificada SSH, a organização ou conta corporativa pode oferecer certificados SSH para os integrantes usarem ao acessar seus recursos com o Git.'
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Autoridades do certificado SSH
---

## Sobre autoridades certificadas de SSH

Um certificado SSH é um mecanismo utilizado para uma chave SSH assinar outra chave SSH. Se você usa uma autoridade certificada (CA) SSH para fornecer certificados SSH aos integrantes da organização, você pode adicionar a CA em sua conta corporativa ou organização para permitir que integrantes da organização usem os certificados deles para acessar os recursos da organização.

Depois de adicionar uma CA SSH à sua organização ou conta corporativa, você pode usar a CA para assinar certificados SSH de cliente para integrantes da organização. Integrantes da organização podem usar os certificados assinados para acessar os repositórios da sua organização (e somente os repositórios da sua organização) no Git. Optionally, you can require that members use SSH certificates to access organization resources. For more information, see "[Managing your organization's SSH certificate authorities](/articles/managing-your-organizations-ssh-certificate-authorities)" and "[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)."

Por exemplo, você pode desenvolver um sistema interno que emite um novo certificado para seus desenvolvedores todas as manhãs. Cada desenvolvedor pode usar o certificado diário para trabalhar nos repositórios da organização no {% data variables.product.product_name %}. No final do dia, o certificado pode expirar automaticamente, protegendo seus repositórios caso o certificado seja adulterado mais tarde.

{% ifversion fpt or ghec %}
Integrantes da organização podem usar os certificados assinados para autenticação mesmo que você tenha aplicado o logon único SAML. A menos que você exija certificados SSH, os integrantes podem continuar a usar outros meios de autenticação para acessar os recursos da organização no Git, como o nome de usuário e senha deles, tokens de acesso pessoais e outras chaves SSH próprias.
{% endif %}

Members will not be able to use their certificates to access forks of your repositories that are owned by their user accounts.

Para evitar erros de autenticação, os integrantes da organização devem usar uma URL especial que inclua o ID da organização para clonar repositórios usando certificados assinados. Qualquer pessoa com acesso de leitura no repositório pode localizar essa URL na página do repositório. Para obter mais informações, consulte "[Clonar um repositório](/articles/cloning-a-repository)".

## Issuing certificates

A cada emissão de certificado, você deve incluir uma extensão especificando para qual usuário do {% data variables.product.product_name %} é o certificado. Por exemplo, você pode usar o comando do OpenSSH `ssh-keygen` substituindo _KEY-IDENTITY_ por sua identidade chave e _USERNAME_ por um nome de usuário do {% data variables.product.product_name %}. O certificado que você gerar será autorizado a agir em nome desse usuário para qualquer um dos recursos da sua organização. Certifique-se de validar a identidade do usuário antes de emitir o certificado.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

**Warning**: After a certificate has been signed and issued, the certificate cannot be revoked. Make sure to use the -`V` flag to configure a lifetime for the certificate, or the certificate can be used indefinitely.

{% endwarning %}

Para emitir um certificado para alguém que utiliza SSH para acessar vários produtos de {% data variables.product.company_short %}, você pode incluir duas extensões de login para especificar o nome de usuário para cada produto. Por exemplo, o comando a seguir emitiria um certificado para _USERNAME-1_ para a conta do usuário para {% data variables.product.prodname_ghe_cloud %}, e _USERNAME-2_ para a conta do usuário em {% data variables.product.prodname_ghe_managed %} ou {% data variables.product.prodname_ghe_server %} em _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

É possível restringir os endereços IP dos quais um integrante da organização pode acessar os recursos da sua organização usando uma extensão `source-address`. A extensão aceita um endereço IP específico ou um intervalo de endereços IP usando a notação CIDR. É possível especificar vários endereços ou intervalos separando os valores com vírgulas. Para obter mais informações, consulte "[Roteamento interdomínio sem classes](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)" na Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
