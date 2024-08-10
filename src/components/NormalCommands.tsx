import { getAge, getYear, NormalCommandsType } from "../helpers/functions";

type NormalCommandsProps = {
    command : NormalCommandsType;
};

const bannerCondensed =
"    ___    __    __    _                        ___                         _\n" +
"   /   |  / /_  / /_  (_)________  ____  ____  /   |_   ___   ______ ______(_)\n" +
"  / /| | / __ \\/ __ \\/ / ___/ __ \\/ __ \\/ __ \\/ /| | | / / | / / __ `/ ___/ /\n" +
" / ___ |/ /_/ / / / / / /  / /_/ / /_/ / /_/ / ___ | |/ /| |/ / /_/ / /  / /\n" +
"/_/  |_/_.___/_/ /_/_/_/   \\____/\\____/ .___/_/  |_|___/ |___/\\__,_/_/  /_/\n" +
"                                     /_/                           \n"+
"                                                               A-SQUARED "+"\u00A9" + getYear()+"\n";

const help = <>
<span className="terminal-command">whois                </span><span>Who is Abhiroop Avvari?</span><br></br>
<span className="terminal-command">education            </span><span>View where I spent my lifetime</span><br></br>
<span className="terminal-command">skills               </span><span>See what I'm pretty good at</span><br></br>
<span className="terminal-command">projects             </span><span>Wanna see some stuff I made</span><br></br>
<span className="terminal-command">cv                   </span><span>Checkout my Resume AbhiroopAvvari.pdf</span><br></br>
<span className="terminal-command">socials              </span><span>Display social networks</span><br></br>
<span className="terminal-command">gui                  </span><span>The portfolio for frontend folks!</span><br></br>
<span className="terminal-command">banner               </span><span>Display the cool banner</span><br></br>
<span className="terminal-command">history              </span><span>Yes I'm tracking what you are typing!</span><br></br>
<span className="terminal-command">clear                </span><span>Clear the mess you made</span><br></br>
</>

const whois = <>
<div>Hey My name is Abhiroop Avvari!👋</div>
<div>I'm {getAge(new Date(2003,9,22))} and I'm a software engineer who builds engaging websites like this one.</div>
<div>I love coding in Javascript, Typescript and have worked with frameworks like ReactJS, VueJS, and Express.</div>
<div>I currently use NextJS, and NodeJS to build the projects that my heart desires to like this terminal website !!!.</div>
<div>Technicalities aside I loveee F1 .. and I like to watch anime in free time 😁</div>
</>

const projects = <>
Still curating... most projects are offline, on GitHub, or confidential.
</>

const skills = <>
<div className="terminal-rating-heading">#Languages </div>
<span className="terminal-rating-name">Typescript and JS                            </span><span className="terminal-rating-good">{"\u2605"+"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">C and C++                                    </span><span className="terminal-rating-good">{"\u2605"+"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">Python                                       </span><span className="terminal-rating-average">{"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">Java and C#                                  </span><span className="terminal-rating-notgood">{"\u2605"+"\u2605"}</span><br />
<br />
<div className="terminal-rating-heading">#Frameworks, Infrastructure and Cloud</div>
<span className="terminal-rating-name">Docker</span>                                       <span className="terminal-rating-good">{"\u2605"+"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">Mongo DB, PostgreSQL and ORM's</span>               <span className="terminal-rating-good">{"\u2605"+"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">React and NextJS</span>                             <span className="terminal-rating-good">{"\u2605"+"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">AWS and Cloudflare</span>                           <span className="terminal-rating-average">{"\u2605"+"\u2605"+"\u2605"}</span><br />
<span className="terminal-rating-name">Kubernetes and CI-CD</span>                         <span className="terminal-rating-notgood">{"\u2605"+ " (currently learning)"}</span><br />
<br />
<div className="terminal-rating-heading">#Areas of Intrest</div>
<div>Astronomy and space, New Tech, Racing and Anime</div>
</>

const socials = <>
<span>linkedIn             </span><a className="terminal-social-link" href="https://www.linkedin.com/in/abhiroop1200/">linkedin/abhiroop1200</a><br />
<span>github               </span><a className="terminal-social-link" href="https://github.com/Abhi-1200">github/Abhi-1200</a><br />
</>

const education = <>
<span className="terminal-command-error">NIT Warangal                      </span><span>Computer Science, 2024</span><br />
<span className="terminal-command-error">Sri Chaithanya Jr Kalasala        </span><span>Seconday Education(MPC), 2020</span><br />
<span className="terminal-command-error">Viswabharati EM High School       </span><span>Primary Education, 2018</span><br />
</>

const NormalCommands = (props:NormalCommandsProps) => {
    switch(props.command){
        case "help":
            return (<div className="terminal-command-output">{help}</div>);
        case "whois":
            return (<div className="terminal-command-output">{whois}</div>);
        case "projects":
            return (<div className="terminal-command-output">{projects}</div>);
        case "skills":
            return (<div className="terminal-command-output">{skills}</div>);
        case "socials":
            return (<div className="terminal-command-output">{socials}</div>);
        case "banner":
            return (<pre className="terminal-command-output terminal-banner-output">{bannerCondensed}</pre>);
        case "education":
            return (<div className="terminal-command-output">{education}</div>);
    }
    
}

export default NormalCommands;