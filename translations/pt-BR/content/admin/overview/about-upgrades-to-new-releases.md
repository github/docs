---
title: Sobre atualizações para novas versões
shortTitle: Sobre as atualizações
intro: '{% ifversion ghae %}A sua empresa em {% data variables.product.product_name %} é atualizada com as últimas funcionalidades e correções de erros regularmente por {% data variables.product.company_short %}.{% else %}Você pode beneficiar-se de novas funcionalidades e correções de erros para {% data variables.product.product_name %} atualizando a sua empresa para uma versão recém-lançada.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
---

{% ifversion ghes < 3.3 %}{% data reusables.enterprise.upgrade-ghes-for-features %}{% endif %}

{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} é um serviço totalmente gerenciado. Dessa forma, {% data variables.product.company_short %} conclui o processo de atualização para a sua empresa.{% endif %}

As versões do recurso incluem novas funcionalidades e atualizações de recursos e, normalmente, ocorrem a cada trimestre. {% ifversion ghae %}{% data variables.product.company_short %} irá atualizar sua empresa para a versão mais recente do recurso. Você será avisado antecipadamente de qualquer período de inatividade planejado para sua empresa.{% endif %}

{% ifversion ghes %}

Começando com {% data variables.product.prodname_ghe_server %} 3.0, todas as versões de recurso começam com pelo menos um candidato de versão. Os candidatos de verão são as versões de recurso, com um conjunto completo de recursos. Pode haver erros ou problemas em um candidato de versão que só podem ser encontrados por meio do feedback de clientes que usam {% data variables.product.product_name %}.

Você pode ter acesso rápido às últimas funcionalidades testando um candidato de versão assim que este estiver disponível. Você pode atualizar para um candidato de versão a partir de uma versão compatível e pode atualizar do candidato de versão para versões posteriores quando lançado. Você deve atualizar qualquer ambiente executando um candidato de versão assim que a versão estiver geralmente disponível. Para obter mais informações, consulte "[Requisitos de atualização](/admin/enterprise-management/upgrade-requirements)".

Os candidatos de versão devem ser implantados em ambientes de teste ou de preparação. Ao testar um candidato de versão, entre em contato com o suporte. Para obter mais informações, consulte "[Trabalhando com {% data variables.contact.github_support %}](/admin/enterprise-support)".

Usaremos seus comentários para aplicar correções de erros e quaisquer outras alterações necessárias para criar uma versão de produção estável. Cada novo candidato de versão adiciona correções de erros para problemas encontrados em versões anteriores. Quando a versão estiver pronta para ser utilizada amplamente, {% data variables.product.company_short %} irá publicar uma versão de produção estável.

{% endif %}

{% warning %}

**Aviso**: A atualização para uma nova versão de recurso implicará algumas horas de inatividade, durante o qual nenhum dos seus usuários poderá usar a empresa. Você pode informar aos seus usuários sobre tempo de inatividade, publicando um banner de anúncio global, usando as configurações da sua empresa ou a API REST. Para obter mais informações, consulte "[Personalizar mensagens de usuário na sua instância](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)" e "[ administração de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".

{% endwarning %}

{% ifversion ghes %}

Versões de Patch, que consistem apenas de patches e correções de erros acontecem com mais frequência. De modo geral, as versões de patch ficam disponíveis quando são lançadas pela primeira vez, sem candidatos de versões. Atualizar para uma versão de patch normalmente requer menos de cinco minutos de tempo de inatividade.

Para atualizar a sua empresa para uma nova versão, consulte "[Liberar notas](/enterprise-server/admin/release-notes)" e "[Atualizar {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server). Porque você só pode atualizar a partir de uma versão do recurso no máximo 2 versões antes ou usar [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar o caminho de atualização da sua versão atual.

{% endif %}

## Leia mais

- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) no repositório `github/roadmap` {% ifversion ghae %}
- [ Observações da versão de {% data variables.product.prodname_ghe_managed %}](/admin/release-notes)
{% endif %}
