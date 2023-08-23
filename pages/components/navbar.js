import Link from "next/link";

export default function Navbar () {
    return(
        <>
        <header>
            <ul>
                <li><Link href="/">Beranda</Link></li>
                <li><Link href="/src/input">Input</Link></li>
                <li><Link href="/src/dataBeras">Data Beras</Link></li>
                <li><Link href="/src/profile">Profil</Link></li>
                <li style={{float: "right"}}><Link href="/src/logout">Logout</Link></li>
            </ul>
        </header>

        <style jsx global>{`
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #ababab;
          }

          li {
            color: white;
            float: left;
          }

          li a {
            display: block;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }

          li a:hover {
            color: white;
            background-color: #333;
          }

          li a.active {
            color: white;
            background-color: #111;
          }

          li a:hover:not(.active) {
            background-color: #333;
          }

          @media screen and (max-width: 400px) {
            li a {
              text-align: center;
              float: none;
            }
          }

          @media screen and (max-width: 900px) {
            ul {
              width: 100%;
              height: auto;
              position: relative;
            }
            
            li a {
              float: left;
              padding: 15px;
            }
          }

        `}</style>

        </>
    )
}