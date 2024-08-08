type OutputProps = {
    outputs: (JSX.Element)[];
  };

const Output = (props : OutputProps) => {
    const list = props.outputs.map((o,i) => <div key = {i}>{o}</div>)
    return(
        <>{list}</>
    )
}

export default Output;