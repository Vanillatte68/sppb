import styles from "../../styles/login.module.css"
import Footer from "../components/footer";

//conditional for register

export default function Register () {
    return(
        <>
        <div className={styles.container}>
        <section>
            <form className={styles.form}>
            <h1>Register</h1>
                <label htmlFor="fullname">Nama Lengkap</label>
                <input className={styles.input}
                    type="text"
                    id="fullname"
                    name="fullname"
                    autoComplete="off"
                    required
                    />
                <label htmlFor="email">Email</label>
                <input className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    required
                    />
                <label htmlFor='username'>Username</label>
                <input className={styles.input}
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    required
                />
                <label htmlFor='password'>Password</label>
                <input className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    required
                />
                <label htmlFor='matchPassword'>Konfirmasi Password</label>
                <input className={styles.input}
                    type="password"
                    id="matchPassword"
                    name="matchPassword"
                    required
                />
                <button className={styles.button}>Daftar</button>
                <p>Sudah punya akun? <a href="/src/login">Login</a></p>
            </form>
        </section>
        

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            line-height: 1.6;
            font-size: 18px;
        }
        h1 {
            text-align: center;
            font-size: 28px;
        }
        * {
          box-sizing: border-box;
        }

        button {
            background-color: #0452aa;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 80%;
          }
      `}</style>
        </div>
        <Footer />
        </>
    );
}