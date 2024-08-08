type ErrorMessage = {
    command : String;
}

const ErrorMessage = (props : ErrorMessage) => {
    return (<div className="terminal-command-output terminal-command-error">
        shell: command not found: {props.command}. For a list of commands, type <span className="terminal-command">'help'</span>.
    </div>)
}

export default ErrorMessage