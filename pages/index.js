import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Button
} from 'reactstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.whitecontainer}>
        <div className={styles.navbar}>
            <div><h3 className={styles.logo}>Music</h3></div>
            <div><h6 className={styles.navbarText} >Home</h6></div>
            <div><h6 className={styles.navbarText} >About Us</h6></div>
            <div><h6 className={styles.navbarText} >Music Store</h6></div>
            <div><h6 className={styles.navbarText} >Music Store</h6></div>
          <div className={styles.navbarButton}>
            <div><Button outline style={{borderRadius:20,paddingTop:2,paddingBottom:2,marginRight:10}}>Log in</Button></div>
            <div><Button color="warning" outline style={{borderRadius:20,paddingTop:2,paddingBottom:2,backgroundColor:'gold',color:'white'}}>Get started</Button></div>
          </div>
        </div>
        <div className={styles.middleView}>
           <div className={styles.middleViewText}>
             <h1 style={{fontSize:70,fontWeight:'bold',lineHeight:.5}}>{'The Voice &'}</h1>
             <h1 style={{fontSize:70,fontWeight:'regular'}}>{'The Band '}</h1>
             <h6>{'Choose your best music choice with your huge library \n'}</h6>
             <h6>{'Of our top chart songs and favorite singers'}</h6>
             <div className={styles.badge}>
               <img src="/appstore.png/" className={styles.Appstore} />
               <img src="/googleplay.png/" className={styles.googlePlay} />
             </div>
             <div className={styles.Album}>
               <h7 style={{color:'grey'}}>New Album Related</h7>
               <div className={styles.AlbumLine}></div>
             </div>
               <h5 style={{fontWeight:'bold',marginTop:10}}>Best Music Album</h5>
               <h7 style={{color:'grey'}}>2020</h7>

           </div>
        </div>
           <div className={styles.middleViewImage}>
             <img src="/man.png/" className={styles.image}/>
           </div>
      </div>
    </div>
  )
}
