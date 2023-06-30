import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ContentForA= [
    {Title: "Apple Launches New iPhone X Pro with Mind-Blowing Features",
        Content: `Apple announces the release of its latest flagship smartphone model, boasting innovative technologies and impressive capabilities.`},
    {Title: "Amazon Acquires Popular Streaming Service, Amplifying its Entertainment Arsenal",
        Content: `Amazon expands its presence in the entertainment industry by acquiring a well-known streaming platform, strengthening its array of offerings for users.`},
    {Title: "AI Advances: Automakers Adopt Automated Driving Technology",
        Content: `Leading automotive companies integrate artificial intelligence into their vehicles, enabling automated driving capabilities and enhancing road safety.`},
    {Title: "Australia Battles Bushfires: Authorities Mobilize for Massive Firefighting Efforts",
        Content: `Australia confronts widespread bushfires, with authorities coordinating significant firefighting operations to combat the devastating infernos.`},
    {Title: "Asian Economies Adapt: Amid Global Uncertainty, Asian Nations Foster Resilience",
        Content: `Asian countries display adaptability and resilience in the face of global economic uncertainties, implementing strategies to bolster their economies and mitigate risks.`},

]

const ContentForB= [
    {Title: "Bitcoin Hits All-Time High as Cryptocurrency Demand Soars",
        Content: `The value of Bitcoin surges to a record-breaking level as the demand for cryptocurrencies continues to rise, attracting investors and enthusiasts alike.`},
    {Title: "Brazilian Scientists Make Breakthrough Discovery in Biotechnology",
        Content: ` Scientists in Brazil achieve a significant breakthrough in the field of biotechnology, unveiling a groundbreaking discovery with potential implications for various industries.`},
    {Title: "Banking Sector Adapts to Digital Transformation for Improved Customer Experience",
        Content: `Banks embrace digital transformation to enhance customer experience by offering innovative digital services and streamlined banking solutions.`},
    {Title: "Biodiversity Crisis: Experts Warn of Alarming Rate of Animal Extinction",
        Content: `Experts raise concerns about the planet's biodiversity, warning of the rapid disappearance of animal species and the urgent need for conservation efforts.`},
    {Title: "Brexit Negotiations Reach Critical Point as Deadline Looms",
        Content: `The ongoing negotiations surrounding Brexit reach a crucial stage as the deadline approaches, intensifying efforts to reach a comprehensive agreement between the UK and the European Union.`},

]

const ContentForD= [
    {Title: "Drought Devastates Agricultural Sector: Farmers Struggle to Cope",
        Content: `Prolonged drought conditions pose significant challenges for farmers as they grapple with water shortages and crop losses, threatening food production.`},
    {Title: "Digital Currency Dominance: Demand for Cryptocurrencies Continues to Grow",
        Content: `The popularity of digital currencies accelerates, with increased demand for cryptocurrencies and greater acceptance from businesses and investors.`},
    {Title: "Data Privacy Debate: Balancing Security and Personal Information Protection",
        Content: `The ongoing discussion surrounding data privacy intensifies, as governments and tech companies strive to strike a balance between safeguarding personal information and maintaining security.`},
    {Title: "Deepfake Technology Raises Concerns: Implications for Misinformation and Manipulation",
        Content: `The emergence of deepfake technology prompts concerns regarding its potential misuse for spreading misinformation and manipulating media content.`},
    {Title: "Discovery of New Dinosaur Species: Scientists Unveil Ancient Creature",
        Content: `Paleontologists make an exciting new discovery, unveiling a previously unknown dinosaur species that provides insights into prehistoric life and evolution.`},

]

const ContentForC= [
    {Title: "COVID-19 Cases Surge Again: Countries Brace for Second Wave",
        Content: `Several nations prepare for a potential second wave of COVID-19 infections as the number of cases begins to rise sharply once again.`},
    {Title: "Climate Change Conference: Countries Collaborate to Combat Global Warming",
        Content: `Representatives from nations worldwide converge at a climate change conference to address the pressing issue of global warming and strategize collective solutions.`},
    {Title: "Cybersecurity Threats on the Rise: Organizations Strengthen Defenses",
        Content: `With an increasing number of cyberattacks, organizations focus on fortifying their cybersecurity systems and protocols to protect sensitive data.`},
    {Title: "Celebrity Couple Confirms Engagement: Fans Excited for Wedding Plans",
        Content: `A well-known celebrity duo announces their engagement, generating excitement among fans who eagerly anticipate details about their upcoming wedding.`},
    {Title: "Consumer Confidence Index Reaches Record High: Economic Recovery Hopes Rise",
        Content: `The consumer confidence index achieves an all-time high, signaling increased optimism among consumers and boosting hopes for economic recovery and growth.`},

]

const ContentForE= [
    {Title: "Economic Recovery Steady: Countries Experience Promising Growth",
        Content: `Several countries witness a steady economic recovery, with positive signs of growth in various sectors, signaling a hopeful outlook for the future.`},
    {Title: "Environmental Activists Rally for Energy Transition: Calls for Renewable Solutions",
        Content: `Activists join forces to advocate for a swift transition from fossil fuels to renewable energy sources, highlighting the urgency to combat climate change.`},
    {Title: "Entertainment Industry Adapts to Streaming Era: Productions Embrace Digital Platforms",
        Content: `The entertainment industry undergoes a transformative shift as productions and streaming services adapt to the increasing popularity of digital platforms, responding to evolving consumer preferences.`},
    {Title: "Educational Innovations Amidst Crisis: Remote Learning Revolutionizes Education",
        Content: `In response to the global crisis, remote learning emerges as a transformative force in education, prompting innovative approaches to deliver quality education virtually.`},
    {Title: "Election Results Announced: New Leadership Awaits the Nation",
        Content: `The election concludes, and the results are declared, welcoming the anticipation of new leadership and its potential impact on the country.`},

]

function AButton(props) {
    function Click() {
        props.handleClick(1);
    }
    return (
        <input className="button" type="button" value={props.val} onClick={Click} />
    )
}
function BButton(props) {
    function Click() {
        props.handleClick(2);
    }
    return (
        <input className="button" type="button" value={props.val} onClick={Click} />
    )
}
function CButton(props) {
    function Click() {
        props.handleClick(3);
    }
    return (
        <input className="button" type="button" value={props.val} onClick={Click} />
    )
}
function DButton(props) {
    function Click() {
        props.handleClick(4);
    }
    return (
        <input className="button" type="button" value={props.val} onClick={Click} />
    )
}
function EButton(props) {
    function Click() {
        props.handleClick(5);
    }
    return (
        <input className="button" type="button" value={props.val} onClick={Click} />
    )
}

function Content() {
    const [numOfPage, updNumOfPage] = React.useState(0);
    function handleButtonClick(newNum) {
        updNumOfPage(newNum);
    }
    if(numOfPage == 0) {
        return(
            <>
                <Head/>
                <Tagline/>
                <AButton val={"A"} handleClick={handleButtonClick} />
                <BButton val={"B"} handleClick={handleButtonClick} />
                <CButton val={"C"} handleClick={handleButtonClick} />
                <DButton val={"D"} handleClick={handleButtonClick} />
                <EButton val={"E"} handleClick={handleButtonClick} />
            </>
        )
    }
    if(numOfPage == 1) {
        return(
            <>
                <Head/>
                <Tagline/>
                <AButton val={"A"} handleClick={handleButtonClick} />
                <BButton val={"B"} handleClick={handleButtonClick} />
                <CButton val={"C"} handleClick={handleButtonClick} />
                <DButton val={"D"} handleClick={handleButtonClick} />
                <EButton val={"E"} handleClick={handleButtonClick} />
                <Titles title="News with A:" list={ContentForA} />
            </>
        )
    }
    if(numOfPage == 2) {
        return(
            <>
                <Head/>
                <Tagline/>
                <AButton val={"A"} handleClick={handleButtonClick} />
                <BButton val={"B"} handleClick={handleButtonClick} />
                <CButton val={"C"} handleClick={handleButtonClick} />
                <DButton val={"D"} handleClick={handleButtonClick} />
                <EButton val={"E"} handleClick={handleButtonClick} />
                <Titles title="News with B:" list={ContentForB} />
            </>
        )
    }
    if(numOfPage == 3) {
        return(
            <>
                <Head/>
                <Tagline/>
                <AButton val={"A"} handleClick={handleButtonClick} />
                <BButton val={"B"} handleClick={handleButtonClick} />
                <CButton val={"C"} handleClick={handleButtonClick} />
                <DButton val={"D"} handleClick={handleButtonClick} />
                <EButton val={"E"} handleClick={handleButtonClick} />
                <Titles title="News with C:" list={ContentForC} />
            </>
        )
    }
    if(numOfPage == 4) {
        return(
            <>
                <Head/>
                <Tagline/>
                <AButton val={"A"} handleClick={handleButtonClick} />
                <BButton val={"B"} handleClick={handleButtonClick} />
                <CButton val={"C"} handleClick={handleButtonClick} />
                <DButton val={"D"} handleClick={handleButtonClick} />
                <EButton val={"E"} handleClick={handleButtonClick} />
                <Titles title="News with D:" list={ContentForD} />
            </>
        )
    }
    if(numOfPage == 5) {
        return(
            <>
                <Head/>
                <Tagline/>
                <AButton val={"A"} handleClick={handleButtonClick} />
                <BButton val={"B"} handleClick={handleButtonClick} />
                <CButton val={"C"} handleClick={handleButtonClick} />
                <DButton val={"D"} handleClick={handleButtonClick} />
                <EButton val={"E"} handleClick={handleButtonClick} />
                <Titles title="News with E:" list={ContentForE} />
            </>
        )
    }
}

root.render(<Content />)


function Head(props) {
    return(
        <div className="head">
        </div>
    )
}

function Tagline() {
    return(
        <h1>
            Simple pagination examples
        </h1>
    )
}



function Titles (props) {

    const listProf = props.list.map((item, index) =>
        <TitlesItem key={index} Title={item.Title} Content={item.Content} />

    );
    return (
        <div className="title">
            <h2>{props.title} </h2>
            <ul>
                {listProf}
            </ul>
        </div>

    )
}

function TitlesItem(props) {

    const [isOpen, setOpenClose] = React.useState(false);
    const press = () => {
        setOpenClose(!isOpen);
    }
    return(
        <li onClick={press}>
            <span className="left">{props.Title}</span>
            <span className="right">{isOpen ? "×" : "+"}</span>
            {isOpen &&
                <p> {props.Content}</p>
            }
        </li>
    )
}