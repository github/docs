---
title: Сведения о GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} помогает писать код, предоставляя предложения в стиле автозавершения. Вы можете узнать, как работает {% data variables.product.prodname_copilot %} и что следует учитывать при использовании {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 4ff4c73e61c10c2c3f75d9581bf426266122550b
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192786'
---
## Сведения о {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} — помощник по написанию кода на базе ИИ, который предоставляет предложения в стиле автозавершения по мере написания кода. Вы можете получить предложения от {% data variables.product.prodname_copilot %} при написании кода для использования или при написании комментария на естественном языке для описания действия кода. {% data variables.product.prodname_copilot %} анализирует контекст в редактируемом файле, а также связанные файлы и предлагает подсказки из текстового редактора. {% data variables.product.prodname_copilot %} работает на базе OpenAI Codex, новой системы ИИ, созданной OpenAI.

{% data variables.product.prodname_copilot %} обучается на всех языках, которые отображаются в общедоступных репозиториях. Качество получаемых предложений для каждого языка может зависеть от объема и разнообразия обучающих данных для этого языка. Например, JavaScript хорошо представлен в общедоступных репозиториях и является одним из лучших поддерживаемых языков {% data variables.product.prodname_copilot %}. Языки с меньшим представлением в общедоступных репозиториях могут давать меньше или менее надежных предложений.

{% data variables.product.prodname_copilot %} предоставляется в виде расширения в Visual Studio Code, Visual Studio, Neovim и наборе интегрированных сред разработки JetBrains. Дополнительные сведения см. в статье [Начало работы с {% data variables.product.prodname_copilot %}](/copilot/getting-started-with-github-copilot).

## Использование {% data variables.product.prodname_copilot %}

Вы можете ознакомиться с реальными примерами работы {% data variables.product.prodname_copilot %}. Дополнительные сведения см. на веб-сайте [{% data variables.product.prodname_copilot %}](https://copilot.github.com/). 

{% data variables.product.prodname_copilot %} предлагает предложения из модели, созданной OpenAI на основе миллиардов строк открытый код кода. В результате набор обучения для {% data variables.product.prodname_copilot %} может содержать небезопасные шаблоны кода, ошибки или ссылки на устаревшие API или идиомы. Когда {% data variables.product.prodname_copilot %} создает предложения на основе этих обучающих данных, такие предложения также могут содержать нежелательные шаблоны. 

Вы обязаны обеспечить безопасность и качество своего кода. При использовании кода, созданного {% data variables.product.prodname_copilot %}, мы рекомендуем придерживаться тех же мер предосторожности, что и при использовании любого стороннего кода. Эти меры предосторожности включают тщательное тестирование, сканирование IP-адресов и отслеживание уязвимостей системы безопасности. {% data variables.product.company_short %} предоставляет ряд компонентов для мониторинга и улучшения качества кода, например {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %} и {% data variables.product.prodname_code_scanning %}. Все эти компоненты можно использовать в общедоступных репозиториях. Дополнительные сведения см. в статье [Общие сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions) и [Функции безопасности {% data variables.product.company_short %}](/code-security/getting-started/github-security-features).

{% data variables.product.prodname_copilot %} использует фильтры, чтобы блокировать оскорбительные слова в запросах и предотвращать создание подсказок в конфиденциальных контекстах. Мы постоянно улучшаем систему фильтров, чтобы обеспечить более интеллектуальное обнаружение и удаление оскорбительных подсказок, создаваемых {% data variables.product.prodname_copilot %}, включая предвзятые, дискриминационные или оскорбительные выходные данные. Если вы увидите оскорбительную подсказку, созданную {% data variables.product.prodname_copilot %}, сообщите о ней непосредственно по адресу copilot-safety@github.com, чтобы мы могли улучшить наши меры безопасности. 

## Сведения о выставлении счетов за {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} — это платная функция, требующая ежемесячной или ежегодной подписки. Подписки на {% data variables.product.prodname_copilot %} можно оплачивать и управлять ими через личную учетную запись в {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_copilot_for_individuals %}, а также оплачивать и централизованно управлять ими через корпоративную учетную запись в {% data variables.product.prodname_ghe_cloud %} с помощью {% data variables.product.prodname_copilot_for_business %}.

Проверенные учащиеся, преподаватели и поддержку популярных проектов открытый код в {% data variables.product.prodname_dotcom %} имеют право бесплатно использовать {% data variables.product.prodname_copilot_individuals_short %}. Если вы соответствуете критериям для бесплатной подписки на {% data variables.product.prodname_copilot_individuals_short %}, вы автоматически получите уведомление при посещении страницы подписки на {% data variables.product.prodname_copilot %}. Если вы не соответствуете критериям для бесплатной подписки на {% data variables.product.prodname_copilot_individuals_short %}, вам будет предложена 60-дневная бесплатная пробная версия, после которой для дальнейшего использования потребуется платная подписка. {% data variables.product.prodname_copilot_for_business %} не включает бесплатную пробную версию. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot).

## Сведения о лицензии для подключаемого модуля {% data variables.product.prodname_copilot %} в интегрированных средах разработки JetBrains

Лицензиаром подключаемого модуля JetBrains является {% data variables.product.prodname_dotcom %}, Inc. Лицензионное соглашение с пользователем для этого подключаемого модуля — [Условия {% data variables.product.prodname_dotcom %} для дополнительных продуктов и компонентов](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot). Использование этого подключаемого модуля регулируется этими условиями. JetBrains не несет ответственности за этот подключаемый модуль или это соглашение. Используя подключаемый модуль, вы соглашаетесь с упомянутыми выше условиями.

## Дополнительные сведения

- "[{% data variables.product.company_short %} Условия для дополнительных продуктов и компонентов](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- Заявление [о конфиденциальности {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement) {% endif %}
