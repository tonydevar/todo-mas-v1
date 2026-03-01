# Design Document - todo-mas-v1

## Overview
This document outlines the visual design decisions for the Simple To-Do List web application. The design follows a modern glassmorphism aesthetic with smooth animations and a clean, accessible interface.

## Design Philosophy

### 1. Glassmorphism Aesthetic
- **Translucent cards** with backdrop blur create depth and visual hierarchy
- **Subtle borders** (rgba white) simulate glass edges
- **Soft shadows** with color tinting enhance the glass effect
- **Layered transparency**: Body → Card → Task Items

### 2. Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #6366f1 | Buttons, active states, checkboxes |
| Primary Light | #818cf8 | Hover states, borders |
| Purple Accent | #8b5cf6 | Gradient highlights |
| Danger | #ef4444 | Delete actions |
| Text Primary | #1f2937 | Main content |
| Text Secondary | #6b7280 | Supporting text |
| Text Muted | #9ca3af | Disabled/completed states |

### 3. Background
- **Gradient mesh**: Soft purple/blue/indigo blend (#e0e7ff → #f3e8ff → #e0f2fe)
- **Fixed attachment**: Creates parallax-like depth on scroll
- **Light base**: Ensures glass effect is visible and readable

## Components

### Header
- **Gradient text**: Primary-to-purple gradient on "To-Do List" title
- **Subtitle**: Muted description below title
- **Centered alignment**: Clean visual anchor

### Input Area
- **Glass input field**: Semi-transparent background with focus glow
- **Gradient add button**: Primary-to-purple gradient with hover lift effect
- **Focus states**: Visible focus ring for accessibility (3px primary at 15% opacity)

### Filter Bar
- **Pill-shaped buttons**: Rounded, friendly appearance
- **Active state**: Solid primary background
- **Inactive state**: Semi-transparent with hover reveal

### Task Items
- **Card-style**: Slight transparency with blur
- **Hover effect**: Brightens on hover with subtle shadow
- **Checkbox**: Custom styled with checkmark animation
- **Completed state**: Strikethrough text, muted color

### Delete Button
- **Subtle by default**: Gray, unobtrusive
- **Danger on hover**: Red background reveals intent
- **SVG icon**: Clean trash icon

## Animations

### Task Entry
- **Slide-in**: Tasks animate in from above with fade
- **Duration**: 300ms ease-out

### Interactions
- **Hover transforms**: Buttons lift 2px on hover
- **Focus transitions**: 150-200ms for all state changes

## Responsive Design

### Mobile (< 480px)
- Reduced padding
- Smaller header text
- Touch-friendly tap targets (32px minimum)

### Desktop
- Centered card (max-width: 500px)
- Generous whitespace
- Comfortable reading width

## Accessibility Considerations

1. **Focus indicators**: Visible focus rings on all interactive elements
2. **Color contrast**: Text maintains WCAG AA compliance
3. **Touch targets**: Minimum 32px for buttons and checkboxes
4. **Semantic HTML**: Proper heading hierarchy, labels, and button roles

## CSS Architecture

### Variables
All colors, spacing, typography, and transitions use CSS custom properties for:
- Easy theming
- Consistent design tokens
- Simple maintenance

### BEM-like Naming
- `.task-item` — block
- `.task-item--completed` — modifier
- `.task-list__item` — element (not used here for simplicity)

## Files Delivered

1. **style.css** — Complete styling (~350 lines)
2. **design.md** — This document

## Next Steps for Dev Agent

The CSS expects the following HTML structure:
- `.container` wrapper
- `.glass-card` for main content
- `.header` with h1 and p
- `.input-group` with input and button
- `.filter-bar` with filter buttons
- `.task-list` container
- `.task-item` for each task with checkbox, text, and delete button
- `.empty-state` for no-task message