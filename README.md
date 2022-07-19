vim /usr/lib/zabbix/alertscripts/line_notify.sh
#!/bin/bash
# LINE Notify Token - Media > "Send to".
TOKEN="$1"

# {ALERT.SUBJECT}
subject="$2"

# {ALERT.MESSAGE}
message="$3"

curl https://notify-api.line.me/api/notify -H "Authorization: Bearer ${TOKEN}" -F "message=${message}"
chmod 775  /usr/lib/zabbix/alertscripts/line_notify.sh
chown zabbix:zabbix  /usr/lib/zabbix/alertscripts/line_notify.sh
