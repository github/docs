---
title: Contrato de Nível de Serviço do GitHub Enterprise
hidden: true
redirect_from:
  - /github-enterprise-cloud-addendum
  - /github-business-cloud-addendum
  - /articles/github-enterprise-cloud-addendum
  - /github/site-policy/github-enterprise-service-level-agreement
  - /github/site-policy-deprecated/github-enterprise-cloud-addendum
versions:
  fpt: '*'
ms.openlocfilehash: e21816ada1c6b6d3062cecb5d4f0144702ea0f8e
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099244'
---
_Estes termos se aplicam aos Clientes que licenciaram os Produtos antes de 4 de janeiro de 2021. Clientes que comprarem produtos GitHub após essa data serão direcionados para https://www.github.com/enterprise-legal para consultarem os termos atuais._

**Versão resumida:** o GitHub garante um compromisso de tempo de atividade trimestral de 99,9% para o serviço do GitHub aplicável (o “**Nível de serviço**” ou “**SLA**”). Se o GitHub não atender ao SLA, o Cliente terá direito a um crédito de serviço para a conta do Cliente (“**Créditos de serviço**").

Para ver as definições de cada Recurso de serviço (“**Recurso de serviço**”) e para examinar dados históricos e atuais do Tempo de atividade, visite a [Página de status do GitHub](https://www.githubstatus.com/). Os termos em maiúsculas usados, mas não definidos neste SLA, têm o significado atribuído ao contrato aplicável do Cliente.

## Garantia de tempo de atividade

“**Tempo de atividade**” é o percentual do total de minutos possíveis de que o serviço do GitHub ficou disponível em um determinado trimestre. O GitHub compromete-se a manter pelo menos 99,9% de tempo de atividade para o serviço aplicável do GitHub. O cálculo do Tempo de atividade para cada Recurso de serviço que pode ser incluído com o serviço aplicável no GitHub está descrito abaixo (“**Cálculo do tempo de atividade**"). Se o GitHub não atender ao SLA, o Cliente terá direito a Créditos de serviço com base no cálculo abaixo (“**Cálculo de créditos de serviço**"). Observe que o Tempo de inatividade não afeta todos os clientes ao mesmo tempo ou da mesma forma.

| **Recurso de serviço** | **Cálculo do tempo de atividade** | **Definições** | **Cálculo de créditos de serviço** |
|---|---|---|---|
| **Problemas**,<br>**Solicitações de&nbsp;pull**,<br>**Operações&nbsp;Git**,<br>**Solicitações à&nbsp;API (somente para Recursos de serviço)** ,<br>**Webhooks**,<br>**Páginas** | (total de minutos em um trimestre do calendário – tempo de inatividade) / total de minutos em um trimestre do calendário | “**Tempo de inatividade**” é um período em que (a) a taxa de erro excede 5% (cinco por cento) em um dado minuto para qualquer Recurso de serviço ou (b) o Serviço ficou indisponível conforme determinado por uma combinação de sistemas de monitoramento interno e externo do GitHub. | Um requerimento de Créditos de serviço pode ser baseado em qualquer um (não em ambos) dos seguintes cálculos: <ul><li>10% do montante que o Cliente pagou por um Recurso de serviço em um trimestre de calendário, em que o tempo de atividade desse Recurso de serviço foi inferior ou igual a 99,9%, mas superior a 99,0%. <BR><BR>OU <BR><BR></li><li>25% do montante que o Cliente pagou por um Recurso de serviço em um trimestre do calendário, em que o Tempo de atividade foi inferior a 99,0%.</li></ul> | |
| **Ações** | (total de execuções acionadas – execuções indisponíveis) / (total de execuções acionadas) x 100 | “**Total de execuções acionadas**” é o número total das execuções de ações acionadas pelo Cliente em um trimestre do calendário. <br><br> “**Execuções indisponíveis**” é o número total de execuções dentro do Total de execuções acionadas que não puderam ser operadas em um trimestre do calendário.  Uma execução falhou quando o registro do histórico de Ações não capturou nenhuma saída 5 (cinco) minutos após o gatilho ter sido acionado com sucesso. | O mesmo que o descrito acima |
| **Pacotes** | Tempo de atividade de transferências = o mesmo que para Ações <br> <br> Tempo de atividade de armazenamento = 100% – Taxa média de erro* <br> <br> *O cálculo do tempo de atividade exclui o uso público e as transações de armazenamento que não contam nem para o Total de transações de armazenamento nem para as Transações de armazenamento com falha (incluindo falhas de pré-autenticação; falhas de autenticação; tentativas de transações para contas de armazenamento acima das cotas prescritas). | “**Taxa de erros**” é o número total de Transações de armazenamento com falha dividido pelo Total de transações de armazenamento durante um intervalo de tempo definido (atualmente definido como uma hora). Se o Total de transações de armazenamento em um determinado intervalo de uma hora for zero, a taxa de erros daquele intervalo será 0%. <br><br> “**Taxa média de erro**” é a soma das taxas de erro de cada hora em um trimestre do calendário dividido pelo número total de horas em um trimestre do calendário. | O mesmo que o descrito acima |

## Exclusões
São excluídos do Cálculo de tempo de atividade as falhas de Recursos de serviço resultantes de (i) atos, omissões ou abuso por parte do Cliente do serviço aplicável do GitHub, incluindo violações do Contrato; (ii) falha na conexão de Internet do Cliente; (iii) fatores fora do controle razoável do GitHub, incluindo eventos de força maior; ou (iv) equipamento, serviços ou outras tecnologias do Cliente.

## Resgate de créditos de serviço
Se o GitHub não atender a este SLA, o Cliente só poderá resgatar Créditos de serviço mediante solicitação por escrito ao GitHub no prazo de 30 (trinta) dias a partir do final do trimestre do calendário. Solicitações por escrito de resgate de Créditos de serviço e relatórios personalizados mensais ou trimestrais do GitHub Enterprise Cloud devem ser enviados para o [Suporte do GitHub](https://support.github.com/contact?tags=docs-policy).

Os Créditos de serviço podem assumir a forma de reembolso ou crédito para a conta do Cliente, não podem ser trocados por um valor em dinheiro, estão limitados a um máximo de 90 (noventa) dias de serviço pago por trimestre do calendário, exigem que o cliente tenha pago qualquer fatura pendente e expiram após a rescisão do contrato do Cliente com o GitHub. Os Créditos de serviço são o recurso exclusivo e único para qualquer falha do GitHub de cumprir quaisquer obrigações neste SLA.
