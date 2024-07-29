import './App.css'
import { isMobile, isTablet, isMobileOnly, browserName, browserVersion, isSafari } from 'react-device-detect';

function App() {

  return (
      <div>
        <p>isMobile: {isMobile ? 'Yes' : 'No'}</p>
        <p>isTablet: {isTablet ? 'Yes' : 'No'}</p>
        <p>isMobileOnly: {isMobileOnly ? 'Yes' : 'No'}</p>
        <p>Browser: {browserName}</p>
        <p>Browser Version: {browserVersion}</p>
        <p>is Safari: {isSafari? 'Yes' : 'No'}</p>
      </div>
  )
}

export default App
