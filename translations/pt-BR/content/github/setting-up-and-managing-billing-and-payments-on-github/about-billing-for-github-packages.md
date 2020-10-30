---
title: Sobre a cobrança de pacotes do GitHub
intro: 'Se você quiser usar {% data variables.product.prodname_registry %} além do armazenamento ou transferência de dados incluídos em sua conta, você será cobrado pelo uso adicional.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.container-registry-beta-billing-note %}

A transferência de dados é reiniciada todos os meses, mas o uso do armazenamento não.

| Produto                                                                  | Armazenamento | Transferência de dados (por mês) |
| ------------------------------------------------------------------------ | ------------- | -------------------------------- |
| {% data variables.product.prodname_free_user %}                   | 500MB         | 1GB                              |
| {% data variables.product.prodname_pro %}                           | 2GB           | 10GB                             |
| {% data variables.product.prodname_free_team %} para organizações | 500MB         | 1GB                              |
| {% data variables.product.prodname_team %}                          | 2GB           | 10GB                             |
| {% data variables.product.prodname_ghe_cloud %}                   | 50GB          | 100GB                            |

Todos os dados transferidos, quando acionados por {% data variables.product.prodname_actions %}, e os dados transferidos de qualquer fonte são gratuitos. Verificamos que você está baixando pacotes usando {% data variables.product.prodname_actions %} quando você faz login em {% data variables.product.prodname_registry %} usando um `GITHUB_TOKEN`.

|                                          | Hospedado | Auto-hospedado |
| ---------------------------------------- | --------- | -------------- |
| Acesso usando um `GITHUB_TOKEN`          | Grátis    | Grátis         |
| Acesso usando um token de acesso pessoal | Grátis    | $              |

O uso do armazenamento é compartilhado com artefatos de construção produzidos por {% data variables.product.prodname_actions %} para repositórios de sua conta. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".

O {% data variables.product.prodname_dotcom %} cobra o uso da conta que possui o repositório onde o pacote é publicado. Se o uso da sua conta ultrapassar esses limites e você definir um limite de gastos acima de $0, você pagará US$ 0,25 por GB de armazenamento e US$ 0,50 por GB de transferência de dados.

Por exemplo, se sua organização usa {% data variables.product.prodname_team %}, permite gastos ilimitados, usa 150GB de armazenamento, e possui 50GB de transferência de dados durante um mês, a organização teria excessos de 148GB para armazenamento e 40GB para transferência de dados para esse mês. O excesso de armazenamento custaria $0,25 por GB ou $37. O excesso de transferência de dados custaria $0,50 por GB ou $20.

No final do mês, {% data variables.product.prodname_dotcom %} arredonda sua transferência de dados para o GB mais próximo.

O {% data variables.product.prodname_dotcom %} calcula seu uso do armazenamento para cada mês com base no uso por hora durante aquele mês. Por exemplo, se você usar 3 GB de armazenamento por 10 dias de março e 12 GB durante 21 dias de março, seu uso de armazenamento seria:

- 3 GB x 10 dias x (24 horas por dia) = 720 GB-Horas
- 12 GB x 21 dias x (24 horas por dia) = 6,048 GB-Horas
- 720 GB-Horas + 6.048 GB-Horas = 6.768 GB-Horas
- 6.768 GB-Horas / (744 horas por mês) = 9,0967 GB-Meses

No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Portanto, seu uso de armazenamento para março seria de 9.097 GB.

Se uso de {% data variables.product.prodname_registry %} compartilha a data de cobrança, o método de pagamento e o recibo que já existem para sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

### Sobre limites de gastos

Por padrão, sua conta terá um limite de gastos de $0 para o uso de {% data variables.product.prodname_registry %}. Para habilitar a transferência de armazenamento e dados para pacotes privados além dos valores incluídos em sua conta, você pode aumentar o limite de gastos ou permitir gastos ilimitados. Para obter mais informações, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)".

{% data reusables.package_registry.spending-limit-enterprise-account %}

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
