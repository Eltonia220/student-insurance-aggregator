import { useState, useEffect } from 'react';

function App() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/plans')
      .then(res => res.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <div>
      <h1>Student Insurance Plans</h1>
      <ul>
        {plans.map(plan => (
          <li key={plan.id}>{plan.name} (${plan.price})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;