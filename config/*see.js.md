  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Karma Tests",
      "type": "npm",
      "script": "start",
      "options": {
        "env": {
          "BROWSERS": "ChromeHeadless"
        }
      },
      "isBackground": true,
      "runOptions": {
        "instanceLimit": 1
      },
      "presentation": {
        "clear": true,
        "revealProblems": "never",
        "panel": "dedicated",
        "reveal": "silent"
      },
      "problemMatcher": {
        "fileLocation": [
          "relative",
          "${workspaceFolder}"
        ],
        "severity": "error",
        "pattern": [
          {
            "regexp": "\\s+(Expected .+)",
            "message": 1
          },
          {
            "regexp": "^\\s+at <Jasmine>$"
          },
          {
            "regexp": "^\\s+at .+\\((tests\\/[^:]+):(\\d+):(\\d+)\\)$",
            "file": 1,
            "line": 2,
            "column": 3
          }
        ],
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "^SUMMARY:"
          },
          "endsPattern": {
            "regexp": "^TOTAL:"
          }
        }
      }
    }
  ]
}