import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import styles from "../navbar/navbar.module.css";
function NavScrollExample(props) {
  const login = () =>{
    if(props.isLogin){
      return <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268" className={styles.profile_img}/>
    }
    return <button variant="" className={`${styles.navbar_button} rounded`}>
    GİRİŞ
    </button>

  }
  return (
    <Navbar className={styles.navbar_container} expand="lg" style={{position:"fixed",width:"100%",backdropFilter: "blur(2px)"}}>
      <Container className={styles.navbar_container2}>
        <Navbar.Brand href="#">
      <Link className={styles.navbar_link} to="/">
          <img className={styles.navbar_logo_img} src={logo} />
      </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Link className={styles.navbar_link} to="/">
            <div className={`${styles.navbar_navlink}`}>Ana Sayfa</div>
          </Link>
          <Link className={styles.navbar_link} to="/explore">
            <div className={`${styles.navbar_navlink}`}>Çalışmalar</div>
          </Link>
          <Link className={styles.navbar_link} to="/jobs">
            <div className={`${styles.navbar_navlink}`}>Çalışan Ol</div>
          </Link>
          <Link className={styles.navbar_link} to="/">
            <div className={`${styles.navbar_navlink}`}>Hakkında</div>
          </Link>
          <Link className={styles.navbar_link} to="/">
            <div className={`${styles.navbar_navlink}`}>Yardım</div>
          </Link>
          <Link className={styles.navbar_link} to="/login">
            {login()}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
