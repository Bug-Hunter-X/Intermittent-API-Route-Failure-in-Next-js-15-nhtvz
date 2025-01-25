```javascript
// pages/index.js
import {useEffect, useState} from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const json = await response.json();
      setData(json);
    };

    //Added a small delay to ensure the API route can respond before the fetch call completes. 
    setTimeout(() => {
      fetchData();
    }, 100);
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.text}</h1>
    </div>
  );
}
```

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This is a Next.js API route.  It will be run on the server.
  res.status(200).json({ text: 'Hello' });
}
```