import { ContactStyle } from './ContactStyle'


const Contact = () => {
  return (
    <ContactStyle>
    <div className="login-box">
    <form>
      <div className="user-box">
        <input type="text" name=""/>
        <label>Name</label>
      </div>
      <div className="user-box">
        <input type="text" name=""/>
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="text" name=""/>
        <label>Message</label>
      </div><center>
      <a href="#">
             SEND
         <span>

         </span>
      </a></center>
    </form>
  </div>
  </ContactStyle>
  )
}

export default Contact