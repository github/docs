---
title: Поиск пользователей
intro: 'Можно выполнять поиск пользователей в {% data variables.product.product_name %} и использовать квалификаторы поиска пользователей в любом сочетании, чтобы уточнить результаты.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139489'
---
Вы можете выполнять поиск пользователей глобально по всей среде {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сведения о поиске в {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% data reusables.search.syntax_tips %}

## Поиск только пользователей или организаций

По умолчанию поиск пользователей возвращает как личные, так и организационные учетные записи. Однако вы можете использовать квалификатор `type`, чтобы ограничить результаты поиска только личными учетными записями или учетными записями организаций.

| Квалификатор        | Пример
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) соответствует личным учетным записям с именем "mike", созданным до 2011  г.
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) соответствует организациям с словом "data" в их адресе электронной почты.

## Поиск по имени учетной записи, полному имени или общедоступному адресу электронной почты

Вы можете фильтровать поиск по имени личной или организационной учетной записи с помощью квалификаторов `user` или `org`.

Квалификатор `in` позволяет ограничивать поиск по имени пользователя (`login`), полному имени, общедоступному адресу электронной почты или по любому сочетанию этих элементов. Если этот квалификатор не указан, выполняется поиск только имени пользователя и адреса электронной почты. По соображениям конфиденциальности вы не можете выполнять поиск по имени домена электронной почты.

| Квалификатор        | Пример
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) соответствует пользователю с именем пользователя octocat.
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) соответствует имени учетной записи организации Electron.
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) соответствует пользователям, в имени пользователя которых есть слово "kenya".
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) соответствует пользователям, чье физическое имя содержит слово "bolton".
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) соответствует пользователю с полным именем "Nat Friedman". Примечание. Этот квалификатор поиска учитывает пробелы.
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) соответствует пользователям, в адресе электронной почты которых есть слово "data".

## Поиск по количеству репозиториев, принадлежащих пользователю

Вы можете фильтровать пользователей по количеству принадлежащих им репозиториев, используя квалификатор `repos` и [квалификаторы диапазона, а также "больше" и "меньше"](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Квалификатор        | Пример
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) соответствует пользователям, количество репозиториев которых превышает 9000.
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) соответствует пользователям со словом "bert" в имени пользователя или физическом имени, которые имеют от 10 до 30 репозиториев.

## Поиск по расположению

Вы можете искать пользователей по расположению, указанному в их профиле.

| Квалификатор        | Пример
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) соответствует пользователям с ровно одним репозиторием, которые живут в Исландии.

## Поиск по языку репозитория

С помощью квалификатора `language` можно искать пользователей на основе языков принадлежащих им репозиториев.

| Квалификатор        | Пример
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) соответствует пользователям в России, большинство репозиториев которых написано на JavaScript.
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) соответствует пользователям с репозиториями на JavaScript, полное имя которых содержит слово "jenny".

## Поиск по времени создания личной учетной записи

Вы можете фильтровать пользователей по времени их присоединения к {% data variables.product.product_name %} с помощью квалификатора `created`. Он принимает дату в качестве параметра. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор        | Пример
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) соответствует пользователям, присоединившимся до 2011 г.
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) соответствует пользователям, присоединившимся с 11 мая 2013 г.
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) соответствует пользователям, которые присоединились 6 марта 2013 года и указали Лондон в качества своего расположения.
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) соответствует пользователям, присоединившимся между 2010 и 2011 годами, в имени пользователя которых есть слово "john".

## Поиск по количеству подписчиков

Вы можете фильтровать пользователей по количеству их подписчиков, используя квалификатор `followers` с [квалификаторами диапазона, а также "больше" и "меньше"](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Квалификатор        | Пример
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) соответствует пользователям, имеющим 1000 или более подписчиков.
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) соответствует пользователям, имеющим от 1 до 10 подписчиков, в именах которых присутствует слово "sparkle".

{% ifversion fpt or ghec %}

## Поиск по возможности спонсирования

Вы можете искать пользователей и организации, которых можно спонсировать, в {% data variables.product.prodname_sponsors %} с помощью квалификатора `is:sponsorable`. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors).

| Квалификатор  | Пример
| ------------- | -------------
| `is:sponsorable` | Запросу [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users) соответствуют пользователи и организации, имеющие профиль {% data variables.product.prodname_sponsors %}.

{% endif %}

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
