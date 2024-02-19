import Home from "@/components/homepage/header";
import About from "@/components/homepage/about";
import Service from "@/components/homepage/service";
import Footer from "@/components/footer";
import Event from "@/components/homepage/event";
import Historic from "@/components/homepage/historic";
import Blog from "@/components/homepage/blog";
import Frequent from "@/components/homepage/frequent"


function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Historic />
      <Event />
      <Blog />
      <Frequent />
      <Footer />

    </div>
  )
}

export default HomePage
