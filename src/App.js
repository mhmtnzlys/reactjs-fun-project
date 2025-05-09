// src/App.js
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Bu örnekte Google yerine örnek bir API kullanıyoruz
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => console.log('Fetched data:', data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
