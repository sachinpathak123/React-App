import React,{Component} from "react"

const TableHeader = ()=> {
    return (
        
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Roll No.
                    </th>
                </tr>
            </thead>
      
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
            <td>
                Sachin
            </td>
            <td>
                34
            </td>
            </tr>
            <tr>
               <td>
                James
                </td>
                <td>
                    53</td> 
            </tr>
            <tr>
                <td>
                    Gunn
                </td>
                <td>
                    21
                </td>
            </tr>
        </tbody>
    )
}
class Table extends Component{
    render(){
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}
export default Table;