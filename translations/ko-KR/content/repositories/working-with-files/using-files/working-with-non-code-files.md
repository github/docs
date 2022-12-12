---
title: 비 코드 파일 사용
intro: '{% data variables.product.product_name %}은(는) 다양한 비 코드 파일 형식의 렌더링 및 확산을 지원합니다.'
redirect_from:
  - /articles/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/rendering-and-diffing-images
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-and-diffing-images
  - /articles/stl-file-viewer
  - /articles/3d-file-viewer
  - /github/managing-files-in-a-repository/3d-file-viewer
  - /github/managing-files-in-a-repository/working-with-non-code-files/3d-file-viewer
  - /articles/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/rendering-csv-and-tsv-data
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-csv-and-tsv-data
  - /articles/rendering-pdf-documents
  - /github/managing-files-in-a-repository/rendering-pdf-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-pdf-documents
  - /articles/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/rendering-differences-in-prose-documents
  - /github/managing-files-in-a-repository/working-with-non-code-files/rendering-differences-in-prose-documents
  - /articles/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/mapping-geojson-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/mapping-geojson-files-on-github
  - /articles/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files/working-with-jupyter-notebook-files-on-github
  - /github/managing-files-in-a-repository/working-with-non-code-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Working with non-code files
ms.openlocfilehash: c770235d94d6191d60505ba60b0f4f81ae49b6bd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107607'
---
## 이미지 렌더링 및 확산

{% data variables.product.product_name %}은(는) PNG, JPG, GIF, PSD 및 SVG를 비롯한 몇 가지 일반적인 이미지 형식을 표시할 수 있습니다. 단순히 표시하는 것 외에도 이러한 이미지 형식의 버전 간에 차이점을 비교하는 여러 가지 방법이 있습니다.

{% note %}

**참고:** 
- {% data variables.product.prodname_dotcom %}은(는) PSD 파일 간의 차이점 비교를 지원하지 않습니다. 
- Firefox 브라우저를 사용하는 경우 {% data variables.product.prodname_dotcom %}의 SVG가 렌더링되지 않을 수 있습니다.

{% endnote %}

### 이미지 보기

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 리포지토리에서 이미지를 직접 찾아 볼 수 있습니다.

![인라인 이미지](/assets/images/help/images/view.png)

SVG는 현재 인라인 스크립팅 또는 애니메이션을 지원하지 않습니다.

### 차이점 보기

[2-up](#2-up), [살짝 밀기](#swipe) 및 [어니언 스킨](#onion-skin)의 세 가지 모드로 이미지를 시각적으로 비교할 수 있습니다.

#### 2-up

**2-up** 은 기본 모드입니다. 두 이미지를 빠르게 엿볼 수 있습니다. 또한 이미지의 크기가 버전 간에 변경된 경우 실제 차원 변경 내용이 표시됩니다. 이렇게 하면 자산이 더 높은 해상도로 업그레이드되는 경우와 같이 크기가 조정될 때 매우 분명합니다.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### 살짝 밀기

**살짝 밀면** 이미지의 일부를 나란히 볼 수 있습니다. 색이 다른 버전 간에 이동되었는지 확실하지 않나요? 살짝 밀기 슬라이더를 해당 영역 위로 끌어서 직접 픽셀을 비교합니다.

![살짝 밀기](/assets/images/help/repository/images-swipe-view.png)

#### 어니언 스킨

**어니언 스킨** 은 요소가 작고 눈에 띄기 어려운 양으로 이동할 때 정말 편리합니다. 아이콘이 2픽셀 왼쪽으로 이동했나요? 불투명도 슬라이더를 조금 뒤로 끌어서 주위로 이동하는지 확인합니다.

![어니언 스킨](/assets/images/help/repository/images-onion-view.gif)

## 3D 파일 뷰어

{% data variables.product.product_name %}은(는) *.stl* 확장명을 사용하여 3D 파일을 호스트하고 렌더링할 수 있습니다.

{% data variables.product.product_name %}에서 STL 파일을 직접 볼 때 다음을 수행할 수 있습니다.

* 모델을 클릭하여 끌어서 회전합니다.
* 마우스 오른쪽 단추를 클릭하고 끌어서 보기를 변환합니다.
* 스크롤하여 확대 및 축소합니다.
* 다른 보기 모드를 클릭하여 보기를 변경합니다.

### diff

STL 파일을 포함하는 커밋 또는 변경 집합을 볼 때 파일의 전후 diff를 볼 수 있습니다.

기본적으로 와이어프레임에 변경되지 않은 모든 항목이 표시됩니다. 더하기는 녹색으로 색이 지정되고 제거된 부분은 빨간색으로 색이 지정됩니다.

![와이어 프레임](/assets/images/help/repository/stl_wireframe.png)

파일 맨 위에 있는 슬라이더를 사용하여 현재 및 이전 수정 버전 간에 전환할 수 있는 **수정 슬라이더** 옵션을 선택할 수도 있습니다.

### 느린 성능 수정

뷰어 모서리에 이 아이콘이 표시되면 브라우저에서 WebGL 기술을 사용할 수 없습니다.

![WebGL pop 오류](/assets/images/help/repository/render_webgl_error.png)

WebGL은 컴퓨터의 하드웨어를 최대한 활용하는 데 필요합니다. WebGL을 사용하도록 설정된 상태로 제공되는 [Chrome](https://www.google.com/intl/en/chrome/browser/) 또는 [Firefox](https://www.mozilla.org/en-US/firefox/new/)와 같은 브라우저를 사용하는 것이 좋습니다.

### 오류: “표시할 수 없음”

모델이 잘못된 경우 GitHub 파일을 표시하지 못할 수 있습니다. 또한 10MB 이상의 대용량 파일은 너무 커서 GitHub 표시할 수 없습니다.

### 다른 곳에 모델 포함

인터넷의 다른 곳에 3D 파일을 표시하려면 이 템플릿을 수정하고 JavaScript를 지원하는 HTML 페이지에 배치합니다.

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

예를 들어 모델의 URL이 [`github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl`](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl)인 경우 포함 코드는 다음과 같습니다.

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

기본적으로 포함된 렌더러는 너비가 420픽셀, 높이가 620픽셀이지만 높이 및 너비 변수를 URL 끝에 매개 변수로 전달하여 출력을 사용자 지정할 수 있습니다(예: `?height=300&width=500`).

{% tip %}

**참고**: `ref` 개별 커밋에 대한 분기 또는 해시일 수 있습니다(예: `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Markdown의 렌더링

Markdown에 ASCII STL 구문을 직접 포함할 수 있습니다. 자세한 내용은 “[다이어그램 만들기](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-stl-3d-models)”를 참조하세요.
{% endif %}

## CSV 및 TSV 데이터 렌더링

GitHub는 *.csv*(쉼표로 구분) 및 *tsv*(탭으로 구분된) 파일 형식의 테이블 형식 데이터 렌더링을 지원합니다.

![렌더링된 CSV 샘플](/assets/images/help/repository/rendered_csv.png)

볼 때 {% ifversion ghae %}{% data _variables.product.product_name_ %}{% else %}{% data variables.location.product_location %}{% endif %}의 리포지토리에 커밋된 모든.csv또는 _.tsv_ 파일이 자동으로 대화형 테이블로 렌더링되고 헤더 및 행 번호 매기기가 완료됩니다. 기본적으로 첫 번째 행은 항상 헤더 행이라고 가정합니다.

행 번호를 클릭하여 특정 행에 연결하거나 Shift 키를 누른 상태로 여러 행을 선택할 수 있습니다. URL을 복사하여 친구에게 보내기만 하면 됩니다.

### 데이터 검색

데이터 세트에서 특정 값을 찾으려면 파일 바로 위에 있는 검색 창에 입력하기 시작하면 됩니다. 행은 자동으로 필터링됩니다.

![값 검색](/assets/images/help/repository/searching_csvs.gif)

### 오류 처리

경우에 따라 CSV 또는 TSV 파일이 렌더링되지 않는 것을 발견할 수 있습니다. 이러한 경우 오류 상자가 원시 텍스트의 맨 아래에 표시되며 오류가 무엇인지 알 수 있습니다.

![CSV 렌더링 오류 메시지](/assets/images/help/repository/csv_render_error.png)

일반적인 오류는 다음과 같습니다.

* 일치하지 않는 열 개수입니다. 셀이 비어 있더라도 각 행에 동일한 수의 구분 기호가 있어야 합니다.
* 파일 크기를 초과합니다. 렌더링은 최대 512KB의 파일에 대해서만 작동합니다. 그보다 더 큰 파일을 사용하면 브라우저가 느려집니다.

## PDF 문서 렌더링

GitHub는 PDF 문서 렌더링을 지원합니다.

![렌더링된 PDF 문서](/assets/images/help/repository/rendered-pdf.png)

현재 PDF 내의 링크는 무시됩니다.

## 산문 문서의 렌더링 차이점

산문 문서를 포함하는 커밋 및 끌어오기 요청은 원본 및 렌더링된 뷰를 사용하여 해당 문서를 나타낼 수 있습니다. 

원본 뷰에는 입력된 원시 텍스트가 표시되고 렌더링된 보기는 {% data variables.product.product_name %}에 렌더링되면 해당 텍스트가 어떻게 표시되는지 보여줍니다. 예를 들어 Markdown에서 `**bold**` 표시와 렌더링된 보기의 **굵게** 표시 간에 차이가 있을 수 있습니다.

산문 렌더링은 [github/markup](https://github.com/github/markup)에서 지원하는 렌더링된 문서에 대해 지원됩니다.

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* 조직
* 크리올
* MediaWiki
* Pod

![렌더링된 산문 문서를 볼 수 있는 용지 아이콘](/assets/images/help/repository/rendered_prose_diff.png)

{% octicon "file" aria-label="The paper icon" %}을(를) 클릭하여 커밋의 일부로 문서의 변경 내용을 확인할 수 있습니다.

![렌더링된 산문 변경 내용](/assets/images/help/repository/rendered_prose_changes.png)

### Markdown 렌더링 사용 안 함

{% data reusables.repositories.disabling-markdown-rendering %}

### 특성 변경 시각화

단어와 달리 렌더링된 문서에 표시되지 않는 특성의 변경 내용을 설명하는 도구 설명을 제공합니다. 예를 들어 링크 URL이 한 웹 사이트에서 다른 웹 사이트로 변경되면 다음과 같은 도구 설명이 표시됩니다.

![렌더링된 산문 특성 변경 내용](/assets/images/help/repository/prose_diff_attributes.png)

### 변경 내용에 대한 주석 달기

[커밋 주석](/articles/commenting-on-differences-between-files)은 한 줄 단위로 원본 뷰 내의 파일에만 추가할 수 있습니다.

### 헤더에 연결

[렌더링된 다른 산문 문서](/articles/about-readmes)와 마찬가지로 문서의 헤더 위로 마우스를 가져가면 링크 아이콘이 만들어집니다. 렌더링된 산문 diff의 판독기를 특정 섹션에 연결할 수 있습니다.

### 복잡한 diff 보기

일부 끌어오기 요청에는 크고 복잡한 문서가 있는 많은 변경 내용이 포함됩니다. 변경 내용을 분석하는 데 시간이 너무 오래 걸리면 {% data variables.product.product_name %}에서 렌더링된 변경 내용 보기를 항상 생성할 수 없습니다. 이 경우 렌더링된 단추를 클릭하면 오류 메시지가 표시됩니다.

![보기를 렌더링할 수 없는 경우 메시지](/assets/images/help/repository/prose_diff_rendering.png)

원본 뷰를 사용하여 변경 내용을 분석하고 주석을 달 수 있습니다.

### HTML 요소 보기

HTML 문서에 대한 커밋의 렌더링된 보기를 직접 지원하지 않습니다. Markdown과 같은 일부 형식을 사용하여 문서에 임의의 HTML을 포함할 수 있습니다. 이러한 문서가 {% data variables.product.product_name %}에 표시되면 포함된 HTML 중 일부는 미리 보기에 표시될 수 있지만 일부(예: 포함된 YouTube 동영상)는 표시할 수 없습니다.

일반적으로 포함된 HTML이 포함된 문서의 변경 내용을 렌더링하면 {% data variables.product.product_name %}의 문서 보기에서 지원되는 요소의 변경 내용이 표시됩니다. 완성도를 위해 포함된 HTML이 있는 문서의 변경 내용을 렌더링된 뷰와 원본 뷰 모두에서 항상 검토해야 합니다.

## {% data variables.product.prodname_dotcom %}에서 GeoJSON/TopoJSON 파일 매핑

{% data variables.product.product_name %}은 {% data variables.product.product_name %} 리포지토리 내에서 GeoJSON 및 TopoJSON 맵 파일 렌더링을 지원합니다. 일반적으로 `.geojson` 또는 `.topojson` 확장명을 사용하는 것처럼 파일을 커밋하기만 하면 됩니다. 확장명이 `.json`인 파일도 지원되지만, `type`이 `FeatureCollection`, `GeometryCollection` 또는 `topology`로 설정된 경우에만 지원됩니다. 그런 다음, GitHub.com에서 GeoJSON/TopoJSON 파일의 경로로 이동합니다.

오른쪽에 있는 용지 아이콘을 클릭하면 커밋의 일부로 해당 파일의 변경 내용도 표시됩니다.

![원본 렌더링 토글 스크린샷](/assets/images/help/repository/source-render-toggle-geojson.png)

### 기하 도형 유형

{% data variables.product.product_name %}의 맵은 [Leaflet.js](http://leafletjs.com)를 사용하고 [geoJSON 사양](http://www.geojson.org/geojson-spec.html)(Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon 및 GeometryCollection)에 설명된 모든 기하 도형 유형을 지원합니다. TopoJSON 파일은 “토폴로지” 형식이어야 하며 [TopoJSON 사양](https://github.com/mbostock/topojson/wiki/Specification)을 준수해야 합니다.

{% ifversion geoJSON-with-MapBox %}
### 스타일 지정 기능

GeoJSON 개체의 속성 내에서 추가 메타데이터를 전달하여 특정 색을 지정하거나 설명 아이콘을 추가하는 등 기능이 표시되는 방식을 사용자 지정할 수 있습니다. 옵션은 다음과 같습니다.

* `marker-size` - `small`, `medium` 또는 `large`
* `marker-color` - 유효한 RGB 16진수 색
* `marker-symbol` - [Maki 프로젝트](http://mapbox.com/maki/)의 아이콘 ID 또는 단일 영숫자 문자(a-z 또는 0-9)
* `stroke` - 다각형 가장자리 또는 선 색(RGB)
* `stroke-opacity` - 다각형 가장자리 또는 선의 불투명도(0.0 - 1.0)
* `stroke-width` - 다각형 가장자리 또는 선의 너비
* `fill` - 다각형 내부 색(GRB)
* `fill-opacity` - 다각형 내부 불투명도(0.0-1.0)

자세한 내용은 [개방형 단순 스타일 사양 버전 1.1.0](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0)을 참조하세요.
{% endif %}

### 다른 곳에 맵 포함

{% data variables.product.product_name %}이 아닌 다른 곳에서 GeoJSON 맵을 사용할 수 있도록 하고 싶으신가요? 이 템플릿을 수정하고 JavaScript(예: [{% data variables.product.prodname_pages %}](http://pages.github.com))를 지원하는 HTML 페이지에 배치하기만 하면 됩니다.

```html
<script src="https://embed.github.com/view/geojson/<username>/<repo>/<ref>/<path_to_file>"></script>
```

예를 들어 맵의 URL이 [github.com/benbalter/dc-wifi-social/blob/master/bars.geojson](https://github.com/benbalter/dc-wifi-social/blob/master/bars.geojson)인 경우 포함 코드는 다음과 같습니다.

```html
<script src="https://embed.github.com/view/geojson/benbalter/dc-wifi-social/master/bars.geojson"></script>
```

기본적으로 포함된 맵은 420px x 620px이지만 끝에 높이 및 너비 변수를 매개 변수(예: `?height=300&width=500`)로 전달하여 출력을 사용자 지정할 수 있습니다.

{% tip %}

**참고**: `ref` 개별 커밋에 대한 분기 또는 해시일 수 있습니다(예: `2391ae`).

{% endtip %}

{% ifversion mermaid %}
### Markdown의 매핑

Markdown에서 GeoJSON 및 TopoJSON을 직접 포함할 수 있습니다. 자세한 내용은 “[다이어그램 만들기](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-geojson-and-topojson-maps)”를 참조하세요.
{% endif %}

### Clustering

맵에 많은 수의 표식(약 750개 이상)이 포함된 경우 GitHub는 더 높은 확대/축소 수준에서 주변 표식을 자동으로 클러스터합니다. 클러스터를 클릭하거나 확대하면 개별 표식이 표시됩니다.

### 기본 맵과 관련이 있음

기본 맵 데이터(거리 이름, 도로 등)는 세계의 편집 가능한 무료 맵을 만드는 공동 프로젝트인 [OpenStreetMap](http://www.openstreetmap.org/)에 의해 구동됩니다. 오픈 소스 때문에 뭔가 옳지 않다는 것을 알게 되면 [등록](https://www.openstreetmap.org/user/new)하고 수정 사항을 제출하기만 하면 됩니다.

### 문제 해결

GeoJSON 파일을 렌더링하는 데 문제가 있는 경우 [GeoJSON Linter](http://geojsonlint.com/)를 통해 실행하여 유효한 GeoJSON 파일이 있는지 확인합니다. 포인트가 예상대로 표시되지 않는 경우(예: 바다 한가운데) 데이터가 현재 지원되지 않는 프로젝션에 있을 수 있습니다. 현재 {% data variables.product.product_name %}은(는) `urn:ogc:def:crs:OGC:1.3:CRS84` 프로젝션만 지원합니다.

또한 `.geojson` 파일이 특히 큰 경우(10MB 이상) 브라우저 내에서 렌더링할 수 없습니다. 이 경우 일반적으로 다음과 같은 메시지가 표시됩니다.

![대용량 파일](/assets/images/help/repository/view_raw.png)

`.geojson`파일을 [TopoJSON](https://github.com/mbostock/topojson)으로 변환하여 데이터를 렌더링할 수 있으며, 경우에 따라 파일 크기를 최대 80%까지 줄일 수 있는 압축 형식입니다. 물론 항상 파일을 더 작은 청크(예: 상태 또는 연도별)로 분할하고 리포지토리 내에 여러 파일로 데이터를 저장할 수 있습니다.

### 추가 참고 자료

{% ifversion geoJSON-with-MapBox %}
* [Leaflet.js 설명서](https://leafletjs.com/)
* [MapBox 표식 스타일 지정 설명서](http://www.mapbox.com/developers/simplestyle/) {%- else %}
* [Azure Maps 설명서](https://docs.microsoft.com/en-us/azure/azure-maps/) {%- endif %}
* [TopoJSON Wiki](https://github.com/mbostock/topojson/wiki)

## {% data variables.product.prodname_dotcom %}에서 Jupyter Notebook 파일 작업

{% data variables.location.product_location %}에 *.ipynb* 확장자를 사용하여 Jupyter Notebook 또는 IPython Notebook 파일을 추가하면 리포지토리에서 정적 HTML 파일로 렌더링됩니다.

사용자 지정 JavaScript 플롯과 같은 Notebook의 대화형 기능은 {% data variables.location.product_location %}의 리포지토리에서 작동하지 않습니다. 예를 들어 [링크 및 Interactions.ipynb](https://github.com/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)를 참조하세요.

JavaScript 콘텐츠가 렌더링된 Jupyter Notebook을 보거나 Notebook 파일을 다른 사용자와 공유하려면 [nbviewer](https://nbviewer.jupyter.org/)를 사용하면 됩니다. 예를 들어 nbviewer에서 렌더링된 [*링크 및 Interactions.ipynb*](https://nbviewer.jupyter.org/github/bokeh/bokeh-notebooks/blob/main/tutorial/06%20-%20Linking%20and%20Interactions.ipynb)를 참조하세요.

Jupyter Notebook의 완전 대화형 버전을 보려면 Notebook 서버를 로컬로 설정하면 됩니다. 자세한 내용은 [Jupyter 공식 설명서](http://jupyter.readthedocs.io/en/latest/index.html)를 참조하세요.

### 문제 해결

정적 HTML에서 Jupyter Notebook 파일을 렌더링하는 데 문제가 있는 경우 [다음 명령`nbconvert`](https://github.com/jupyter/nbconvert)을 사용하여 명령줄에서 파일을 로컬로 변환할 수 있습니다.

```shell
$ jupyter nbconvert --to html NOTEBOOK-NAME.ipynb
```

### 추가 참고 자료

- [Jupyter Notebook의 GitHub 리포지토리](https://github.com/jupyter/jupyter_notebook)
- [Jupyter Notebooks 갤러리](https://github.com/jupyter/jupyter/wiki)

{% ifversion mermaid %}
## {% data variables.product.prodname_dotcom %}에 Mermaid 파일 표시

{% data variables.product.product_name %}은(는) 리포지토리 내에서 Mermaid 파일 렌더링을 지원합니다. 일반적으로 `.mermaid` 또는 `.mmd` 확장명을 사용하는 것처럼 파일을 커밋하기만 하면 됩니다. 그런 다음 {% data variables.product.prodname_dotcom %}에서 Mermaid 파일의 경로로 이동합니다.

예를 들어 다음 콘텐츠가 포함된 `.mmd` 파일을 리포지토리에 추가하는 경우:

```
graph TD
    A[Friend's Birthday] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D["Cool <br> Laptop"]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

리포지토리에서 파일을 보면 흐름 차트로 렌더링됩니다.
![렌더링된 Mermaid 파일 다이어그램](/assets/images/help/repository/mermaid-file-diagram.png)

### 문제 해결

차트가 전혀 렌더링되지 않으면 [Mermaid 라이브 편집기](https://mermaid.live/edit)를 사용하여 차트를 확인한 후 유효한 Mermaid Markdown 구문이 포함되어 있는지 확인합니다.

차트가 표시되지만 예상대로 표시되지 않는 경우 새 [{% data variables.product.prodname_github_community %} 토론](https://github.com/orgs/community/discussions/categories/general)을 만들고 `Mermaid` 레이블을 추가할 수 있습니다. 

#### 알려진 문제

* 시퀀스 다이어그램 차트는 차트 아래에 추가 패딩을 사용하여 렌더링되는 경우가 많으며 차트 크기가 증가함에 따라 더 많은 안쪽 여백이 추가됩니다. Mermaid 라이브러리의 알려진 문제입니다.
* 팝오버 메뉴가 있는 행위자 노드는 시퀀스 다이어그램 차트 내에서 예상대로 작동하지 않습니다. Mermaid 라이브러리의 API를 사용하여 차트를 렌더링할 때 JavaScript 이벤트가 차트에 추가되는 방식이 불일치하기 때문입니다.
* 모든 차트가 a11y 규격인 것은 아닙니다. 이는 화면 읽기 프로그램을 사용하는 사용자에게 영향을 줄 수 있습니다.

### Markdown의 Mermaid

Markdown에서 직접 Mermaid 구문을 포함할 수 있습니다. 자세한 내용은 “[다이어그램 만들기](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#creating-mermaid-diagrams)”를 참조하세요.

### 추가 참고 자료

* [Mermaid.js 설명서](https://mermaid-js.github.io/mermaid/#/)
* [Mermaid.js 라이브 편집기](https://mermaid.live/edit) {% endif %}

