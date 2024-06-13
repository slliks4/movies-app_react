// React imports

// Hooks Imports
import useFetch from '../../hooks/useFetch';

// Function
export default function GetMovies({ searchQuery }){
  const query = searchQuery ? searchQuery : null;
  
  const { isPending, response, error } = useFetch({
    
  })
}
