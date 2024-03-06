import { useState } from 'react'
import {Header,Hero,InputForm,PlanTrip,VehicleDisplay,Advertisement,ChooseUs,
Reviews,FAQ,DownloadApp,Footer} from "./sections"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section>
        <Header />
     </section>
     <section>
        <Hero />
     </section>
     <section>
        <InputForm />
     </section>
     <section>
        <PlanTrip />
     </section>
     <section>
        <VehicleDisplay />
     </section>
     <section>
         <Advertisement />
     </section>
     <section>
      <ChooseUs />
     </section>
     <section>
      <Reviews />
     </section>
     <section>
      <FAQ />
     </section>
     <section>
      <DownloadApp />
     </section>
     <section>
       <Footer />
     </section>

    </>
  )
}

export default App
