type HistoryPropsType = {
    usedCommands : string[];
}
const History = (props : HistoryPropsType) => {
    return(
        <div className="terminal-command-output">
             {props.usedCommands.map((command, index) => (
                <div key={index} className="history-command">{command}</div>
            ))}
        </div>
    )
}

export default History;