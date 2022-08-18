---
title: 'Fase 6: Implementação e digitalização de segredo em escala'
intro: 'Para a fase final, você vai devverá concentrar-se na implementação de {% data variables.product.prodname_secret_scanning %}. {% data variables.product.prodname_secret_scanning_caps %} é uma ferramenta mais simples de implementar do que {% data variables.product.prodname_code_scanning %}, já que isso envolve menos configuração, mas é fundamental ter uma estratégia para lidar com os resultados novos e antigos novos e antigos.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Implementação da digitalização de segredo
miniTocMaxHeadingLevel: 3
---

{% note %}

Este artigo faz parte de uma série sobre adoção de {% data variables.product.prodname_GH_advanced_security %} em escala. Para o artigo anterior dessa série, consulte "[Fase 5: Implementação e escala do código digitalizado](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)".

{% endnote %}

É possível habilitar a digitalização de segredo para repositórios individuais ou para todos os repositórios em uma organização. Para obter mais informações, consulte "[Gerenciando as configurações de segurança e análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" ou "[Gerenciando as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Este artigo explica um processo de alto nível focado em habilitar {% data variables.product.prodname_secret_scanning %} para todos os repositórios de uma organização. Os princípios descritos neste artigo ainda podem ser aplicados mesmo se você adotar uma abordagem mais escalonada de habilitar {% data variables.product.prodname_secret_scanning %} para repositórios individuais.

### 1. Focus on newly committed secrets

When you enable {% data variables.product.prodname_secret_scanning %}, you should focus on remediating any newly committed credentials detected by secret scanning. If you focus on cleaning up committed credentials, developers could continue to accidentally push new credentials, which means your total secret count will stay around the same level, not decrease as intended. É por isso que é fundamental impedir que novas credenciais vazem antes de se focar em revogar quaisquer segredos atuais.

Existem algumas abordagens para lidar com as credenciais recentemente comprometidas, mas um exemplo seria o seguinte:

1. **Notificar**: Use webhooks para garantir que todos os novos alertas de segredos sejam vistos pelas equipes certas o mais rápido possível. Um webhook dispara quando um alerta de segredo é criado, resolvido ou reaberto. Em seguida, você pode analisar a carga do webhook e integrá-la a qualquer ferramenta que você e sua equipe usam como, por exemplo, Slack, Teams, Splunk ou e-mail. Para obter mais informações, consulte "[Sobre webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)" e "[Eventos de Webhook e cargas](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)".
2. **Acompanhamento**: Crie um processo de correção de alto nível que funcione para todos os tipos secredos. For example, you could contact the developer who committed the secret and their technical lead on that project, highlighting the dangers of committing secrets to GitHub, and asking the them to revoke, and update the detected secret.

  {% note %}

  **Note:** You can automate this step. Para grandes empresas e organizações com centenas de repositórios, o acompanhamento manual é insustentável. Você pode incorporar automação ao processo de webhook definido na primeira etapa. A carga do webhook contém informações do repositório e da organização sobre o segredo vazado. Ao usar estas informações, você pode entrar em contato com os mantenedores atuais do repositório e criar um e-mail/mensagem para as pessoas responsáveis ou abrir um problema.

  {% endnote %}
3. **Treine**: Criar um documento de treinamento interno atribuído ao desenvolvedor que fez o commit do segredo. Dentro desse documento de treinamento, você pode explicar os riscos criados por meio da inserção de segredos e direcioná-los para suas informações de melhor prática sobre o uso de segredos no desenvolvimento de forma segura. Se um desenvolvedor não aprender com a experiência e continuar a fazer commit de segredos, você poderia criar um processo de escalada, mas o treinamento geralmente funciona bem.

Repita os dois últimos passos para todos os novos segredos vazados. Este processo incentiva os desenvolvedores a assumirem a responsabilidade de gerenciar os segredos usados em seu código com segurança, e permite-lhe medir a redução de segredos recém-autorizados.

{% note %}

**Observação:** As organizações mais avançadas devem executar a correção automática de certos tipos de segredos. Existe uma iniciativa de código aberto denominada [GitHub Secret Scanner Auto Remediator](https://github.com/NickLiffen/GSSAR) que você pode implantar no seu AWS, Azure, ou ambiente GCP e personalizar para revogar automaticamente certos tipos de segredos com base no que você definir como o mais crítico. This is also an excellent way to react to new secrets being committed with a more automated approach.

{% endnote %}

### 2. Remediate previously committed secrets, starting with the most critical

After you have established a process to monitor, notify and remediate newly published secrets, you can start work on secrets committed before {% data variables.product.prodname_GH_advanced_security %} was introduced.

A forma como você definir seus segredos mais críticos dependerá dos processos e integrações da sua organização. Por exemplo, uma empresa provavelmente não está preocupada com um segredo de Webhook do Slack se ela não usar o Slack. Você pode achar útil começar focando nos cinco principais tipos de credenciais mais críticos para sua organização.

Depois de decidir sobre os tipos de segredos, você pode fazer o seguinte:

1. Definir um processo para corrigir cada tipo de segredo. O procedimento real para cada tipo de segredo é muitas vezes drasticamente diferente. Anote o processo para cada tipo de segredo em um documento ou base de conhecimento interno.

  {% note %}

  **Observação:** Ao criar o processo para revogar segredos, tente e dê a responsabilidade de revogar segredos para a equipe mantendo o repositório em vez de uma equipe central. Um dos princípios do GHAS é o fato de os desenvolvedores assumirem a responsabilidade pela segurança e terem a responsabilidade de resolver problemas de segurança, especialmente se os tiverem criado.

  {% endnote %}

2. Quando você criar o processo que as equipes seguirão para revogar as credenciais, você pode agrupar as informações sobre os tipos de segredos e outros metadados associados aos segredos vazados para poder discernir a quem comunicar o novo processo.

  {% ifversion not ghae %}

  Você pode usar a visão geral de segurança para coletar essas informações. Para obter mais informações sobre como usar a visão geral de segurança, consulte "[Filtrando alertas na visão geral de segurança](/code-security/security-overview/filtering-alerts-in-the-security-overview)."

  {% endif %}

  Algumas informações que você deverá coletar incluem:

    - organização
    - Repositório
    - Secret type
    - Valor do segredo
    - Mantenedores no repositório para contato

  {% note %}

  **Observação:** Use a interface do usuário se tiver poucos segredos vazados desse tipo. If you have hundreds of leaked secrets, use the API to collect information. For more information, see "[Secret scanning REST API](/rest/reference/secret-scanning)."

  {% endnote %}

3. After you collect information about leaked secrets, create a targeted communication plan for the users who maintain the repositories affected by each secret type. You could use email, messaging, or even create GitHub issues in the affected repositories. If you can use APIs provided by these tools to send out the communications in an automated manner, this will make it easier for you to scale across multiple secret types.

### 3. Expand the program to include more secret types and custom patterns

You can now expand beyond the five most critical secret types into a more comprehensive list, with an additional focus on education. You can repeat the previous step, remediating previously committed secrets, for the different secret types you have targeted.

You can also include more of the custom patterns collated in the earlier phases and invite security teams and developer teams to submit more patterns, establishing a process for submitting new patterns as new secret types are created. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). "

{% ifversion secret-scanning-push-protection %}

You can also enable push protection with secret scanning. Once enabled, secret scanning checks pushes for high-confidence secrets and blocks the push. Para obter mais informações, consulte "[Protegendo pushes com digitalização de segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line)".

{% endif %}

As you continue to build your remediation processes for other secret types, start to create proactive training material that can be shared with all developers of GitHub in your organization. Until this point, a lot of the focus has been reactive. It is an excellent idea to shift focus to being proactive and encourage developers not to push credentials to GitHub in the first place. This can be achieved in multiple ways but creating a short document explaining the risks and reasons would be a great place to start.

{% note %}

This is the final article of a series on adopting {% data variables.product.prodname_GH_advanced_security %} at scale. If you have questions or need support, see the section on {% data variables.contact.github_support %} and {% data variables.product.prodname_professional_services_team %} in "[Introduction to adopting {% data variables.product.prodname_GH_advanced_security %} at scale](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services)."

{% endnote %}
