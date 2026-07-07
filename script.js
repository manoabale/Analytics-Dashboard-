// Analytics Chart Example
const ctx = document.getElementById('analyticsChart').getContext('2d');
const analyticsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Commits',
        data: [50, 75, 60, 90],
        borderColor: '#3498db',
        fill: false
      },
      {
        label: 'Issues',
        data: [20, 15, 25, 10],
        borderColor: '#e74c3c',
        fill: false
      },
      {
        label: 'Pull Requests',
        data: [5, 8, 6, 10],
        borderColor: '#2ecc71',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Example refresh button
document.getElementById('refresh').addEventListener('click', () => {
  alert("Analytics data refreshed!");
});
