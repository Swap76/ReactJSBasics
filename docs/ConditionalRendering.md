---
Title: Conditional Rendering
Keywords: react, javascript, conditional rendering
---

# Conditional Rendering

Conditional rendering is an essential part of React applications. It allows you to render or not render parts of your application based on certain parts of your application state.


## Basic Example

```js
// MyComponent.js

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSomeData().then(() => setIsLoading(false))
  }, []);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  return (
    <h1>Loading is finished</h1>
  );
}
```

In this example, the component is initialized with an initial state of `isLoading = true`. The conditional render happens when the `isLoading` state is checked to see wheter it is true or not.
If the `isLoading` state is true the text, "Loading...", else the text, "Loading is finished" is rendered.

## More Advanced Example

```js
// Gallery.js

import React, { useState, useEffect } from 'react';

async function fetchGalleryImages() {
  const photoList = await fetch("https://picsum.photos/v2/list");
  return photoList.json();
}

function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchGalleryImages().then(photos => {
      console.log(photos);
      setPhotos(photos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return photos.map(photo => (
    <img
      key={photo.id}
      src={photo.download_url}
      style={{ width: 50, height: 50 }}
    />
  ));
}
```

Here, gallery images are fetched from a remote server. The images are rendered only if the `isLoading` state is false. After the images are fetched and the `isLoading` state is changed to `false`, then the images are rendered.
