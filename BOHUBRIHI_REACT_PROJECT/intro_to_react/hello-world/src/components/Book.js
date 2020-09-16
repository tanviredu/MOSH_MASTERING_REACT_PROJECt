import React from 'react'
import "./Book.css"

const Book = (props) => {

    // props is the outer information
    // state in the inner information
    // but state is used in the class
    // based component
    // state is the peoperty ofa component
    return (
        <div className="Book">
        <div className="jumbotron">
            <table className="table">
            <thead>
                <tr>
                    
                    <th scope="col">BookName</th>
                    <th scope="col">Writer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                
                    <td>{props.bookname}</td>
                    <td>{props.writer}</td>
                    
                </tr>
    
                </tbody>
</table>

             
        </div>
    </div>
    )

}

export default Book;