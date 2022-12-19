---
title: Использование GitHub Codespaces с GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: '{% data variables.product.prodname_github_codespaces %} можно использовать как предпочтительный редактор в назначениях для предоставления учащимся доступа к среде Visual Studio Code на основе браузера с помощью настройки одним щелчком мыши.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189916'
---
## О {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} — это современная облачная среда разработки, которая использует контейнер для предоставления популярных языков, инструментов и служебных программ для разработки. {% data variables.product.prodname_github_codespaces %} также можно настроить, что позволяет создать настраиваемую среду разработки, одинаковую для всех пользователей проекта. Дополнительные сведения см. в статье "[Обзор {% data variables.product.prodname_github_codespaces %}](/codespaces/overview)".

После включения {% data variables.product.prodname_github_codespaces %} в организации или на предприятии пользователи могут создать codespace из любой ветви или фиксации в организации или корпоративном репозитории и начать разработку с использованием облачных вычислительных ресурсов. Вы можете подключиться к пространству кода через браузер или в локальной среде Visual Studio Code. 

{% data reusables.codespaces.links-to-get-started %}

Назначение {% data variables.product.prodname_github_codespaces %} в качестве предпочтительного редактора для заданий в GitHub Classroom полезно как для учащихся, так и для преподавателей. {% data variables.product.prodname_github_codespaces %} является хорошим вариантом для учащихся, использующих заемные устройства или не имеющих доступа к локальной настройке интегрированной среды разработки, так как каждое пространство кода основано на облаке и не требует локальной настройки. Учащиеся могут запустить пространство кода для репозитория заданий в Visual Studio Code, используя любой браузер, и начать разработку без дополнительной настройки.  

Для заданий со сложными средами преподаватели могут настроить конфигурацию контейнера разработки для конкретных пространств кода в репозитории. В этом случае при создании пространства кода учащийся автоматически получит среду разработки, настроенную преподавателем. Дополнительные сведения о контейнерах разработки см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

{% note %}

**Примечание.** Отдельные среды codespace удаляются, если они остановлены и не используются в течение длительного периода. Дополнительные сведения см. в статье [Настройка автоматического удаления сред codespace](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces).

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**Примечание.** {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## Сведения о преимуществах {% data variables.product.prodname_codespaces %} Education для подтвержденных преподавателей

Преимущество для образования {% data variables.product.prodname_codespaces %} предоставляет проверенным преподавателям бесплатную ежемесячную надбавку в размере {% data variables.product.prodname_github_codespaces %} часов для использования в {% data variables.product.prodname_classroom %}. Этого пособия, по усредненным оценкам, достаточно для работы класса с 50 учащимися и 5 заданиями в месяц на компьютере с 2 ядрами и хранения 1 пространства кода для каждого учащегося.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

Чтобы стать подтвержденным учителем, необходимо получить утверждение на использование преимущества для преподавателя. Дополнительные сведения см. в разделе [Заявка на {% data variables.product.prodname_global_campus %} в качестве преподавателя](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher). 

Получив сообщение о том, что вы стали подтвержденным преподавателем, посетите [{% data variables.product.prodname_global_campus %} для преподавателей](https://education.github.com/globalcampus/teacher) и обновите GitHub Team для организации. Дополнительные сведения см. в разделе [Продукты GitHub](/get-started/learning-about-github/githubs-products#github-team). 

Если вы имеете право на {% data variables.product.prodname_codespaces %} Для образования, при включении {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_classroom %} для вашей организации GitHub автоматически добавляет политику Codespace, ограничивающую типы компьютеров для всех codespace в организации до 2 основных компьютеров. Это позволяет максимально эффективно использовать бесплатные {% data variables.product.prodname_github_codespaces %}. Но вы можете свободно изменять или удалять такие политики в параметрах организации. Дополнительные сведения см. в разделе [Ограничение доступа по типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

Когда преимущество для образования {% data variables.product.prodname_codespaces %} выходит из бета-версии, если ваша организация превысит бесплатную квоту на использование {% data variables.product.prodname_github_codespaces %}, вашей организации будет выставлен счет за дополнительное использование. Дополнительные сведения см. в статье [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

## Включение {% data variables.product.prodname_codespaces %} для организации

{% data variables.product.prodname_github_codespaces %} доступен для использования с {% data variables.product.prodname_classroom %} для организаций, использующих {% data variables.product.prodname_team %}. Если вы имеете право на получение преимущества для образования {% data variables.product.prodname_codespaces %}, необходимо включить {% data variables.product.prodname_github_codespaces %} с помощью {% data variables.product.prodname_classroom %}, а не включать его непосредственно в параметрах организации. В противном случае вашей организации будет выставляться счет напрямую за все использование {% data variables.product.prodname_github_codespaces %}.

### Включение Codespaces для организации при создании новой аудитории
{% data reusables.classroom.sign-into-github-classroom %}
1. Нажмите кнопку **Создать аудиторию**.
   
  ![Кнопка "Создать аудиторию"](/assets/images/help/classroom/click-new-classroom-button.png)

1. В списке организаций выберите организацию, которую хотите использовать для своей аудитории. Организации, которые имеют право на {% data variables.product.prodname_github_codespaces %}, будут иметь примечание, показывающее, что они имеют право. При необходимости создайте новую организацию. Дополнительные сведения см. в статье [Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

  ![Выбор организации для аудитории с правом на использование Codespaces](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. На странице "Имя аудитории" в разделе "{% data variables.product.prodname_codespaces %} в аудитории" щелкните **Включить**. Обратите внимание, что это позволит включить {% data variables.product.prodname_github_codespaces %} для всех репозиториев и пользователей в организации.

  ![Включение Codespaces для организации на странице "Основные сведения о настройке аудитории"](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. Когда вы будете готовы создать аудиторию, щелкните **Создать аудиторию**.

### Настройка Codespaces для организации в существующей аудитории

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. В {% data variables.product.prodname_github_codespaces %} щелкните **Включить**. Это позволит включить {% data variables.product.prodname_github_codespaces %} для всех репозиториев и пользователей в организации. Также добавляется новая политика Codespace с ограничением типов компьютеров, которая позволяет использовать только компьютеры с 2 ядрами для всех пространств кода в организации. 
  
  ![Настройка Codespaces для организации в параметрах существующей аудитории](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

Вы можете использовать те же методы, что и выше, чтобы отключить {% data variables.product.prodname_github_codespaces %} для вашей организации. Обратите внимание, что это приведет к отключению {% data variables.product.prodname_github_codespaces %} для всех пользователей и репозиториев в организации. 

## Настройка назначения для использования {% data variables.product.prodname_codespaces %}
Чтобы сделать {% data variables.product.prodname_github_codespaces %} доступным для задания, можно выбрать {% data variables.product.prodname_github_codespaces %} в качестве поддерживаемого редактора для задания. При создании нового назначения на странице "Добавление начального кода и выбор необязательной интегрированной среды разработки в Интернете" в разделе "Добавление поддерживаемого редактора" выберите **{% data variables.product.prodname_github_codespaces %}** в раскрывающемся меню. 

![Выбор Codespaces в качестве поддерживаемого редактора для назначения](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

Если вы используете для задания репозиторий шаблонов, вы можете определить в этом репозитории контейнер разработки, чтобы настроить средства и среды выполнения, доступные учащимся при запуске пространства кода для работы над этим заданием. Если контейнер разработки не определен, {% data variables.product.prodname_github_codespaces %} будет использовать конфигурацию по умолчанию, которая содержит множество популярных средств разработки, которые могут потребоваться учащимся. Дополнительные сведения об определении контейнера разработки см. в статье [Добавление конфигурации контейнера разработки в репозиторий](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

## Запуск назначения с помощью {% data variables.product.prodname_github_codespaces %}

Когда учащийся открывает задание, файл README в репозитории содержит рекомендации преподавателя по использованию интегрированной среды разработки.

![Снимок экрана: примечание Codespaces в файле README в репозитории задания для учащихся](/assets/images/help/classroom/student-codespaces-readme-link.png)

Учащиеся могут запустить новое или существующее codespace, нажав кнопку **Открыть в GitHub Codespace** в файле README или нажав кнопку **{% octicon "code" aria-label="The code icon" %} Code** на главной странице репозитория заданий, а затем выбрав вкладку **Codespaces** . На вкладке **Codespaces** можно выбрать существующее codespace или создать новое. Дополнительные сведения см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

![Запуск нового пространства кода в репозитории назначений](/assets/images/help/classroom/student-launch-new-codespace.png)

Преподаватели могут просматривать пространство кода для задания, используемое каждым учащимся, на странице обзорных сведений о задании. Щелкните значок Codespaces в правой части строки для любого учащегося, чтобы запустить его пространство кода. 

![Общие сведения о назначении преподавателей для пространств кода учащихся](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

При подключении к пространству кода в браузере автоматически включается автосохранение. Если вы хотите сохранить внесенные изменения в репозитории, необходимо зафиксировать эти изменения и отправить их в ветвь удаленного репозитория. По умолчанию, если пространство кода не используется в течение 30 минут, истекает время ожидания и работа пространства кода прекращается. Все ваши данные будут сохранены по состоянию на момент последнего изменения. Дополнительные сведения о жизненном цикле codespace см. в разделе [Жизненный цикл codespace](/codespaces/getting-started/the-codespace-lifecycle).
