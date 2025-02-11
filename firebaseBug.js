The Firebase SDK's `onAuthStateChanged` listener might not trigger immediately after a successful authentication, leading to race conditions where parts of your application try to access user data before it's available.  This is exacerbated when using asynchronous operations within the listener.