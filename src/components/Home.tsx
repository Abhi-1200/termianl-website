import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { downloadFile, getSimilarCommands, isNormalCommand, isUtilityCommand} from "../helpers/functions";
import NormalCommands from "./NormalCommands";
import History from "./History";
import Input from "./Input";
import Output from "./Output";

type HomeProps = {
    terminalPromptSymbol: string;
}

const Home = (props : HomeProps) => {
    const [output,setOutput] = useState<(JSX.Element)[]>([]);
    const [history,setHistory] = useState<(string)[]>([]);
    const [historyPointer,setHistoryPointer] = useState(0);
    const terminalContentRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (terminalContentRef.current) {
            terminalContentRef.current.scrollIntoView();
        }
    },[output])
    
    const processCommand : (input : string) => void = (input) => {
        const recordedCommand = (
            <div className="terminal-command-output">
                <span className = "terminal-prompt-symbol">{props.terminalPromptSymbol}</span>
                <span>{input}</span>
            </div>
        )
        if(!input.trim())return;
        setHistory([...history,input]);
        setHistoryPointer(history.length+1);
        if(isNormalCommand(input)){
            setOutput([
                ...output,
                recordedCommand,
                <NormalCommands command = {input}/>
            ])
        }
        else if(isUtilityCommand(input)){
            switch(input){
                case "clear":
                    setOutput([]);
                    break;
                case "cv":
                    setOutput([...output,recordedCommand, <div className="terminal-command-output">Downloading the cv ...</div>]);
                    downloadFile("Abhiroop Avvari CV.pdf", "AbhiroopAvvari - Curriculum Vitae.pdf");
                    break;
                case "gui":
                    setOutput([
                        ...output,
                        recordedCommand,
                        <div className="terminal-command-output">Working on it!</div>  //future redirect to gui
                    ]);
                    break;
                case "history":
                    setOutput([
                        ...output,
                        recordedCommand,
                        <History usedCommands={history}/>
                    ])
                    break;
            }
        }
        else{
            setOutput([
                ...output,
                recordedCommand,
                <ErrorMessage command = {input}/>
            ])
        }
    }

    const getImmediateHistory = (dir : "up" | "down") => {
        let index;
        if(dir === "up"){
            index = historyPointer?historyPointer-1 : 0;
        }else{
            index = historyPointer === history.length ? history.length : historyPointer+1;
        }
        setHistoryPointer(index);
        return index === history.length ? "" : history[index];
    }

    const getAutoComplete = (input : string) => {
        const similarCommands = getSimilarCommands(input);
        if(similarCommands.length === 0) return input;
        if(similarCommands.length === 1) return similarCommands[0];
        const recordedCommand = (
            <div className="terminal-command-output">
                <span className = "terminal-prompt-symbol">{props.terminalPromptSymbol}</span>
                <span>{input}</span>
            </div>
        )
        setOutput([
            ...output,
            recordedCommand,
            <div className="terminal-command-output">
                {similarCommands.join("     ")}
            </div>
        ])
        return input;
    }

    return(
        <div className="terminal-container" tabIndex={-1}>
            <div className="terminal-content">
                <NormalCommands command="banner" />
                <Output outputs={output}/>
                <Input 
                terminalPromptSymbol={props.terminalPromptSymbol}
                getAutoComplete={getAutoComplete}
                getImmediateHistory={getImmediateHistory}
                processCommand={processCommand}
                inputRef = {terminalContentRef}
                />
            </div>
        </div>
    )
}

export default Home;