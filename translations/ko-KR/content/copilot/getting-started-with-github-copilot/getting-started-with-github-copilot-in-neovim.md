---
title: Neovim에서 GitHub Copilot 시작
shortTitle: Neovim
product: '{% data reusables.gated-features.copilot %}'
intro: 'Neovim에 {% data variables.product.prodname_copilot %}을 설치하고 메모와 코드를 작성할 때 제안 사항을 확인하는 방법을 알아봅니다.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 2eab3d278453ad283337d8e8dd6e66f7d39364e8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193035'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} 및 Neovim 정보

{% data reusables.copilot.procedural-intro %}

Neovim을 사용하는 경우 편집기 내에서 직접 {% data variables.product.prodname_copilot %}의 제안을 보고 통합할 수 있습니다.

## 필수 조건

{% data reusables.copilot.subscription-prerequisite %}

- Neovim에서 {% data variables.product.prodname_copilot %}을 사용하려면 Neovim 및 Node.js 버전 17 이하가 설치되어 있어야 합니다. 자세한 내용은 [Neovim 설명서](https://neovim.io/doc/) 및 [Node.js 웹 사이트](https://nodejs.org/en/)를 참조하세요.

## Neovim 확장 설치

{% mac %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Neovim의 기본 제공 플러그 인 관리자와 함께 {% data variables.product.prodname_copilot %}를 설치하려면 터미널에서 다음 명령을 입력합니다.

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endmac %}


{% windows %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Neovim의 기본 제공 플러그 인 관리자와 함께 {% data variables.product.prodname_copilot %}을(를) 설치하려면 Git Bash에서 다음 명령을 입력합니다.

           git clone https://github.com/github/copilot.vim.git `
            $HOME/AppData/Local/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endwindows %}


{% linux %}

{% data reusables.copilot.install-copilot-in-neovim %}
   - Neovim의 기본 제공 플러그 인 관리자와 함께 {% data variables.product.prodname_copilot %}를 설치하려면 다음 명령을 입력합니다.

         git clone https://github.com/github/copilot.vim \
            ~/.config/nvim/pack/github/start/copilot.vim

{% data reusables.copilot.config-enable-copilot-in-neovim %}

{% endlinux %}

## Neovim에서 {% data variables.product.prodname_copilot %}을(를) 사용하는 학습

Neovim에서 {% data variables.product.prodname_copilot %}를 사용하는 방법에 대한 지침은 플러그 인 설명서를 참조하세요. 설명서를 보려면 Neovim을 열고 다음 명령을 실행합니다.

  ```
  :help copilot
  ```

## 추가 참고 자료

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
