import { useNavigate, useSearchParams } from "react-router-dom"

const Profile = ()=>{

    // URL - http://localhost:5173/profile?profile=true#nirmeet

    const [searchParams] = useSearchParams()

    console.log(searchParams.get('profile'));


    return (
      <>
        Profile
      </>
    )
  }
  
  export default Profile