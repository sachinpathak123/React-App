import React,{Component} from "react"

const TableHeader = ()=> {
    return (
        
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Roll
                    </th>
                </tr>
            </thead>
      
    )
}

const TableBoddy = () => {
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
const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.Roll}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;