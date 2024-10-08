import React, { useState, useEffect } from "react";

type InputAreaProps = {
    terminalPromptSymbol: string;
    getAutoComplete: (input: string) => string;
    processCommand: (input: string) => void;
    getImmediateHistory: (dir: "up" | "down") => string;
    inputRef: React.RefObject<HTMLDivElement>;
}

const Input = (props: InputAreaProps) => {
    const [input, setInput] = useState("");
    const inputElementRef = React.useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value;
        setInput(inputVal);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "Enter":
                props.processCommand(input);
                setInput("");
                break;
            case "ArrowUp":
                e.preventDefault();
                setInput(props.getImmediateHistory("up"));
                break;
            case "ArrowDown":
                e.preventDefault();
                setInput(props.getImmediateHistory("down"));
                break;
            case "Tab":
                e.preventDefault();
                setInput(props.getAutoComplete(input));
                break;
        }
    }

    useEffect(() => {
        const handleDocumentClick = () => {
            if (inputElementRef.current) {
                inputElementRef.current.focus();
            }
        };
        document.addEventListener('click', handleDocumentClick);
        return () => { document.removeEventListener('click', handleDocumentClick); };
    }, [])

    return (
        <div className="terminal-input-area" autoFocus ref={props.inputRef}>
            <span className="terminal-prompt-symbol">{props.terminalPromptSymbol}</span>
            <input
                type="text"
                className="terminal-command-input"
                name="input"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoFocus
                autoComplete="off"
                ref={inputElementRef}
            />
        </div>
    )
};

export default Input;