Você pode monitorar a disponibilidade de {% data variables.product.prodname_ghe_server %} verificando o código de status que é retornado para a URL `https://HOSTNAME/status`. Um appliance que possa atender o tráfego do usuário retornará o código de status `200` (OK). Um appliance pode devolver `503` (Serviço Indisponível) por alguns motivos:
 - O appliance é uma réplica passiva, como a réplica em uma configuração de alta disponibilidade de dois nós.
 - O appliance está no modo de manutenção.
 - O appliance é parte de uma configuração de geo-replicação, mas é uma réplica inativa.

Você também pode usar o painel de visualização de réplica disponível em:

`https://HOSTNAME/setup/replication`
