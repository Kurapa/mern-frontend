export  function StudentListpay(props){
    const {refno,date,amount} =props.obj;
    return(
    <tr>
    <td>{refno}</td>
    <td>{date}</td>
    <td>{amount}</td>
    </tr>
    )
    }

export function StudentListTime(props){
    const {title,facultyname,room,timings,code}=props.obj
    return(
        <tr>
        <td>{title}</td>
        <td>{code}</td>
        <td>{facultyname}</td>
        <td>{room}</td>
        <td>{timings}</td>
        </tr>
        )
}