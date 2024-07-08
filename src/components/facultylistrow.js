import  Axios from 'axios';

export function FacultyListTime(props){
    const {title,room,timings,code}=props.obj
    return(
        <tr>
        <td>{title}</td>
        <td>{code}</td>
        <td>{room}</td>
        <td>{timings}</td>
        </tr>
        )
}




export function FacultyListMarks(props){
    const {sname,marks}=props.obj
    
    function handledelete(event){
        const parent=event.target.parentElement
        const target1=parent.previousElementSibling
        const target2=target1.previousElementSibling
        const name=target2.innerText
        const mark=target1.innerText
        console.log(props.fid,name,mark)
        const id=props.fid

        Axios.delete(`https://mern-backend-server-kurapa.onrender.com/faculty-route/marks-delete/${id}/${name}/${mark}`)
            .then((res)=>{
            if(res.status === 200){
            alert("Record is deleted");
            window.location.reload();
            }
            else
            Promise.reject();
            
            })
            .catch((err)=>{
            alert(err);
            })
            
     }
    return(
        <tr>
            <td >{sname}</td>
            <td >{marks}</td>
            <td>
                <button className="btn btn-danger" onClick={handledelete}>delete</button>
            </td>
        </tr>
    )
}