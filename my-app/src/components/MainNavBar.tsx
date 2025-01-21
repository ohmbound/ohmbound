import Link from "next/link";
import styles from "../styles/MainNavBar.module.css";

const MainNavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
      {/* Left Section: Logo */}
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          Ω H M B O U N D
        </Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className={styles.searchBar}>
        <form action="/search" method="get" className={styles.searchForm}>
          <div className={styles.searchInputContainer}>
            <img
              src="/search_glass.svg"
              alt="Search Icon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              name="query"
              placeholder="Search"
              required
              className={styles.searchInput}
            />
          </div>
        </form>
      </div>

      {/* Right Section: Navigation Links */}
      <div className={styles.navLinks}>
        {/* Engineering Tools with Dropdown */}
        <div className={styles.navItem}>
          <Link href="/engineering-tools" className={styles.navLink}>
            <img
              src="/engineering-tool-unfilled.svg"
              alt="Engineering Tools Icon"
              className={`${styles.navIcon} ${styles.engineeringIcon}`}
            />
            Engineering Tools
          </Link>
          <div className={`${styles.dropdownMenu} ${styles.engineeringDropdown}`}>
            <Link href="/engineering-tools/calculators">Calculators</Link>
            <Link href="/engineering-tools/simulators">Simulators</Link>
            <Link href="/engineering-tools/resources">Resources</Link>
          </div>
        </div>

        {/* News with Dropdown */}
        <div className={styles.navItem}>
          <Link href="/news" className={styles.navLink}>
            <img
              src="/news-unfilled.svg"
              alt="News Icon"
              className={`${styles.navIcon} ${styles.newsIcon}`}
            />
            News
          </Link>
          <div className={`${styles.dropdownMenu} ${styles.newsDropdown}`}>
          <Link href="/news/research">Physics</Link>
          <Link href="/news/research">Chemistry</Link>
            <Link href="/news/latest">Materials Science</Link>
            <Link href="/news/industry">Emerging Technologies</Link>
            <Link href="/news/research">Startups & Entrepreneurship</Link>
          </div>


        </div>
      </div>

      <span className={styles.verticalLine}></span>
      {/* Sign In */}
      <div className={styles.signInSection}>
        <Link href="/signin" className={styles.navLink}>
          <img
            src="/signin-unfilled.svg"
            alt="Sign In Icon"
            className={`${styles.navIcon} ${styles.signInIcon}`}
          />
          Sign In
        </Link>

        {/* Heart Icon for Save Option */}
        <div className={styles.saveOption}>
          <img
            src="/iconmonstr-heart-thin.svg"
            alt="Save Articles"
            className={`${styles.navIcon} ${styles.heartIcon}`}
          />
          <span className={styles.trackingNumber}>0</span>
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
