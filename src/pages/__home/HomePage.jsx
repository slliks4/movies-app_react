// Imports
import { apiKey, apiUrl } from '../../config/api';

// Function
export default function HomePage() {
  console.log(apiKey, apiUrl)
  return (
    <div>
        <div id="movieResults"></div>
        <div id="movieImgBlock"></div>
    </div>
  )
}
