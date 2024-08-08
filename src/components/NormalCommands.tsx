import { getYear, NormalCommandsType } from "../helpers/functions";

type NormalCommandsProps = {
    command : NormalCommandsType;
};

const bannerCondensed =
"    ___    __    __    _                        ___                         _\n" +
"   /   |  / /_  / /_  (_)________  ____  ____  /   |_   ___   ______ ______(_)\n" +
"  / /| | / __ \\/ __ \\/ / ___/ __ \\/ __ \\/ __ \\/ /| | | / / | / / __ `/ ___/ /\n" +
" / ___ |/ /_/ / / / / / /  / /_/ / /_/ / /_/ / ___ | |/ /| |/ / /_/ / /  / /\n" +
"/_/  |_/_.___/_/ /_/_/_/   \\____/\\____/ .___/_/  |_|___/ |___/\\__,_/_/  /_/\n" +
"                                     /_/                           \n"+"\u00A9 " + getYear()+"\n";

const NormalCommands = (props:NormalCommandsProps) => {
    switch(props.command){
        case "help":
            return (<div className="terminal-command-output">help!</div>);
        case "whois":
            return (<div className="terminal-command-output">whois!</div>);
        case "projects":
            return (<div className="terminal-command-output">projects!</div>);
        case "skills":
            return (<div className="terminal-command-output">skills!</div>);
        case "socials":
            return (<div className="terminal-command-output">socials!</div>);
        case "banner":
            return (<pre className="terminal-command-output terminal-banner-output">{bannerCondensed}</pre>);
        case "education":
            return (<div className="terminal-command-output">education!</div>);
    }
    
}

export default NormalCommands;