---
title: Sobre o SSH
intro: 'Usando o protocolo SSH, você pode se conectar a servidores e serviços remotos e se autenticar neles. Com chaves SSH, você pode se conectar a {% data variables.product.product_name %} sem fornecer seu nome de usuário e {% data variables.product.pat_generic %} em cada visita. {% ifversion ssh-commit-verification %} Você também pode usar uma chave SSH para assinar confirmações. {% endif %}'
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
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118969'
---
{% data reusables.ssh.about-ssh %} Para obter mais informações sobre o SSH, confira [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) na Wikipedia.

Ao configurar o SSH, você precisará gerar uma nova chave SSH privada e adicioná-la ao agente SSH. Você também precisa adicionar a chave SSH pública à sua conta {% data variables.product.product_name %} antes de usar a chave para se autenticar{% ifversion ssh-commit-verification %} ou assinar confirmações{% endif %}. Para obter mais informações, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"{% ifversion ssh-commit-verification %}, {% else %} e{% endif %} "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) {% ifversion ssh-commit-verification %}" e "[Sobre a verificação de assinatura de confirmação](/articles/about-commit-signature-verification){% endif %}".

Você pode proteger ainda mais sua chave SSH usando uma chave de segurança de hardware, o que exige que a chave de segurança física do hardware seja conectada ao seu computador quando o par de chaves é usado para efetuar a autenticação com SSH. Você também pode proteger sua chave SSH, adicionando sua chave ao agente do ssh-agent e usando uma frase secreta. Para obter mais informações, confira "[Como trabalhar com frases secretas de chave SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)".

{% ifversion fpt or ghec %}Para usar a chave SSH com um repositório pertencente a uma organização que usa o logon único do SAML, você precisará autorizar a chave. Para obter mais informações, confira "[Como autorizar uma chave SSH para uso com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

Para manter a segurança da conta, você pode revisar regularmente sua lista de chaves SSH e revogar quaisquer chaves que sejam inválidas ou que tenham sido comprometidas. Para obter mais informações, confira "[Como revisar suas chaves SSH](/github/authenticating-to-github/reviewing-your-ssh-keys)".

{% ifversion fpt or ghec %} Se você não tiver usado sua chave SSH por um ano, o {% data variables.product.prodname_dotcom %} excluirá automaticamente essa chave SSH inativa como uma medida de segurança. Para obter mais informações, confira "[Chaves SSH excluídas ou ausentes](/articles/deleted-or-missing-ssh-keys)".
{% endif %}

{% ifversion fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem fornecer certificados SSH, que os membros poderão usar para acessar os repositórios dessa organização sem adicionar o certificado à conta no {% data variables.product.product_name %}. Se estiver usando um certificado SSH, você não poderá usar o certificado para acessar bifurcações dos repositórios da organização, se a bifurcação pertencer à sua conta pessoal. Para obter mais informações, consulte "[Sobre as autoridades de certificado SSH](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)" na documentação do {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %} Se você for membro de uma organização que forneça certificados SSH, use seu certificado para acessar os repositórios da organização sem adicionar o certificado à sua conta do {% data variables.product.product_name %}. Você não pode usar seu certificado para acessar bifurcações dos repositórios da organização pertencentes à sua conta pessoal. Para obter mais informações, confira "[Sobre as autoridades de certificado SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".
{% endif %}
## Leitura adicional

- "[Solução de problemas do SSH](/articles/troubleshooting-ssh)"
