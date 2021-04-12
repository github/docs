---
title: Configurar a varredura de segredo para o seu dispositivo
shortTitle: Configurar a varredura de segredo
intro: 'Você pode habilitar, configurar e desabilitar {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} permite aos usuários fazer a varredura de códigos para os segredos que se confirmaram acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '>=3.0'
topics:
  - enterprise
---

{% data reusables.secret-scanning.beta %}

### Sobre o {% data variables.product.prodname_secret_scanning %}

{% data reusables.secret-scanning.about-secret-scanning %} Para obter mais informações, consulte "[Sobre a varredura de segredos](/github/administering-a-repository/about-secret-scanning)".

### Pré-requisitos

Para usar {% data variables.product.prodname_secret_scanning %} em {% data variables.product.product_location %} você precisa destes dois pré-requisitos.

- É necessário habilitar o sinalizador de CPU das [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Extensões SIMD de Streaming Suplementar 3) no VM/KVM que executa {% data variables.product.product_location %}.

- Você precisa de uma licença de {% data variables.product.prodname_advanced_security %}.

#### Verificar suporte para o sinalizador SSSE3 nos seus vCPUs

O conjunto de instruções das SSSE3 é necessário porque o {% data variables.product.prodname_secret_scanning %} alavanca o padrão acelerado de hardware que corresponde para encontrar possíveis credenciais confirmadas com os seus repositórios de {% data variables.product.prodname_dotcom %}. SSSE3 está habilitado para a maioria das CPUs modernas. Você pode verificar se o SSSE3 está habilitado para oa vCPUs disponíveis para sua instância de {% data variables.product.prodname_ghe_server %}.

1. Conecte ao shell administrativo para sua instância de {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
2. Insira o seguinte comando:

```shell
grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
```

Se ele retornar o valor `0`, significa que o sinalizador SSSE3 está disponível e habilitado. Agora você pode habilitar {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Habilitar a varredura de segredo](#enabling-secret-scanning)" abaixo.

Se isso não retornar `0`, SSSE3 não está habilitado no seu VM/KVM. Você precisa consultar a documentação do hardware/hipervisor sobre como habilitar o sinalizador ou disponibilizá-lo para VMs convidados.

#### Verificar se você tem uma licença de {% data variables.product.prodname_advanced_security %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Verificar se há uma **{% data variables.product.prodname_advanced_security %}** entrada na barra lateral esquerda. ![Barra lateral de segurança avançada](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}

### Habilitar {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "
{% data variables.product.prodname_advanced_security %}," clique em **{% data variables.product.prodname_secret_scanning_caps %}**.
![Caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Desabilitar {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "
{% data variables.product.prodname_advanced_security %}", desmarque **{% data variables.product.prodname_secret_scanning_caps %}**.
![Caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
