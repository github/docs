# Logging

This page provides logging tips to help you debug your applications.

## Accessing the Logger

Logging is enabled by default in this library using Ruby's standard Logger class.

You can access the library logger with the logger property of Google::Apis.

## Log Level
You can set the logging level to one of the following:

- FATAL (least amount of logging)
- ERROR
- WARN
- INFO
- DEBUG (most amount of logging)
In the following code, the logging level is set to DEBUG and the Google Plus API is called:

```rb
require 'google/apis/plus_v1'

Google::Apis.logger.level = Logger::DEBUG

plus = Google::Apis::PlusV1::PlusService.new
activities = plus.list_activities('103354693083460731603', 'public')
```

The output of this code should include debug info:

```
D, [2015-06-26T14:33:42.583914 #12144] DEBUG -- : Sending HTTP get https://www.googleapis.com/plus/v1/people/103354693083460731603/activities/public?key=...
```
