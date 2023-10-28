import LogInImage from "./FirstImage"
import Yellowpic from './YellowShadow';
import LogInImage2 from "./SecondImage"
import Bluepic from './BlueShadow';
const LogInInput = () => {
    return (
        <div className="logInDiv">
        <h1 className='title'>Make the most of your professional life</h1>
        <input type="text" placeholder="Email or telephone number" />
        <input type="password" placeholder="password (6 or more characters)" />
        <p className='privacyPolicyP'>By clicking Agree & Join, you agree to the LinkedIn <span> User Agreement, Privacy Policy,</span> and <span>Cookie Policy. </span> </p>
        <button className='Loginbutton'>Login</button>
        <Yellowpic />
        <Bluepic />
        <LogInImage />
        <LogInImage2 />
       
        </div>
    )
}


export default LogInInput































//უსეტატე აისახება ცვლილება
//უსეეფფეცტ როცა კომპონენტი ჩაიტვირთა მაშინ შეიცვალა ონლი // [დეფენდენცი]
//მემო ბევრჯერ არ ჩაიტვირთოს უაზროდ, ერთი კომპონენეტი რო რენდერდება მაგის შვილი კომპონენტებიც რენდერდებიან და ამის თავიდან ასაცილებლად გვაქვს მემო
// უსექალლბაცკ - როცა ფროფსს გადავცემთ მემო არ მუშაობს და რო იმუშაოს მაშინ ვიყენებთ უსქოლბექს
//სოკეტი-არაფერი რენდერდება და ფუნქცია ხდება რაც უსმენს ბექენდს-აქ არ გვჭირდება პროსტა თეკლემ წამოიყვირა
//უსემემო- ბევრ არაის რო გადაუაროს და ნელა არ იმუშაოს თან მარტო უაზრო ბათონის კლიკზე არ შემოვიდე/არ დარენდერდეეს
//