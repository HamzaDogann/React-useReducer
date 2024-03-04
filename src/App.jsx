import { useReducer } from "react"
//! UseReducer hook için react üzerinden çağırıyoruz.

const App = () => {
  //! initialState yani statelerimizin ilk değerlerini belirliyoruz şimdilik boş bırakıyoruz.
  const initialState = {
    username: "",
    email: "",
    password: ""
  }

  //! Reducer Fonksiyonumuzu tanımlıyoruz.
  // State, initialState olacak ve güncellendikçe state güncellenmiş değerleri içerecek.
  // Action, dispatch tarafından gönderilen aksiyon ifadesini tutmak için var.
  const formReducer = (state, action) => {
    switch (action.type) {

      // action.type yani bize gönderilen aksiyon ifadesi ne ise onu tutuyor.
      case "USERNAME":
        //! eğer action.type değerimiz yani dispatch tarafından gönderilen değer "USERNAME" ise aşağıdaki işlemleri yap.

        return {
          ...state,
          username: action.value
        }

      // return ifadesi içinde spread operatörü ile mevcut state değerlerinin bir kopyasını alıp
      // üstüne yeni işlemlerimizi ayarlıyoruz. "username" değerini dispatch tarafından gönderilen value ile eşitliyoruz.

      case "EMAIL":
        //! eğer action.type değerimiz yani dispatch tarafından gönderilen değer "EMAIL" ise aşağıdaki işlemleri yap.

        return {
          ...state,
          email: action.value
        }

      // return ifadesi içinde spread operatörü ile mevcut state değerlerinin bir kopyasını alıp
      // üstüne yeni işlemlerimizi ayarlıyoruz. "email" değerini dispatch tarafından gönderilen value ile eşitliyoruz.

      case "PASSWORD":
        //! eğer action.type değerimiz yani dispatch tarafından gönderilen değer "PASSWORD" ise aşağıdaki işlemleri yap.

        return {
          ...state,
          password: action.value
        }

      // return ifadesi içinde spread operatörü ile mevcut state değerlerinin bir kopyasını alıp
      // üstüne yeni işlemlerimizi ayarlıyoruz. "password" değerini dispatch tarafından gönderilen value ile eşitliyoruz.

      default:
        return { state }
      // Eğer herhangi bir action.type bilgisi gelmez ise güncellenmeden eski halini döndürüyoruz.
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialState)
  // formState= statelerimizi tutan ana state gibi düşünebiliriz.
  // dispatch = İstediğimiz aksiyonu("USERNAME" ya da "PASSWORD" gibi) formReducer'e göndermek için kullandığımız yapı oluyor.
  //  useReducer = React Hook
  // formReducer = Gelen aksiyonlara karşı yapılacak işlemleri yaptığımız fonksiyonumuz.
  // initialState = bütün belirlediğimiz stateler ve ilk halleri yani boş hallerini tutuyor. "initial(Başlangıc,ilk hali)"

  const handleSumbit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log(`Username: ${formState.username} Password: ${formState.password} Email:  ${formState.email}`);
    }, 1000);
  }
  // Form submit işlemi olduktan sonra alınacak aksiyonlar...

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  }
  //! Önemli bir kısım, input elemanlarından gelen değerleri e.target ile name ve value ile yakalayıp
  //! dispatch methodumuza yerleştiriyoruz. type göndereceğimiz aksiyon adımız. ve içeriğimiz olan value ile beraber
  //! bu değerleri formReducer fonksiyonumuza gönderiyoruz...

  return (
    <div >
      <form className="form-box" onSubmit={handleSumbit}>
        <input type="text" name="USERNAME" value={formState.username} onChange={handleChange} />
        <input type="email" name="EMAIL" value={formState.email} onChange={handleChange} />
        <input type="password" name="PASSWORD" value={formState.password} onChange={handleChange} />
        <button className="btn-submit">Gönder</button>
      </form>
    </div>
  )
}
//  Bir Form yapısı... inputlar içindeki "name" type olacak ve dispatch bunu kullansın istiyoruz.
// value ise güncellenenen stateleri yazıyor.

export default App

// Umarım faydalı olmuştur :)
// Hamza Doğan - Software Developer - React - Frontend