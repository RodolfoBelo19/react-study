type ButtonProps = {
    text: string;
}

export function Button(props: ButtonProps) {
    return <button 
        style={{
        backgroundColor: "#000",
        color: "#f1f1f1",
        borderRadius: "8px",
        fontSize: "15px",
      }}>
          {props.text}
      </button>
}