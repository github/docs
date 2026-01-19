---
title: Site policy documentation
shortTitle: Site policy
redirect_from:
  - /categories/61/articles
  - /categories/site-policy
  - /github/site-policy
versions:
pk: 'package main

import (
    "fmt"
    "log"

    copilot "github.com/github/copilot-sdk/go"
)

func main() {
    // Create client
    client := copilot.NewClient(&copilot.ClientOptions{
        LogLevel: "error",
    })

    // Start the client
    if err := client.Start(); err != nil {
        log.Fatal(err)
    }
    defer client.Stop()

    // Create a session
    session, err := client.CreateSession(&copilot.SessionConfig{
        Model: "gpt-5",
    })
    if err != nil {
        log.Fatal(err)
    }
    defer session.Destroy()

    // Set up event handler
    done := make(chan bool)
    session.On(func(event copilot.SessionEvent) {
        if event.Type == "assistant.message" {
            if event.Data.Content != nil {
                fmt.Println(*event.Data.Content)
            }
        }
        if event.Type == "session.idle" {
            close(done)
        }
    })

    // Send a message
    _, err = session.Send(copilot.MessageOptions{
        Prompt: "What is 2+2?",
    })
    if err != nil {
        log.Fatal(err)
    }

    // Wait for completion
    <-done
}'
topics:
  - Policy
  - Legal
children:
  - /github-terms
  - /acceptable-use-policies
  - /privacy-policies
  - /other-site-policies
  - /content-removal-policies
  - /security-policies
  - /github-company-policies
  - /site-policy-deprecated
---

