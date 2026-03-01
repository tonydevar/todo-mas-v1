# Specification: Simple To-Do List Webapp (todo-mas-v1)

## Project Overview
A simple, responsive, and modern To-Do List web application. The app allows users to manage their daily tasks with essential features like adding, completing, deleting, and filtering tasks.

## Features
- **Add Tasks:** Users can enter task text and add it to the list.
- **Mark as Complete:** Users can toggle the completion status of a task. completed tasks should be visually distinct (e.g., strikethrough).
- **Delete Tasks:** Users can remove tasks from the list.
- **Filter by Status:**
    - **All:** Show all tasks.
    - **Active:** Show only incomplete tasks.
    - **Completed:** Show only completed tasks.
- **Persistence:** Task data should persist across page reloads using `localStorage`.

## Tech Stack
- **HTML5:** Semantic structure.
- **CSS3:** Modern styling with CSS Variables and Flexbox/Grid.
- **JavaScript (ES6+):** Vanilla JS for logic and DOM manipulation.

## File Structure
- `index.html` - Entry point and UI structure.
- `style.css` - Design and layout (provided by UX agent).
- `app.js` - Application logic and state management.
- `README.md` - Project documentation.

## Data Model
A task object will consist of:
```json
{
  "id": "timestamp-or-uuid",
  "text": "Task description",
  "completed": false
}
```

## UI Components
- **Header:** Title of the application.
- **Input Area:** Text field and "Add" button.
- **Filter Bar:** Buttons for "All", "Active", and "Completed".
- **Task List:** Container for task items.
- **Task Item:** Displays task text, a checkbox/toggle for completion, and a delete button.

## Edge Cases
- Empty input: Prevent adding empty or whitespace-only tasks.
- Long task text: Ensure text wraps correctly without breaking the layout.
- No tasks: Show a friendly "No tasks found" message when the list or filter is empty.

## Testing Criteria
- Adding a task displays it immediately in the "All" and "Active" views.
- Clicking delete removes the task from the view and storage.
- Toggling completion updates the UI and persists on reload.
- Switching filters correctly shows/hides the appropriate tasks.
