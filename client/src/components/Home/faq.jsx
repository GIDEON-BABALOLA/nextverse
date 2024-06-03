import  {useState, useRef, useEffect}from "react"
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import "../../styles/components/Home/faq.css"
import gsap from "gsap"
function Faq(){
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);
  const accordionContainer = useRef(null)
  useEffect(() => {
setOpenAccordion(Math.floor((Math.random() * 3)))
  }, [])
  const handleAccordionClick = (index) => {
    console.log(openAccordion, index);
    if (index !== openAccordion) {
        setOpenAccordion(index);
     } else {
       setOpenAccordion(null);
    }
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 1,
          ease: "power1.inOut",
         }
      );
    }
    else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 1,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  };

return <div className="accorder">
<div className={`accordion__container animate`} ref={accordionContainer} id="Gideon">
<h2 className="accordion-title-faq ">Frequently Asked Questions <FaQuestion />
</h2>
   <div className={`accordion__item  ${openAccordion === 0 ? "open" : ""} `} style={{"--index" : 1}} ref={(el) => (accordionRefs.current[0] = el)}> 
      <div className="accordion__header"     onClick={() => handleAccordionClick(0)}>
      <p className="accordion__number">01</p>
            <p className="accordion__name">Do We Cover Champions League</p>
            <p className="plus-minus">{ openAccordion === 0 ? 
            <BiPlus size={20}/> : <BiMinus />}</p>
      </div>
      <div className="accordion__details">
      <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
      </div>
      </div>
   <div className={`accordion__item  ${openAccordion === 1 ? "open" : ""} `} style={{"--index" : 2}}  ref={(el) => (accordionRefs.current[1] = el)}>
      <div className="accordion__header"     onClick={() => handleAccordionClick(1)}>
      <p className="accordion__number">02</p>
            <p className="accordion__name">Do We Cover Premier League</p>
            <p className="plus-minus">{ openAccordion === 1 ? 
            <BiPlus size={20}/> : <BiMinus />}</p>
      </div>
      <div className="accordion__details">
      <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
      </div>
   </div>
   <div className={`accordion__item   ${openAccordion === 2 ? "open" : ""}` } style={{"--index" : 3}}  ref={(el) => (accordionRefs.current[2] = el)}> 
      <div className="accordion__header"     onClick={() => handleAccordionClick(2)}>
      <p className="accordion__number">03</p>
            <p className="accordion__name">Do We Cover World Cup Also</p>
            <p className="plus-minus">{ openAccordion === 2 ? 
            <BiPlus size={20}/> : <BiMinus />}</p>
      </div>
      <div className="accordion__details">
      <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
      </div>
   </div>
</div>
</div>
}
export default Faq