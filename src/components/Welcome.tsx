import React from "react";
import { ReactTyped } from "react-typed"

interface WelcomeTextType {
    terminalContentRef : React.RefObject<HTMLDivElement>
}

const WelcomeText = (props : WelcomeTextType) => {
    const welcomeMessage = ["Welcome to my cli-portfolio fellow Aliens!<br>Type 'help' to view list of commands"];

    const startFunc = () => {
        if(props.terminalContentRef.current)props.terminalContentRef.current.style.display = "none";
    }

    const completeFunc = () => {
        if(props.terminalContentRef.current)props.terminalContentRef.current.style.display = "block";
    }

    return <div className="terminal-command-output terminal-welcome"><ReactTyped strings={welcomeMessage} typeSpeed={20} showCursor={false} onBegin={startFunc} onComplete={completeFunc}/></div>
}

export default WelcomeText