---
title: Navigation Voice Prompt Triggering
versions: '*'
---

**(Compiled by Hardy 2013, last reviewed 2021-01)**
## Principle
* Far-out prompts are simply triggered based on a **lead distance threshold**, derived by converting a meaningful lead time via the DEFAULT_SPEED of the base profile.
* For close prompts there is a combined approach using the
   * **lead distance threshold**, derived as above, but no later than the
   * **lead time threshold** as calculated using the current speed.
   * We pre-pone by the **POSITIONING_TOLERANCE** to allow for the possible distance over-estimation due to the positioning error.
* In addition, there is a user-configurable overall `VOICE_PROMPT_DELAY`, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate `VOICE_PROMPT_DELAY`!)
* For the announcement of TARGETS and INTERMEDIATE TARGETS, there is an additional user setting `ARRIVAL_DISTANCE_FACTOR` scaling the lead distance by a factor between 0.25 and 1.5.
* We mute prompts immediately once they appear to refer actions already passed, or if your direction of travel seems no in line with a current route.

## Base Profile Default Speeds
While these are now also user-adjustable, the defaults are
* DRIVING: 12 m/s (43 km/h)
* CYCLING: 5 m/s (18 km/h)
* WALKING: 2 m/s (7.2 km/h)

## Trigger Behavior
Prompt type | Trigger,<br>Lead intervals| Refactored:<br>[typical trigger distance]
--- | --- | ---
GoAhead | >3000 m out, after route calculation if no other prompt is due, or after a turn if next turn is more than PREPARE_LONG_DISTANCE away | PREPARE_LONG_DISTANCE = DEFAULT_SPEED * 300<br><br>[DRIVING: 3600 m, WALKING: 600 m]
<del>LONG_PREPARE_TURN</del> | We now suppress this prompt as per user feedback<br><del>DRIVING: 3000 m - 2000 m<br>CYCLING: 500 m - 300 m<br>WALKING: 100 m - 70 m</del>
PREPARE_TURN | DRIVING: 1500 m - 1200 m<br>CYCLING: 200 m - 120 m<br>WALKING: 100 m - 70 m | PREPARE_DISTANCE = DEFAULT_SPEED * 115<br><br>[DRIVING: 1380 m, WALKING: 230 m]
TURN_IN | DRIVING: 300 m - 168 m or <25 sec<br>CYCLING: 80 m - 60 m or <16 sec<br>WALKING: 50 m - 30 m or <25 sec | TURN_IN_DISTANCE = DEFAULT_SPEED  * 22<br><br>[DRIVING: 264 m, WALKING: 44 m]
TURN_NOW | DRIVING: <60 m or <5 sec<br>CYCLING: <30 m or <6 sec<br>WALKING: 15 m or <7.5 sec | TURN_NOW_DISTANCE = (POSITIONING_TOLERANCE + DEFAULT_SPEED \* 2.5) * manual_factor<br><br>[DRIVING: 42 m, WALKING: 17 m]<br><br>**Suggestion:** Remove ARRIVAL_DISTANCE_FACTOR
Make a U-turn when possible | Mostly suppressed now. Should only sound if no route in forward direction was found at all (e.g. if you are heading down a one way road), or if a route in forward direction
ALARMS | 150 m<br>(100 m for TRAFFIC_CALMING) | LONG_ALARM_ANNOUNCE_RADIUS = 12 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[144 m, 24 m]<br>SHORT_ALARM_ANNOUNCE_RADIUS = 7 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[84 m, 14 m]<br><br>**Suggestion:** Factor in current speed like for TURN_NOW, remove ARRIVAL_DISTANCE_FACTOR
APPROACH a point | 1400 m | LONG_PNT_ANNOUNCE_RADIUS = 60 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[1920 m, 120 m]<br>SHORT_PNT_ANNOUNCE_RADIUS = 15 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[180 m, 30 m]<br><br>**Suggestion:** Remove ARRIVAL_DISTANCE_FACTOR
ARRIVE at destination or intermediate destination point | 5 sec * ARRIVAL_DISTANCE_FACTOR | **Suggestion:** Use 2 * TURN_NOW
ARRIVE at waypoint | | **Suggestion:** Treat like ARRIVE at destination
PASSING nearby POI | no threshold | **Suggestion:** Treat like ARRIVE at destination, but for its along-the-route distance component
PASSING nearby FAVORITE | no threshold | **Suggestion:** Treat like ARRIVE at destination, but for its along-the-route distance component
GPS signal lost | Is played after GPS signal has been lost for continuous 20 sec and this was not caused by user action.

