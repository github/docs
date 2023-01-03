---
title: 암송 연구
intro: A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.
redirect_from:
- /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
ms.openlocfilehash: cacf9a63013c5bbf9b7d867e088640ff01400289
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068504"
---
작성자: Albert Ziegler(@wunderalbert)

## <a name="-data-variablesproductprodname_dotcom--copilot-parrot-or-crow"></a>{% data variables.product.prodname_dotcom %} Copilot: 앵무새 또는 까마귀?
{% data variables.product.prodname_dotcom %} Copilot 제안에서 암기 학습을 먼저 살펴봅니다.

## <a name="introduction"></a>소개

{% data variables.product.prodname_dotcom %} Copilot은 수십억 줄에 달하는 공개 코드로 학습되었습니다. 나에게 제공되는 제안은 내 코드에 맞게 조정되지만, 그 배후의 프로세싱은 궁극적으로 다른 사용자가 작성한 코드에 의해 알려집니다.

제안된 코드와 이를 알리는 코드 간의 관계는 얼마나 직접적인가요? 최근의 생각을 자극하는 논문<sup id="anchor1">[1](#footnote1)</sup>에서 Bender, Gebru 등은 {% data variables.product.prodname_dotcom %} Copilot을 구동하는 것과 같은 인공 지능 시스템에 대해 “확률적 앵무새”라는 문구를 만들었습니다. 또는 {% data variables.product.company_short %}<sup id="anchor2">[2](#footnote2)</sup>의 동료 기계 학습 엔지니어는 냉각기 채팅 중에, 이러한 시스템은 “사진 기억을 가지고 있는 유아”처럼 느껴질 수 있다고 말했습니다.

이는 의도적으로 지나치게 단순화된 것입니다. 많은 {% data variables.product.prodname_dotcom %} Copilot 제안은 사용자가 작업 중인 특정 코드 베이스에 맞게 특별히 조정되었다고 느껴집니다. 종종, 그것은 앵무새처럼 보이기보다는 작은 블록<sup id="anchor3">[3](#footnote3)</sup>으로 새로운 도구를 만드는 까마귀처럼 보입니다. 그러나 {% data variables.product.prodname_dotcom %} Copilot이 인상적인 기억력을 가지고 있다는 것은 부인할 수 없습니다.

![Copilot의 영화 데모](/assets/images/help/copilot/resources_recitation_example_zen.gif)

여기에서 의도적으로 {% data variables.product.prodname_dotcom %} Copilot에 분명히 외워서 알고 있는 잘 알려진 텍스트를 낭독하도록 지시했습니다.<sup id="anchor4">[4](#footnote4)</sup> 저 자신 역시 몇 가지 텍스트를 외워서 알고 있습니다. 예를 들어, 학교에서 배운 몇 가지 시를 아직도 기억하고 있습니다. 그러나 주제에 관계없이, 한 번도 약강 4음보격에 빠져들고 수선화에 마음이 흔들려 대화를 방해하고 싶은 유혹을 받은 적은 없습니다.

그렇다면 그것(또는 코딩과 동등한 것)이 {% data variables.product.prodname_dotcom %} Copilot이 수행하는 경향이 있는 것일까요? 얼마나 많은 제안이 고유하며, 얼마나 자주 학습 중에 보았던 코드를 앵무새처럼 되풀이할까요?

## <a name="the-experiment"></a>실험

{% data variables.product.prodname_dotcom %} Copilot의 초기 개발 중에 약 300명의 직원이 내부 평가의 일환으로 일상 업무에 이를 사용했습니다. 이 평가판은 암송을 테스트할 수 있는 좋은 데이터 세트를 제공했습니다. {% data variables.product.prodname_dotcom %} Copilot이 이전에 본 것에서 인용된 제안을 얼마나 자주 제공했는지 알아보고 싶었습니다.

2021년 5월 7일(해당 데이터 추출을 시작한 날)에 중단된 Python 제안으로 조사를 제한했습니다. 그 결과 453,780개의 제안이 396개의 “사용자 주”(user weeks), 즉 사용자가 Python 코드에서 {% data variables.product.prodname_dotcom %} Copilot을 적극적으로 사용한 달력 주에 걸쳐 분산되었습니다.

### <a name="automatic-filtering"></a>자동 필터링

453,780개의 제안은 많은 수이지만, 그중 상당수는 즉시 해제될 수 있습니다. 흥미로운 사례를 알아보려면 Copilot이 학습된 {% data variables.product.prodname_dotcom %} 코드에서와 동일한 순서로 제안에서 발생하는 “단어” 시퀀스를 고려하세요. 이 컨텍스트에서 문장 부호, 대괄호 또는 기타 특수 문자는 모두 “단어”로 계산되지만 탭, 공백 또는 줄 바꿈은 완전히 무시됩니다. 결국 인용문은 들여쓰기를 탭 1개로 하든 스페이스 8개로 하든 여전히 인용문입니다.

예를 들어 {% data variables.product.prodname_dotcom %} Copilot의 제안 중 하나는 공백으로 구분된 숫자에 대한 다음 정규식입니다.

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

위의 의미로 보면 정확히 100개의 “단어”이지만 특히 조밀한 예입니다. 비어 있지 않은 평균 코드 줄에는 10개의 “단어”만 있습니다. {% data variables.product.prodname_dotcom %} Copilot이 학습된 코드와의 겹침에 그러한 “단어”가 60개 이상 포함된 경우로 이 조사를 제한했습니다. 어딘가에는 컷을 설정해야 하는데, 짧은 시퀀스가 큰 관심을 받는 경우는 드물다고 생각합니다. 사실, 나중에 확인된 대부분의 흥미로운 사례는 임계값 60을 훨씬 벗어납니다.

겹침이 사용자가 이미 작성한 내용으로 확장되는 경우 길이도 계산됩니다. 결국 사용자는 {% data variables.product.prodname_dotcom %} Copilot의 도움을 받아 해당 컨텍스트를 작성했을 수 있습니다.

다음 예제에서는 사용자가 매우 일반적인 코드 조각을 작성하기 시작했습니다. {% data variables.product.prodname_dotcom %} Copilot이 이를 완료합니다. 비록 완료 자체는 다소 짧지만, 이미 존재하는 코드와 함께 임계값이 지워진 채 유지됩니다. 

![예제 코드](/assets/images/help/copilot/example_last_straw.png)

이 절차는 위의 두 가지와 마찬가지로 비교적 “지루한” 많은 예를 거쳐갈 수 있을 만큼 충분히 관대합니다. 그러나 Copilot 제안의 99% 이상을 분류하며, 흥미로운 사례에 사람의 분석을 적용할 때 여전히 효과적입니다.

### <a name="manual-bucketing"></a>수동 버킷팅

필터링 후 473개의 제안이 남았습니다. 그러나 형식은 매우 다릅니다.

1. 일부는 기본적으로 필터링을 통과한 다른 사례의 반복에 불과했습니다. 예를 들어 때로는 {% data variables.product.prodname_dotcom %} Copilot이 제안을 하고 개발자가 주석 줄을 입력하면, {% data variables.product.prodname_dotcom %} Copilot이 매우 유사한 제안을 다시 제공합니다. 분석에서 이러한 사례를 중복으로 제거했습니다.
2. 일부는 반복적인 긴 시퀀스였습니다. 다음 예제와 마찬가지로, 물론 `‘<p>’`의 반복된 블록은 학습 세트의 어딘가에서 발견됩니다. <br>![예제 반복](/assets/images/help/copilot/example_repetitions.png)<br> 이러한 제안은 도움이 될 수도 있고(테스트 사례, 정규식), 도움이 되지 않을 수도 있습니다(이 경우 도움이 되지 않을 것으로 의심됨). 그러나 어떤 경우든 그들은 이 조사를 시작할 때 염두에 두었던 암기 학습의 아이디어와 맞지 않습니다.
3. 일부는 자연수, 소수, 주식 시장 시세 티커 또는 그리스 알파벳과 같은 표준 인벤토리였습니다. <br>![그리스 알파벳의 예](/assets/images/help/copilot/example_greek.png)
4. 일부는 일반적이고 직설적인 방법이었는데, 아마도 자연적인 자유도가 거의 없이 작업을 수행하는 보편적인 방법이었을 것입니다. 예를 들어, 다음의 중간 부분은 BeautifulSoup 패키지를 사용하여 Wikipedia 목록을 구문 분석하는 표준 방식과 매우 유사합니다. 실제로 {% data variables.product.prodname_dotcom %} Copilot의 학습 데이터<sup id="anchor5">[5](#footnote5)</sup>에 있는 가장 일치하는 코드 조각은 이러한 코드를 사용하여 다른 문서를 구문 분석하고 계속해서 그 결과로 다른 작업을 수행합니다. <br>![Beautiful Soup의 예제](/assets/images/help/copilot/example_beautiful_soup.png) <br>이것은 내가 생각하는 인용과도 맞지 않습니다. 이것은 “지금 쓰레기를 버리고 있어요. 곧 돌아올게요.”라고 말하는 것과 같습니다. 이 특별한 문구가 전에 여러 번 사용되었더라도 이것은 사실의 진술이지 인용문이 아닙니다.
5. 그리고 다른 모든 경우입니다. 코드 또는 주석에 약간의 특정 겹침이 있는 경우입니다. 이것이 내게는 가장 관심 있는 부분이고, 지금부터 여기에 집중할 것입니다.

이 버킷팅에는 반드시 몇 가지 극단적인 경우<sup id="anchor6">[6](#footnote6)</sup>가 있으며 각자의 마일리지는 분류 방법에 따라 다를 수 있습니다. 어쩌면 처음부터 전체 버킷 세트에 동의하지 않을 수도 있습니다.

이것이 바로 데이터 세트를 오픈 소스로 사용하는 이유입니다<sup id="anchor7">[7](#footnote7)</sup>. 따라서 버킷팅에 대해 조금 다르게 느끼거나 학습 세트를 앵무새로 만드는 GitHub Copilot의 다른 측면에 관심이 있다면 다음 섹션을 무시하고 얼마든지 각자의 결론을 도출할 수 있습니다.

## <a name="results"></a>결과

![개요 그림](/assets/images/help/copilot/plot_buckets.png)

대부분의 {% data variables.product.prodname_dotcom %} Copilot의 제안에서, 자동 필터는 학습에 사용되는 코드와의 상당한 겹침을 찾지 못했습니다. 그러나 473개에 달하는 사례에 관심을 기울이게 했습니다. 첫 번째 버킷(다른 사례와 매우 유사하게 보이는 사례)을 제거하니 185개의 제안이 남았습니다. 이 중 144개는 버킷 2~4로 분류되었습니다. 이제 내가 염두에 두고 있는 용어의 의미로 마지막 버킷인 “암송”에 41개의 사례가 남았습니다.

이는 **10의 사용자 주마다 1회 암송 이벤트** 에 해당합니다(95% 신뢰 구간: 7~13주, 푸아송 테스트 사용).

물론 이것은 {% data variables.product.prodname_dotcom %} Copilot을 사용해 본 {% data variables.product.prodname_dotcom %} 및 Microsoft 개발자를 대상으로 측정되었습니다. 자신의 코딩 동작이 그들의 코딩 동작과 매우 다른 경우 결과가 다를 수 있습니다. 특히 이러한 개발자 중 일부는 Python 프로젝트에서 파트타임으로만 작업하고 있습니다. 나는 이를 구분할 수 없었기 때문에 지정된 주에 일부 Python을 작성하는 모든 사람을 사용자로 계산했습니다.

10주 동안 1개의 이벤트가 많은 것처럼 들리지 않지만, 그렇다고 0도 아닙니다. 그리고 충격적인 세 가지를 발견했습니다.

### <a name="-data-variablesproductprodname_dotcom--copilot-quotes-when-it-lacks-specific-context"></a>{% data variables.product.prodname_dotcom %} Copilot은 특정 컨텍스트가 부족할 때 인용함

노래에 대한 가사를 배우고 싶다면 여러 번 들어야 합니다. {% data variables.product.prodname_dotcom %} Copilot도 다르지 않습니다. 코드 조각을 외워서 배우려면 여러 번 봐야 합니다. 각 파일은 {% data variables.product.prodname_dotcom %} Copilot에 한 번만 표시되므로 코드 조각은 공개 코드의 서로 다른 여러 파일에 존재해야 합니다.

수동 레이블 지정 중에 발탁된 41개의 주요 사례 중 10개 미만의 서로 다른 파일에는 아무것도 나타나지 않습니다. 대부분의 사례(35건)는 100번 넘게 나타납니다. 한 번 {% data variables.product.prodname_dotcom %} Copilot은 교육 중에 무려 700,000번 넘게 본 것과 함께 빈 파일을 시작할 것을 제안했습니다. 그것은 GNU General Public License였습니다.

다음 그림에서는 버킷 5(각 결과에 대해 하단에 빨간색 표시 1개)와 버킷 2~4에서 일치하는 결과 파일 수를 보여 줍니다. 버킷 1은 실제로 버킷 2~4 사례의 중복과 버킷 5 사례의 중복의 조합이므로 제외했습니다. 유추된 분포는 빨간색 선으로 표시됩니다. 100개와 1000개 일치 사이에서 최고조에 달합니다.

![일치 항목 수 그림](/assets/images/help/copilot/plot_copies.png)

### <a name="-data-variablesproductprodname_dotcom--copilot-mostly-quotes-in-generic-contexts"></a>{% data variables.product.prodname_dotcom %} Copilot은 대부분 일반 컨텍스트에서 인용

시간이 지남에 따라 각 파일은 고유해집니다. 그러나 {% data variables.product.prodname_dotcom %} Copilot은 이를 기다리지 않습니다<sup id="anchor8">[8](#footnote8)</sup>. 파일이 여전히 매우 일반적인 상태인 동안 솔루션을 제공합니다. 그리고 진행할 구체적인 것이 없으면, 어떤 곳에서 인용하는 것보다 다른 곳에서 인용할 가능성이 훨씬 더 높습니다.

![컨텍스트 길이 그림](/assets/images/help/copilot/plot_context.png)

물론 소프트웨어 개발자는 {% data variables.product.prodname_dotcom %} Copilot이 고유한 제안을 제공할 만큼 컨텍스트가 고유한 경우, 대부분의 시간을 파일의 심층적인 내부에서 보냅니다. 반면 {% data variables.product.prodname_dotcom %} Copilot은 프로그램이 어떻게 될지 알 수 없으므로, 초기의 제안은 다소 예측하기가 어려운 상태입니다. 그러나 경우에 따라, 특히 장난감 프로젝트나 독립 실행형 스크립트에서는 적절한 양의 컨텍스트만 있어도 사용자가 원하는 것이 무엇인지를 합리적으로 추측하기에 충분할 수 있습니다. 그리고 때로는 이것이 충분히 일반적이어서, {% data variables.product.prodname_dotcom %} Copilot은 외워서 알고 있다고 생각하는 솔루션 중 하나가 유망해 보인다고 생각합니다.

![예제 코드](/assets/images/help/copilot/example_robot.png)

이것은 다양한 변형으로 업로드된 로봇 공학 수업의 교과 과정에서 거의 직접 가져온 것입니다<sup id="anchor9">[9](#footnote9)</sup>.

### <a name="detection-is-only-as-good-as-the-tool-that-does-the-detecting"></a>검색은 검색을 수행하는 도구만큼만 좋습니다.

현재 형식에서 필터는 광범위하게 적용될 때 많은 수의 관심이 없는 사례를 표시합니다. 그러나 여전히 너무 많은 노이즈가 되어서는 안 됩니다. 실험에 참여한 내부 사용자의 경우 평균적으로 일주일에 한 번보다 약간 많았을 것입니다(폭발적 증가의 가능성이 높음에도 불구하고!). 이 중 약 17%(이항 테스트를 사용하는 95% 신뢰 구간: 14%~21%)는 다섯 번째 버킷에 있습니다.

물론 완벽한 것은 없습니다. 따라서 이것도 속임수일 수 있습니다. 빌드하는 도구에서 검색하기가 다소 어려운 사례도 있지만 여전히 확실한 출처가 있습니다. Python의 Zen으로 돌아가려면 다음을 수행합니다.

![Zen 변형](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## <a name="conclusion-and-next-steps"></a>결론 및 다음 단계

이 조사에 따르면 {% data variables.product.prodname_dotcom %} Copilot은 코드 본문을 그대로 인용할 수 있지만 거의 인용하지 않는다는 것을 보여 줍니다. 인용할 경우 대부분 모든 사람이 인용하는 코드를 인용하며, 대부분 파일의 시작 부분에서 마치 실마리를 풀듯 인용합니다.

그러나 GitHub Copilot이 코드를 암송하는 것과 내가 시를 암송하는 것 사이에는 여전히 한 가지 큰 차이점이 있습니다. 나는 인용할 때를 알고 있습니다. 나는 또한 Copilot이 언제 자체 아이디어를 마련하지 않고 기존 코드를 에코하는지를 알고 싶습니다. 이렇게 하면 해당 코드에 대한 배경 정보를 조회하고 크레딧이 필요한 곳에 크레딧을 포함할 수 있습니다.

답은 분명합니다. 이 분석에서 학습 세트와 겹치는 것을 검색하기 위해 우리가 사용한 사전 필터링 솔루션을 공유합니다. 제안에 학습 세트에서 복사한 코드 조각이 포함된 경우 UI는 단순히 인용된 위치를 알려줘야 합니다. 그런 다음 적절한 특성을 포함하거나 해당 코드를 모두 사용하지 않도록 결정할 수 있습니다.

이 중복 검색은 아직 기술 미리 보기에 통합되지 않았지만 앞으로 통합할 할 계획입니다. 그리고 암송률을 줄이고 검색을 좀 더 정확하게 만들기 위해 계속 노력할 것입니다.

<br><br>

### <a name="footnotes"></a>각주

<a name="footnote1">1</a>: [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://dl.acm.org/doi/10.1145/3442188.3445922)(확률적 앵무새의 위험성: 언어 모델이 너무 클 수 있나요?) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: 까마귀의 창의적인 지혜에 대해 von Bayern 등 참조: [Compound tool construction by New Caledonian crows](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)(뉴칼레도니아 까마귀의 복합 도구 제작)

<a name="footnote4">4</a>: 교육 데이터 재현의 의도적 트리거에 대해 Carlini 등 참조: [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)(대규모 언어 모델에서 교육 데이터 추출)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>: 아마도 너무 많지는 않을 것입니다. 일부 개발자에게 사례에 레이블을 지정할 수 있도록 도와달라고 요청했고, 모든 개발자는 각자 판단에 따라 불확실성에 플래그를 지정하라는 메시지를 받았습니다. 이는 34건(즉, 10% 미만)에서만 일어났습니다. [^](#anchor6)

<a name="footnote7">7</a>: [공개 데이터 세트](/assets/images/help/copilot/matched_snippets.csv)에는 학습 세트에서 발견된 Copilot 제안의 일부, 발견된 빈도, 공개 코드에서 발생하는 예제에 대한 링크를 나열합니다. 개인 정보 보호를 위해, 완성의 일치하지 않는 부분이나 사용자가 입력한 코드 컨텍스트(길이 표시만)는 포함하지 않습니다. [^](#anchor7)

<a name="footnote8">8</a>: 실제로 이 실험이 수행되었으므로, {% data variables.product.prodname_dotcom %} Copilot은 최소 파일 콘텐츠를 요구하도록 변경되었습니다. 따라서 여기에 플래그가 지정된 제안 중 일부는 현재 버전에서 표시되지 않았을 것입니다. [^](#anchor8)

<a name="footnote9">9</a>: 예들 들어 jenevans33: [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
