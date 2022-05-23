---
title: Sobre autoridades certificadas de SSH
intro: 'Com uma autoridade certificada SSH, a organização ou conta corporativa pode oferecer certificados SSH para os integrantes usarem ao acessar seus recursos com o Git.'
redirect_from:
  - /articles/about-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/about-ssh-certificate-authorities
versions:
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

{% data reusables.organizations.ssh-ca-ghec-only %}

Depois de adicionar uma CA SSH à sua organização ou conta corporativa, você pode usar a CA para assinar certificados SSH de cliente para integrantes da organização. Integrantes da organização podem usar os certificados assinados para acessar os repositórios da sua organização (e somente os repositórios da sua organização) no Git. Opcionalmente, você pode exigir que os integrantes utilizem certificados SSH para acessar recursos da organização. Para obter mais informações, consulte "[Gerenciando as autoridades certificadas SSH da sua organização](/articles/managing-your-organizations-ssh-certificate-authorities)" e "[Aplicando as políticas para configurações de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise). "

Por exemplo, você pode desenvolver um sistema interno que emite um novo certificado para seus desenvolvedores todas as manhãs. Cada desenvolvedor pode usar o certificado diário para trabalhar nos repositórios da organização no {% data variables.product.product_name %}. No final do dia, o certificado pode expirar automaticamente, protegendo seus repositórios caso o certificado seja adulterado mais tarde.

{% ifversion ghec %}
Integrantes da organização podem usar os certificados assinados para autenticação mesmo que você tenha aplicado o logon único SAML. A menos que você exija certificados SSH, os integrantes podem continuar a usar outros meios de autenticação para acessar os recursos da organização no Git, como o nome de usuário e senha deles, tokens de acesso pessoais e outras chaves SSH próprias.
{% endif %}

Os integrantes não poderão usar seus certificados para acessar bifurcações dos seus repositórios que são propriedade das contas pessoais.

## Sobre os URLs do SSH com certificados SSH

Se sua organização exigir certificados SSH, para evitar erros de autenticação, os integrantes da organização deverão usar um URL especial que inclua o ID da organização quando executar operações Git por meio do SSH. Este URL especial permite que o cliente e servidor negociem mais facilmente qual chave no computador do integrante deverá ser usada para autenticação. Se um integrante usar a URL normal, que começa com `git@github. om`, o cliente do SSH poderá oferecer a chave incorreta, causando falha na operação.

Qualquer pessoa com acesso de leitura ao repositório pode encontrar esse URL selecionando o menu suspenso do **Código** na página principal do repositório e, em seguida, clicando em **Usar SSH**.

Se sua organização não exigir certificados SSH, os integrantes poderão continuar usando suas próprias chaves SSH ou outros meios de autenticação. Nesse caso, o URL especial ou o URL normal, que começa com `git@github.com`, irá funcionar.

## Emitindo certificados

A cada emissão de certificado, você deve incluir uma extensão especificando para qual usuário do {% data variables.product.product_name %} é o certificado. Por exemplo, você pode usar o comando do OpenSSH `ssh-keygen` substituindo _KEY-IDENTITY_ por sua identidade chave e _USERNAME_ por um nome de usuário do {% data variables.product.product_name %}. O certificado que você gerar será autorizado a agir em nome desse usuário para qualquer um dos recursos da sua organização. Certifique-se de validar a identidade do usuário antes de emitir o certificado.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> ./user-key.pub
```

{% warning %}

**Aviso**: Depois de um certificado ter sido assinado e emitido, ele não poderá ser revogado. Certifique-se de usar o sinalizador -`V` para configurar o tempo de vida útil do certificado ou este poderá ser usado indefinidamente.

{% endwarning %}

Para emitir um certificado para alguém que utiliza SSH para acessar vários produtos de {% data variables.product.company_short %}, você pode incluir duas extensões de login para especificar o nome de usuário para cada produto. Por exemplo, o comando a seguir emitiria um certificado para _USERNAME-1_ para a conta do usuário para {% data variables.product.prodname_ghe_cloud %}, e _USERNAME-2_ para a conta do usuário em {% data variables.product.prodname_ghe_managed %} ou {% data variables.product.prodname_ghe_server %} em _HOSTNAME_.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@github.com=<em>USERNAME-1</em> extension:login@<em>HOSTNAME</em>=<em>USERNAME-2</em> ./user-key.pub
```

É possível restringir os endereços IP dos quais um integrante da organização pode acessar os recursos da sua organização usando uma extensão `source-address`. A extensão aceita um endereço IP específico ou um intervalo de endereços IP usando a notação CIDR. É possível especificar vários endereços ou intervalos separando os valores com vírgulas. Para obter mais informações, consulte "[Roteamento interdomínio sem classes](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)" na Wikipedia.

```shell
$ ssh-keygen -s ./ca-key -V '+1d' -I <em>KEY-IDENTITY</em> -O extension:login@{% data variables.product.product_url %}=<em>USERNAME</em> -O source-address=<em>COMMA-SEPARATED-LIST-OF-IP-ADDRESSES-OR-RANGES</em> ./user-key.pub
```
