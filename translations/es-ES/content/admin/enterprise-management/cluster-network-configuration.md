---
title: Configuración de la red de agrupaciones
intro: 'La agrupación de {% data variables.product.prodname_ghe_server %} se basa en la resolución de nombre de DNS pertinente, balanceo de carga y comunicación entre los nodos para operar de manera adecuada.'
redirect_from:
  - /enterprise/admin/clustering/cluster-network-configuration
  - /enterprise/admin/enterprise-management/cluster-network-configuration
versions:
  enterprise-server: '*'
type: reference
topics:
  - Clustering
  - Enterprise
  - Infrastructure
  - Networking
---

### Consideraciones de red

El diseño de red más simple para una agrupación es colocar los nodos en una LAN única. Si un clúster debe abarcar subredes, no te recomendamos configurar ninguna regla de firewall entre ellas. La latencia entre nodos debe ser de menos de 1 milisegundo.

{% if currentVersion ver_gt "enterprise-server@2.21" %}Para establecer la disponibilidad alta, la latencia entre la red con los nodos activos y aquella con los pasivos debe ser de menos de 70 milisegundos. No te recomendamos configurar una firewall entre las dos redes.{% endif %}

#### Puertos de la aplicación para usuarios finales

Los puertos de la aplicación permiten que los usuarios finales accedan a Git y a las aplicaciones web.

| Port (Puerto) | Descripción                                                               | Cifrado                                                                |
|:------------- |:------------------------------------------------------------------------- |:---------------------------------------------------------------------- |
| 22/TCP        | Git sobre SSH                                                             | Sí                                                                     |
| 25/TCP        | SMTP                                                                      | Requiere STARTTLS                                                      |
| 80/TCP        | HTTP                                                                      | No<br>(Cuando SSL está habilitado, este puerto redirige a HTTPS) |
| 443/TCP       | HTTPS                                                                     | Sí                                                                     |
| 9418/TCP      | Puerto de protocolo de Git simple<br>(Inhabilitado en modo privado) | No                                                                     |

#### Puertos administrativos

No se requieren puertos administrativos para el uso de la aplicación básica por parte de los usuarios finales.

| Port (Puerto) | Descripción                 | Cifrado                                                                |
|:------------- |:--------------------------- |:---------------------------------------------------------------------- |
| ICMP          | Ping de ICMP                | No                                                                     |
| 122/TCP       | SSH administrativo          | Sí                                                                     |
| 161/UDP       | SNMP                        | No                                                                     |
| 8080/TCP      | Consola de gestión HTTP     | No<br>(Cuando SSL está habilitado, este puerto redirige a HTTPS) |
| 8443/TCP      | Consola de gestión de HTTPS | Sí                                                                     |

#### Puertos de comunicación de agrupación

Si un cortafuego de nivel de red se coloca entre los nodos estos puertos deberán estar accesibles. La comunicación entre los nodos no está cifrada. Estos puertos no deberían estar accesibles externamente.

| Port (Puerto) | Descripción                              |
|:------------- |:---------------------------------------- |
| 1336/TCP      | API interna                              |
| 3033/TCP      | Acceso SVN interno                       |
| 3037/TCP      | Acceso SVN interno                       |
| 3306/TCP      | MySQL                                    |
| 4486/TCP      | Acceso del gobernador                    |
| 5115/TCP      | Respaldo de almacenamiento               |
| 5208/TCP      | Acceso SVN interno                       |
| 6379/TCP      | Redis                                    |
| 8001/TCP      | Grafana                                  |
| 8090/TCP      | Acceso a GPG interno                     |
| 8149/TCP      | Acceso al servidor de archivos de GitRPC |
| 8300/TCP      | Consul                                   |
| 8301/TCP      | Consul                                   |
| 8302/TCP      | Consul                                   |
| 9000/TCP      | Git Daemon                               |
| 9102/TCP      | Servidor de archivos de las páginas      |
| 9105/TCP      | Servidor LFS                             |
| 9200/TCP      | ElasticSearch                            |
| 9203/TCP      | Servicio de código semántico             |
| 9300/TCP      | ElasticSearch                            |
| 11211/TCP     | Memcache                                 |
| 161/UDP       | SNMP                                     |
| 8125/UDP      | Statsd                                   |
| 8301/UDP      | Consul                                   |
| 8302/UDP      | Consul                                   |
| 25827/UDP     | Collectd                                 |

### Configurar un balanceador de carga

 Recomendamos un balanceador de carga externo basado en TCP que respalde el protocolo PROXY para distribuir el tráfico a través de los nodos. Considera estas configuraciones del balanceador de carga:

 - Los puertos TCP (que se muestra a continuación) deberán ser reenviados a los nodos que ejecutan el servicio `web-server`. Estos son los únicos nodos que sirven a las solicitudes de clientes externos.
 - Las sesiones pegajosas no deberían habilitarse.

{% data reusables.enterprise_installation.terminating-tls %}

### Manejar información de conexión de clientes

Dado que las conexiones de clientes con el agrupamiento provienen del balanceador de carga, no se puede perder la dirección IP de cliente. Para capturar adecuadamente la información de la conexión de clientes, se requiere una consideración adicional.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

#### Habilitar el soporte PROXY en {% data variables.product.prodname_ghe_server %}

Recomendamos firmemente habilitar el soporte PROXY para tu instancia y el balanceador de carga.

 - Para tu instancia, usa este comando:
  ```shell
  $ ghe-config 'loadbalancer.proxy-protocol' 'true' && ghe-cluster-config-apply
  ```
  - Para el balanceador de carga, usa las instrucciones proporcionadas por tu proveedor.

  {% data reusables.enterprise_clustering.proxy_protocol_ports %}

#### Habilitar el soporte X-Forwarded-For en {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

Para habilitar el encabezado `X-Fowarded-For`, usa este comando:

```shell
$ ghe-config 'loadbalancer.http-forward' 'true' && ghe-cluster-config-apply
```

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

#### Configurar revisiones de estado
Las comprobaciones de estado permiten que un balanceador de carga deje de enviar tráfico a un nodo que no responde si una comprobación preconfigurada falla en ese nodo. Si un nodo de agrupación falla, las revisiones de estado emparejadas con nodos redundantes brindan alta disponibilidad.

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

### Requisitos de DNS

{% data reusables.enterprise_clustering.load_balancer_dns %}
