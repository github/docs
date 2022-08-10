---
title: Configurando chaves de host para sua instância
shortTitle: Configurar chaves do host
intro: 'Você pode aumentar a segurança de {% data variables.product.product_location %} configurando os algoritmos que sua instância usa para gerar e anunciar chaves de host para entrar em conexões SSH.'
permissions: 'Site administrators can configure the host keys for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '>= 3.6'
type: how_to
topics:
  - Authentication
  - Enterprise
  - Infrastructure
  - Networking
  - Security
  - SSH
---

## Sobre as chaves de host para sua instância

Os servidores que aceitam conexões SSH anunciam uma ou mais chaves criptográficas para identificar de forma segura o servidor com clientes SSH. Para confirmar a identidade do servidor durante a inicialização de uma conexão, os clientes armazenam e verificam a chave do host. Para obter mais informações, consulte [chave do host SSH - o quê, por quê e como](https://ssh.com/academy/ssh/host-key) no site da Academia de SSH.

{% data reusables.enterprise.about-ssh-ports %}

Por padrão, {% data variables.product.product_location %} gera e anuncia as chaves do host com rotação de chave do estilo OpenSSH. Para aumentar a segurança de SSH no seu ambiente, você pode habilitar algoritmos adicionais para a geração de chaves de host.

{% note %}

**Observação**: Se você habilitar mais algoritmos de chave de host, os clientes que não usam OpenSSH para conexões SSH pododerão ver avisos durante a conexão ou nem sequer chegar a conctar-se completamente. Algumas implementações de SSH podem ignorar algoritmos não comapatíveis e voltar para um algoritmo diferente. Se o cliente não for compatível com o fallback, a conexão falhará. Por exemplo, a biblioteca SSH para o Go não é compatível com o fallback para um algoritmo diferente.

{% endnote %}

## Gerenciando uma chave de host Ed25519

Para melhorar a segurança dos clientes que se conectam a {% data variables.product.product_location %}, você pode habilitar a geração e o anúncio de uma chave do host Ed25519. Ed25519 está imune a alguns ataques que visam algoritmos de assinatura mais antigos, sem sacrificar a velocidade. Os clientes SSH mais antigos não são compatíveis com Ed25519. Por padrão, as instâncias {% data variables.product.product_name %} não geram ou anunciam uma chave de host Ed25519. Para obter mais informações, consulte [o site Ed25519](https://ed25519.cr.yp.to).

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar a geração e publicidade da chave de host Ed25519, digite o seguinte comando.

   ```shell
   ghe-config app.babeld.host-key-ed25519 true
   ```
1. Opcionalmente, digite o seguinte comando para desabilitar a geração e publicidade da chave do host Ed25519.

   ```shell
   ghe-config app.babeld.host-key-ed25519 false
   ```
{% data reusables.enterprise.apply-configuration %}
