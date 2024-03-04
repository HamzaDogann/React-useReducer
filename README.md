
# useReducer Nedir?

`useReducer`, React'te kullanılan bir hook'tur ve genellikle karmaşık durum yönetimi senaryolarında tercih edilir. Bu hook, bir reducer fonksiyonu ve başlangıç durumu ile birlikte kullanılır. `reducer`, mevcut duruma ve alınan aksiyona dayalı olarak yeni bir durumu üretir.

## Ne İşe Yarar?

`useReducer`, özellikle aşağıdaki durumları ele almak için kullanışlıdır:

- State durumunun karmaşıklığını yönetmek.
- Birbiriyle etkileşimde bulunan birden çok State'i güncellemek.
- State güncellemelerini daha organize bir şekilde ele almak.

## Faydaları

`useReducer` kullanmanın bazı temel faydaları şunlardır:

- **Kodun Daha Organize Olması:** Büyük ve karmaşık State yönetimi senaryolarını daha düzenli bir şekilde ele almanızı sağlar.
- **Test Edilebilirlik:** `reducer` fonksiyonları, genellikle tek bir sorumluluğa sahip olduğundan, kodunuzu daha kolay test etmenizi sağlar.
- **Birbiriyle Etkileşimde Bulunan Durumların Yönetimi:** Birden çok State arasındaki etkileşimleri daha iyi kontrol etmenizi sağlar.

## Kullanım Avantajları

`useReducer` kullanmanın bazı avantajları şunlardır:

- **State Birden Çok Aksiyonla Güncellenebilir:** Tek bir `reducer` fonksiyonu içinde farklı aksiyon türlerine göre durumu güncelleme yeteneği.
- **Karmaşık Durum Yönetimi:** Karmaşık state senaryolarını daha etkili bir şekilde ele alma yeteneği.
- **Aksiyonların Merkezi Yönetimi:** Aksiyon türlerinin merkezi bir şekilde yönetilmesi, hataları ve tutarsızlıkları azaltır.

## Adım Adım useReducer kullanımı

### Import işlemi
```jsx
import { useReducer } from "react"
```
### useReducer tanımlama işlemi
```jsx
const [formState, dispatch] = useReducer(formReducer, initialState)
```
### Reducer fonksiyonu tanımlama işlemi
```jsx
const formReducer = (state, action) => {
 switch (action.type) {
      case "ACTION1":
        return {}
      case "ACTION2":
        return {}
      case "ACTION3":
        return {}
      default:
      return {}
}
```

## Detaylıca ele almak için bir örnek, yorum satırları herşeyi anlamamıza yardımcı olmak için var :)

```jsx
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

```

#### Umarım faydalı olmuştur.

