import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import Navbar from "../components/Navbar"

const LandingPage = () => {

    // myRepeatableFUnction()

    return (
        <section className="bg-light position-relative" style={{ height: "100svh" }}>
            <Navbar />

            <MainSection />

            <Footer />
        </section>
    )
}

export default LandingPage