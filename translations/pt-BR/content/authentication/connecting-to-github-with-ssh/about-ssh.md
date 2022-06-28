---
title: Sobre o SSH
intro: 'Usando o protocolo SSH, você pode se conectar a servidores e serviços remotos e se autenticar neles. Com chaves SSH, você pode conectar-se a {% data variables.product.product_name %} sem inserir seu nome de usuário e token de acesso pessoal em cada visita.'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
---

Ao configurar o SSH, você precisará gerar uma nova chave SSH e adicioná-la ao agente ssh. Você deve adicionar a chave SSH à sua conta {% data variables.product.product_name %} antes de usar a chave para efetuar a autenticação. Para mais informações consulte "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)" e "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

Você pode proteger ainda mais sua chave SSH usando uma chave de segurança de hardware, o que exige que a chave de segurança física do hardware seja conectada ao seu computador quando o par de chaves é usado para efetuar a autenticação com SSH. Você também pode proteger sua chave SSH, adicionando sua chave ao agente do ssh-agent e usando uma frase secreta. Para obter mais informações, consulte "[Trabalhar com frases secretas da chave SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% ifversion fpt or ghec %}Para usar a chave SSH com um repositório pertencente a uma organização que usa o logon único SAML, você deverá autorizar a chave. Para mais informações consulte "[Autorizando uma chave SSH para usar com o o logon único SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação de {% data variables.product.prodname_ghe_cloud %} .{% else %}."{% endif %}{% endif %}

Para manter a segurança da conta, você pode revisar regularmente sua lista de chaves SSH e revogar quaisquer chaves que sejam inválidas ou que tenham sido comprometidas. Para obter mais informações, consulte "[Revisar as chaves SSH](/github/authenticating-to-github/reviewing-your-ssh-keys)".

{% ifversion fpt or ghec %}
Se você ficou sem usar a chave SSH por um ano, o {% data variables.product.prodname_dotcom %} excluirá automaticamente essa chave SSH inativa como uma medida de segurança. Para obter mais informações, consulte "[Chaves SSH excluídas ou ausentes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} podem fornecer certificados SSH, que os integrantes podem usar para acessar os repositórios da organização sem adicionar o certificado à sua conta em {% data variables.product.product_name %}. Se você estiver usando um certificado SSH, você não poderá usar o certificado para acessar as bifurcações dos repositórios da organização, se a bifurcação pertencer à sua conta pessoal. Para obter mais informações, consulte "[Sobre as autoridades de certificado SSH](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)" na documentação de {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %}
Se você for integrante de uma organização que fornece certificados SSH, você poderá usar seu certificado para acessar os repositórios da organização sem adicionar o certificado à sua conta em {% data variables.product.product_name %}. Você não pode usar seu certificado para acessar as bifurcações dos repositórios da organização, se as bifurcações pertencerem à sua conta pessoal. Para obter mais informações, consulte "[Sobre autoridades certificadas de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}

## Leia mais

- "[Solucionar problemas de SSH](/articles/troubleshooting-ssh)"
