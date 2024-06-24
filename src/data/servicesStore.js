
import { action, makeObservable, observable } from "mobx";



class servicesStore {
    services = [];

    constructor() {
        makeObservable(this, {
            services: observable,
            setServices: action,
            addNewService: action
        })
    }

    setServices = (data) => {
        if (data.length > 0) {
            this.services = [...defaultServices,...data];
        }
        else {
            this.services = defaultServices;
        }
    }

    addNewService = (service) => {
        this.services = [...this.services, service];
    }
}

export default new servicesStore();

const defaultServices = [
    {
        id: 0,
        name: "פילאטיס",
        description:" פילאטיס  פילאטיס מטרתה לשפר את היציבה ואת התפקוד היומיומי של הגוף. השיטה הומצאה על ידי גו'זף פילאטיס ונקראה על שמו. אצלנו בסטודיו קיימים מספר סוגים של פילאטיס: פילאטיס CORE , פילאטיס מתון, פילאטיס למתקדים ועוד..",
        price: 120,
        duration: 45,
       
        
    },
    {
        id: 1,
        name: " בודי פאוור",
        description:" BODY POWERׂ – שיעור חדשני המשלב בין עולם חדר הכושר לסטודיו. בשיעור נעשה שימוש במשקולות ומוטות באופן דומה לעבודה בחדר הכושר. מטרת השיעור היא חיזוק הגוף ועבודה איטית ונכונה על כל קבוצות השרירים העיקריות בגוף.",
        price: 130,
        duration: 45,
      
        
    },
    {
        id: 2,
        name: "רצועות אימון",
        description:"שיטת הרצועות התפתחה בשנים האחרונות ונהפכה להיות מבין הפופולאריות בעולם. באימון זה נעשה עבודה המתמקדת בעבודה על משקל גוף בעזרת רצועות התלויות בתקרה. מטרת השיעור היא עבודה על סבולת השריר וחיזוק.",
        price: 110,
        duration: 45,
    
   
    },
    {
        id: 3,
        name: "טרמפולינה",
        description:"בשיעור זה כל מתאמן עובד על טרמפולינה אישית. רוב השיעור מתבצע על הטרמפולינה תוך ביצוע תרגילים אינטנסיביים ומהירים. מטרת השיעור היא עבודה על סבולת לב ריאה וחיזוק השרירים. השיעור מומלץ מאוד ואף מסייע בבריאות הגוף.",
        price: 120,
        duration: 45,
      
     
    },
     {
        id: 4,
        name: "אינטרוולים",
        description:"שיעור אינטנסיבי המשלב עבודת סבולת בדופק גבוה ומשתנה עם תרגילי כוח. השיעור הינו אימון כוח ואירובי אינטנסיבי, וזאת במטרה להעלות דופק לשיפור כושר אירובי.  במרבית השיעורים שלנו  משלבים אינטרוולים.",
        price: 110,
        duration: 45,
        
      
    }, 
    {
        id: 5,
        name:"חיזוק רצפת אגן",
        description:"שיעור זה הוא מיועד לנשים בעיקר אחרי לידה ,בשיעור זה נשים דגש על נשימות נכונות וקיווץ שרירי הבטן באופן נכון ומועיל",
        price: 100,
        duration: 45,
     
    }

]