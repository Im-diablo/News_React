import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

const App = () => {
  const [category,setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <><Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
    <NewsBoard category={category} searchQuery={searchQuery}/></>
  )
}

export default App