import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>My Bills</span>
      </h1>
      <p className={headerStyles.description}>
        Static Application to View your Phone Bills
      </p>
    </div>
  )
}

export default Header