# Search Input

This directory contains the view logic (React components) for:

- The search button (that looks like an input)
- The search overlay (that pops up when you press the search button)
  - The search overlay shows autocomplete suggestions as the user types
  - If the user selects a general search option, we use [../results](../results) to render a new page with results
  - If the user selects an "Ask AI" search option, we show AI Results
- AI Results: This component "takes over" a large part of the search overlay after a user asks AI a question.