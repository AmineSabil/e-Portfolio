import { useEffect,useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { dataScienceCertifications, otherCertifications, languagesCertifications} from "../../data.js"


export default function Certificates() {
    const [selected,setSelected] = useState("dataScience");
    const [data,setData] = useState([]);
    const list = [
        {
            id: "languages",
            title: "IT Languages Certificates",
          },
          {
            id: "dataScience",
            title: "Data Science & AI Certificates",
          },
          {
            id: "others",
            title: "Other Certificates",
          },
          
    ];
    useEffect(() =>{
        switch(selected){
            case "languages":
                setData(languagesCertifications);
                break;
            case "dataScience":
                setData(dataScienceCertifications);
                break;
            case "others":
                setData(otherCertifications);
                break;
            default:
                setData(dataScienceCertifications);

        }
    },[selected])
    return (
        <div className="portfolio" id="portfolio">
                <h1>Certificates</h1>
                <ul>
                    {list.map((item) =>(
                        <PortfolioList title ={item.title} active={selected ===item.id} setSelected={setSelected} id={item.id} />
                    ))}
                </ul>
                <div className="container">
                {data.map((d) =>(
                        <div className="item">
                        <img src={d.img} alt=""/>
                        <h3> {d.title}</h3>
                    </div>
                    ))}
                </div>
        </div>
    )
}