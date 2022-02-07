import "./App.css";
import { useFormik } from "formik";

/* npm add formik, formik.org, id'leri silebilirsin(Field) */
/* initial valuesdeki değerler name de olmalı. */
/* formik'in bize vermiş oldugu field ve formu kullanmadan, doğrudan htmldeki input ve form etiketlerini kullanalım. */
/* importtan field ve formu sil */
/* Field ları input yap name="" ekle */
/* verileri alabilmek için handleChange ve handleSubmit kullanmayı unutma HTML ETİKETLERİNİ KULLANABİLMEK İÇİN*/

/* Formik ile Dropdown, radio button, dropdown ile çalışma*/
/* useFormik ile daha temiz bir kod yazımı. const formik yerine handlechange handlesubmit ve valuesi ekle. çünkü temizlerken onları siliyoruz. Render ve return kısmını sadeleştirmiş olduk. */

function App() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "Tayfun",
      lastName: "Dagci",
      email: "tayfun@mail.com",
      gender: "secret",
      hobies: [],
      country: "turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input name="email" value={values.email} onChange={handleChange} />

        <br />
        <br />

        {/* RADIO BUTTON 
            handleChange yapmazsan verileri almaz.
            checked ile default işaretleneni belirleriz.*/}

        <span>Secret</span>
        <input
          type="radio"
          name="gender"
          value="secret"
          onChange={handleChange}
          checked={values.gender === "secret"}
        />

        <br />

        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />

        <br />

        <span>Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />

        <br />
        <br />

        {/* CHECKBOX 
            handeChange !!! dikkat
            Array tipinde olmalı. initialValuese hobies i array olarak ekle.*/}

        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>

        <br />
        <br />

        {/* DROPDOWN */}

        <select name="country" value={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />

        <code> {JSON.stringify(values)} </code>
      </form>
    </div>
  );
}

export default App;
