import AnimatedCard from "./AnimatedCard"

const Services = () => {
  return (
    <div>
         <p className="h-10 pt-10 text-center text-3xl  text-blue-400 font-semibold">
            O U R  <span className=" ml-2">  S E R V I C E S</span> 
        </p>
        <p className="pt-10 text-3xl font-semibold text-center"> 
            Services We offer
        </p>
        <p className=" pt-4 px-32 pb-2 text-lg text-center">
              Transform your trading journey with our premier stock market advisory services. Our team of seasoned analysts, armed with cutting-edge research tools, crafts tailored strategies to match your risk tolerance and financial goals. Whether you're a pro or just starting out, we'll help you stay ahead in the dynamic world of trading with actionable insights and personalized recommendations that drive real success.
        </p>
        <AnimatedCard />
    </div>
  )
}

export default Services