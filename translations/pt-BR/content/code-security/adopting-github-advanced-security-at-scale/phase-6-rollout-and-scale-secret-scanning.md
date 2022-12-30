---
title: 'Fase 6: Distribuição e exame de segredos em escala'
intro: 'Na fase final, você se concentrará na distribuição do {% data variables.product.prodname_secret_scanning %}. O {% data variables.product.prodname_secret_scanning_caps %} é uma ferramenta de distribuição mais simples do que o {% data variables.product.prodname_code_scanning %}, pois envolve menos configuração, mas é fundamental ter uma estratégia para lidar com resultados novos e antigos.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158754'
---
{% note %}

Este artigo faz parte de uma série sobre a adoção do {% data variables.product.prodname_GH_advanced_security %} em escala. Para ver o artigo anterior desta série, confira "[Fase 5: Distribuição e exame de códigos em escala](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)".

{% endnote %}

É possível habilitar o exame de segredos para repositórios individuais ou para todos os repositórios em uma organização. Para saber mais, confira "[Como gerenciar as configurações de segurança e de análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Como gerenciar as configurações de segurança e de análise da organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Este artigo oferece um processo resumido com foco na habilitação do {% data variables.product.prodname_secret_scanning %} para todos os repositórios em uma organização. Os princípios descritos neste artigo ainda poderão ser aplicados mesmo se você adotar uma abordagem mais escalonada para a habilitação do {% data variables.product.prodname_secret_scanning %} em repositórios individuais. 

### 1. Concentrar-se em segredos recém-confirmados

Ao habilitar o {% data variables.product.prodname_secret_scanning %}, concentre-se na correção de quaisquer credenciais recém-confirmadas que tenham sido detectadas pelo exame de segredos. Se você se concentrar na limpeza de credenciais confirmadas, os desenvolvedores poderão continuar a enviar acidentalmente novas credenciais, o que significa que sua contagem total de segredos permanecerá no mesmo nível, e não diminuirá conforme o esperado. Por isso, é essencial impedir o vazamento de novas credenciais antes de se concentrar em revogar quaisquer segredos atuais.

Há algumas abordagens para lidar com credenciais recém-comprometidas, mas um exemplo seria o seguinte:

1. **Notificação**: use webhooks para garantir que quaisquer novos alertas de segredos sejam vistos pelas equipes certas o mais rápido possível. Um webhook é disparado quando um alerta de segredo é criado, resolvido ou reaberto. É possível analisar a carga útil do webhook e integrá-la a qualquer ferramenta usada por você e sua equipe, como o Slack, o Teams, o Splunk ou o e-mail. Para saber mais, confira "[Sobre webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)" e "[Conteúdo e eventos do webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)".
2. **Acompanhamento**: crie um processo de correção resumido que funcione para todos os tipos de segredo. Por exemplo, entre em contato com o desenvolvedor que confirmou o segredo e com o respectivo líder técnico no projeto e realce os perigos de confirmar segredos no GitHub, pedindo que eles revoguem e atualizem o segredo detectado.

  {% note %}
  
  **Nota:** é possível automatizar esta etapa. Para grandes empresas e organizações com centenas de repositórios, o acompanhamento manual é insustentável. Uma alternativa seria incorporar a automação no processo de webhook definido na primeira etapa. O conteúdo do webhook contém informações de repositório e organização sobre o segredo vazado. Com elas, é possível entrar em contato com os atuais encarregados pela manutenção do repositório e criar um email/mensagem para as pessoas responsáveis ou abrir um problema.
  
  {% endnote %} 
3. **Educação**: crie um documento de treinamento interno para o desenvolvedor que confirmou o segredo. Nesse documento, explique os riscos provenientes da confirmação de segredos e ofereça informações de práticas recomendadas para o uso seguro de segredos no desenvolvimento. Se o desenvolvedor não aprender com a experiência e continuar a confirmar segredos, crie um processo de escalonamento. No entanto, a educação geralmente funciona bem.

Repita as duas últimas etapas para quaisquer novos segredos vazados. Esse processo incentiva os desenvolvedores a assumir a responsabilidade pelo gerenciamento seguro dos segredos usados em seus códigos e permite medir a redução de segredos recém-confirmados.

{% note %}

**Nota:** organizações mais avançadas podem querer realizar a correção automática de certos tipos de segredos. Há uma iniciativa de software livre chamada [GitHub Secret Scanner Auto Remediator](https://github.com/NickLiffen/GSSAR) que pode ser implantada em seu ambiente do AWS, do Azure ou do GCP e adaptada para revogar automaticamente determinados tipos de segredos com base no que foi definido como o mais crítico. Essa também é uma excelente maneira de reagir a novas confirmações de segredos com uma abordagem mais automatizada.

{% endnote %}

### 2. Corrija os segredos confirmados, começando pelos mais críticos

Depois de estabelecer um processo para monitorar, notificar e corrigir os segredos recém-publicados, comece a trabalhar nos segredos confirmados antes da introdução do {% data variables.product.prodname_GH_advanced_security %}.

A definição dos segredos mais críticos dependerá dos processos e das integrações de sua organização. Por exemplo, uma empresa provavelmente não se preocupará com a chegada de um segredo de webhook do Slack se não usar o Slack. Pode ser útil começar com os cinco principais tipos de credenciais mais importantes para sua organização.

Depois de decidir os tipos secretos, faça o seguinte:

1. Defina um processo para corrigir cada tipo de segredo. Geralmente, o procedimento real de cada tipo de segredo será drasticamente diferente. Anote o processo de cada tipo de segredo em um documento ou base de conhecimento interna.
  
  {% note %}
  
  **Nota:** ao criar o processo de revogação de segredos, tente atribuir a responsabilidade de revogar segredos à equipe que mantém o repositório em vez de a uma equipe central. Um dos princípios do GHAS é que os desenvolvedores se apropriem da segurança e tenham a responsabilidade de corrigir problemas de segurança, especialmente se eles os criaram.

  {% endnote %}

2. Depois de criar o processo que as equipes seguirão para revogar credenciais, reúna informações sobre os tipos de segredos e outros metadados associados aos segredos vazados para compreender a quem comunicar o novo processo.
  
  {% ifversion not ghae %}
  
  É possível usar a visão geral de segurança para coletar essas informações. Para obter mais informações sobre como usar a visão geral de segurança, confira "[Filtrando alertas nas visões gerais de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)".
  
  {% endif %}
  
  Algumas informações úteis para coletar incluem:
  
    - Organização
    - Repositório
    - Tipo de segredo
    - Valor do segredo
    - Responsáveis pela manutenção do repositório com os quais entrar em contato
  
  {% note %}
  
  **Nota:** use a IU se você tiver poucos segredos desse tipo vazados. Se você tiver centenas de segredos vazados, use a API para coletar informações. Para saber mais, confira "[API REST de exame de segredos](/rest/reference/secret-scanning)".
    
  {% endnote %}

3. Depois de coletar informações sobre segredos vazados, crie um plano de comunicação direcionado para os usuários que mantêm os repositórios afetados por cada tipo de segredo. É possível usar email, mensagens ou até mesmo criar problemas do GitHub nos repositórios afetados. Se for possível usar as APIs fornecidas por essas ferramentas para enviar as comunicações de maneira automatizada, isso facilitará o escalonamento em vários tipos de segredo.

### 3. Expanda o programa para incluir mais tipos de segredos e padrões personalizados

Agora é possível expandir os cinco tipos de segredos mais críticos para uma lista mais abrangente, com foco adicional na educação. É possível repetir a etapa anterior, corrigindo os segredos anteriormente confirmados, para os diferentes tipos de segredo visados.

Também é possível incluir mais padrões personalizados coletados nas fases anteriores e convidar as equipes de segurança e desenvolvimento a enviar mais padrões, estabelecendo um processo para enviar novos padrões à medida que novos tipos de segredo são criados. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".

{% ifversion secret-scanning-push-protection %}

Também é possível habilitar a proteção de push com o exame de segredos. Depois de habilitado, o exame de segredos verifica os envios por push de segredos de alta confiança e bloqueia esses envios. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line)".

{% endif %}

À medida que você continua a criar seus processos de correção para outros tipos de segredo, comece a criar um material de treinamento proativo que possa ser compartilhado com todos os desenvolvedores do GitHub em sua organização. Até aqui, muito do foco tem sido reativo. É uma excelente ideia mudar o foco para ser proativo e incentivar os desenvolvedores a não enviar credenciais por push para o GitHub. Isso pode ser feito de várias maneiras, mas criar um pequeno documento explicando os riscos e os motivos seria um ótimo ponto de partida.

{% note %}

Este é o artigo final de uma série sobre a adoção do {% data variables.product.prodname_GH_advanced_security %} em escala. Se você tiver dúvidas ou precisar de suporte, veja a seção sobre o {% data variables.contact.github_support %} e o {% data variables.product.prodname_professional_services_team %} em "[Introdução à adoção do {% data variables.product.prodname_GH_advanced_security %} em escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services)".

{% endnote %}
