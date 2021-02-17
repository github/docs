---
title: "Action widgets"
intro: "Display information that is provided by additional plugins."
versions: '*'
---

<!-- ## Parking (plugin)
## Trip recording (plugin)
## Audio-video notes (plugin)
## Tracker widget (plugin)
## Mapillary (plugin)
## Link to quick-action-->

## Parking widget <!--for Android-->

Shows the distance from users location to the parking place in default distance units <br>
<!-- можно добавить что Unit s можно изменить в -->
To change default distance units follow {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.unit_of_length %}. <br>

IMPORTANT: Enable ‘Parking position’ plugin to use Parking widget. <br>

User can enable Parking widget in Configure screen menu. <br>

<!-- Can’t be configured without ‘Parking position’ plugin <!-- add link 'Parking position’ plugin-->  
To mark parking place on the map user has to: <br>
Step 1: Zoom in the map <br>
Step 2: Make the long tap on the map  <br>
Step 3: Click ‘Actions’ button <br>
Step 4: Choose ‘Mark as parking location’ <br>
Step 5: Choose one of the parking options Time-unlimited or Time-limited parking <br>

The following menu will show the configurations of the parking spot such as parking time and date, information about parking limitation, distance from the current location to the parking spot. <br>
User can delete the parking location marker anytime with ‘Delete’ button. It will be removed from the map and from the calendar if such option has been chosen earlier.<br>

If Time-limited parking has been selected at Step 5 a user can set the parking time interval.
There are three ways to configure the parking time limit. The first one is by using the electronic watch control and the second one is by using analogue watch control. The third way is to tap the small keyboard image under numeric clock and set the time manually. <br>
The user can optionally add a notification to the Calendar by selecting appropriate option with the checkbox below. Click Ok when done.<br> <!-- (появляется новое окно! Что это за окно? Это вид заметки календаря?) -->
User may also add some extra information on the calendar screen appeared and press the ‘Save’ button in the upper-right corner to save an event to the default device calendar. <br>

## Trip recording (REC) widget

Is used to get the quick access to recording button. <br>

IMPORTANT: Enable ‘Trip recording’ plugin before attempting to use Trip recording widget <br>

User can enable Trip recording widget in Configure screen menu. <br>

Before recording the trip a Trip recording settings to be defined. Trip recording settings menu is displayed when user clicks on the REC widget. <br>
<!-- добавить картинки Android IOS Каждое описать отдельно--->
In the REC settings menu user can enable Show track on the map feature and configure the style of the track line. <br>
The 'Line configuration button' next to the toggle button 'Show track on the map' switcher gives the user an opportunity to change track appearance. User may change the color, width and enable/disable direction arrows, enable show start and finish icons. <br>
<!-- На данный момент изменить цвет записываемого трека во время симуляции из этого меню не удалось. Переписка в саппорт чате от 16.02 17:36 -->
Optionally, user can configure Custom width by moving slider from 1 to 24. <br>
<!-- не получила ответа на вопрос в каких единицах измеряются цифры на ползунке и чем эти цифры лучше/хуже   или толще /худее относительно других категорий width Переписка в саппорт чате от 16.02 17:49. проведенный мною эксперимент  привел к мысли что это настройка вообще не работает-->

In the REC Settings menu user can configure the logging interval from 0 seconds to 5 minutes. <br>
The Logging interval controls the frequency of queries to the GPS sensor along with frequency of new dots appearing in the track line.
If a user wants to apply all configurations to all others tracks recorded in future, the toggle button (switcher) ‘Always ask’ should be off. Please leave this switcher in 'on' position to be able to configure tracks individually.
When all settings are defined, user can push the ‘Start recording’ button
<!-- Не нашла способа как сбросить настройки установленные. ВКЛ/выкл виджета и плагина не помогает. -->
The Logging interval can be additionally checked/ changed in Menu – Configure profile – Trip recording – Logging interval during navigation


Can’t be configured without [Trip recording plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#trip-recording-plugin)  <br>

## Audio-video notes widget

Can’t be configured without [Audio-video notes plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#audio-video-notes-plugin)  <br>

## Tracker widget

Can’t be configured without [Tracker plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#tracker-widget-plugin)  <br>

## Mapillary widget

Can’t be configured without [Mapillary plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#mapillary-plugin)  <br>
