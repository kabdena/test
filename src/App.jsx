import './App.css'
import { isMobile, isMobileOnly, browserName, browserVersion } from 'react-device-detect';

function App() {

  return (
      <div>
        <p>isMobile: {isMobile ? 'Yes' : 'No'}</p>
        <p>isMobileOnly: {isMobileOnly ? 'Yes' : 'No'}</p>
        <p>Browser: {browserName}</p>
        <p>Browser Version: {browserVersion}</p>
      </div>
  )
}

export default App
