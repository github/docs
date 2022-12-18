---
title: Начало работы с GitHub Copilot в Neovim
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Узнайте, как установить {% data variables.product.prodname_copilot %} в Neovim и начать видеть предложения при написании комментариев и кода.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 2eab3d278453ad283337d8e8dd6e66f7d39364e8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193036'
---
{% data reusables.copilot.copilot-cta-button %}

## Сведения о {% data variables.product.prodname_copilot %} и Neovim

{% data reusables.copilot.procedural-intro %}

Если вы используете Neovim, вы можете просматривать и включать предложения из {% data variables.product.prodname_copilot %} непосредственно в редакторе.

## Предварительные требования

{% data reusables.copilot.subscription-prerequisite %}

- Чтобы использовать {% data variables.product.prodname_copilot %} в Neovim, необходимо установить Neovim и Node.js версии 17 или ниже. Дополнительные сведения см. в [документации по Neovim](https://neovim.io/doc/) и на [веб-сайте Node.js](https://nodejs.org/en/).

## Установка расширения Neovim

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Чтобы установить {% data variables.product.prodname_copilot %} с помощью встроенного диспетчера подключаемых модулей Neovim, введите следующую команду в терминале.

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Чтобы установить {% data variables.product.prodname_copilot %} с помощью встроенного диспетчера подключаемых модулей Neovim, введите следующую команду в Git Bash.

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Чтобы установить {% data variables.product.prodname_copilot %} с помощью встроенного диспетчера подключаемых модулей Neovim, введите следующую команду:

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## Обучение использованию {% data variables.product.prodname_copilot %} в Neovim

Инструкции по использованию {% data variables.product.prodname_copilot %} в Neovim см. в документации по подключаемого модуля. Чтобы просмотреть документацию, откройте Neovim и выполните следующую команду.

  ```
  :help copilot
  ```

## Дополнительные сведения

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
