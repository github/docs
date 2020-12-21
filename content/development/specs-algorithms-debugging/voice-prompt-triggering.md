# Navigation Voice Prompt Triggering (Compiled by Hardy 2013, to be reviewed)
* Most prompts are triggered based on a fixed lead distance (which can depend on the base profile)
* For some close prompts we have a combined approach using
   * lead distance threshold
   * lead time threshold
   * GPS_TOLERANCE
   * current speed
   * DEFAULT\_SPEED of the base profile
* There is a user-configurable additional and overall VOICE\_PROMPT\_DELAY, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate VOICE\_PROMPT\_DELAY!)
* For the announcement of TARGETS and INTERMEDIATE TARGETS, there is an additional user setting ARRICAL\_DISTANCE\_FACTOR impacting the lead distance

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
GoAhead | \>3000m out, after route calculation if no other prompt is due, or (2) after a turn if next turn is more than PREPARE_LONG_DISTANCE away
<del>(TURN) PREPARE\_LONG </del> | <del>CAR: 3000m-2000m</del><br>BICYCLE: 500m-300m<br>PEDESTRIAN: 100m-70m
(TURN) PREPARE | CAR: 1500m-1200m  
BICYCLE: 200m-120m
PEDESTRIAN: 100m-70m
TURN\_IN | CAR: 300m-168m or \<25sec
BICYCLE: 80m-60m or \<16sec
PEDESTRIAN: 50m-30m or \<25sec
TURN | CAR: \<60m or \<5sec
BICYCLE: \<30m or \<6sec
PEDESTRIAN: 15m or \<7.5sec
ALARMS | 
approach points | 
arrive at destinationPoint | GPS_TOLERANCE, defaultSpeed, ARRIVAL\_DISTANCE\_FACTOR
arrive at waypoint
nearby POI
nearby FAVORITE

Notes:
* Values as of 2013 to be checked, we may have changed at some point.
* We mute TURN instructions immediately once your direction of travel or current position is not any more in line with the turn to be announced (account for GPS issues).
