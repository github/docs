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

Shows the distance from users location to the parking place in meters <br>
<!-- можно добавить что Unit s можно изменить в
To change units format follow {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.unit_of_length %}. <br> -->

User can enable Parking widget in Configure screen menu. <br>

Can’t be configured without ‘Parking position’ plugin <!-- add link 'Parking position’ plugin-->  <br>

To mark parking place on the map user have to: <br>
Step 1: Zoom the map <br>
Step 2: Make the long tap on the map  <br>
Step 3: Click ‘Actions’ bottom  <br>
Step 4: Choose ‘Mark as parking location’ <br>
Step 5: Choose parking options Time-unlimited vs Time-limited parking <br>

The next menu will show the configurations of the parking spot such as parking time and date, information about parking limitation, distance from the current location to the parking spot. <br>
User can delete the parking location marker  anytime with the bottom ‘Delete’. And it will be removed from the calendar if this option has been chosen earlier.<br>

If the user chooses the Time-limited parking at Step 5 it will give him an option to Set a parking time limit. <br>
There are two ways to configure the parking time limit. The first one is to tap on the left/right part of the electronic watch and to move the arrow on the numeral clocks below to set hours/minutes accordingly. The second way is to tap the small keyboard  image under numeral clocks and set the time manually. <br>
The user can optionally add a notification to the Calendar app via tick a checkbox and press ok. <br> <!-- (появляется новое окно! Что это за окно? Это вид заметки календаря?) -->
User can add extra information and press the ‘Save’ button in the upper-right corner. <br>

## Trip recording (REC) widget

Used to get the quick access to recording button. <br>

User can enable Trip recording widget in Configure screen menu. <br>

The User has to configure Trip recording (REC) settings first. When the user clicks the REC widget it will see the settings screen menu. <br>
<!-- добавить картинки Android IOS Каждое описать отдельно--->
Pressing the toggle button (switcher) will show track on the map. <br>
While the button next to the  toggle button (switcher) will give the user an opportunity to change track’s appearance. User can change color, width and enable/disable  direction arrows and show start and finish icons. <br>
<!-- На данный момент изменить цвет записываемого трека во время симуляции из этого меню не удалось. Переписка в саппорт чате от 16.02 17:36 -->
Optionally, user can configure Custom width by moving slider from 1 to 24. <br>
<!-- не получила ответа на вопрос в каких единицах измеряются цифры на ползунке и чем эти цифры лучше/хуже   или толще /худее относительно других категорий width Переписка в саппорт чате от 16.02 17:49. проведенный мною эксперимент  привел к мысли что это настройка вообще не работает-->

In the same menu user can configure the logging interval from 0 seconds to 5 minutes. <br>
The Logging interval controls the frequency of appeals to GPS sensors.
If a user wants to apply all configurations to the other REC tracks the toggle button (switcher)  ‘Always ask’ should be on.
When all settings are set, user can push the button ‘Start recording’
<!-- Не нашла способа как сбросить настройки установленные. ВКЛ/выкл виджета и плагина не помогает. -->
The Logging interval can be additionally checked/ changed in Menu – Configure profile – Trip recording – Logging interval during navigation


Can’t be configured without [Trip recording plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#trip-recording-plugin)  <br>

## Audio-video notes widget

Can’t be configured without [Audio-video notes plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#audio-video-notes-plugin)  <br>

## Tracker widget

Can’t be configured without [Tracker plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#tracker-widget-plugin)  <br>

## Mapillary widget

Can’t be configured without [Mapillary plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#mapillary-plugin)  <br>
