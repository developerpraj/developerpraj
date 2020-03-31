 
  // Config object to be passed to Msal on creation
  const msalConfig = {
    auth: {
      clientId: "3e6f7b8a-c950-489f-af64-19b575aa4ca4",
      authority: "https://login.microsoftonline.com/organizations",
      redirectUri: "http://localhost:30662/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
      forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new
    }
  };  
  
  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"],
  };
