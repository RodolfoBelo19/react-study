type OrderProps = {
    text: string;
}

export function Order(props: OrderProps) {
    return <h1 style={{
        backgroundColor: "#f2f2f2",
        borderRadius: "6px",
        textAlign: "center",
        fontFamily: "arial",
        fontSize: "2rem",
        padding: "10px 0",
        }}>
        {props.text}
        </h1>
}
