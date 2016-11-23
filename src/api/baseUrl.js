export default function getBaseUrl(){
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment? 'http://localhost:3001/' : '/'; //lets assume the api that we r serving from buildScripts/srcServer is a production one
}
