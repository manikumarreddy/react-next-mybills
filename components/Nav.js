import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import {signOut,useSession} from "next-auth/client";

const Nav = () => {
  const [session,loading] = useSession();
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <div className={navStyles.buttonGroup}>
        {session && (<>Signed In as {session.user.name}
        <button className="btn btn-success" onClick={signOut}>Sign Out</button></>)}
      </div>
    </nav>
  )
}

export default Nav