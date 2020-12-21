# Navigation Voice Prompt Triggering (Compiled by Hardy 2013, to be reviewed)
* Most prompts are triggered based on a fixed lead distance (which can depend on the base profile)
* For some close prompts we have a combined approach using
   * lead distance threshold
   * lead time threshold
   * GPS_TOLERANCE
   * current speed
   * DEFAULT_SPEED of the base profile
* There is a user-configurable additional and overall VOICE_PROMPT_DELAY, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate VOICE_PROMPT_DELAY!)
* For the announcement of TARGETS and INTERMEDIATE TARGETS, there is an additional user setting ARRICAL_DISTANCE_FACTOR impacting the lead distance

### Base Profile Default Speeds
* CAR: 12 m/s = 43 km/h
* BICYCLE: 5 m/s = 18 km/h)
* PEDESTRIAN: 2 m/s=7.2 km/h
* These are now also user-adjustable!

### "Route calculated/Route recalculated"
Is played after the route has been calculated or recalculated, together with saome base data, depending on the chattiness of the voice package selected.

### "GPS signal lost"

Is played after GPS signal has been lost for continuous 20 sec and this was not caused by user action.

### "Make a U-turn when possible"

Mostly suppressed now. Should only sound if no route in forward direction was found at all (e.g. if you are heading down a one way road), or if a route in forward directiom is decisively longer. 

### Trigger Behavior:
Prompt type | Trigger
--- | ---
GoAhead | \>3000 m out, after route calculation if no other prompt is due, or (2) after a turn if next turn is more than PREPARE_LONG_DISTANCE away
<del>(TURN) PREPARE_LONG </del> | <del>CAR: 3000 m - 2000 m</del><br>BICYCLE: 500 m - 30 0m<br>PEDESTRIAN: 100 m - 70 m
(TURN) PREPARE | CAR: 1500 m - 1200 m<br>BICYCLE: 200 m - 120 m<br>PEDESTRIAN: 100m-70m
TURN_IN | CAR: 300m-168m or \<25sec<br>BICYCLE: 80m-60m or \<16sec<br>PEDESTRIAN: 50m-30m or \<25sec
TURN | CAR: \<60m or \<5sec<br>BICYCLE: \<30m or \<6sec<br>PEDESTRIAN: 15m or \<7.5sec
ALARMS | 
approach points | 1400m
arrive at destinationPoint | 5sec * ARRIVAL_DISTANCE_FACTOR
arrive at waypoint | Treat like destination
passing nearby POI | to be discussed
passing nearby FAVORITE | to be discussed

Notes:
* Values as of 2013 to be checked, we may have changed at some point.
* We mute TURN instructions immediately once your direction of travel or current position is not any more in line with the turn to be announced (account for GPS issues).
