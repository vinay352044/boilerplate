import React from 'react'

const LazyComponent = () => {
  return (
    <div>
      This component will load in lazy loading format
    </div>
  )
}

export default LazyComponent
// The benefit of lazy loading is that ,it loads the code when it is actually required. This can improve initil loading time of your application

// lazy() is used to dynamically import components only when they’re needed.

// Suspense is a component provided by React that lets you “wait” for the dynamic import to load, showing a fallback UI in the meantime (in this case, a simple “Loading…” message).