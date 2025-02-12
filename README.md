# Streamify Analytics Dashboard

A modern, responsive analytics dashboard for a music streaming service built with React, Recharts, and Bootstrap.

## Overview

Streamify Analytics Dashboard is a single-page application that provides real-time insights into user activity, revenue, and content performance for a music streaming platform. The dashboard features interactive charts, sortable tables, and key performance metrics.

## Features

- **Key Metrics Display**

  - Total Users
  - Active Users
  - Total Streams
  - Revenue
  - Top Artist
  - Trend indicators for metrics

- **Interactive Data Visualizations**

  - User Growth Line Chart
  - Revenue Distribution Pie Chart
  - Top Songs Bar Chart
  - Responsive and interactive charts with tooltips

- **Sortable Data Table**
  - Search functionality
  - Column sorting
  - Formatted numbers and dates
  - Responsive design

## Technology Stack

- React
- Webpack (Bundler tool)
- Bootstrap (Styling)
- Recharts (Data visualization)
- Lucide React (Icons)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/         # React components
│   ├── Charts.jsx     # Data visualization components
│   ├── DataTable.jsx  # Interactive table component
│   └── MetricCard.jsx # Metric display component
├── data/
│   └── mockData.js    # Sample data for development
├── App.js            # Main application component
```

## Design Decisions and Trade-offs

### Component Architecture

- **Decision**: Used functional components with hooks for better performance and maintainability
- **Trade-off**: Sacrificed some TypeScript type safety for simpler JavaScript implementation

### State Management

- **Decision**: Used React's built-in useState for local state management
- **Trade-off**: Opted for simplicity over more complex state management solutions like Redux, as the application's scope didn't require global state management

### Data Visualization

- **Decision**: Chose Recharts for its ease of use and good performance
- **Trade-off**: Accepted larger bundle size for better developer experience and feature set

### Styling

- **Decision**: Used Tailwind CSS for rapid development and consistent design
- **Trade-off**: Increased HTML complexity for faster development and better maintainability

### Performance Optimizations

- Implemented search debouncing in the data table
- Used CSS Grid and Flexbox for responsive layouts
- Optimized re-renders using proper React patterns

## Future Improvements

1. Add data persistence and backend integration
2. Implement user authentication
3. Add more interactive features to charts
4. Include data export functionality
5. Add more detailed analytics and filters
6. Implement real-time updates
7. Add unit tests and end-to-end testing

## Performance Considerations

- Optimized bundle size by using modern build tools
- Implemented proper React patterns to minimize re-renders
- Used CSS-in-JS sparingly to maintain performance
- Implemented responsive design patterns for all screen sizes

## Browser Support

The dashboard is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
