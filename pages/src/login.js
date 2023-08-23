import React from 'react';
import styles from '../../styles/login.module.css'
import Footer from '../components/footer';

//conditional for login

export default function Login () {
    return(
        <>
        <div className={styles.container}>
        <div>
            <form className={styles.form}>
            <h1>Login</h1>
                <label htmlFor='username'>Username</label>
                <input className={styles.input}
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                />
                <label htmlFor='password'>Password</label>
                <input className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                />
                <button className={styles.button}>Login</button>
                <p>Belum punya akun? <a href="/src/register">Daftar</a></p>
            </form>
        </div>

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
            font-size: 28px;
            text-align: center;
        }
        * {
          box-sizing: border-box;
        }
          }
      `}</style>
        </div>
        <Footer />
        </>
    );
}
