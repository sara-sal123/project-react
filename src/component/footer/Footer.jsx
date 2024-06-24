import { Grid } from "@mui/material"
import { Container} from "@mui/system"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import { observer } from "mobx-react";
import buiisnessDataStore from "../../data/buiisnessDataStore";
import "./footer.css"


const Footer = (observer(() => {
    return (
        <>
            <footer>
                <div className="footer-top">
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <ul className="ulFooter">
                                    <h3>אודות</h3>
                                    <div>
                                        {buiisnessDataStore.data.owner}   הנו מועדון
                                        כושר מוביל ב{buiisnessDataStore.data.address}  ,
                                        השם דגש על מקצועיות ורמת שרות מעולה.
                                        מאות לקוחות מרוצים.
                                    </div>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ul className="ulFooter">
                                    <h3>ניווט מהיר</h3>
                                    <li><a href="#">אודות</a></li>
                                    <li><a href="#">השיעורים שלנו</a></li>
                                    <li><a href="#">צור קשר</a></li>
                                    <li><a href="#">הצהרת נגישות</a></li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ul className="ulFooter">
                                    <h3>יצירת קשר</h3>
                                    <li> <i><FacebookIcon  sx={{color:"#bebe5e",marginLeft:1,marginBottom:-1}}/></i><a>{buiisnessDataStore.data.name}</a></li>
                                    
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <ul className="ulFooter">
                                    <h3>   Download the app</h3>
                                   
                                    <li><button><div className="iconGooglePlay"><span className="span1">Get It On</span>
                                    <span>Google Play</span></div><i>< PlayArrowIcon /></i></button></li>
                                    <li><button><div className="iconGooglePlay"><span className="span1">Download on the</span>
                                    <span>App Store</span></div><i>< AppleIcon /></i></button></li>
                                </ul>
                            </Grid>
                         

                        </Grid>
                       
                    </Container>
                </div>
                <div className="BussinessData">
                    <Container >
                                <ul className="ulFooter">
                                    <li> <a> {buiisnessDataStore.data.name}</a><i ><EmailRoundedIcon sx={{color:"#bebe5e",marginRight:1,marginBottom:-1}}/> </i></li>
                                    <li><a>{buiisnessDataStore.data.phone}</a><i><PhoneIphoneRoundedIcon sx={{color:"#bebe5e",marginRight:1,marginBottom:-1}}/></i></li>
                                    <li><a>{buiisnessDataStore.data.address}</a><i><LocationOnRoundedIcon sx={{color:"#bebe5e",marginRight:1,marginBottom:-1}}/></i></li>
                                </ul>
                    </Container>
                </div>

            </footer>

        </>
    )
}))
export default Footer