import challengerImage from "../assets/charger.png";
import toyotaImage from "../assets/toyota.png";
import mitsubushiImage from "../assets/mitsubushi.avif";
import selectCarImage from "../assets/selectCar.png"
import operatorImage from "../assets/operator.png"
import carDrive from "../assets/carDrive.png"
import mazdaCX5 from "../assets/vehicleDisplay/mazda.avif"
import volvoS60 from "../assets/vehicleDisplay/volvoS60.webp"
import hyundai from "../assets/vehicleDisplay/hyundai.avif"
import volkswagen from "../assets/vehicleDisplay/volkswagen.avif"
import chevroletColorado from "../assets/vehicleDisplay/chevroletColorado.png"
import kiaK5 from "../assets/vehicleDisplay/kiaK5.png"

export const navLinks=[
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#models", label: "Models" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#our team", label:"OurTeam"},
    { href: "#contact", label:"Contact"}
]

export const carImages=[
    {path:toyotaImage, label:'toyota'},
    {path:mitsubushiImage, label:'chevrolet'},
    {path:challengerImage, label:'charger'},
    
]

export const stepsInBooking =[
    {step:"Choose Your Ride", content:"Begin by selecting the service that best fits your needs. Whether it's a quick city trip, an airport transfer, or a luxury ride for a special occasion, we have you covered."},
    {step:"Customize Your Experience", content:"Personalize your ride to match your preferences. Need extra space for luggage, or traveling with a pet? Let us know during the booking process, and we’ll take care of the rest."},
    {step:" Enjoy Your Ride", content:"Once you've met your vehicle, the adventure begins. Our cars are equipped with the latest navigation systems to suggest the best routes. "}

]

export const imagesForStepsInBooking =[
    {src:selectCarImage,label:"selectCarImage"},
    {src:operatorImage, label:"operatorImage"},
    {src:carDrive, label:"carDrive"}
]


export const vehicleDataForDisplay =[
    {   
        name:"Mazda CX 5",
        src: mazdaCX5,
        stats:{
            Rent:45,
            Year:2023,
            Seating:5,
            Range:'3670.2 mil',
            Tank:'15.3 gal',
            EPA:'26 MPG',
            Engine:'Gas',
        }
     
    },
    {   
        name:"volvoS60",
        src: volvoS60,
        stats:{
            Rent:50,
            Year:2023,
            Seating:5,
            Range:'4134.2 mil',
            Tank:'15.9 gal',
            EPA:'30 MPG',
            Engine:'Mild hybrid',
        }

    },
    {   
        name:"Hyundai Santa Cruz",
        src: hyundai,
        stats:{
            Rent:55,
            Year:2022,
            Seating:5,
            Range:'2564.1 mil',
            Tank:'17.7 gal',
            EPA:'23 MPG',
            Engine:'Gas',
        }

    },
    {   
        name:"Volkswagen Taos S",
        src: volkswagen,
        stats:{
            Rent:45,
            Year:2023,
            Seating:5,
            Range:'1930.5 mil',
            Tank:'13.2 gal',
            EPA:'31 MPG',
            Engine:'Gas',
        }

    },

    {   
        name:"Chevrolet Colordo",
        src: chevroletColorado,
        stats:{
            Rent:50,
            Year:2022,
            Seating:5,
            Range:'2053.2 mil',
            Tank:'21.4 gal',
            EPA:'21 MPG',
            Engine:'Gas',
        }

    },
    
    {   
        name:"Kia K 5",
        src: kiaK5,
        stats:{
            Rent:35,
            Year:2023,
            Seating:5,
            Range:'1234.2 mil',
            Tank:'15.8 gal',
            EPA:'31 MPG',
            Engine:'Gas',
        }

    },

]

export const QAndA = [
    {   id:1,
        question:"What do I need to rent a car from your company?",
        answer:"To rent a car from us, you'll need a valid driver's license that's been held for at least one year, a credit card in the name of the renter for the security deposit, and you must meet our minimum age requirement, which varies by location. While not always required, proof of insurance is recommended; however, we do offer a range of insurance options at the counter if you need coverage."
    },

    {   id:2,
        question:"Can I rent a car at one location and return it to another?",
        answer:"Absolutely! We offer one-way rentals for most of our vehicles, allowing you to pick up the car in one location and return it to another. This is ideal for road trips or when your travel plans don't bring you back to your starting point. Please note that there may be a one-way fee associated with this convenience, and the fee can vary depending on the return location and rental duration."

    },
    {   id:3,
        question:"What's included in my rental price?",
        answer:"Your rental price includes the vehicle rental for the selected period, basic roadside assistance, and any additional inclusions specified at the time of booking, such as unlimited mileage for certain rental packages. Additional charges may apply for optional extras such as GPS, child seats, additional driver coverage, or enhanced insurance options. Fuel costs are not included, and we offer various fuel options that you can select upon vehicle pickup."
    }
]