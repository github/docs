A execução de um fluxo de trabalho é composta por uma ou mais `jobs`, que são executados em paralelo por padrão. Para executar trabalhos sequencialmente, você pode definir dependências em outros trabalhos usando a palavra-chave `jobs.<job_id>.needs`.

Cada trabalho é executado em um ambiente de executor especificado por `runs-on`.

Você pode executar quantos trabalhos desejar, desde que esteja dentro dos limites de uso do fluxo de trabalho. Para obter mais informações, consulte {% ifversion fpt or ghec or ghes %}"[Limites de uso e cobrança](/actions/reference/usage-limits-billing-and-administration)" para executores hospedados em {% data variables.product.prodname_dotcom %} e {% endif %}"[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %}" para limites de uso de executor auto-hospedado.{% elsif ghae %}."{% endif %}

Se precisar encontrar o identificador exclusivo de uma tarefa em execução em um fluxo de trabalho, você poderá usar a API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. Para obter mais informações, consulte "[Trabalhos do fluxo de trabalho](/rest/reference/actions#workflow-jobs)".
