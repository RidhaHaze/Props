import './App.css';
import Profile from '../src/Profilee/Profile'

function Parent() {

  const handleAlert=()=>{
    alert("RBR")
  }



  return (
    <div className="App">
    <Profile  Fullname="ridha Benrekhissa" Bio="Study React" Profession="Front End Dev" handleAlert={handleAlert} 
     > 
  <img src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'  alt='pho' />
     </Profile>
    </div>
  )
}


export default Parent;
