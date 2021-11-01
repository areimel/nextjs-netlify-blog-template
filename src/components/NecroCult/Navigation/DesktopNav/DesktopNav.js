import styles from './DesktopNav.module.scss'
import styled from "styled-components";
import Container from '../../Layout/Container/Container'



export default function DesktopNav({ 
  //props
}) {
  return (
  	<nav id="DesktopNav" className={styles.DesktopNav + " headroom"} >
  		
  		<Container flex className={styles.upperNav}>
  			<div>
  				
  			</div>
  		</Container>	  

		<Container flex className={styles.mainNav}>

			<div className={styles.logoSection}>
				<a href="/" className={styles.logoMain}>
					<img src="/img/logo.png" alt="Necro Cult Zine logo"/>
				</a>
			</div>

			<div className={styles.linkSection}>
				<div id="DesktopNavButton" className={styles.navButton}>
					<i className="fas fa-bars"></i>
				</div>
			</div>

		</Container>	  

	</nav>
  )
}
