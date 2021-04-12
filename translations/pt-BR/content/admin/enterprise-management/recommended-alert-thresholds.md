---
title: Limites de alerta recomendados
intro: 'É possível configurar um alerta para receber notificações sobre os problemas de recursos do sistema antes que eles afetem o desempenho do appliance do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds/
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Monitorar o armazenamento

É recomendável monitorar seus dispositivos de armazenamento raiz e de usuário, bem como configurar um alerta com valores que definam um tempo de resposta longo quando o espaço em disco disponível estiver baixo.

| gravidade   | Limite                                       |
| ----------- | -------------------------------------------- |
| **Aviso**   | Uso do disco excede 70% do total disponível. |
| **Crítico** | Uso do disco excede 85% do total disponível. |

Você pode ajustar esses valores com base na quantidade de armazenamento total alocada, nos padrões históricos de crescimento e no tempo esperado de resposta. Recomendamos a superalocação dos recursos de armazenamento para permitir o crescimento e evitar o tempo de inatividade necessário para alocar armazenamento adicional.

### Monitoramento de CPU e uso médio de carga

Embora seja normal haver oscilação no uso de CPU conforme as operações do Git, é recomendável configurar um alerta para identificar usos de CPU altos demais, já que os picos prolongados podem indicar provisionamento insuficiente da sua instância. Recomendamos monitorar a média de carga do sistema a cada quinze minutos para valores próximos ou superiores ao número de núcleos de CPU alocados à máquina virtual.

| gravidade   | Limite                                                     |
| ----------- | ---------------------------------------------------------- |
| **Aviso**   | Média de carga de quinze minutos excede 1x núcleos de CPU. |
| **Crítico** | Média de carga de quinze minutos excede 2x núcleos de CPU. |

Também é recomendável monitorar o tempo de "roubo" da virtualização para garantir que outras máquinas virtuais em execução no mesmo sistema host não usem todos os recursos da instância.

### Monitorar o uso de memória

A quantidade de memória física alocada para a {% data variables.product.product_location %} pode ter um grande impacto no desempenho geral e na capacidade de resposta do aplicativo. O sistema é projetado para fazer uso intenso do cache de disco do kernel a fim de acelerar as operações do Git. Recomendamos que o conjunto de trabalho RSS normal caiba em 50% do total de RAM disponível no uso máximo.

| gravidade   | Limite                                                           |
| ----------- | ---------------------------------------------------------------- |
| **Aviso**   | Uso de RSS sustentado excede 50% do total de memória disponível. |
| **Crítico** | Uso de RSS sustentado excede 70% do total de memória disponível. |

Se a memória estiver esgotada, o killer OOM do kernel tentará liberar recursos de memória eliminando à força os processos de aplicativos pesados da RAM, o que pode causar a interrupção do serviço. É recomendável alocar mais memória do que o necessário para a máquina virtual no curso normal das operações.
