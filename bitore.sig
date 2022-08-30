{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "value": "=:' [VOLUME]DENOMINATION",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector",
    },
  ]
}
