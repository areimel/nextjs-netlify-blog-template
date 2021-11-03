import styles from './Layout.module.scss'
import Head from 'next/head'
//import MasterJS from '../../Navigation/MasterJS/MasterJS'
//import MasterCSS from '../../Navigation/MasterCSS/MasterCSS'
import DesktopNav from '../../Navigation/DesktopNav/DesktopNav'
//import MobileNav from '../../Navigation/MobileNav/MobileNav'
//import NavMenu from '../../Navigation/NavMenu/NavMenu'
import Footer from '../../Navigation/Footer/Footer'
//import FilmGrainOverlay from '@components/Navigation/FilmGrainOverlay/FilmGrainOverlay'



export default function Layout({ 
	//props
	children
}) {
  return (
	<>
		<Head>
			{/*<MasterCSS/>*/}
		</Head>
		
		{/*<FilmGrainOverlay/>*/}
		<div className={styles.OuterLayout}>
  			{/*<NavMenu/>*/}
  			<div className={styles.InnerLayout}>
  				<DesktopNav/>
	  			{/*<MobileNav/>*/}
				{children}
				<Footer/>
  			</div>
		</div>
		{/*<MasterJS/>*/}
	</>
  )
}
