# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Project Overview

This is a React church website for "Household of Faith World Outreach" built with:
- React 19.2.0 with Vite
- React Bootstrap for UI components
- React Router for navigation
- Framer Motion for animations
- React Icons for iconography

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Preview production build
npm run preview
```

## Testing

This project currently does not have a test framework configured. When adding tests:
- Use Vitest or Jest as the test runner
- Place test files alongside components or in `__tests__` directories
- Follow the naming convention: `ComponentName.test.jsx` or `ComponentName.spec.jsx`

## Code Style Guidelines

### File Structure
- Components: `src/components/ComponentName.jsx`
- Pages: `src/pages/PageName.jsx`
- Styles: Co-located CSS files (`ComponentName.css`)
- Assets: `src/assets/`

### Import Organization
```jsx
// React imports first
import React from "react";

// Third-party libraries (alphabetical)
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Local imports (relative paths)
import Component from "./components/Component";
import "./ComponentName.css";
```

### Component Conventions
- Use functional components with React hooks
- Export components as default: `export default ComponentName;`
- Use PascalCase for component names
- Props should be destructured in the function signature
- Use arrow functions for components

### Styling Guidelines
- Prefer React Bootstrap classes over custom CSS
- Use inline styles only for dynamic values or animations
- Custom CSS should be scoped to components
- Use Bootstrap's responsive utilities (`d-md-none`, `col-lg-6`, etc.)

### Naming Conventions
- Components: PascalCase (`NavigationBar`, `ScrollToTop`)
- Variables and functions: camelCase (`handleClick`, `userProfile`)
- Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
- CSS classes: kebab-case (`navigation-bar`, `scroll-to-top`)

### JSX Formatting
- Use 2-space indentation
- Place props on separate lines when component has multiple props
- Self-closing tags for components without children
- Use fragments (`<>...</>`) instead of extra divs when possible

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects with proper dependency arrays
- Avoid prop drilling - consider context for deeply nested state

### Error Handling
- Use try-catch blocks for async operations
- Implement error boundaries for route-level error handling
- Provide user-friendly error messages

### Performance
- Use `React.memo` for components that re-render unnecessarily
- Implement proper loading states for async operations
- Optimize images and assets
- Use lazy loading for large components or routes

### Accessibility
- Include proper alt text for images
- Use semantic HTML elements
- Ensure keyboard navigation support
- Add ARIA labels where appropriate

### Bootstrap Usage
- Import components individually: `import { Container, Row } from "react-bootstrap";`
- Use Bootstrap's grid system for responsive layouts
- Leverage Bootstrap utilities for spacing and styling
- Custom styling should complement, not override, Bootstrap

### Animation Guidelines
- Use Framer Motion for animations
- Keep animations subtle and purposeful
- Respect `prefers-reduced-motion` where applicable
- Use consistent easing and timing

### Code Quality
- Run `npm run lint` before committing
- Fix all ESLint warnings and errors
- Use meaningful variable and function names
- Keep components focused and single-purpose

## Git Workflow

- Create feature branches from main
- Use descriptive commit messages
- Run linting before committing
- Ensure build passes before pushing

## Common Patterns

### Page Component Structure
```jsx
import React from "react";
import { Container } from "react-bootstrap";
import Component from "../components/Component";

const PageName = () => {
  return (
    <Container>
      <Component />
    </Container>
  );
};

export default PageName;
```

### Navigation Link Pattern
```jsx
<Nav.Link as={Link} to="/route-path" className="text-white">
  Link Text
</Nav.Link>
```

### Motion Component Pattern
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Environment Variables

This project uses Vite. Environment variables should:
- Start with `VITE_` prefix
- Be accessed via `import.meta.env.VITE_VARIABLE_NAME`
- Be documented in `.env.example` if used

## Deployment

- Build command: `npm run build`
- Output directory: `dist`
- Ensure all environment variables are configured for production